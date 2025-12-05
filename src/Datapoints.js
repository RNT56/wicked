/**
 * Datapoints.js
 * Manages interactive Bitcoin data points for each section
 */
import gsap from 'gsap'

export class DatapointManager {
    constructor() {
        this.container = document.getElementById('datapoints-container')
        this.activeSection = -1
        this.datapoints = []

        // Configuration Data
        this.data = [
            // Section 0: Genesis / Network Entry (Portal)
            [
                { x: 20, y: 30, title: 'Block 0', desc: 'The Genesis Block, mined on Jan 3, 2009. Contains the message "Chancellor on brink of second bailout for banks".' },
                { x: 75, y: 60, title: 'Satoshi Nakamoto', desc: 'The pseudonymous creator who published the whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System".' },
                { x: 15, y: 70, title: '21 Million', desc: 'The hard cap on the total supply of Bitcoin, ensuring absolute mathematical scarcity.' }
            ],
            // Section 1: Nodes & Decentralization (Particles)
            [
                { x: 25, y: 25, title: 'Full Nodes', desc: 'Validators that maintain the complete history of the blockchain, enforcing consensus rules independently.' },
                { x: 80, y: 40, title: 'Trustlessness', desc: 'The ability to verify transactions without relying on any central authority or intermediary.' },
                { x: 30, y: 75, title: 'Global Distribution', desc: 'Nodes are distributed globally, making the network resistant to censorship and physical attacks.' }
            ],
            // Section 2: The Trilemma (Morph)
            [
                { x: 20, y: 40, title: 'Scalability', desc: 'The challenge of processing a high volume of transactions without compromising security or decentralization.' },
                { x: 70, y: 30, title: 'Security', desc: 'The resistance of the network to attacks, secured by thermodynamic energy (Proof of Work).' },
                { x: 50, y: 80, title: 'Decentralization', desc: 'The distribution of power and control across the network, preventing any single point of failure.' }
            ],
            // Section 3: Liquidity & Flow (Fluid)
            [
                { x: 15, y: 35, title: 'Market Depth', desc: 'The ability of the market to sustain large orders without significantly impacting the price.' },
                { x: 85, y: 55, title: 'Velocity', desc: 'The rate at which money changes hands in the economy, facilitating trade and commerce.' },
                { x: 40, y: 20, title: 'Global Exchange', desc: 'A 24/7/365 permissionless market that never closes and settles finality in minutes.' }
            ],
            // Section 4: Proof of Work / Hashing (Entropy)
            [
                { x: 25, y: 30, title: 'SHA-256', desc: 'The cryptographic hash function used by Bitcoin for mining and address generation.' },
                { x: 75, y: 65, title: 'Difficulty Adjustment', desc: 'The mechanism that ensures blocks are mined every 10 minutes on average, adapting to hashrate changes.' },
                { x: 15, y: 60, title: 'Energy Wall', desc: 'The use of real-world energy to secure the ledger, making it prohibitively expensive to rewrite history.' }
            ],
            // Section 5: Immutable Ledger / UTXOs (Crystal)
            [
                { x: 20, y: 25, title: 'UTXO Model', desc: 'Unspent Transaction Output. The fundamental building block of Bitcoin transactions, like digital gold nuggets.' },
                { x: 80, y: 35, title: 'Immutability', desc: 'Once a transaction is buried under enough work, it is practically impossible to reverse.' },
                { x: 60, y: 75, title: 'Timechain', desc: 'A chain of blocks, each containing a cryptographic hash of the previous block, creating an arrow of time.' }
            ],
            // Section 6: Mempool & Propagation (Cosmos)
            [
                { x: 15, y: 40, title: 'Mempool', desc: 'The waiting area for unconfirmed transactions before they are included in a block.' },
                { x: 85, y: 30, title: 'Fee Market', desc: 'Users bid fees to have their transactions prioritized by miners based on block space demand.' },
                { x: 30, y: 70, title: 'Gossip Protocol', desc: 'The method by which nodes share information about new transactions and blocks across the network.' }
            ],
            // Section 7: Lightning Network / Layer 2 (Quantum)
            [
                { x: 20, y: 30, title: 'Payment Channels', desc: 'Off-chain channels that allow for instant, low-fee transactions between parties.' },
                { x: 75, y: 45, title: 'Layer 2', desc: 'Protocols built on top of the base layer to handle high throughput while inheriting base layer security.' },
                { x: 40, y: 80, title: 'Instant Settlement', desc: 'Transactions on Lightning are settled instantly without waiting for block confirmations.' }
            ],
            // Section 8: Hyperbitcoinization / Future (Singularity)
            [
                { x: 15, y: 35, title: 'Store of Value', desc: 'Bitcoin\'s role as digital gold and a hedge against monetary inflation.' },
                { x: 80, y: 25, title: 'Unit of Account', desc: 'The potential future where goods and services are priced directly in Satoshis.' },
                { x: 50, y: 70, title: 'Global Reserve', desc: 'The adoption of Bitcoin as a neutral reserve asset by nations, corporations, and individuals.' }
            ]
        ]
    }

    createDatapoint(config, index) {
        const el = document.createElement('div')
        el.className = 'datapoint'
        el.style.left = `${config.x}%`
        el.style.top = `${config.y}%`

        // Random delay for organic feel
        const delay = index * 0.1
        el.style.animationDelay = `${delay}s`

        el.innerHTML = `
      <div class="datapoint-dot">
        <div class="datapoint-ring"></div>
        <div class="datapoint-center"></div>
      </div>
      <div class="datapoint-card">
        <h3 class="datapoint-title">${config.title}</h3>
        <p class="datapoint-desc">${config.desc}</p>
        <div class="datapoint-line"></div>
      </div>
    `

        // Add hover interactions
        el.addEventListener('mouseenter', () => {
            el.classList.add('active')
        })

        el.addEventListener('mouseleave', () => {
            el.classList.remove('active')
        })

        return el
    }

    update(sectionIndex) {
        if (this.activeSection === sectionIndex) return

        // Clear existing
        this.container.innerHTML = ''
        this.datapoints = []

        this.activeSection = sectionIndex

        // Create new datapoints for this section
        const sectionData = this.data[sectionIndex]
        if (!sectionData) return

        sectionData.forEach((config, i) => {
            const el = this.createDatapoint(config, i)
            this.container.appendChild(el)
            this.datapoints.push(el)

            // Animate in
            gsap.fromTo(el,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: 0.2 + i * 0.15,
                    ease: 'back.out(1.7)'
                }
            )
        })
    }
}
