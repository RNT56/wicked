export class EncryptedText {
    constructor(element, options = {}) {
        this.element = element;
        this.originalText = element.innerText;
        this.chars = options.chars || "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";
        this.interval = options.interval || 50;
        this.revealDelay = options.revealDelay || 0;

        this.isAnimating = false;
        this.frameId = null;
        this.isDecrypted = false;

        this.characterSpans = [];
        this.init();
    }

    init() {
        // 1. Measure widths of all characters
        const computedStyle = window.getComputedStyle(this.element);
        const font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;

        // Create a temporary canvas to measure text width accurately
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;

        this.element.innerHTML = '';
        this.element.style.whiteSpace = 'nowrap'; // Prevent wrapping issues during animation

        for (let i = 0; i < this.originalText.length; i++) {
            const char = this.originalText[i];
            const span = document.createElement('span');
            span.innerText = char;
            span.style.display = 'inline-block';
            span.style.textAlign = 'center';

            // Measure width
            const width = context.measureText(char).width;

            // Add a tiny buffer to prevent layout jitter from sub-pixel rendering
            // But for spaces, we need to be careful.
            if (char === ' ') {
                span.style.width = '0.3em'; // Fallback for space if measure fails or is 0
                if (width > 0) span.style.width = `${width}px`;
            } else {
                span.style.width = `${width}px`;
            }

            this.element.appendChild(span);
            this.characterSpans.push({ node: span, original: char });
        }
    }

    animate() {
        if (this.isAnimating || this.isDecrypted) return;
        this.isAnimating = true;

        const length = this.originalText.length;

        // Clear any existing animation
        if (this.frameId) cancelAnimationFrame(this.frameId);

        const startTime = Date.now();

        const update = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;

            // Calculate how many characters should be revealed based on time
            let revealedCount = 0;
            if (elapsed > this.revealDelay) {
                revealedCount = Math.floor((elapsed - this.revealDelay) / this.interval);
            }

            if (revealedCount >= length) {
                this.characterSpans.forEach(item => item.node.innerText = item.original);
                this.isAnimating = false;
                this.isDecrypted = true;
                return;
            }

            for (let i = 0; i < length; i++) {
                const item = this.characterSpans[i];
                if (i < revealedCount) {
                    item.node.innerText = item.original;
                    item.node.style.color = ''; // Reset color
                } else {
                    if (item.original === ' ') {
                        item.node.innerText = ' ';
                    } else {
                        item.node.innerText = this.chars[Math.floor(Math.random() * this.chars.length)];
                        // Optional: Dim the encrypted characters slightly
                        // item.node.style.opacity = '0.7';
                    }
                }
            }

            this.frameId = requestAnimationFrame(update);
        };

        this.frameId = requestAnimationFrame(update);
    }

    reset() {
        if (this.frameId) cancelAnimationFrame(this.frameId);
        this.isAnimating = false;
        this.isDecrypted = false;

        // Set to random chars immediately
        for (let i = 0; i < this.characterSpans.length; i++) {
            const item = this.characterSpans[i];
            if (item.original === ' ') {
                item.node.innerText = ' ';
            } else {
                item.node.innerText = this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }
    }

    stop() {
        if (this.frameId) cancelAnimationFrame(this.frameId);
        this.characterSpans.forEach(item => item.node.innerText = item.original);
        this.isAnimating = false;
        this.isDecrypted = true;
    }
}
