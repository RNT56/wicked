/**
 * WICKED WebGL Showcase
 * Enhanced Professional-Grade WebGL Experience
 */

import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Mobile Detection
const isMobile = window.innerWidth < 768
const mobileSettings = {
  portalCount: isMobile ? 4000 : 8000,
  starCount: isMobile ? 5000 : 10000,
  morphSubdivision: isMobile ? 16 : 32,
  fluidSatellites: isMobile ? 4 : 7,
  fluidDroplets: isMobile ? 3 : 6,
  cosmosNodes: isMobile ? 40 : 80,
  cameraZ: isMobile ? 8 : 6
}

// ═══════════════════════════════════════════════════════════════
// APPLICATION STATE
// ═══════════════════════════════════════════════════════════════
const state = {
  isLoading: true,
  currentSection: 0,
  mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
  scroll: { current: 0, target: 0 },
  time: 0,
  deltaTime: 0,
  lastTime: 0,
  portalTravel: 0, // Accumulated travel distance for smooth portal flow
  sections: ['portal', 'particles', 'morph', 'fluid', 'crystal', 'cosmos']
}

// ═══════════════════════════════════════════════════════════════
// THREE.JS SETUP - Enhanced Quality
// ═══════════════════════════════════════════════════════════════
const canvas = document.getElementById('webgl-canvas')
const scene = new THREE.Scene()

// Camera with cinematic FOV
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = mobileSettings.cameraZ

// High-Quality Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
  stencil: false
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Cap at 2x for performance
renderer.setClearColor(0x030303, 1)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.2

// ═══════════════════════════════════════════════════════════════
// NOISE FUNCTIONS (Shared GLSL)
// ═══════════════════════════════════════════════════════════════
const noiseGLSL = `
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  // FBM (Fractal Brownian Motion)
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for(int i = 0; i < 6; i++) {
      if(i >= octaves) break;
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }
`

// ═══════════════════════════════════════════════════════════════
// SECTION 1: PORTAL - Galaxy Tunnel
// ═══════════════════════════════════════════════════════════════
const portalGroup = new THREE.Group()
scene.add(portalGroup)

// Galaxy Tunnel Geometry
// Galaxy Tunnel Geometry
// Galaxy Tunnel Geometry
const portalParticleCount = mobileSettings.portalCount // Reduced for performance
const portalGeometry = new THREE.BufferGeometry()
const portalPositions = new Float32Array(portalParticleCount * 3)
const portalRandomness = new Float32Array(portalParticleCount * 3)
const portalSizes = new Float32Array(portalParticleCount)
const portalSpeeds = new Float32Array(portalParticleCount)

for (let i = 0; i < portalParticleCount; i++) {
  // Tunnel distribution
  const angle = Math.random() * Math.PI * 2
  const radius = 1.5 + Math.random() * 2.5 // Tunnel thickness
  const z = (Math.random() - 0.5) * 20 // Long tunnel depth

  portalPositions[i * 3] = Math.cos(angle) * radius
  portalPositions[i * 3 + 1] = Math.sin(angle) * radius
  portalPositions[i * 3 + 2] = z

  // Random offsets for organic feel
  portalRandomness[i * 3] = (Math.random() - 0.5)
  portalRandomness[i * 3 + 1] = (Math.random() - 0.5)
  portalRandomness[i * 3 + 2] = (Math.random() - 0.5)

  portalSizes[i] = 0.5 + Math.random() * 2.5
  portalSpeeds[i] = 0.5 + Math.random() * 0.5
}

portalGeometry.setAttribute('position', new THREE.BufferAttribute(portalPositions, 3))
portalGeometry.setAttribute('aRandomness', new THREE.BufferAttribute(portalRandomness, 3))
portalGeometry.setAttribute('size', new THREE.BufferAttribute(portalSizes, 1))
portalGeometry.setAttribute('speed', new THREE.BufferAttribute(portalSpeeds, 1))

const portalMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uTravel: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uProgress: { value: 0 },
    uPixelRatio: { value: renderer.getPixelRatio() }
  },
  vertexShader: `
    attribute float size;
    attribute float speed;
    attribute vec3 aRandomness;
    
    uniform float uTime;
    uniform float uTravel; // Accumulated travel distance
    uniform vec2 uMouse;
    uniform float uProgress;
    uniform float uPixelRatio;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vDepth;
    
    ${noiseGLSL}
    
    void main() {
      vec3 pos = position;
      
      // Dynamic Flow Speed - Controlled by uTravel uniform
      // float flowSpeed = 2.0 + uProgress * 10.0; // Handled in JS now
      float zOffset = uTravel * speed;
      pos.z = mod(pos.z + zOffset + 10.0, 20.0) - 10.0;
      
      // Scroll Dynamics: Open & Close
      // Open: Expands from point to tunnel (0.0 -> 0.25) - Slower, smoother
      float opener = smoothstep(0.0, 0.25, uProgress);
      // Close: Collapses to center (0.85 -> 1.0)
      float closer = 1.0 - smoothstep(0.85, 1.0, uProgress);
      
      // Apply dynamics to radius
      // Start from near zero (0.02) for "point" effect
      float dynamicRadius = (0.02 + 0.98 * opener) * closer;
      
      // Spiral twist
      float twist = pos.z * 0.2;
      float c = cos(twist);
      float s = sin(twist);
      mat2 rotation = mat2(c, -s, s, c);
      pos.xy = rotation * pos.xy;
      
      // Apply radius scaling
      pos.xy *= dynamicRadius;
      
      // Organic turbulence
      float noiseFreq = 0.5;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.xy * noiseFreq, uTime * 0.2);
      pos.x += snoise(noisePos) * noiseAmp;
      pos.y += snoise(noisePos + 100.0) * noiseAmp;
      
      // Mouse influence (Warping)
      float mouseDist = length(uMouse);
      vec2 mouseDir = normalize(uMouse);
      float warp = smoothstep(5.0, -5.0, pos.z); // More warp closer to camera
      pos.xy += uMouse * warp * 2.0;
      
      // Add randomness
      pos += aRandomness * 0.2;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Size attenuation
      gl_PointSize = size * (300.0 / -mvPosition.z) * uPixelRatio;
      gl_Position = projectionMatrix * mvPosition;
      
      // Pass depth for coloring
      vDepth = pos.z;
      
      // Fade out at ends
      vAlpha = smoothstep(-10.0, -8.0, pos.z) * smoothstep(5.0, 0.0, pos.z);
      
      // Fade alpha during close
      vAlpha *= closer;
    }
  `,
  fragmentShader: `
    varying float vAlpha;
    varying float vDepth;
    
    void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      if (dist > 0.5) discard;
      
      // Soft particle
      float glow = 1.0 - smoothstep(0.0, 0.5, dist);
      glow = pow(glow, 2.0);
      
      // Fire/Void Palette: Black -> Red -> Orange -> Silver
      // Map depth to color: Far (Black/Red) -> Near (Orange/Silver)
      float t = smoothstep(-10.0, 2.0, vDepth);
      
      vec3 black = vec3(0.0, 0.0, 0.0);
      vec3 darkRed = vec3(0.4, 0.0, 0.05);
      vec3 orange = vec3(1.0, 0.35, 0.05);
      vec3 silver = vec3(0.9, 0.95, 1.0);
      
      vec3 color = mix(black, darkRed, smoothstep(0.0, 0.4, t));
      color = mix(color, orange, smoothstep(0.4, 0.75, t));
      color = mix(color, silver, smoothstep(0.8, 1.0, t));
      
      // No pure white, keep it rich
      gl_FragColor = vec4(color, glow * vAlpha);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
})

const portalParticles = new THREE.Points(portalGeometry, portalMaterial)
portalGroup.add(portalParticles)

// Dark Void Center (Background blocker)
const voidGeo = new THREE.PlaneGeometry(20, 20)
const voidMat = new THREE.MeshBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.95 // Darker void
})
const voidMesh = new THREE.Mesh(voidGeo, voidMat)
voidMesh.position.z = -12 // Far back
portalGroup.add(voidMesh)

// Vignette & Blur Overlay - Softens the effect
const overlayGeometry = new THREE.PlaneGeometry(30, 20)
const overlayMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    
    void main() {
      vec2 center = vUv - 0.5;
      float dist = length(center);
      
      // Strong vignette (dark edges)
      float vignette = smoothstep(0.3, 0.9, dist);
      
      // Grain/Noise for texture
      float noise = (fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.08;
      
      // Dark overlay color
      vec3 color = vec3(0.0);
      
      // Blur effect simulated by opacity gradient
      float alpha = vignette * 0.7 + 0.1; // Base darkness
      
      gl_FragColor = vec4(color + noise, alpha);
    }
  `,
  transparent: true,
  depthWrite: false,
  blending: THREE.NormalBlending
})
const overlayMesh = new THREE.Mesh(overlayGeometry, overlayMaterial)
overlayMesh.position.z = 2 // In front of portal
portalGroup.add(overlayMesh)

// ═══════════════════════════════════════════════════════════════
// SECTION 2: PARTICLE UNIVERSE - Immersive Star Field
// ═══════════════════════════════════════════════════════════════
const universeGroup = new THREE.Group()
universeGroup.visible = false
scene.add(universeGroup)

const starCount = mobileSettings.starCount // Optimized from 15000
const starGeometry = new THREE.BufferGeometry()
const starPositions = new Float32Array(starCount * 3)
const starColors = new Float32Array(starCount * 3)
const starSizes = new Float32Array(starCount)
const starPhases = new Float32Array(starCount)

for (let i = 0; i < starCount; i++) {
  // Spherical distribution for immersion
  const theta = Math.random() * Math.PI * 2
  const phi = Math.acos(2 * Math.random() - 1)
  const r = 3 + Math.random() * 25

  starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
  starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
  starPositions[i * 3 + 2] = r * Math.cos(phi) - 10

  // Star color temperature (blue-white to warm)
  const temp = Math.random()
  if (temp < 0.6) {
    // White stars
    starColors[i * 3] = 1.0
    starColors[i * 3 + 1] = 1.0
    starColors[i * 3 + 2] = 1.0
  } else if (temp < 0.8) {
    // Blue stars
    starColors[i * 3] = 0.7 + Math.random() * 0.3
    starColors[i * 3 + 1] = 0.85 + Math.random() * 0.15
    starColors[i * 3 + 2] = 1.0
  } else if (temp < 0.95) {
    // Purple/pink stars
    starColors[i * 3] = 0.9 + Math.random() * 0.1
    starColors[i * 3 + 1] = 0.5 + Math.random() * 0.3
    starColors[i * 3 + 2] = 1.0
  } else {
    // Golden stars (rare)
    starColors[i * 3] = 1.0
    starColors[i * 3 + 1] = 0.85
    starColors[i * 3 + 2] = 0.5
  }

  starSizes[i] = 0.5 + Math.random() * 3
  starPhases[i] = Math.random() * Math.PI * 2
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3))
starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))
starGeometry.setAttribute('phase', new THREE.BufferAttribute(starPhases, 1))

const starMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(0, 0, 0) },
    uPixelRatio: { value: renderer.getPixelRatio() }
  },
  vertexShader: `
    attribute float size;
    attribute vec3 color;
    attribute float phase;
    
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uPixelRatio;
    
    varying vec3 vColor;
    varying float vTwinkle;
    varying float vBrightness;
    
    void main() {
      vColor = color;
      
      vec3 pos = position;
      
      // Subtle floating motion
      pos.x += sin(uTime * 0.3 + phase) * 0.05;
      pos.y += cos(uTime * 0.4 + phase * 1.3) * 0.05;
      pos.z += sin(uTime * 0.2 + phase * 0.7) * 0.03;
      
      // Magnetic cursor attraction
      vec3 toMouse = uMouse - pos;
      float distToMouse = length(toMouse);
      float attraction = 3.0 / (distToMouse * distToMouse + 2.0);
      pos += normalize(toMouse) * attraction * 0.3;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Twinkle effect
      vTwinkle = 0.6 + 0.4 * sin(uTime * 4.0 + phase * 10.0);
      vBrightness = 1.0 - smoothstep(5.0, 30.0, length(pos));
      
      float sizeAtten = 250.0 / -mvPosition.z;
      gl_PointSize = size * sizeAtten * uPixelRatio * vTwinkle;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec3 vColor;
    varying float vTwinkle;
    varying float vBrightness;
    
    void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      if (dist > 0.5) discard;
      
      // Crisp star points - minimal glow
      float glow = 1.0 - smoothstep(0.0, 0.35, dist);
      glow = pow(glow, 3.0); // Sharp falloff
      
      // Tiny bright core
      float core = 1.0 - smoothstep(0.0, 0.08, dist);
      
      // Clean white-ish stars, less color saturation
      vec3 finalColor = mix(vec3(1.0), vColor, 0.3) * (0.8 + core * 0.4);
      float alpha = glow * vTwinkle * vBrightness * 0.7;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
})

const stars = new THREE.Points(starGeometry, starMaterial)
universeGroup.add(stars)

// Nebula background
const nebulaGeometry = new THREE.PlaneGeometry(60, 60)
const nebulaMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    varying vec2 vUv;
    
    ${noiseGLSL}
    
    void main() {
      vec2 uv = vUv - 0.5;
      
      // Subtle nebula - dark base
      float n1 = snoise(vec3(uv * 1.5, uTime * 0.02)) * 0.5 + 0.5;
      float n2 = snoise(vec3(uv * 2.5 + 5.0, uTime * 0.015)) * 0.5 + 0.5;
      
      // Very dark muted colors
      vec3 color1 = vec3(0.08, 0.02, 0.12) * n1; // Dark purple
      vec3 color2 = vec3(0.02, 0.06, 0.1) * n2; // Dark blue
      
      vec3 color = color1 + color2;
      
      // Strong edge fade to black
      float fade = 1.0 - smoothstep(0.2, 0.5, length(uv));
      
      // Very dark background - nearly black
      vec3 bgColor = vec3(0.012, 0.012, 0.018);
      color = mix(bgColor, color + bgColor, fade * 0.4);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  transparent: false,
  depthWrite: false
})

const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial)
nebula.position.z = -25
universeGroup.add(nebula)

// ═══════════════════════════════════════════════════════════════
// SECTION 3: MORPHING GEOMETRY - Organic Transformation
// ═══════════════════════════════════════════════════════════════
const morphGroup = new THREE.Group()
morphGroup.visible = false
scene.add(morphGroup)

const morphGeometry = new THREE.IcosahedronGeometry(2.2, mobileSettings.morphSubdivision) // Optimized from 64
const morphMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    varying float vFresnel;
    
    ${noiseGLSL}
    
    void main() {
      // Dual-octave noise displacement (optimized from 3)
      float noiseScale = 1.2;
      float noise1 = snoise(position * noiseScale + uTime * 0.3) * 0.5;
      float noise2 = snoise(position * noiseScale * 2.0 - uTime * 0.2) * 0.25;
      
      float displacement = noise1 + noise2;
      
      // Mouse influence - STRONG reaction to cursor
      float mouseLen = length(uMouse);
      float mouseWave = sin(position.x * 4.0 + uTime * 3.0) * sin(position.y * 4.0 + uTime * 2.5);
      displacement += mouseLen * mouseWave * 0.6; // Much stronger effect
      displacement += sin(position.z * 3.0 + uTime * 2.0 + mouseLen * 5.0) * mouseLen * 0.4;
      
      vec3 newPosition = position + normal * displacement;
      vDisplacement = displacement;
      
      // Calculate view-dependent values
      vec4 worldPosition = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPosition.xyz;
      vPosition = newPosition;
      vNormal = normalize(normalMatrix * normal);
      
      // Fresnel
      vec3 viewDir = normalize(cameraPosition - worldPosition.xyz);
      vFresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
      
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    varying float vFresnel;
    
    void main() {
      // SIMPLE purple-to-cyan gradient based on displacement
      float t = vDisplacement * 1.5 + 0.5;
      t = clamp(t, 0.0, 1.0);
      
      // Clean two-color gradient: purple -> cyan
      vec3 purple = vec3(0.5, 0.2, 0.9);
      vec3 cyan = vec3(0.2, 0.85, 0.95);
      vec3 color = mix(purple, cyan, t);
      
      // Subtle fresnel rim (cyan tint)
      color = mix(color, cyan, vFresnel * 0.35);
      
      // Single clean specular
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 halfDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(vNormal, halfDir), 0.0), 48.0);
      color += spec * 0.4;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  side: THREE.DoubleSide
})

const morphMesh = new THREE.Mesh(morphGeometry, morphMaterial)
morphGroup.add(morphMesh)

// ═══════════════════════════════════════════════════════════════
// SECTION 4: FLUID DYNAMICS - Advanced Metaball Simulation
// ═══════════════════════════════════════════════════════════════
const fluidGroup = new THREE.Group()
fluidGroup.visible = false
scene.add(fluidGroup)

const fluidGeometry = new THREE.PlaneGeometry(20, 12, 1, 1)
const fluidMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    
    varying vec2 vUv;
    
    // Simplex noise for domain warping
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    
    float snoise2D(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m; m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    // Domain warping function
    vec2 warp(vec2 p, float t) {
      float n = snoise2D(p * 3.0 + t * 0.2);
      float m = snoise2D(p.yx * 3.0 + 10.0 + t * 0.15);
      return p + vec2(n, m) * 0.06;
    }
    
    // Smooth metaball with softer falloff
    float metaball(vec2 p, vec2 center, float radius) {
      float d = length(p - center);
      return radius * radius / (d * d + 0.0002);
    }
    
    void main() {
      vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
      vec2 p = (vUv - 0.5) * aspect;
      vec2 mouse = (uMouse - 0.5) * aspect;
      
      // 1. DOMAIN WARPING - Organic distortion
      vec2 warpedP = warp(p, uTime);
      
      float sum = 0.0;
      float sumBg = 0.0; // Background layer
      
      // Main mouse-following blob
      sum += metaball(warpedP, mouse, 0.18);
      
      // ${mobileSettings.fluidSatellites} satellite blobs with organic motion
      for (int i = 0; i < ${mobileSettings.fluidSatellites}; i++) {
        float fi = float(i);
        float speed = 0.3 + fi * 0.05;
        float angle = uTime * speed + fi * 0.898;
        float orbit = 0.15 + fi * 0.065 + sin(uTime * 0.6 + fi * 1.2) * 0.04;
        vec2 pos = vec2(cos(angle), sin(angle)) * orbit;
        pos += (mouse - pos) * 0.12;
        float size = 0.055 + sin(uTime * 1.0 + fi * 2.2) * 0.018;
        sum += metaball(warpedP, pos, size);
        
        // Background layer (larger, softer)
        sumBg += metaball(p, pos * 1.3, size * 1.5) * 0.3;
      }
      
      // ${mobileSettings.fluidDroplets} Micro-droplets
      for (int i = 0; i < ${mobileSettings.fluidDroplets}; i++) {
        float fi = float(i);
        float speed = 0.8 + fi * 0.15;
        float angle = uTime * speed + fi * 3.5;
        float orbit = 0.25 + sin(uTime * 1.5 + fi) * 0.1;
        vec2 pos = vec2(cos(angle), sin(angle)) * orbit;
        pos += (mouse - pos) * 0.05;
        float size = 0.02 + sin(uTime * 3.0 + fi) * 0.01;
        sum += metaball(warpedP, pos, size);
      }
      
      // 2. GRADIENT NORMAL CALCULATION
      vec2 eps = vec2(0.008, 0.0);
      float gradX = metaball(warpedP + eps, mouse, 0.18) - metaball(warpedP - eps, mouse, 0.18);
      float gradY = metaball(warpedP + eps.yx, mouse, 0.18) - metaball(warpedP - eps.yx, mouse, 0.18);
      vec3 normal = normalize(vec3(gradX, gradY, 0.3));
      
      // Base shape with smooth threshold
      float alpha = smoothstep(0.85, 1.2, sum);
      float edge = smoothstep(0.9, 1.1, sum) - smoothstep(1.1, 1.4, sum);
      
      // 3. IRIDESCENCE - Oil-slick rainbow
      float iriPhase = sum * 8.0 + uTime * 0.5 + dot(normal.xy, p) * 10.0;
      vec3 iridescence = 0.5 + 0.5 * cos(iriPhase + vec3(0.0, 2.094, 4.188));
      
      // 4. CAUSTICS - Dancing light patterns
      float causticBase = snoise2D(warpedP * 8.0 + uTime * 0.8);
      float caustic = pow(max(0.0, causticBase * 0.5 + 0.5), 6.0) * edge * 0.8;
      
      // 5. SUBSURFACE SCATTERING
      float thickness = smoothstep(0.8, 2.5, sum);
      float sss = pow(thickness, 2.0) * 0.4;
      vec3 sssColor = vec3(0.2, 0.5, 0.8) * sss;
      
      // 6. MULTI-LIGHT SPECULAR SYSTEM
      // Light 1: Warm (animated)
      vec3 light1Dir = normalize(vec3(sin(uTime * 0.5) * 0.5, cos(uTime * 0.3) * 0.5, 1.0));
      float spec1 = pow(max(dot(normal, light1Dir), 0.0), 64.0);
      vec3 specColor1 = vec3(1.0, 0.9, 0.7) * spec1 * 0.6;
      
      // Light 2: Cool (static)
      vec3 light2Dir = normalize(vec3(-0.5, 0.7, 1.0));
      float spec2 = pow(max(dot(normal, light2Dir), 0.0), 48.0);
      vec3 specColor2 = vec3(0.6, 0.8, 1.0) * spec2 * 0.4;
      
      // Light 3: Interactive (mouse-driven)
      vec3 light3Dir = normalize(vec3(mouse.x * 2.0, mouse.y * 2.0, 0.8));
      float spec3 = pow(max(dot(normal, light3Dir), 0.0), 96.0);
      vec3 specColor3 = vec3(1.0, 1.0, 1.0) * spec3 * 0.5;
      
      // 7. FRESNEL RIM
      float fresnel = pow(1.0 - abs(dot(normal, vec3(0.0, 0.0, 1.0))), 4.0);
      vec3 fresnelColor = mix(vec3(0.3, 0.6, 1.0), iridescence, 0.5) * fresnel * 0.6;
      
      // 8. DEPTH LAYERING - Background bokeh
      float bgAlpha = smoothstep(0.3, 0.8, sumBg);
      vec3 bgColor = vec3(0.05, 0.1, 0.15) * bgAlpha * 0.5;
      
      // BASE COLOR - Deep liquid with gradient
      vec3 deepColor = vec3(0.02, 0.05, 0.1);
      vec3 midColor = vec3(0.1, 0.2, 0.3);
      vec3 surfaceColor = vec3(0.3, 0.5, 0.6);
      
      float depthGrad = smoothstep(0.0, 1.5, sum);
      vec3 baseColor = mix(deepColor, midColor, depthGrad);
      baseColor = mix(baseColor, surfaceColor, pow(depthGrad, 2.0));
      
      // COMBINE ALL EFFECTS
      vec3 finalColor = baseColor;
      finalColor += sssColor;                          // Subsurface glow
      finalColor += iridescence * edge * 0.25;         // Edge iridescence
      finalColor += specColor1 + specColor2 + specColor3; // Multi-light specular
      finalColor += fresnelColor;                       // Rim lighting
      finalColor += vec3(1.0, 0.95, 0.9) * caustic;    // Caustic highlights
      
      // Background layer
      vec3 bg = vec3(0.008, 0.01, 0.015);
      finalColor = mix(bg + bgColor, finalColor, alpha);
      
      // Final polish: Subtle vignette on the fluid
      float vignette = 1.0 - smoothstep(0.3, 0.7, length(p));
      finalColor *= 0.9 + vignette * 0.1;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
  transparent: false
})

const fluidPlane = new THREE.Mesh(fluidGeometry, fluidMaterial)
fluidPlane.position.z = -3
fluidGroup.add(fluidPlane)

// ═══════════════════════════════════════════════════════════════
// SECTION 5: CRYSTAL GALLERY - Prismatic Gems
// ═══════════════════════════════════════════════════════════════
const crystalGroup = new THREE.Group()
crystalGroup.visible = false
scene.add(crystalGroup)

const createCrystal = (geometry, position, scale) => {
  const crystalMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      varying vec3 vViewDirection;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vViewDirection = normalize(cameraPosition - worldPos.xyz);
        
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uMouse; // Added missing uniform
      
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      varying vec3 vViewDirection;
      
      void main() {
        // Fresnel effect
        float fresnel = pow(1.0 - max(dot(vViewDirection, vNormal), 0.0), 4.0);
        
        // Refraction simulation
        vec3 refractDir = refract(-vViewDirection, vNormal, 0.85);
        
        // Chromatic dispersion (rainbow effect)
        float dispersion = dot(refractDir, vNormal);
        
        vec3 color;
        color.r = 0.5 + 0.5 * sin(vPosition.x * 8.0 + uTime * 1.5 + dispersion * 5.0);
        color.g = 0.5 + 0.5 * sin(vPosition.y * 8.0 + uTime * 1.7 + dispersion * 5.0 + 2.094);
        color.b = 0.5 + 0.5 * sin(vPosition.z * 8.0 + uTime * 1.3 + dispersion * 5.0 + 4.188);
        
        // Base crystal tint
        vec3 crystalTint = vec3(0.7, 0.5, 1.0);
        color = mix(crystalTint, color, fresnel * 0.8 + 0.2);
        
        // Specular highlights - controlled by mouse
        // Map mouse to light direction
        vec2 mousePos = uMouse * 2.0 - 1.0; // -1 to 1
        vec3 lightDir = normalize(vec3(mousePos.x * 5.0, mousePos.y * 5.0 + 2.0, 5.0));
        
        vec3 halfDir = normalize(lightDir + vViewDirection);
        float spec = pow(max(dot(vNormal, halfDir), 0.0), 128.0);
        
        // Secondary specular
        vec3 lightDir2 = normalize(vec3(-1.0, 1.0, -1.0));
        vec3 halfDir2 = normalize(lightDir2 + vViewDirection);
        float spec2 = pow(max(dot(vNormal, halfDir2), 0.0), 64.0);
        
        color += spec * 1.2;
        color += spec2 * vec3(0.8, 0.6, 1.0) * 0.5;
        
        // Rim lighting
        color += fresnel * vec3(0.6, 0.4, 1.0) * 0.8;
        
        // Internal glow
        float internalGlow = pow(fresnel, 2.0) * 0.3;
        color += internalGlow * vec3(1.0, 0.5, 0.8);
        
        gl_FragColor = vec4(color, 0.95);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  })

  const crystal = new THREE.Mesh(geometry, crystalMat)
  crystal.position.copy(position)
  crystal.scale.setScalar(scale)
  crystal.userData.material = crystalMat
  return crystal
}

// Create varied crystal shapes
const octahedron = new THREE.OctahedronGeometry(1, 0)
const icosahedron = new THREE.IcosahedronGeometry(0.9, 0)
const dodecahedron = new THREE.DodecahedronGeometry(0.85, 0)

const crystal1 = createCrystal(octahedron, new THREE.Vector3(-3.5, 0, 0), 1.2)
const crystal2 = createCrystal(icosahedron, new THREE.Vector3(0, 0.5, 0), 1.4)
const crystal3 = createCrystal(dodecahedron, new THREE.Vector3(3.5, -0.3, 0), 1.1)

crystalGroup.add(crystal1, crystal2, crystal3)

// ═══════════════════════════════════════════════════════════════
// SECTION 6: DATA COSMOS - Enhanced Neural Network Visualization
// ═══════════════════════════════════════════════════════════════
const cosmosGroup = new THREE.Group()
cosmosGroup.visible = false
scene.add(cosmosGroup)

// Nebula Removed as requested for cleaner look

const nodeCount = mobileSettings.cosmosNodes
const nodes = []
const nodePositions = []
const nodeConnections = new Array(nodeCount).fill(0) // Count connections per node

// First pass: calculate positions and connection counts
const tempPositions = []
for (let i = 0; i < nodeCount; i++) {
  tempPositions.push(new THREE.Vector3(
    (Math.random() - 0.5) * 14,
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 10
  ))
}

// Count connections (hub detection)
for (let i = 0; i < nodeCount; i++) {
  for (let j = i + 1; j < nodeCount; j++) {
    const dist = tempPositions[i].distanceTo(tempPositions[j])
    if (dist < 3.5) {
      nodeConnections[i]++
      nodeConnections[j]++
    }
  }
}

// Node shader material (shared)
const nodeShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(0, 0, 0) }
  },
  vertexShader: `
    varying vec3 vWorldPos;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uMouse;
    
    varying vec3 vWorldPos;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      
      // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      
      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      
      //   x0 = x0 - 0.0 + 0.0 * C.xxx;
      //   x1 = x0 - i1  + 1.0 * C.xxx;
      //   x2 = x0 - i2  + 2.0 * C.xxx;
      //   x3 = x0 - 1.0 + 3.0 * C.xxx;
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
      vec3 x3 = x0 - 1.0 + D.yyy; // -1.0+3.0*C.x = -0.5 = -D.y
      
      // Permutations
      i = mod289(i); 
      vec4 p = permute( permute( permute( 
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
               
      // Gradients: 7x7 points over a square, mapped onto an octahedron.
      // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
      float n_ = 0.142857142857; // 1.0/7.0
      vec3  ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      
      //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
      //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      
      //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      
      // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    void main() {
      // 1. Base Color & Variety
      float hue = 0.55 + vWorldPos.x * 0.03 + vWorldPos.y * 0.02;
      vec3 baseColor = 0.5 + 0.5 * cos(6.28318 * (hue + vec3(0.0, 0.33, 0.67)));
      
      // 2. Internal Plasma Noise
      // Moving 3D noise inside the sphere
      float noise = snoise(vWorldPos * 2.0 + uTime * 0.5);
      float plasma = smoothstep(0.2, 0.8, noise * 0.5 + 0.5);
      
      // 3. Holographic Scanlines
      // Horizontal lines moving up
      float scanline = sin(vWorldPos.y * 20.0 - uTime * 3.0);
      scanline = smoothstep(0.8, 1.0, scanline);
      
      // 4. Fresnel Rim (Glassy)
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
      
      // 5. Mouse Interaction
      float mouseDist = length(vWorldPos - uMouse);
      float mouseGlow = 1.0 / (1.0 + mouseDist * 0.5);
      
      // COMPOSITION
      vec3 color = baseColor * 0.2; // Dark core
      
      // Add plasma energy
      color += baseColor * plasma * 1.5;
      
      // Add scanlines (bright white/cyan)
      color += vec3(0.8, 1.0, 1.0) * scanline * 0.5;
      
      // Add sharp rim
      color += baseColor * fresnel * 2.0;
      color += vec3(1.0) * pow(fresnel, 5.0) * 0.5; // White edge
      
      // Add mouse glow
      color += vec3(1.0, 0.6, 0.2) * mouseGlow * 0.8;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  transparent: false
})

// Create nodes with glowing halos
for (let i = 0; i < nodeCount; i++) {
  const position = tempPositions[i]
  nodePositions.push(position)

  // Hub detection: more connections = larger, brighter
  const isHub = nodeConnections[i] >= 4
  const baseSize = isHub ? 0.12 : 0.06 + Math.random() * 0.06

  // Node core (solid)
  const nodeGeo = new THREE.SphereGeometry(baseSize, 12, 12)
  const nodeMat = nodeShaderMaterial.clone()
  const node = new THREE.Mesh(nodeGeo, nodeMat)
  node.position.copy(position)
  node.userData.originalY = position.y
  node.userData.phase = Math.random() * Math.PI * 2
  node.userData.isHub = isHub
  node.userData.material = nodeMat
  nodes.push(node)
  cosmosGroup.add(node)

  // Glow halo (sprite)
  const glowSize = isHub ? 1.2 : 0.6 // Increased size
  const glowGeo = new THREE.PlaneGeometry(glowSize, glowSize)
  const glowMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color().setHSL(0.6 + Math.random() * 0.3, 0.8, 0.6) },
      uTime: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        vec2 center = vUv - 0.5;
        float dist = length(center);
        
        // Soft radial glow
        float glow = 1.0 - smoothstep(0.0, 0.5, dist);
        glow = pow(glow, 2.5);
        
        // Pulse
        float pulse = 0.8 + 0.2 * sin(uTime * 2.0);
        
        vec3 color = uColor * glow * pulse;
        float alpha = glow * 0.8; // Increased alpha
        
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  const glow = new THREE.Mesh(glowGeo, glowMat)
  glow.position.copy(position)
  glow.userData.material = glowMat
  node.userData.glow = glow
  cosmosGroup.add(glow)
}

// Enhanced connection lines
const connectionPositions = []
const connectionIndices = []
const connectionPairs = [] // Store node pairs for dynamic updates
let connectionCount = 0

for (let i = 0; i < nodeCount; i++) {
  for (let j = i + 1; j < nodeCount; j++) {
    const dist = nodePositions[i].distanceTo(nodePositions[j])
    if (dist < 3.5) {
      connectionPositions.push(
        nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
        nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
      )
      connectionIndices.push(connectionCount, connectionCount)
      connectionPairs.push({ a: nodes[i], b: nodes[j] }) // Store references
      connectionCount++
    }
  }
}

const connectionGeometry = new THREE.BufferGeometry()
connectionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connectionPositions, 3))
connectionGeometry.setAttribute('lineIndex', new THREE.Float32BufferAttribute(connectionIndices, 1))

const connectionMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(0, 0, 0) }
  },
  vertexShader: `
    attribute float lineIndex;
    uniform float uTime;
    uniform vec3 uMouse;
    
    varying float vPulse;
    varying float vAlpha;
    varying float vStreamPos;
    varying float vMouseProx;
    
    void main() {
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      
      // Bidirectional data pulse
      float speed = 4.0;
      float stream = mod(uTime * speed + lineIndex * 0.7, 6.28318);
      float stream2 = mod(uTime * speed - lineIndex * 0.7 + 3.14159, 6.28318);
      vPulse = max(pow(sin(stream) * 0.5 + 0.5, 3.0), pow(sin(stream2) * 0.5 + 0.5, 3.0));
      
      // Mouse proximity
      float mouseDist = length(worldPos.xyz - uMouse);
      vMouseProx = 1.0 / (1.0 + mouseDist * 0.3);
      
      // Base alpha + pulse + mouse boost
      vAlpha = 0.15 + vPulse * 0.5 + vMouseProx * 0.5;
      vStreamPos = sin(uTime * 6.0 + lineIndex * 1.5) * 0.5 + 0.5;
      
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    varying float vPulse;
    varying float vAlpha;
    varying float vStreamPos;
    varying float vMouseProx;
    
    void main() {
      // Vibrant gradient: electric purple -> bright cyan -> white flash
      vec3 purple = vec3(0.6, 0.2, 1.0);
      vec3 cyan = vec3(0.0, 0.9, 1.0);
      vec3 white = vec3(1.0, 1.0, 1.0);
      vec3 orange = vec3(1.0, 0.5, 0.2);
      
      // Color shifts with pulse and mouse
      vec3 color = mix(purple, cyan, vStreamPos);
      color = mix(color, white, vPulse * 0.5);
      color = mix(color, orange, vMouseProx * 0.6);
      
      gl_FragColor = vec4(color, vAlpha);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  linewidth: 2
})

const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial)
cosmosGroup.add(connections)

// ═══════════════════════════════════════════════════════════════
// SMOOTH SECTION TRANSITIONS - Pure Crossfade System
// ═══════════════════════════════════════════════════════════════

// Section groups for easy access
const sectionGroups = [portalGroup, universeGroup, morphGroup, fluidGroup, crystalGroup, cosmosGroup]

// Transition state
let currentSectionIndex = 0
let targetSectionIndex = 0
let transitionT = 0 // 0 = at current, 1 = at target

// Easing function - smooth acceleration/deceleration
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// ═══════════════════════════════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════════════════════════════
const cursor = document.getElementById('cursor')
const cursorDot = cursor.querySelector('.cursor-dot')
const cursorRing = cursor.querySelector('.cursor-ring')

let cursorX = 0, cursorY = 0
let cursorTargetX = 0, cursorTargetY = 0

function updateCursor() {
  cursorX += (cursorTargetX - cursorX) * 0.15
  cursorY += (cursorTargetY - cursorY) * 0.15

  cursorDot.style.transform = `translate(${cursorTargetX}px, ${cursorTargetY}px) translate(-50%, -50%)`
  cursorRing.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`
}

document.addEventListener('mousemove', (e) => {
  cursorTargetX = e.clientX
  cursorTargetY = e.clientY

  state.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1
  state.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1
})

// Touch support for mobile
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0]
    cursorTargetX = touch.clientX
    cursorTargetY = touch.clientY

    state.mouse.targetX = (touch.clientX / window.innerWidth) * 2 - 1
    state.mouse.targetY = -(touch.clientY / window.innerHeight) * 2 + 1
  }
}, { passive: true })

document.querySelectorAll('a, button, .nav-link, .cta-button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'))
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'))
})

// ═══════════════════════════════════════════════════════════════
// SCROLL-DRIVEN SECTION VISIBILITY
// ═══════════════════════════════════════════════════════════════
const nav = document.getElementById('nav')
const navProgressFill = document.querySelector('.nav-progress-fill')
const navLinks = document.querySelectorAll('.nav-link')

// Section opacity values for crossfade
const sectionOpacity = [1, 0, 0, 0, 0, 0]

// Cache section content elements for text fade animation
const sectionContents = document.querySelectorAll('.section-content')

function updateSectionVisibility(scrollProgress) {
  // Calculate which section we're in and how far through it
  const totalSections = 6
  const rawSection = scrollProgress * totalSections
  const sectionIndex = Math.min(Math.floor(rawSection), totalSections - 1)
  const sectionProgress = rawSection - sectionIndex

  // Sequential Fading Logic - NO OVERLAP
  // 0.0 - 0.15: Fade In
  // 0.15 - 0.85: Fully Visible
  // 0.85 - 1.0: Fade Out

  const fadeInEnd = 0.15
  const fadeOutStart = 0.85

  // Update all section opacities
  for (let i = 0; i < totalSections; i++) {
    let opacity = 0

    if (i === sectionIndex) {
      // Current section logic

      // FIX: Hero section (index 0) should start fully visible
      if (i === 0 && sectionProgress < fadeInEnd) {
        opacity = 1
      } else if (sectionProgress < fadeInEnd) {
        // Fading in (0 -> 1)
        opacity = easeInOutCubic(sectionProgress / fadeInEnd)
      } else if (sectionProgress > fadeOutStart && i !== totalSections - 1) {
        // Fading out (1 -> 0) - EXCEPT last section
        opacity = easeInOutCubic(1.0 - (sectionProgress - fadeOutStart) / (1.0 - fadeOutStart))
      } else {
        // Fully visible (or last section at the end)
        opacity = 1
      }
    }
    // No else if for next/prev section - strict isolation

    sectionOpacity[i] = opacity

    // Text Fade Animation
    if (sectionContents[i]) {
      // Use GSAP for smoother text transitions
      gsap.to(sectionContents[i], {
        opacity: opacity,
        y: (1 - opacity) * 50, // Subtle slide up effect
        duration: 0.5,
        ease: 'power2.out',
        overwrite: true, // Prevent conflicts with multiple ScrollTriggers
        onComplete: () => {
          // Disable pointer events when not fully visible to prevent blocking
          sectionContents[i].style.pointerEvents = opacity > 0.01 ? 'auto' : 'none'
        }
      })
    }
  }

  // Apply visibility based on opacity
  sectionGroups.forEach((group, i) => {
    const isVisible = sectionOpacity[i] > 0.001
    group.visible = isVisible

    // Smooth Scaling Transition (0.8 <-> 1.0)
    // Zoom in on entry, zoom out on exit
    if (isVisible) {
      const scale = 0.8 + 0.2 * sectionOpacity[i]
      group.scale.set(scale, scale, scale)
    }

    // Update uniforms for smooth material transitions where available
    if (isVisible && i === 0 && portalMaterial) {
      // Portal specific: map opacity to uProgress for open/close dynamics
      // We want uProgress to be 0 when fully visible (open), and 1 when invisible (closed)
      // But wait, our portal logic uses uProgress 0->0.2 to open, 0.8->1.0 to close
      // So we can map sectionProgress directly to uProgress
      portalMaterial.uniforms.uProgress.value = sectionProgress
    }
  })

  // Update nav active states
  navLinks.forEach((link, i) => {
    link.classList.toggle('active', i === sectionIndex)
  })

  state.currentSection = sectionIndex
}

// Single scroll trigger - smooth and performant
ScrollTrigger.create({
  trigger: '#main',
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    const progress = self.progress

    // Smooth progress bar
    navProgressFill.style.width = `${progress * 100}%`

    // Update section visibility with crossfade
    updateSectionVisibility(progress)
  }
})

// Hero animations
const heroTimeline = gsap.timeline({ delay: 0.5 })

function initHeroAnimations() {
  const heroLines = document.querySelectorAll('.hero-line')
  const heroSubtitle = document.querySelector('.hero-subtitle')

  heroTimeline
    .to(heroLines, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out'
    })
    .to(heroSubtitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
}

// Section reveal animations
state.sections.forEach((sectionId, index) => {
  if (index === 0) return

  const section = document.getElementById(sectionId)
  const label = section.querySelector('.section-label')
  const title = section.querySelector('.section-title')
  const desc = section.querySelector('.section-description')
  const cta = section.querySelector('.cta-container')

  const elements = [label, title, desc, cta].filter(Boolean)

  ScrollTrigger.create({
    trigger: section,
    start: 'top 60%',
    onEnter: () => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      })
    },
    onLeaveBack: () => {
      gsap.to(elements, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.05
      })
    }
  })
})

// ═══════════════════════════════════════════════════════════════
// LOADER
// ═══════════════════════════════════════════════════════════════
const loader = document.getElementById('loader')
const loaderProgress = document.querySelector('.loader-progress')
const loaderPercent = document.querySelector('.loader-percent')

function simulateLoading() {
  let progress = 0
  const interval = setInterval(() => {
    progress += Math.random() * 12
    if (progress >= 100) {
      progress = 100
      clearInterval(interval)

      setTimeout(() => {
        loader.classList.add('hidden')
        nav.classList.add('visible')
        state.isLoading = false
        initHeroAnimations()
      }, 400)
    }

    loaderProgress.style.width = `${progress}%`
    loaderPercent.textContent = `${Math.floor(progress)}%`
  }, 80)
}

// ═══════════════════════════════════════════════════════════════
// ANIMATION LOOP
// ═══════════════════════════════════════════════════════════════
function animate(currentTime) {
  requestAnimationFrame(animate)

  // Calculate delta time with clamping to prevent spikes
  state.deltaTime = Math.min((currentTime - state.lastTime) / 1000, 0.1) // Clamp to 100ms max
  state.lastTime = currentTime
  state.time += state.deltaTime

  // Smooth mouse movement
  state.mouse.x += (state.mouse.targetX - state.mouse.x) * 0.08
  state.mouse.y += (state.mouse.targetY - state.mouse.y) * 0.08

  updateCursor()

  const time = state.time

  // Portal section
  if (portalGroup.visible) {
    // Calculate speed based on progress (accelerate as we go deeper)
    // 0 -> 0.2 (opening): Speed 2.0
    // 0.2 -> 0.8 (traveling): Speed increases 2.0 -> 12.0
    const portalProgress = portalMaterial.uniforms.uProgress.value
    const speed = 2.0 + portalProgress * 10.0

    // Accumulate travel distance
    state.portalTravel += speed * state.deltaTime

    portalMaterial.uniforms.uTime.value = time
    portalMaterial.uniforms.uTravel.value = state.portalTravel
    portalMaterial.uniforms.uMouse.value.set(state.mouse.x, state.mouse.y)
  }

  // Universe section
  if (universeGroup.visible) {
    starMaterial.uniforms.uTime.value = time
    starMaterial.uniforms.uMouse.value.set(
      state.mouse.x * 8,
      state.mouse.y * 8,
      0
    )
    nebulaMaterial.uniforms.uTime.value = time
    universeGroup.rotation.y = time * 0.03
    universeGroup.rotation.x = Math.sin(time * 0.1) * 0.05
  }

  // Morph section
  if (morphGroup.visible) {
    morphMaterial.uniforms.uTime.value = time
    morphMaterial.uniforms.uMouse.value.set(state.mouse.x, state.mouse.y)
    morphMesh.rotation.x = time * 0.2
    morphMesh.rotation.y = time * 0.15
  }

  // Fluid section
  if (fluidGroup.visible) {
    fluidMaterial.uniforms.uTime.value = time
    fluidMaterial.uniforms.uMouse.value.set(
      (state.mouse.x + 1) * 0.5,
      (state.mouse.y + 1) * 0.5
    )
  }

  // Crystal section
  if (crystalGroup.visible) {
    crystalGroup.children.forEach((crystal, i) => {
      if (crystal.userData.material) {
        crystal.userData.material.uniforms.uTime.value = time
      }
      crystal.rotation.x = time * 0.25 + i * 0.8
      crystal.rotation.y = time * 0.35 + i * 0.5
      crystal.position.y = Math.sin(time * 0.8 + i * 1.2) * 0.3 + (i === 1 ? 0.5 : i === 2 ? -0.3 : 0)

      // Update mouse uniform
      if (crystal.userData.material) {
        crystal.userData.material.uniforms.uMouse.value.set(
          (state.mouse.x + 1) * 0.5, // 0 to 1
          (state.mouse.y + 1) * 0.5
        )
      }
    })
  }

  // Cosmos section
  if (cosmosGroup.visible) {
    // Update connection material
    connectionMaterial.uniforms.uTime.value = time
    // Correct mouse mapping for 3D space (approx 14 units wide, 8 units high)
    const mouseX = state.mouse.x * 7
    const mouseY = state.mouse.y * 4
    connectionMaterial.uniforms.uMouse.value.set(mouseX, mouseY, 0)

    // Update nodes with mouse interactivity
    const mousePos = new THREE.Vector3(mouseX, mouseY, 0)

    nodes.forEach((node, i) => {
      // Floating motion
      node.position.y = node.userData.originalY + Math.sin(time * 1.5 + node.userData.phase) * 0.15
      node.position.x += Math.cos(time + node.userData.phase) * 0.002

      // Update node shader
      if (node.userData.material) {
        node.userData.material.uniforms.uTime.value = time
        node.userData.material.uniforms.uMouse.value.copy(mousePos)
      }

      // Update glow halo position and shader
      if (node.userData.glow) {
        node.userData.glow.position.copy(node.position)
        node.userData.glow.lookAt(camera.position)
        if (node.userData.glow.userData.material) {
          node.userData.glow.userData.material.uniforms.uTime.value = time
        }
      }
    })

    // DYNAMIC LINE UPDATE: Keep lines attached to moving nodes
    const positions = connectionGeometry.attributes.position.array
    for (let i = 0; i < connectionPairs.length; i++) {
      const nodeA = connectionPairs[i].a
      const nodeB = connectionPairs[i].b

      const idx = i * 6
      positions[idx] = nodeA.position.x
      positions[idx + 1] = nodeA.position.y
      positions[idx + 2] = nodeA.position.z

      positions[idx + 3] = nodeB.position.x
      positions[idx + 4] = nodeB.position.y
      positions[idx + 5] = nodeB.position.z
    }
    connectionGeometry.attributes.position.needsUpdate = true

    cosmosGroup.rotation.y = time * 0.04
  }

  renderer.render(scene, camera)
}

// ═══════════════════════════════════════════════════════════════
// RESIZE HANDLER
// ═══════════════════════════════════════════════════════════════
function onResize() {
  const width = window.innerWidth
  const height = window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  fluidMaterial.uniforms.uResolution.value.set(width, height)
  portalMaterial.uniforms.uPixelRatio.value = renderer.getPixelRatio()
  starMaterial.uniforms.uPixelRatio.value = renderer.getPixelRatio()
}

window.addEventListener('resize', onResize)

// ═══════════════════════════════════════════════════════════════
// INITIALIZE
// ═══════════════════════════════════════════════════════════════
simulateLoading()
animate(0)
