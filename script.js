/**
 * KEYK NI JUAN - WEB APPLICATION SCRIPT
 */

// 1. DATA STORE
const PRODUCTS = [
    { 
        id: 1, 
        category: "COOKIES", 
        name: "Classic Chocolate Chip Cookies", 
        image: "Classic Chocolate Chip Cookies.jpg", 
        description: "Homemade favorite, loaded with premium chocolate morsels.", 
        options: [
            { size: "Mini Jar", price: 350, image: "Classic Chocolate Chip Cookies.jpg" }, 
            { size: "Palm size (1pc)", price: 140, image: "Classic Chocolate Chip Cookies.jpg" }, 
            { size: "Box of 6", price: 420, image: "Classic Chocolate Chip Cookies.jpg" }, 
            { size: "Box of 12", price: 840, image: "Classic Chocolate Chip Cookies.jpg" }
        ] 
    },
    { 
        id: 3, 
        category: "COOKIES", 
        name: "Red Velvet w/ Cream Cheese", 
        image: "Red Velvet with Cream Cheese.jpg", 
        description: "Red velvet cookies with silk cream cheese frosting.", 
        options: [
            { size: "Box of 6", price: 540, image: "Red Velvet with Cream Cheese.jpg" }, 
            { size: "Box of 12", price: 1080, image: "Red Velvet with Cream Cheese.jpg" }
        ] 
    },
    { 
        id: 5, 
        category: "COOKIES", 
        name: "Brookies", 
        image: "Brookies.jpg", 
        description: "Brownie-Cookie hybrid.", 
        options: [
            { size: "Box of 6", price: 135, image: "Brookies.jpg" }, 
            { size: "Box of 12", price: 270, image: "Brookies.jpg" }
        ] 
    },
    { 
        id: 6, 
        category: "COOKIES", 
        name: "Belgian Chocolate Oat Cookies", 
        image: "Belgian Chocolate Oat Cookies.jpg", 
        description: "Premium Belgian chocolate with oats.", 
        options: [
            { size: "Box of 6", price: 250, image: "Belgian Chocolate Oat Cookies.jpg" }, 
            { size: "Box of 12", price: 500, image: "Belgian Chocolate Oat Cookies.jpg" } 
        ] 
    },
    { 
        id: 8, 
        category: "BARS", 
        name: "Fudgy Brownies (Choco Chip)", 
        image: "Fudgy Brownies (Choco Chip).jpg", 
        description: "Intensely chocolatey brownie squares.", 
        options: [
            { size: "Box of 8", price: 240, image: "Fudgy Brownies (Choco Chip).jpg" }, 
            { size: "Box of 12", price: 360, image: "Fudgy Brownies (Choco Chip).jpg" }, 
            { size: "Box of 16", price: 480, image: "Fudgy Brownies (Choco Chip).jpg" }
        ] 
    },
    { 
        id: 9, 
        category: "BARS", 
        name: "Brownies w/ Choco Chip & Cashews", 
        image: "Brownies with Choco Chip & Cashews.jpg", 
        description: "Fudgy brownies with cashew crunch.", 
        options: [
            { size: "Box of 8", price: 280, image: "Brownies with Choco Chip & Cashews.jpg" }, 
            { size: "Box of 12", price: 420, image: "Brownies with Choco Chip & Cashews.jpg" }, 
            { size: "Box of 16", price: 560, image: "Brownies with Choco Chip & Cashews.jpg" }
        ] 
    },
    { 
        id: 10, 
        category: "BARS", 
        name: "Brownies w/ Choco Chip & Walnuts", 
        image: "Brownies with Choco Chip & Walnuts.jpg", 
        description: "Fudgy brownies with roasted walnuts.", 
        options: [
            { size: "Box of 8", price: 320, image: "Brownies with Choco Chip & Walnuts.jpg" }, 
            { size: "Box of 12", price: 480, image: "Brownies with Choco Chip & Walnuts.jpg" }, 
            { size: "Box of 16", price: 640, image: "Brownies with Choco Chip & Walnuts.jpg" }
        ] 
    },
    { 
        id: 14, 
        category: "BARS", 
        name: "Caramel Bars", 
        image: "Caramel Bars.jpg", 
        description: "Signature buttery caramel bars.", 
        options: [
            { size: "Box of 8", price: 250, image: "Caramel Bars.jpg" }, 
            { size: "Box of 12", price: 375, image: "Caramel Bars.jpg" }, 
            { size: "Box of 16", price: 500, image: "Caramel Bars.jpg" }
        ] 
    },
    { 
        id: 16, 
        category: "BARS", 
        name: "Revel Bars", 
        image: "Revel Bars.jpg", 
        description: "Traditional oat bars with chocolate fudge.", 
        options: [
            { size: "Box of 8", price: 300, image: "Revel Bars.jpg" }, 
            { size: "Box of 12", price: 450, image: "Revel Bars.jpg" }, 
            { size: "Box of 16", price: 600, image: "Revel Bars.jpg" }
        ] 
    },
    { 
        id: 18, 
        category: "OTHER PASTRIES", 
        name: "Silvanas", 
        image: "Silvanas.jpg", 
        description: "Crispy and creamy Filipino classic.", 
        options: [
            { size: "Box of 6", price: 360, image: "Silvanas.jpg" }, 
            { size: "Box of 12", price: 720, image: "Silvanas.jpg" }
        ] 
    },
    { 
        id: 19, 
        category: "OTHER PASTRIES", 
        name: "Classic Coconut Macaroons", 
        image: "Classic Coconut Macaroons.jpg", 
        description: "Sweet and chewy coconut bites.", 
        options: [
            { size: "Box of 12", price: 120, image: "Classic Coconut Macaroons.jpg" }
        ] 
    },
    { 
        id: 21, 
        category: "OTHER PASTRIES", 
        name: "Chocolate Crinkles", 
        image: "Chocolate Crinkles.jpg", 
        description: "Fudgy cookies coated in sugar.", 
        options: [
            { size: "Box of 8", price: 80, image: "Chocolate Crinkles.jpg" }, 
            { size: "Box of 10", price: 100, image: "Chocolate Crinkles.jpg" }, 
            { size: "Box of 12", price: 120, image: "Chocolate Crinkles.jpg" }, 
            { size: "Tub (15 pcs)", price: 75, image: "Chocolate Crinkles.jpg" }
        ] 
    },
    { id: 24, category: "PREMIUM CAKES", name: "Belgian Chocolate Cake", image: "Belgian Chocolate Cake.jpg", description: "Finest Belgian dark chocolate.", options: [{ size: "Whole", price: 1500, image: "Belgian Chocolate Cake.jpg" }] },
    { id: 27, category: "PREMIUM CAKES", name: "Chocolate Fudge Cake", image: "Chocolate Fudge Cake.jpg", description: "Classic fudge layers.", options: [{ size: "Whole", price: 1000, image: "Chocolate Fudge Cake.jpg" }] },
    { id: 28, category: "PREMIUM CAKES", name: "Triple Chocolate Cake", image: "Triple Chocolate Cake.jpg", description: "Triple the chocolate indulgence.", options: [{ size: "Whole", price: 1500, image: "Triple Chocolate Cake.jpg" }] },
    { id: 31, category: "PREMIUM CAKES", name: "Black Forest Cake", image: "Black Forest Cake.jpg", description: "Cherries, cream, and chocolate.", options: [{ size: "Whole", price: 1350, image: "Black Forest Cake.jpg" }] },
    { id: 33, category: "PREMIUM CAKES", name: "Double Dark Salted Caramel", image: "Double Dark Salted Caramel.jpg", description: "Salted caramel balance.", options: [{ size: "Whole", price: 1350, image: "Double Dark Salted Caramel.jpg" }] },
    { id: 34, category: "PREMIUM CAKES", name: "Oreo Cake", image: "Oreo cake.jpg", description: "Cookies and cream delight.", options: [{ size: "Whole", price: 1350, image: "Oreo cake.jpg" }] },
    { id: 35, category: "PREMIUM CAKES", name: "Red Velvet Cake", image: "Red Velvet Cake.jpg", description: "Traditional red velvet beauty.", options: [{ size: "Whole", price: 1300, image: "Red Velvet Cake.jpg" }] },
    { id: 36, category: "PREMIUM CAKES", name: "Mango Cream Cake", image: "Mango Cream Cake.jpg", description: "Fresh mango cream layers.", options: [{ size: "Whole", price: 1350, image: "Mango Cream Cake.jpg" }] },
    { id: 38, category: "PREMIUM CAKES", name: "Carrot Walnut Cake", image: "Carrot Walnut Cake.jpg", description: "Healthy carrot and walnut crunch.", options: [{ size: "Whole", price: 1600, image: "Carrot Walnut Cake.jpg" }] },
    { id: 39, category: "PREMIUM CAKES", name: "Sansrival", image: "Sansrival.jpg", description: "Classic nutty layers.", options: [{ size: "Whole", price: 1000, image: "Sansrival.jpg" }] },
    { id: 40, category: "PREMIUM CAKES", name: "Nelusko Cake", image: "Nelusko Cake.jpg", description: "Specialty Nelusko cake.", options: [{ size: "Whole", price: 1300, image: "Nelusko Cake.jpg" }] },
    { id: 41, category: "PREMIUM CAKES", name: "Strawberry Shortcake", image: "Strawberry Shortcake.jpg", description: "Fresh strawberry shortcake.", options: [{ size: "Whole", price: 1450, image: "Strawberry Shortcake.jpg" }] },
    { id: 43, category: "PREMIUM CAKES", name: "Ube Macapuno Cake", image: "Ube Macapuno Cake.jpg", description: "Filipino Ube classic.", options: [{ size: "Whole", price: 1350, image: "Ube Macapuno Cake.jpg" }] },
    { 
        id: 70, 
        category: "BREADS & LOAVES", 
        name: "Cheesy Ensaymada", 
        image: "Cheesy Ensaymada.jpg", 
        description: "Buttery cheesy goodness.", 
        options: [
            { size: "Box of 6", price: 460, image: "Cheesy Ensaymada.jpg" }, 
            { size: "Box of 12", price: 920, image: "Cheesy Ensaymada.jpg" }
        ] 
    },
    { 
        id: 81, 
        category: "BREADS & LOAVES", 
        name: "Classic Banana Loaf", 
        image: "Classic Banana Loaf.jpg", 
        description: "All-time favorite moist banner bread.", 
        options: [
            { size: "Big", price: 350, image: "Classic Banana Loaf.jpg" }, 
            { size: "Small", price: 170, image: "Classic Banana Loaf.jpg" }, 
            { size: "Mini", price: 70, image: "Classic Banana Loaf.jpg" }
        ] 
    }
];

const CATEGORIES = ["ALL", "COOKIES", "BARS", "OTHER PASTRIES", "PREMIUM CAKES", "BREADS & LOAVES"];


// 2. APPLICATION STATE
let cart = [];
let state = {
    view: 'home',
    activeCategory: 'ALL',
    activeProduct: null,
    selectedOptionIndex: 0,
    searchQuery: ''
};


// 3. RENDERING ENGINE
window.onload = () => {
    renderCategoryChips();
    renderView();
    setupCartUI();
    setupSearchListener();
};

function renderView() {
    const container = document.getElementById('view-container');
    if (!container) return;
    container.innerHTML = '';

    if (state.searchQuery) {
        renderSearch(container);
    } else if (state.view === 'home') {
        renderHome(container);
    } else {
        renderDetail(container);
    }
}

function renderCategoryChips() {
    const chipContainer = document.getElementById('category-chips');
    if (!chipContainer) return;
    chipContainer.innerHTML = CATEGORIES.map(cat => `
        <button onclick="filterCategory('${cat}')" 
                class="px-6 py-2 rounded-full text-[11px] font-extrabold uppercase tracking-widest border border-[#582d2315] whitespace-nowrap transition-all
                ${state.activeCategory === cat ? 'bg-[var(--brand-accent)] text-white' : 'bg-white text-[var(--brand-brown)]'}">
            ${cat}
        </button>
    `).join('');
}

function renderHome(container) {
    if (state.activeCategory === 'ALL') {
        const hero = document.createElement('div');
        hero.className = "text-center py-10 px-6 max-w-4xl mx-auto mb-12";
        hero.innerHTML = `
            <div class="relative w-48 h-48 mx-auto mb-8">
                <div class="absolute inset-0 bg-[var(--brand-accent)] rounded-full opacity-[0.03] scale-150 blur-3xl"></div>
                <img src="keyk.png" alt="Logo" class="w-full h-full object-contain drop-shadow-2xl">
            </div>
            <h1 class="handwritten-style text-6xl md:text-8xl mb-6 tracking-tight">Keyk Ni Juan</h1>
            <p class="text-sm font-bold uppercase tracking-[0.4em] opacity-40 mb-10">Baking memories since the beginning</p>
        `;
        container.appendChild(hero);
        CATEGORIES.slice(1).forEach(cat => renderCategorySection(container, cat));
    } else {
        const header = document.createElement('div');
        header.className = "max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center pt-8";
        header.innerHTML = `
            <button onclick="filterCategory('ALL')" class="mb-12 flex items-center gap-3 text-[11px] font-black uppercase tracking-widest bg-white border border-[#582d2310] px-8 py-4 rounded-2xl shadow-sm hover:shadow-md">← Back to Main</button>
            <h2 class="handwritten-style text-7xl text-[var(--brand-brown)]">${state.activeCategory}</h2>
        `;
        container.appendChild(header);
        renderCategorySection(container, state.activeCategory);
    }
}

function renderCategorySection(container, cat) {
    const items = PRODUCTS.filter(p => p.category === cat);
    if (items.length === 0) return;

    const section = document.createElement('div');
    section.className = "max-w-7xl mx-auto px-6 mb-24";
    section.innerHTML = `
        <h2 class="handwritten-style text-4xl mb-10 border-b border-[#582d2310] pb-6">${cat}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${items.map(p => `
                <div onclick="showDetail(${p.id})" class="product-card group cursor-pointer">
                    <div class="initials-box w-full aspect-square bg-white rounded-[2.5rem] border border-[#582d2310] flex items-center justify-center mb-6 relative overflow-hidden">
                        ${p.image ? `<img src="${p.image}" class="w-full h-full object-cover">` : `<span class="opacity-10 font-black text-6xl uppercase">${p.name[0]}</span>`}
                    </div>
                    <h4 class="font-extrabold text-lg text-[var(--brand-brown)] mb-2 group-hover:underline">${p.name}</h4>
                    <p class="text-xs text-gray-400 mb-4 line-clamp-1">${p.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-black uppercase tracking-widest bg-[var(--brand-accent)]/5 px-3 py-1 rounded-md">From ₱${p.options[0].price}</span>
                        <span class="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity">View Detail →</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    container.appendChild(section);
}

function renderDetail(container) {
    const p = state.activeProduct;
    if (!p) return;
    
    const opt = p.options[state.selectedOptionIndex];
    const displayImage = opt.image || p.image;

    container.innerHTML = `
        <div class="max-w-6xl mx-auto px-6 py-12">
            <button onclick="goHome()" class="mb-8 text-[11px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 flex items-center gap-2 transition-all">← Back to Treats</button>
            <div class="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#582d2308]">
                <div class="lg:w-1/2 bg-[var(--brand-accent)] flex items-center justify-center p-20 min-h-[500px] relative">
                    ${displayImage ? `<img src="${displayImage}" class="max-w-full max-h-full object-contain relative z-10 transition-opacity duration-300" id="detail-image">` : `<img src="keyk.png" class="w-40 h-40 object-contain brightness-0 invert opacity-40 relative z-10">`}
                </div>
                <div class="lg:w-1/2 p-12 lg:p-20 flex flex-col">
                    <div class="flex-grow">
                        <p class="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--brand-accent)] opacity-30 mb-4">${p.category}</p>
                        <h2 class="handwritten-style text-6xl mb-8 leading-tight text-[var(--brand-accent)]">${p.name}</h2>
                        <p class="text-gray-500 text-lg leading-relaxed mb-12">${p.description}</p>
                        <div class="mb-16">
                            <p class="text-[10px] font-black uppercase tracking-widest mb-6 opacity-30">Select Configuration</p>
                            <div class="flex flex-wrap gap-3">
                                ${p.options.map((o, i) => `
                                    <button onclick="setOption(${i})" 
                                            class="px-8 py-5 rounded-2xl text-xs font-black border-2 transition-all 
                                            ${i === state.selectedOptionIndex ? 'bg-[var(--brand-accent)] border-[var(--brand-accent)] text-white shadow-xl' : 'border-[#582d2310] text-gray-400 hover:border-[#582d2330]'}">
                                        ${o.size}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-between pt-12 border-t border-[#582d2310] gap-8">
                        <div>
                            <p class="text-[10px] font-black uppercase tracking-widest opacity-30 mb-1">Price</p>
                            <span class="text-5xl font-black tracking-tighter text-[var(--brand-accent)]">₱${opt.price}</span>
                        </div>
                        <button onclick="addToCart()" class="w-full sm:w-auto bg-[var(--brand-accent)] text-white px-12 py-7 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:brightness-125 transition-all active:scale-95">Add to Tray</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderSearch(container) {
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(state.searchQuery.toLowerCase()));
    container.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-12">
            <h2 class="handwritten-style text-4xl mb-10 border-b border-[#582d2310] pb-6">Searching for: "${state.searchQuery}"</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                ${matches.map(p => `
                    <div onclick="showDetail(${p.id})" class="product-card group cursor-pointer">
                        <div class="initials-box w-full aspect-square bg-white rounded-[2.5rem] border border-[#582d2310] flex items-center justify-center mb-6 relative overflow-hidden">
                            ${p.image ? `<img src="${p.image}" class="w-full h-full object-cover">` : `<span class="opacity-10 font-black text-6xl uppercase">${p.name[0]}</span>`}
                        </div>
                        <h4 class="font-extrabold text-lg text-[var(--brand-brown)] mb-2 group-hover:underline">${p.name}</h4>
                        <p class="text-xs text-gray-400 mb-4 line-clamp-1">${p.description}</p>
                    </div>
                `).join('')}
                ${matches.length === 0 ? `<div class="col-span-full py-20 text-center opacity-40 font-black uppercase tracking-widest">No treats found</div>` : ''}
            </div>
        </div>
    `;
}


// 4. EVENT HANDLERS
window.filterCategory = (cat) => {
    state.activeCategory = cat;
    state.view = 'home';
    state.searchQuery = '';
    renderCategoryChips();
    renderView();
    scrollToTop()
};

window.showDetail = (id) => {
    state.view = 'detail';
    state.activeProduct = PRODUCTS.find(p => p.id === id);
    state.selectedOptionIndex = 0;
    state.searchQuery = ''; 
    renderView();
};


window.setOption = (i) => {
    state.selectedOptionIndex = i;
    renderView();
};

window.goHome = () => {
    state.activeCategory = 'ALL';
    state.view = 'home';
    state.searchQuery = '';
    renderCategoryChips();
    renderView();
    scrollToTop();
};

window.addToCart = () => {
    const p = state.activeProduct;
    if (!p) return;
    const opt = p.options[state.selectedOptionIndex];
    cart.push({ name: p.name, size: opt.size, price: opt.price });
    updateCart();
    showToast(p.name);
        document.getElementById('tray-warning')?.classList.add('hidden');

};

window.removeFromCart = (idx) => {
    cart.splice(idx, 1);
    updateCart();
};

window.submitOrder = () => {
['cust-name', 'cust-address'].forEach(id => {
    const input = document.getElementById(id);
    input?.addEventListener('input', () => {
        document.getElementById('tray-warning')?.classList.add('hidden');
        document.getElementById('order-warning')?.classList.add('hidden');

    });
});
    const nameInput = document.getElementById('cust-name');
    const addrInput = document.getElementById('cust-address');
    const noteInput = document.getElementById('cust-note');

    const name = nameInput?.value;
    const addr = addrInput?.value;
    const note = noteInput?.value;

   const warning = document.getElementById('order-warning');

if (!name || !addr) {
    if (warning) warning.classList.remove('hidden');
    return;
}

if (warning) warning.classList.add('hidden');


    const trayWarning = document.getElementById('tray-warning');

if (cart.length === 0) {
    if (trayWarning) trayWarning.classList.remove('hidden');
    return;
}


    // SHOW SUCCESS POPUP
    document.getElementById('success-modal').classList.remove('hidden');

    // RESET EVERYTHING
    cart = []; 
    updateCart(); 
    if (nameInput) nameInput.value = '';
    if (addrInput) addrInput.value = '';
    if (noteInput) noteInput.value = '';
    
    // CLOSE THE MENU TRAY
    closeCart(); 
};

window.closeSuccessModal = () => {
    document.getElementById('success-modal').classList.add('hidden');
};


// 5. UTILITY FUNCTIONS
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showToast(productName) {
    const toast = document.getElementById('toast-notif');
    const msg = document.getElementById('toast-item-name');
    if (!toast || !msg) return;

    msg.innerText = productName;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function updateCart() {
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total-amount');
    const list = document.getElementById('cart-items-list');

    if (countEl) countEl.innerText = cart.length;
    if (totalEl) totalEl.innerText = cart.reduce((s, i) => s + i.price, 0).toLocaleString();

    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = `<div class="text-center py-20 opacity-20 text-[10px] font-black uppercase tracking-[0.3em]">Tray is empty</div>`;
    } else {
        list.innerHTML = cart.map((item, idx) => `
            <div class="flex justify-between items-center bg-white p-6 rounded-3xl border border-[#582d2308] group transition-all hover:border-[#582d2320]">
                <div>
                    <h5 class="font-extrabold text-[var(--brand-brown)]">${item.name}</h5>
                    <p class="text-[9px] opacity-40 uppercase font-black tracking-widest">${item.size}</p>
                </div>
                <div class="flex items-center gap-6">
                    <div class="font-black text-sm">₱${item.price}</div>
                    <button onclick="removeFromCart(${idx})" class="text-red-400 p-2 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100">✕</button>
                </div>
            </div>
        `).join('');
    }
}

function setupCartUI() {
    window.openCart = () => { 
        document.getElementById('order-modal')?.classList.remove('hidden'); 
        document.body.classList.add('modal-open');
        setTimeout(() => document.getElementById('tray-panel')?.classList.add('open'), 10); 
    };
    
    window.closeCart = () => { 
        document.getElementById('tray-panel')?.classList.remove('open'); 
        setTimeout(() => {
            document.getElementById('order-modal')?.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }, 400); 
    };

    document.getElementById('open-cart-btn').onclick = openCart;
    document.getElementById('modal-overlay').onclick = closeCart;
}

function setupSearchListener() {
    const searchInput = document.getElementById('search-input');
    const mobileSearch = document.getElementById('search-input-mobile');

    if (searchInput) {
        searchInput.oninput = (e) => {
            state.searchQuery = e.target.value;
            renderView();
            scrollToTop();
        };
    }

    if (mobileSearch) {
        mobileSearch.oninput = (e) => {
            state.searchQuery = e.target.value;
            renderView();
            scrollToTop();
        };
    }
}
