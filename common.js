// ==================== BACKGROUND ANIMATION ====================
const canvas = document.getElementById('molecule-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let atoms = [];
let bonds = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Atom {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = type === 'center' ? 6 : 4;
        this.type = type;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 50 || this.x > width - 50) this.vx *= -1;
        if (this.y < 50 || this.y > height - 50) this.vy *= -1;
    }
    
    draw() {
        ctx.fillStyle = this.type === 'center' ? '#9146ff' : '#f0f6f0';
        ctx.fillRect(
            this.x - this.radius, 
            this.y - this.radius, 
            this.radius * 2, 
            this.radius * 2
        );
        
        ctx.fillStyle = this.type === 'center' ? 'rgba(145, 70, 255, 0.3)' : 'rgba(240, 246, 240, 0.2)';
        ctx.fillRect(
            this.x - this.radius - 2, 
            this.y - this.radius - 2, 
            this.radius * 2 + 4, 
            this.radius * 2 + 4
        );
    }
}

function createMolecule(x, y) {
    const center = new Atom(x, y, 'center');
    atoms.push(center);
    
    const numNodes = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < numNodes; i++) {
        const angle = (Math.PI * 2 / numNodes) * i;
        const dist = 60 + Math.random() * 40;
        const node = new Atom(
            x + Math.cos(angle) * dist,
            y + Math.sin(angle) * dist,
            'node'
        );
        atoms.push(node);
        bonds.push({ from: center, to: node });
        
        if (Math.random() > 0.5 && i > 0) {
            bonds.push({ from: atoms[atoms.length - 2], to: node });
        }
    }
}

for (let i = 0; i < 4; i++) {
    createMolecule(
        100 + Math.random() * (width - 200),
        100 + Math.random() * (height - 200)
    );
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    bonds.forEach(bond => {
        ctx.strokeStyle = 'rgba(145, 70, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(bond.from.x, bond.from.y);
        ctx.lineTo(bond.to.x, bond.to.y);
        ctx.stroke();
    });
    
    atoms.forEach(atom => {
        atom.update();
        atom.draw();
    });
    
    requestAnimationFrame(animate);
}
animate();

// ==================== TOAST ====================
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function copyResult(elementId) {
    const text = document.getElementById(elementId).textContent;
    if (text && text !== 'Ожидание данных...' && !text.includes('ВВЕДИТЕ') && !text.includes('Нажмите')) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('СКОПИРОВАНО В БУФЕР!');
        });
    }
}
