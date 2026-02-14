// ============================================
// CAFÉS DE COLOMBIA - JavaScript
// Interactividad y animaciones
// ============================================

// ============================================
// DATOS DE LAS REGIONES CON IMÁGENES REALES
// ============================================

const regionsData = {
    'Eje Cafetero': {
        location: 'Caldas, Risaralda, Quindío',
        description: 'El Eje Cafetero es el corazón de la cultura cafetera colombiana. Declarado Patrimonio de la Humanidad por la UNESCO, esta región combina paisajes montañosos espectaculares con una tradición cafetera centenaria.',
        fullDescription: 'Las montañas del Eje Cafetero ofrecen condiciones perfectas para el cultivo de café arábigo de alta calidad. El clima templado, las lluvias bien distribuidas y los suelos volcánicos ricos en minerales crean un entorno ideal.',
        features: [
            'Altitud: 1,200 - 1,800 metros sobre el nivel del mar',
            'Perfil de sabor: Dulce, cítrico y perfectamente balanceado',
            'Notas principales: Caramelo, frutas rojas, chocolate con leche',
            'Cuerpo: Medio a completo con acidez brillante',
            'Proceso: Lavado tradicional',
            'Cosecha: Dos cosechas principales al año'
        ],
        producers: ['Finca La Esperanza', 'Café Don Pedro', 'Hacienda Venecia', 'Finca El Ocaso'],
        images: [
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
            'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&q=80',
            'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=800&q=80'
        ],
        coffees: [
            { name: 'Eje Cafetero Premium', description: 'Blend tradicional con notas de caramelo', price: 45000, weight: '340g', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=200&q=80' },
            { name: 'Single Origin Quindío', description: 'Café de finca única con notas cítricas', price: 52000, weight: '340g', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=200&q=80' },
            { name: 'Reserva Especial', description: 'Microlote de altura con proceso honey', price: 68000, weight: '250g', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=200&q=80' }
        ]
    },
    'Antioquia': {
        location: 'Suroeste y Oriente Antioqueño',
        description: 'Antioquia es sinónimo de café de carácter. Sus montañas agrestes producen cafés con personalidad marcada, ideales para quienes buscan sabores intensos y complejos.',
        fullDescription: 'Los caficultores antioqueños son reconocidos por su tenacidad y amor por la tierra. El resultado son cafés con perfiles únicos que reflejan la diversidad de microclimas de la región.',
        features: [
            'Altitud: 1,400 - 2,000 metros sobre el nivel del mar',
            'Perfil de sabor: Intenso, aromático y con gran complejidad',
            'Notas principales: Chocolate oscuro, nueces tostadas, especias',
            'Cuerpo: Robusto y cremoso',
            'Proceso: Lavado y natural',
            'Variedades: Caturra, Castillo, Colombia'
        ],
        producers: ['Café de Jardín', 'Finca Santa Bárbara', 'Cooperativa Suroeste', 'Café Premium Andes'],
        images: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80',
            'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&q=80'
        ],
        coffees: [
            { name: 'Antioquia Tradicional', description: 'Sabor intenso con notas de chocolate', price: 48000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'Suroeste Premium', description: 'Café de montaña con cuerpo robusto', price: 55000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'Jardín Especial', description: 'Edición limitada proceso natural', price: 72000, weight: '250g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' }
        ]
    },
    'Huila': {
        location: 'Sur de Colombia',
        description: 'El Huila es la región cafetera por excelencia. Sus cafés han ganado innumerables premios internacionales gracias a su perfil limpio, dulce y afrutado.',
        fullDescription: 'La región del Huila se ha consolidado como líder en la producción de cafés de especialidad en Colombia. Los pequeños productores han adoptado prácticas innovadoras de cultivo y procesamiento.',
        features: [
            'Altitud: 1,500 - 2,100 metros sobre el nivel del mar',
            'Perfil de sabor: Afrutado, brillante y excepcionalmente dulce',
            'Notas principales: Cítricos, miel, flores',
            'Cuerpo: Medio con acidez vibrante',
            'Proceso: Lavado, honey, natural',
            'Reconocimientos: Múltiples ganadores Cup of Excellence'
        ],
        producers: ['Asociación de Caficultores del Huila', 'Finca La Primavera', 'Café Especial Pitalito', 'Cooperativa San Agustín'],
        images: [
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
            'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&q=80',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80'
        ],
        coffees: [
            { name: 'Huila Supremo', description: 'Acidez brillante con notas de naranja', price: 51000, weight: '340g', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=200&q=80' },
            { name: 'Pitalito Especial', description: 'Café premiado con notas florales', price: 62000, weight: '340g', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=200&q=80' },
            { name: 'Geisha Huila', description: 'Variedad excepcional edición limitada', price: 95000, weight: '250g', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=200&q=80' }
        ]
    },
    'Nariño': {
        location: 'Frontera sur de Colombia',
        description: 'Los cafés de Nariño son cultivados en las mayores alturas de Colombia. Esta combinación única produce cafés de complejidad extraordinaria.',
        fullDescription: 'Nariño representa el extremo de la caficultura de altura en Colombia. Aquí, pequeños productores cultivan café con dedicación artesanal.',
        features: [
            'Altitud: 1,800 - 2,300 metros sobre el nivel del mar',
            'Perfil de sabor: Complejo, elegante y multidimensional',
            'Notas principales: Flores, frutas tropicales, bergamota',
            'Cuerpo: Delicado con acidez refinada',
            'Proceso: Principalmente lavado y honey',
            'Especial: Cafés de mayor altura en Colombia'
        ],
        producers: ['Cooperativa de La Florida', 'Asociación Chachagüí', 'Cafés del Galeras', 'Productores Nariñenses'],
        images: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80',
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80'
        ],
        coffees: [
            { name: 'Nariño Altura', description: 'Café de altura con notas florales', price: 58000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'La Florida Premium', description: 'Proceso lavado con acidez vibrante', price: 67000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'Galeras Reserva', description: 'Microlote excepcional del volcán', price: 88000, weight: '250g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' }
        ]
    },
    'Tolima': {
        location: 'Centro-sur de Colombia',
        description: 'Entre las cordilleras Central y Oriental, Tolima produce cafés con gran cuerpo y carácter. Perfectos para espresso.',
        fullDescription: 'El Tolima cafetero se extiende desde las estribaciones del Nevado del Tolima hasta los valles del Magdalena. Los productores combinan tradición con innovación.',
        features: [
            'Altitud: 1,200 - 1,900 metros sobre el nivel del mar',
            'Perfil de sabor: Vibrante, con gran cuerpo y dulzor',
            'Notas principales: Panela, frutas dulces, caramelo',
            'Cuerpo: Completo y sedoso',
            'Proceso: Lavado y natural',
            'Ideal para: Espresso y métodos de presión'
        ],
        producers: ['Asociación Planadas', 'Café del Nevado', 'Cooperativa Tolima', 'Fincas de Rioblanco'],
        images: [
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&q=80'
        ],
        coffees: [
            { name: 'Tolima Tradicional', description: 'Cuerpo completo ideal para espresso', price: 47000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'Planadas Premium', description: 'Notas de panela y frutas dulces', price: 54000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'Nevado Reserva', description: 'Edición especial proceso natural', price: 70000, weight: '250g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' }
        ]
    },
    'Santander': {
        location: 'Nororiente de Colombia',
        description: 'Santander es pionero en caficultura orgánica y sostenible. Sus cafés tienen un perfil único con notas herbales y florales.',
        fullDescription: 'En las montañas santandereanas, los caficultores han desarrollado un enfoque único que combina tradición con sostenibilidad.',
        features: [
            'Altitud: 1,400 - 2,000 metros sobre el nivel del mar',
            'Perfil de sabor: Herbal, floral y refrescante',
            'Notas principales: Hierbas aromáticas, limón, té verde',
            'Cuerpo: Ligero a medio con acidez cítrica',
            'Proceso: Orgánico certificado',
            'Especial: Cafés cultivados bajo sombra'
        ],
        producers: ['Cooperativa Suratá', 'Café Orgánico Santander', 'Asociación Vetas', 'Productores Sostenibles'],
        images: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80',
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80'
        ],
        coffees: [
            { name: 'Santander Orgánico', description: 'Certificado orgánico con notas herbales', price: 53000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'Suratá Premium', description: 'Café de sombra con acidez cítrica', price: 61000, weight: '340g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' },
            { name: 'Vetas Especial', description: 'Microlote de altura edición limitada', price: 75000, weight: '250g', image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=200&q=80' }
        ]
    }
};

// ============================================
// DATOS DE LA GALERÍA CON IMÁGENES REALES
// ============================================

const galleryData = [
    {
        title: 'Plantación en las montañas',
        description: 'Cafetos cultivados entre 1,200 y 2,000 metros sobre el nivel del mar. La altura es crucial para desarrollar los sabores complejos.',
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&q=80'
    },
    {
        title: 'Recolección manual',
        description: 'Solo las cerezas maduras son seleccionadas a mano. Este proceso artesanal garantiza la calidad superior del café.',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=1000&q=80'
    },
    {
        title: 'Secado al sol',
        description: 'Proceso tradicional que desarrolla los sabores únicos del café. El secado cuidadoso durante 12-15 días permite que los azúcares naturales se concentren.',
        image: 'https://images.unsplash.com/photo-1442512595331-e89e5f3da999?w=1000&q=80'
    },
    {
        title: 'Granos tostados',
        description: 'El arte del tostado perfecto. Cada región requiere un perfil de tostado específico para resaltar sus características únicas.',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1000&q=80'
    },
    {
        title: 'Taza perfecta',
        description: 'El resultado final: una experiencia inolvidable. Cada taza de café colombiano cuenta una historia única.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&q=80'
    },
    {
        title: 'Paisaje cafetero',
        description: 'La belleza natural de las tierras cafeteras. Los paisajes culturales cafeteros de Colombia son Patrimonio de la Humanidad.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80'
    }
];

let currentGalleryIndex = 0;
let selectedCoffee = null;
let currentRegion = null;

// ============================================
// ANIMACIÓN DE NÚMEROS
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('.fact-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString('es-CO');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString('es-CO');
            }
        };

        updateCounter();
    });
}

// ============================================
// INTERSECTION OBSERVER
// ============================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            if (entry.target.classList.contains('facts')) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.introduction, .regions, .gallery, .facts, .contact');
    sections.forEach(section => observer.observe(section));
});

// ============================================
// NAVEGACIÓN SUAVE Y SCROLL-SPY
// ============================================

const navLinks = document.querySelectorAll('.nav-menu a');
const ctaButton = document.querySelector('.cta-button');

// Función para manejar el scroll suave
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll('.nav-menu a, .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href && href.startsWith('#')) {
            e.preventDefault();
            smoothScroll(href);

            // Cerrar menú móvil si existiera (buena práctica)
            // navigation.classList.remove('active');
        }
    });
});

// Scroll-Spy logic
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], #hero');
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = document.querySelector('.navbar').offsetHeight;

        if (window.pageYOffset >= (sectionTop - headerHeight - 100)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ============================================
// EFECTO PARALLAX
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// ============================================
// NAVBAR AL SCROLL
// ============================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(74, 44, 42, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(74, 44, 42, 0.1)';
    }

    lastScroll = currentScroll;
});

// ============================================
// MODAL DE REGIÓN
// ============================================

function openRegionModal(regionName) {
    const modal = document.getElementById('regionModal');
    const data = regionsData[regionName];

    if (!data) return;

    currentRegion = regionName;

    document.getElementById('modalTitle').textContent = regionName;
    document.getElementById('modalLocation').textContent = data.location;
    document.getElementById('modalDescription').innerHTML = `
        <p>${data.description}</p>
        <p>${data.fullDescription}</p>
    `;

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = data.features.map(feature => `<li>${feature}</li>`).join('');

    const producersList = document.getElementById('modalProducers');
    producersList.innerHTML = data.producers.map(producer => `<span class="producer-tag">${producer}</span>`).join('');

    const mainImage = document.getElementById('modalMainImage');
    mainImage.style.backgroundImage = `url('${data.images[0]}')`;
    mainImage.style.backgroundSize = 'cover';
    mainImage.style.backgroundPosition = 'center';

    const thumbs = document.querySelectorAll('.modal-image-thumb');
    thumbs.forEach((thumb, index) => {
        thumb.style.backgroundImage = `url('${data.images[index]}')`;
        thumb.classList.toggle('active', index === 0);
        thumb.addEventListener('click', () => {
            mainImage.style.backgroundImage = `url('${data.images[index]}')`;
            thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
        });
    });

    modal.classList.add('active');
}

function closeRegionModal() {
    const modal = document.getElementById('regionModal');
    modal.classList.remove('active');
}

document.querySelectorAll('.region-button').forEach(button => {
    button.addEventListener('click', function () {
        const regionCard = this.closest('.region-card');
        const regionName = regionCard.querySelector('.region-name').textContent;
        openRegionModal(regionName);
    });
});

// ============================================
// BOTONES DE ACCIÓN DEL MODAL
// ============================================

document.getElementById('buyButton').addEventListener('click', () => {
    closeRegionModal();
    if (currentRegion) {
        openPurchaseModal(currentRegion);
    }
});

document.getElementById('visitButton').addEventListener('click', () => {
    alert(`¡Gracias por tu interés en visitar ${currentRegion}! Nos pondremos en contacto pronto.`);
    closeRegionModal();
});

// ============================================
// MODAL DE COMPRA
// ============================================

function openPurchaseModal(regionName) {
    const modal = document.getElementById('purchaseModal');
    const data = regionsData[regionName];

    currentRegion = regionName;
    document.getElementById('purchaseRegion').textContent = regionName;

    const coffeeCards = document.getElementById('coffeeCards');
    coffeeCards.innerHTML = data.coffees.map((coffee, index) => `
        <div class="coffee-card" data-index="${index}" data-price="${coffee.price}">
            <div class="coffee-card-image" style="background-image: url('${coffee.image}')"></div>
            <div class="coffee-card-info">
                <h4>${coffee.name}</h4>
                <p>${coffee.description}</p>
                <p>${coffee.weight}</p>
            </div>
            <div class="coffee-card-price">$${coffee.price.toLocaleString('es-CO')}</div>
        </div>
    `).join('');

    document.querySelectorAll('.coffee-card').forEach(card => {
        card.addEventListener('click', function () {
            document.querySelectorAll('.coffee-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');

            const index = this.getAttribute('data-index');
            selectedCoffee = data.coffees[index];
            document.getElementById('selectedProduct').textContent = selectedCoffee.name;
            updateTotal();
        });
    });

    if (data.coffees.length > 0) {
        const firstCard = coffeeCards.querySelector('.coffee-card');
        firstCard.click();
    }

    modal.classList.add('active');
}

function updateTotal() {
    if (!selectedCoffee) return;

    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const total = selectedCoffee.price * quantity;
    document.getElementById('totalPrice').textContent = '$' + total.toLocaleString('es-CO');
}

document.getElementById('qtyMinus').addEventListener('click', () => {
    const qty = document.getElementById('quantity');
    const value = Math.max(1, parseInt(qty.value) - 1);
    qty.value = value;
    updateTotal();
});

document.getElementById('qtyPlus').addEventListener('click', () => {
    const qty = document.getElementById('quantity');
    const value = Math.min(10, parseInt(qty.value) + 1);
    qty.value = value;
    updateTotal();
});

document.getElementById('quantity').addEventListener('change', updateTotal);

document.getElementById('confirmPurchase').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    const grindType = document.getElementById('grindType').value;

    const grindOptions = {
        'grano': 'Grano Entero',
        'media': 'Molienda Media',
        'fina': 'Molienda Fina (Espresso)',
        'gruesa': 'Molienda Gruesa (Prensa)'
    };

    alert(`¡Pedido Confirmado!\n\nProducto: ${selectedCoffee.name}\nCantidad: ${quantity} paquete(s)\nMolienda: ${grindOptions[grindType]}\nTotal: $${(selectedCoffee.price * quantity).toLocaleString('es-CO')}\n\nTe enviaremos un correo con los detalles de tu compra.`);

    document.getElementById('purchaseModal').classList.remove('active');
});

// ============================================
// GALERÍA INTERACTIVA
// ============================================

function openGalleryModal(index) {
    const modal = document.getElementById('galleryModal');
    const data = galleryData[index];

    currentGalleryIndex = index;

    document.getElementById('galleryModalImage').style.backgroundImage = `url('${data.image}')`;
    document.getElementById('galleryModalTitle').textContent = data.title;
    document.getElementById('galleryModalDescription').textContent = data.description;

    modal.classList.add('active');
}

function nextGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    const data = galleryData[currentGalleryIndex];
    document.getElementById('galleryModalImage').style.backgroundImage = `url('${data.image}')`;
    document.getElementById('galleryModalTitle').textContent = data.title;
    document.getElementById('galleryModalDescription').textContent = data.description;
}

function prevGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    const data = galleryData[currentGalleryIndex];
    document.getElementById('galleryModalImage').style.backgroundImage = `url('${data.image}')`;
    document.getElementById('galleryModalTitle').textContent = data.title;
    document.getElementById('galleryModalDescription').textContent = data.description;
}

document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => openGalleryModal(index));
});

document.getElementById('galleryNext').addEventListener('click', nextGalleryImage);
document.getElementById('galleryPrev').addEventListener('click', prevGalleryImage);

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextGalleryImage();
        if (e.key === 'ArrowLeft') prevGalleryImage();
        if (e.key === 'Escape') modal.classList.remove('active');
    }
});

// ============================================
// CIERRE DE MODALES
// ============================================

document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.closest('.modal').classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.querySelector('.contact-form');
const formButton = document.querySelector('.form-button');

if (contactForm && formButton) {
    formButton.addEventListener('click', (e) => {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll('.form-input');
        const textarea = contactForm.querySelector('.form-textarea');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const message = textarea.value.trim();

        if (!name || !email || !message) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor ingresa un email válido');
            return;
        }

        alert(`¡Gracias ${name}!\n\nTu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto a ${email}`);

        inputs[0].value = '';
        inputs[1].value = '';
        textarea.value = '';
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio Cafés de Colombia cargado correctamente');
});
