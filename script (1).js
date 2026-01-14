// ============================================
// CAFÉS DE COLOMBIA - JavaScript
// Interactividad y animaciones
// ============================================

// ============================================
// DATOS DE LAS REGIONES
// ============================================

const regionsData = {
    'Eje Cafetero': {
        location: 'Caldas, Risaralda, Quindío',
        description: 'El Eje Cafetero es el corazón de la cultura cafetera colombiana. Declarado Patrimonio de la Humanidad por la UNESCO, esta región combina paisajes montañosos espectaculares con una tradición cafetera centenaria. Sus pueblos coloniales y sus haciendas cafeteras ofrecen una experiencia única donde la arquitectura tradicional se encuentra con la modernidad del café de especialidad.',
        fullDescription: 'Las montañas del Eje Cafetero ofrecen condiciones perfectas para el cultivo de café arábigo de alta calidad. El clima templado, las lluvias bien distribuidas y los suelos volcánicos ricos en minerales crean un entorno ideal. Aquí, pequeños y medianos productores han perfeccionado técnicas de cultivo sostenible que respetan el medio ambiente mientras producen algunos de los cafés más reconocidos del mundo.',
        features: [
            'Altitud: 1,200 - 1,800 metros sobre el nivel del mar',
            'Perfil de sabor: Dulce, cítrico y perfectamente balanceado',
            'Notas principales: Caramelo, frutas rojas, chocolate con leche',
            'Cuerpo: Medio a completo con acidez brillante',
            'Proceso: Lavado tradicional',
            'Cosecha: Dos cosechas principales al año (marzo-junio, septiembre-diciembre)'
        ],
        producers: ['Finca La Esperanza', 'Café Don Pedro', 'Hacienda Venecia', 'Finca El Ocaso'],
        images: [
            'linear-gradient(135deg, rgba(90, 122, 82, 0.7), rgba(61, 90, 61, 0.9)), radial-gradient(circle at 30% 40%, #5a7a52, #3d5a3d)',
            'linear-gradient(135deg, rgba(139, 90, 60, 0.7), rgba(111, 78, 55, 0.9)), radial-gradient(circle at 70% 60%, #8b5a3c, #6f4e37)',
            'linear-gradient(135deg, rgba(212, 165, 116, 0.7), rgba(184, 147, 111, 0.9)), radial-gradient(circle at 50% 50%, #d4a574, #b8936f)'
        ],
        coffees: [
            { name: 'Eje Cafetero Premium', description: 'Blend tradicional con notas de caramelo', price: 45000, weight: '340g' },
            { name: 'Single Origin Quindío', description: 'Café de finca única con notas cítricas', price: 52000, weight: '340g' },
            { name: 'Reserva Especial', description: 'Microlote de altura con proceso honey', price: 68000, weight: '250g' }
        ]
    },
    'Antioquia': {
        location: 'Suroeste y Oriente Antioqueño',
        description: 'Antioquia es sinónimo de café de carácter. Sus montañas agrestes producen cafés con personalidad marcada, ideales para quienes buscan sabores intensos y complejos. La cultura paisa se refleja en cada taza, con cafés que hablan de tradición, esfuerzo y dedicación.',
        fullDescription: 'Los caficultores antioqueños son reconocidos por su tenacidad y amor por la tierra. En municipios como Jardín, Andes, Ciudad Bolívar y Fredonia, las familias cafeteras han transmitido sus conocimientos de generación en generación. El resultado son cafés con perfiles únicos que reflejan la diversidad de microclimas de la región.',
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
            'linear-gradient(135deg, rgba(139, 90, 60, 0.7), rgba(111, 78, 55, 0.9)), radial-gradient(circle at 40% 30%, #8b5a3c, #6f4e37)',
            'linear-gradient(135deg, rgba(74, 44, 42, 0.7), rgba(44, 24, 16, 0.9)), radial-gradient(circle at 60% 70%, #4a2c2a, #2c1810)',
            'linear-gradient(135deg, rgba(166, 124, 82, 0.7), rgba(139, 111, 71, 0.9)), radial-gradient(circle at 50% 50%, #a67c52, #8b6f47)'
        ],
        coffees: [
            { name: 'Antioquia Tradicional', description: 'Sabor intenso con notas de chocolate', price: 48000, weight: '340g' },
            { name: 'Suroeste Premium', description: 'Café de montaña con cuerpo robusto', price: 55000, weight: '340g' },
            { name: 'Jardín Especial', description: 'Edición limitada proceso natural', price: 72000, weight: '250g' }
        ]
    },
    'Huila': {
        location: 'Sur de Colombia',
        description: 'El Huila es la región cafetera por excelencia en términos de calidad. Sus cafés han ganado innumerables premisios internacionales gracias a su perfil limpio, dulce y afrutado. El Macizo Colombiano, donde nacen importantes ríos del país, proporciona condiciones únicas para cultivar cafés excepcionales.',
        fullDescription: 'La región del Huila se ha consolidado como líder en la producción de cafés de especialidad en Colombia. Los pequeños productores de municipios como Pitalito, Garzón, Acevedo y San Agustín han adoptado prácticas innovadoras de cultivo y procesamiento que han elevado la calidad de sus cafés a niveles extraordinarios.',
        features: [
            'Altitud: 1,500 - 2,100 metros sobre el nivel del mar',
            'Perfil de sabor: Afrutado, brillante y excepcionalmente dulce',
            'Notas principales: Cítricos (naranja, limón), miel, flores',
            'Cuerpo: Medio con acidez vibrante',
            'Proceso: Lavado, honey, natural',
            'Reconocimientos: Múltiples ganadores Cup of Excellence'
        ],
        producers: ['Asociación de Caficultores del Huila', 'Finca La Primavera', 'Café Especial Pitalito', 'Cooperativa San Agustín'],
        images: [
            'linear-gradient(135deg, rgba(212, 165, 116, 0.7), rgba(184, 147, 111, 0.9)), radial-gradient(circle at 35% 45%, #d4a574, #b8936f)',
            'linear-gradient(135deg, rgba(255, 200, 120, 0.7), rgba(230, 180, 100, 0.9)), radial-gradient(circle at 65% 55%, #ffc878, #e6b464)',
            'linear-gradient(135deg, rgba(90, 122, 82, 0.7), rgba(74, 104, 66, 0.9)), radial-gradient(circle at 50% 50%, #5a7a52, #4a6842)'
        ],
        coffees: [
            { name: 'Huila Supremo', description: 'Acidez brillante con notas de naranja', price: 51000, weight: '340g' },
            { name: 'Pitalito Especial', description: 'Café premiado con notas florales', price: 62000, weight: '340g' },
            { name: 'Geisha Huila', description: 'Variedad excepcional edición limitada', price: 95000, weight: '250g' }
        ]
    },
    'Nariño': {
        location: 'Frontera sur de Colombia',
        description: 'Los cafés de Nariño son cultivados en las mayores alturas de Colombia, cerca de la línea ecuatorial. Esta combinación única produce cafés de complejidad extraordinaria, con perfiles elegantes y sofisticados que conquistan a los catadores más exigentes del mundo.',
        fullDescription: 'Nariño representa el extremo de la caficultura de altura en Colombia. Aquí, pequeños productores indígenas y campesinos cultivan café en parcelas diminutas, a menudo en laderas empinadas, con dedicación artesanal. El resultado son microlotes excepcionales que expresan el terroir único de cada finca.',
        features: [
            'Altitud: 1,800 - 2,300 metros sobre el nivel del mar',
            'Perfil de sabor: Complejo, elegante y multidimensional',
            'Notas principales: Flores (jazmín, lavanda), frutas tropicales, bergamota',
            'Cuerpo: Delicado con acidez refinada',
            'Proceso: Principalmente lavado y honey',
            'Especial: Cafés de mayor altura en Colombia'
        ],
        producers: ['Cooperativa de La Florida', 'Asociación Chachagüí', 'Cafés del Galeras', 'Productores Nariñenses'],
        images: [
            'linear-gradient(135deg, rgba(74, 111, 165, 0.7), rgba(61, 90, 122, 0.9)), radial-gradient(circle at 40% 35%, #4a6fa5, #3d5a7a)',
            'linear-gradient(135deg, rgba(139, 90, 183, 0.7), rgba(111, 70, 150, 0.9)), radial-gradient(circle at 60% 65%, #8b5ab7, #6f4696)',
            'linear-gradient(135deg, rgba(212, 165, 200, 0.7), rgba(180, 140, 170, 0.9)), radial-gradient(circle at 50% 50%, #d4a5c8, #b48caa)'
        ],
        coffees: [
            { name: 'Nariño Altura', description: 'Café de altura con notas florales', price: 58000, weight: '340g' },
            { name: 'La Florida Premium', description: 'Proceso lavado con acidez vibrante', price: 67000, weight: '340g' },
            { name: 'Galeras Reserva', description: 'Microlote excepcional del volcán', price: 88000, weight: '250g' }
        ]
    },
    'Tolima': {
        location: 'Centro-sur de Colombia',
        description: 'Entre las cordilleras Central y Oriental, Tolima produce cafés con gran cuerpo y carácter. Esta región ha ganado reconocimiento internacional por sus cafés robustos, perfectos para espresso y para quienes buscan tazas con presencia y personalidad.',
        fullDescription: 'El Tolima cafetero se extiende desde las estribaciones del Nevado del Tolima hasta los valles del Magdalena. Municipios como Planadas, Rioblanco y Chaparral son conocidos por sus cafés de cuerpo completo y sabores intensos. Los productores tolimenses combinan tradición con innovación para ofrecer cafés de alta calidad.',
        features: [
            'Altitud: 1,200 - 1,900 metros sobre el nivel del mar',
            'Perfil de sabor: Vibrante, con gran cuerpo y dulzor',
            'Notas principales: Panela, frutas dulces (uva, cereza), caramelo',
            'Cuerpo: Completo y sedoso',
            'Proceso: Lavado y natural',
            'Ideal para: Espresso y métodos de presión'
        ],
        producers: ['Asociación Planadas', 'Café del Nevado', 'Cooperativa Tolima', 'Fincas de Rioblanco'],
        images: [
            'linear-gradient(135deg, rgba(166, 124, 82, 0.7), rgba(139, 111, 71, 0.9)), radial-gradient(circle at 45% 40%, #a67c52, #8b6f47)',
            'linear-gradient(135deg, rgba(139, 90, 60, 0.7), rgba(111, 78, 55, 0.9)), radial-gradient(circle at 55% 60%, #8b5a3c, #6f4e37)',
            'linear-gradient(135deg, rgba(180, 140, 100, 0.7), rgba(150, 120, 85, 0.9)), radial-gradient(circle at 50% 50%, #b48c64, #967855)'
        ],
        coffees: [
            { name: 'Tolima Tradicional', description: 'Cuerpo completo ideal para espresso', price: 47000, weight: '340g' },
            { name: 'Planadas Premium', description: 'Notas de panela y frutas dulces', price: 54000, weight: '340g' },
            { name: 'Nevado Reserva', description: 'Edición especial proceso natural', price: 70000, weight: '250g' }
        ]
    },
    'Santander': {
        location: 'Nororiente de Colombia',
        description: 'Santander es pionero en caficultura orgánica y sostenible. Sus cafés tienen un perfil único, con notas herbales y florales que los distinguen. La región es conocida por su compromiso con prácticas ambientalmente responsables y por el trabajo de pequeños productores dedicados.',
        fullDescription: 'En las montañas santandereanas, los caficultores han desarrollado un enfoque único que combina tradición con sostenibilidad. Municipios como Suratá, Vetas y California son reconocidos por sus cafés orgánicos certificados y por mantener ecosistemas cafeteros biodiversos que protegen la fauna y flora local.',
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
            'linear-gradient(135deg, rgba(122, 155, 118, 0.7), rgba(90, 122, 82, 0.9)), radial-gradient(circle at 40% 45%, #7a9b76, #5a7a52)',
            'linear-gradient(135deg, rgba(100, 140, 100, 0.7), rgba(70, 110, 80, 0.9)), radial-gradient(circle at 60% 55%, #648c64, #466e50)',
            'linear-gradient(135deg, rgba(150, 180, 140, 0.7), rgba(120, 150, 110, 0.9)), radial-gradient(circle at 50% 50%, #96b48c, #78966e)'
        ],
        coffees: [
            { name: 'Santander Orgánico', description: 'Certificado orgánico con notas herbales', price: 53000, weight: '340g' },
            { name: 'Suratá Premium', description: 'Café de sombra con acidez cítrica', price: 61000, weight: '340g' },
            { name: 'Vetas Especial', description: 'Microlote de altura edición limitada', price: 75000, weight: '250g' }
        ]
    }
};

// ============================================
// DATOS DE LA GALERÍA
// ============================================

const galleryData = [
    {
        title: 'Plantación en las montañas',
        description: 'Cafetos cultivados entre 1,200 y 2,000 metros sobre el nivel del mar. La altura es crucial para desarrollar los sabores complejos que caracterizan al café colombiano.',
        image: 'linear-gradient(135deg, rgba(90, 122, 82, 0.8), rgba(74, 44, 42, 0.8)), radial-gradient(circle at 50% 30%, #5a7a52, #4a2c2a)'
    },
    {
        title: 'Recolección manual',
        description: 'Solo las cerezas maduras son seleccionadas a mano. Este proceso artesanal garantiza que solo los mejores frutos lleguen al procesamiento, asegurando la calidad superior del café.',
        image: 'linear-gradient(135deg, rgba(212, 165, 116, 0.8), rgba(139, 90, 60, 0.8)), radial-gradient(circle at 40% 60%, #d4a574, #8b5a3c)'
    },
    {
        title: 'Secado al sol',
        description: 'Proceso tradicional que desarrolla los sabores únicos del café. El secado cuidadoso durante 12-15 días permite que los azúcares naturales se concentren, creando perfiles de sabor excepcionales.',
        image: 'linear-gradient(135deg, rgba(184, 147, 111, 0.8), rgba(111, 78, 55, 0.8)), radial-gradient(circle at 60% 40%, #b8936f, #6f4e37)'
    },
    {
        title: 'Granos tostados',
        description: 'El arte del tostado perfecto. Cada región requiere un perfil de tostado específico para resaltar sus características únicas, desde tuestes claros que preservan acidez hasta tuestes oscuros que desarrollan dulzor.',
        image: 'linear-gradient(135deg, rgba(111, 78, 55, 0.8), rgba(74, 44, 42, 0.8)), radial-gradient(circle at 50% 50%, #6f4e37, #4a2c2a)'
    },
    {
        title: 'Taza perfecta',
        description: 'El resultado final: una experiencia inolvidable. Cada taza de café colombiano cuenta la historia de las montañas, el clima, el suelo y la dedicación de miles de caficultores.',
        image: 'linear-gradient(135deg, rgba(139, 90, 60, 0.8), rgba(212, 165, 116, 0.8)), radial-gradient(circle at 45% 55%, #8b5a3c, #d4a574)'
    },
    {
        title: 'Paisaje cafetero',
        description: 'La belleza natural de las tierras cafeteras. Los paisajes culturales cafeteros de Colombia son Patrimonio de la Humanidad, combinando biodiversidad, cultura y producción sostenible.',
        image: 'linear-gradient(135deg, rgba(90, 122, 82, 0.8), rgba(139, 90, 60, 0.8)), radial-gradient(circle at 50% 50%, #5a7a52, #8b5a3c)'
    }
];

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentGalleryIndex = 0;
let selectedCoffee = null;
let currentRegion = null;

// ============================================
// ANIMACIÓN DE NÚMEROS (CONTADOR)
// ============================================

/**
 * Anima los números del contador desde 0 hasta el valor objetivo
 */
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
// NAVEGACIÓN SUAVE
// ============================================

document.querySelectorAll('.nav-menu a, .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href === '#' ? 'hero' : href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// EFECTO PARALLAX
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const heroContent = document.querySelector('.hero-content');
        const beans = document.querySelectorAll('.coffee-bean');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
        
        beans.forEach((bean, index) => {
            const speed = 0.3 + (index * 0.1);
            bean.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
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
        navbar.style.boxShadow = '0 4px 30px rgba(74, 44, 42, 0.15)';
        navbar.style.padding = '1rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(74, 44, 42, 0.1)';
        navbar.style.padding = '1.5rem 0';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// TARJETAS DE REGIÓN CON EFECTO 3D
// ============================================

document.querySelectorAll('.region-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// MODAL DE REGIÓN
// ============================================

/**
 * Abre el modal con información detallada de la región
 */
function openRegionModal(regionName) {
    const modal = document.getElementById('regionModal');
    const data = regionsData[regionName];
    
    if (!data) return;
    
    currentRegion = regionName;
    
    // Llenar información del modal
    document.getElementById('modalTitle').textContent = regionName;
    document.getElementById('modalLocation').textContent = data.location;
    document.getElementById('modalDescription').innerHTML = `
        <p>${data.description}</p>
        <p style="margin-top: 1rem;">${data.fullDescription}</p>
    `;
    
    // Características
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = data.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Productores
    const producersDiv = document.getElementById('modalProducers');
    producersDiv.innerHTML = data.producers.map(producer => 
        `<span class="producer-tag">${producer}</span>`
    ).join('');
    
    // Imágenes
    const mainImage = document.getElementById('modalMainImage');
    mainImage.style.background = data.images[0];
    
    const thumbs = document.querySelectorAll('.modal-image-thumb');
    thumbs.forEach((thumb, index) => {
        thumb.style.background = data.images[index];
        thumb.classList.toggle('active', index === 0);
        
        thumb.onclick = () => {
            mainImage.style.background = data.images[index];
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
    });
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de región
 */
function closeRegionModal() {
    const modal = document.getElementById('regionModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners para botones de región
document.querySelectorAll('.region-button').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.region-card');
        const regionName = card.querySelector('.region-name').textContent;
        openRegionModal(regionName);
    });
});

// Cerrar modal al hacer clic en X
document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ============================================
// BOTONES DE ACCIÓN DEL MODAL
// ============================================

document.getElementById('buyButton').addEventListener('click', () => {
    closeRegionModal();
    openPurchaseModal(currentRegion);
});

document.getElementById('visitButton').addEventListener('click', () => {
    alert(`🌄 Planifica tu visita al ${currentRegion}\n\n` +
          `Muy pronto podrás reservar tours guiados por las fincas cafeteras, ` +
          `degustaciones exclusivas y experiencias culturales únicas.\n\n` +
          `Contacta con nosotros para más información:\n📧 tours@cafecolombia.com`);
});

// ============================================
// MODAL DE COMPRA
// ============================================

/**
 * Abre el modal de compra de café
 */
function openPurchaseModal(regionName) {
    const modal = document.getElementById('purchaseModal');
    const data = regionsData[regionName];
    
    if (!data) return;
    
    document.getElementById('purchaseRegion').textContent = regionName;
    
    // Crear tarjetas de café
    const coffeeCards = document.getElementById('coffeeCards');
    coffeeCards.innerHTML = data.coffees.map((coffee, index) => `
        <div class="coffee-card" data-index="${index}" data-price="${coffee.price}" data-name="${coffee.name}">
            <div class="coffee-card-image" style="background: ${data.images[index % 3]}"></div>
            <div class="coffee-card-info">
                <h4>${coffee.name}</h4>
                <p>${coffee.description}</p>
                <p><strong>${coffee.weight}</strong></p>
            </div>
            <div class="coffee-card-price">$${coffee.price.toLocaleString()}</div>
        </div>
    `).join('');
    
    // Event listeners para seleccionar café
    document.querySelectorAll('.coffee-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.coffee-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedCoffee = {
                name: this.dataset.name,
                price: parseInt(this.dataset.price)
            };
            document.getElementById('selectedProduct').textContent = selectedCoffee.name;
            updateTotal();
        });
    });
    
    // Resetear valores
    document.getElementById('quantity').value = 1;
    document.getElementById('selectedProduct').textContent = '-';
    document.getElementById('totalPrice').textContent = '$0';
    selectedCoffee = null;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Actualiza el total de la compra
 */
function updateTotal() {
    if (!selectedCoffee) return;
    
    const quantity = parseInt(document.getElementById('quantity').value);
    const total = selectedCoffee.price * quantity;
    document.getElementById('totalPrice').textContent = `$${total.toLocaleString()}`;
}

// Botones de cantidad
document.getElementById('qtyMinus').addEventListener('click', () => {
    const input = document.getElementById('quantity');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        updateTotal();
    }
});

document.getElementById('qtyPlus').addEventListener('click', () => {
    const input = document.getElementById('quantity');
    if (input.value < 10) {
        input.value = parseInt(input.value) + 1;
        updateTotal();
    }
});

document.getElementById('quantity').addEventListener('change', updateTotal);

// Confirmar compra
document.getElementById('confirmPurchase').addEventListener('click', () => {
    if (!selectedCoffee) {
        alert('⚠️ Por favor selecciona un café');
        return;
    }
    
    const quantity = document.getElementById('quantity').value;
    const grind = document.getElementById('grindType').options[document.getElementById('grindType').selectedIndex].text;
    const total = document.getElementById('totalPrice').textContent;
    
    const button = document.getElementById('confirmPurchase');
    button.textContent = 'PROCESANDO...';
    button.style.backgroundColor = '#5a7a52';
    
    setTimeout(() => {
        alert(`✅ ¡Pedido Confirmado!\n\n` +
              `Producto: ${selectedCoffee.name}\n` +
              `Cantidad: ${quantity} unidad(es)\n` +
              `Molienda: ${grind}\n` +
              `Total: ${total}\n\n` +
              `Recibirás un correo de confirmación con los detalles del envío.\n` +
              `¡Gracias por apoyar el café colombiano! ☕`);
        
        document.getElementById('purchaseModal').classList.remove('active');
        document.body.style.overflow = 'auto';
        button.textContent = 'CONFIRMAR PEDIDO';
        button.style.backgroundColor = '';
    }, 1500);
});

// ============================================
// GALERÍA INTERACTIVA
// ============================================

/**
 * Abre el modal de galería con la imagen seleccionada
 */
function openGalleryModal(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('galleryModal');
    const data = galleryData[index];
    
    document.getElementById('galleryModalImage').style.background = data.image;
    document.getElementById('galleryModalTitle').textContent = data.title;
    document.getElementById('galleryModalDescription').textContent = data.description;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Navega a la siguiente imagen de la galería
 */
function nextGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    const data = galleryData[currentGalleryIndex];
    
    document.getElementById('galleryModalImage').style.background = data.image;
    document.getElementById('galleryModalTitle').textContent = data.title;
    document.getElementById('galleryModalDescription').textContent = data.description;
}

/**
 * Navega a la imagen anterior de la galería
 */
function prevGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    const data = galleryData[currentGalleryIndex];
    
    document.getElementById('galleryModalImage').style.background = data.image;
    document.getElementById('galleryModalTitle').textContent = data.title;
    document.getElementById('galleryModalDescription').textContent = data.description;
}

// Event listeners para galería
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => openGalleryModal(index));
});

document.getElementById('galleryNext').addEventListener('click', nextGalleryImage);
document.getElementById('galleryPrev').addEventListener('click', prevGalleryImage);

// Navegación con teclado en galería
document.addEventListener('keydown', (e) => {
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextGalleryImage();
        if (e.key === 'ArrowLeft') prevGalleryImage();
        if (e.key === 'Escape') {
            galleryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.querySelector('.contact-form');
const formButton = document.querySelector('.form-button');

if (contactForm && formButton) {
    formButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('.form-input');
        const textarea = contactForm.querySelector('.form-textarea');
        
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff3355';
                isValid = false;
            } else {
                input.style.borderColor = 'rgba(139, 90, 60, 0.2)';
            }
        });
        
        if (!textarea.value.trim()) {
            textarea.style.borderColor = '#ff3355';
            isValid = false;
        } else {
            textarea.style.borderColor = 'rgba(139, 90, 60, 0.2)';
        }
        
        if (isValid) {
            formButton.textContent = 'ENVIANDO...';
            formButton.style.backgroundColor = '#5a7a52';
            
            setTimeout(() => {
                formButton.textContent = '✓ MENSAJE ENVIADO';
                formButton.style.backgroundColor = '#5a7a52';
                
                inputs.forEach(input => input.value = '');
                textarea.value = '';
                
                setTimeout(() => {
                    formButton.textContent = 'ENVIAR MENSAJE';
                    formButton.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        } else {
            formButton.style.animation = 'shake 0.5s';
            setTimeout(() => {
                formButton.style.animation = '';
            }, 500);
        }
    });
}

// Animación de shake
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const bean = document.createElement('div');
            bean.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}%;
                width: 30px;
                height: 40px;
                background: #6f4e37;
                border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                z-index: 10000;
                animation: fallBean 3s linear forwards;
                opacity: 0.8;
            `;
            document.body.appendChild(bean);
            
            setTimeout(() => bean.remove(), 3000);
        }, i * 100);
    }
    
    if (!document.getElementById('fallAnimation')) {
        const fallStyle = document.createElement('style');
        fallStyle.id = 'fallAnimation';
        fallStyle.textContent = `
            @keyframes fallBean {
                to {
                    transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(fallStyle);
    }
    
    console.log('☕ ¡Easter Egg Activado! Lluvia de café ☕');
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('☕ Página de Cafés de Colombia cargada exitosamente');
    console.log('💡 Tip: Intenta el código Konami (↑↑↓↓←→←→BA) para una sorpresa...');
    
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
