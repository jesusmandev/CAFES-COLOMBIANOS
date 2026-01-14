# ☕ Cafés de Colombia - El Tesoro de las Montañas

Un sitio web editorial elegante y responsivo dedicado a la excelencia del café colombiano. Presenta las mejores regiones productoras, galería interactiva, y sistema de compra integrado.

## 🌟 Características

### 🎨 Diseño Editorial
- Interfaz elegante con tipografía serif de alta calidad
- Paleta de colores cálida inspirada en el café
- Animaciones suaves y transiciones fluidas
- Completamente responsivo (móvil, tablet, desktop)

### 🗺️ Regiones Cafeteras
- 6 regiones principales de Colombia documentadas
- Información detallada de cada región con características de sabor
- Modal interactivo con galería de imágenes
- Datos sobre altitud, perfil de sabor y productores destacados

### 🛍️ Sistema de Compra
- Selección de café por región
- Opciones de molienda (grano entero, media, fina, gruesa)
- Selector de cantidad interactivo
- Cálculo automático de totales
- Resumen de compra en tiempo real

### 📸 Galería Interactiva
- 6 imágenes del proceso completo de café
- Modal de visualización a pantalla completa
- Navegación con flechas y teclado (←→)
- Información descriptiva de cada paso

### 📊 Secciones
- **Hero**: Presentación impactante con animaciones
- **Introducción**: Historia y contexto del café colombiano
- **Regiones**: Grid interactivo de las 6 regiones principales
- **Galería**: Proceso de café desde plantación hasta taza
- **Datos**: Estadísticas interesantes con animación de números
- **Contacto**: Formulario con validación
- **Footer**: Información de copyright

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Semántica y estructura
- **CSS3**: Grid, Flexbox, animaciones, custom properties
- **JavaScript Vanilla**: Sin dependencias, código modular

### Recursos Externos
- **Google Fonts**: Playfair Display, Crimson Pro, Montserrat
- **Unsplash API**: Imágenes de alta calidad en tiempo real
- **Iconos**: Unicode y emojis

## 📁 Estructura del Proyecto

```
CAFES-COLOMBIANOS/
├── CAFE.html           # Archivo HTML principal
├── styles.css          # Estilos CSS completos
├── script.js           # Lógica JavaScript
├── README.md           # Este archivo
└── assets/
    └── (imágenes servidas vía CDN)
```

## 🚀 Cómo Usar

### Opción 1: Abrir localmente
```bash
# 1. Descarga los archivos
# 2. Abre CAFE.html en tu navegador
```

### Opción 2: Con servidor local
```bash
# Usando Python 3
python -m http.server 8000

# Luego accede a: http://localhost:8000
```

### Opción 3: Con Live Server (VS Code)
- Instala la extensión "Live Server"
- Click derecho en CAFE.html → "Open with Live Server"

## 📋 Checklist de Funcionalidades

### ✅ Navegación
- [x] Barra de navegación fija con scroll
- [x] Enlaces suave a secciones
- [x] Botón CTA en hero

### ✅ Regiones
- [x] Tarjetas de región con imágenes reales
- [x] Modal con información detallada
- [x] Galería de imágenes dentro del modal
- [x] Lista de características y productores

### ✅ Galería
- [x] Grid responsivo de 6 imágenes
- [x] Hover con overlay descriptivo
- [x] Modal de visualización a pantalla completa
- [x] Navegación con flechas y teclado

### ✅ Compra
- [x] Selección de café por región
- [x] Tarjetas de café con imagen y descripción
- [x] Selector de cantidad (+/-)
- [x] Selector de molienda
- [x] Resumen de compra en tiempo real
- [x] Botón de confirmación

### ✅ Datos Interesantes
- [x] Animación de números al scroll
- [x] Estadísticas del café colombiano
- [x] Diseño con gradiente

### ✅ Contacto
- [x] Formulario con campos validados
- [x] Validación de email
- [x] Información de contacto

## 🎯 Datos de Regiones

### 1. **Eje Cafetero** (Caldas, Risaralda, Quindío)
- Altitud: 1,200 - 1,800 msnm
- Perfil: Dulce, cítrico, balanceado
- Notas: Caramelo, frutas rojas

### 2. **Antioquia** (Suroeste y Oriente)
- Altitud: 1,400 - 2,000 msnm
- Perfil: Intenso, aromático
- Notas: Chocolate, nueces

### 3. **Huila** (Sur de Colombia)
- Altitud: 1,500 - 2,100 msnm
- Perfil: Afrutado, brillante
- Notas: Cítricos, miel

### 4. **Nariño** (Frontera sur)
- Altitud: 1,800 - 2,300 msnm
- Perfil: Complejo, elegante
- Notas: Flores, frutas tropicales

### 5. **Tolima** (Centro-sur)
- Altitud: 1,200 - 1,900 msnm
- Perfil: Vibrante, con cuerpo
- Notas: Panela, frutas dulces

### 6. **Santander** (Nororiente)
- Altitud: 1,400 - 2,000 msnm
- Perfil: Herbal, floral
- Notas: Hierbas, limón

## 🖼️ Imágenes Utilizadas

Todas las imágenes provienen de **Unsplash** con licencia gratuita:

### Regiones
- Eje Cafetero: Plantación tropical
- Antioquia: Montañas cafeteras
- Huila: Paisaje montañoso
- Nariño: Cultivo de altura
- Tolima: Plantación cafetera
- Santander: Paisaje natural

### Galería
- Plantación
- Recolección manual
- Secado al sol
- Granos tostados
- Taza de café
- Paisaje cafetero

## 🎨 Paleta de Colores

```css
--color-primary: #4a2c2a      /* Café oscuro */
--color-secondary: #8b5a3c    /* Café mediano */
--color-accent: #d4a574       /* Dorado café */
--color-light: #f4e8d8        /* Crema clara */
--color-cream: #faf6f0        /* Crema background */
--color-dark: #2c1810         /* Marrón oscuro */
--color-green: #5a7a52        /* Verde tierra */
```

## 📱 Responsividad

- **Desktop**: Grid de 3 columnas para regiones
- **Tablet**: Grid de 2 columnas
- **Mobile**: Grid de 1 columna
- Navegación oculta en móviles (puede mejorarse con menú hamburguesa)

## ⚙️ Variables Utilizadas

### CSS Custom Properties
- Colores: 9 variables
- Tipografía: 3 familias de fuentes
- Espaciado: 5 niveles (xs a xl)
- Sombras: 3 intensidades

### JavaScript
- `regionsData`: Objeto con datos de 6 regiones
- `galleryData`: Array con datos de galería
- `currentGalleryIndex`: Índice actual de galería
- `selectedCoffee`: Café seleccionado
- `currentRegion`: Región actual

## 🔧 Modificaciones Recientes

### CSS
- Todas las imágenes reemplazadas con URLs de Unsplash
- Agregados estilos de sombra y transición
- Optimizados breakpoints responsivos

### JavaScript
- Implementadas 10+ funciones interactivas
- Gestión completa de modales
- Validación de formularios
- Animaciones de números

## 📞 Información de Contacto

- **Email**: jesusmanuelserpa23@gmail.com
- **Teléfono**: +57 323 746 8514
- **Ubicación**: MONTERÍA, CÓRDOBA, COLOMBIA

## 📄 Licencia

Este proyecto es de demostración educativa. Las imágenes utilizadas son de Unsplash (licencia gratuita).

## 👨‍💻 Autor

Desarrollado como proyecto de sitio web editorial para celebrar la excelencia del café colombiano.

---

**¡Disfruta explorando el tesoro del café colombiano! ☕**
