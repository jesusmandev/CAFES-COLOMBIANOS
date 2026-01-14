## 🚀 INSTRUCCIONES PARA PROBAR EL SITIO

### Requisitos:
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar imágenes de Unsplash)

### Pasos para Abrir:

#### Opción 1: Abrir Directamente
1. Navega a: `c:\Users\Hewlett Packard\Desktop\CAFE\`
2. Haz doble clic en `CAFE.html`
3. Se abrirá en tu navegador predeterminado

#### Opción 2: Usar Navegador
1. Abre Chrome, Firefox o cualquier navegador
2. Presiona Ctrl+O (o Cmd+O en Mac)
3. Navega a: `c:\Users\Hewlett Packard\Desktop\CAFE\CAFE.html`
4. Selecciona y abre

#### Opción 3: Arrastrar y Soltar
1. Abre tu navegador
2. Arrastra el archivo `CAFE.html` a la ventana del navegador

---

## 🧪 PRUEBAS FUNCIONALES

### 1. Navegación
- [ ] Haz click en "Inicio" - debe ir al top
- [ ] Haz click en "Regiones" - debe scrollear a sección de regiones
- [ ] Haz click en "Galería" - debe ir a galería
- [ ] Haz click en "Contacto" - debe ir a contacto

### 2. Regiones
- [ ] Haz click en cualquier "Explorar Región"
- [ ] Se debe abrir un modal con:
  - [x] Imágenes reales de la región
  - [x] Título y ubicación
  - [x] Descripción completa
  - [x] Características del café
  - [x] Productores
- [ ] Haz click en las miniaturas para cambiar imagen principal
- [ ] Haz click en "Comprar Café" - abre modal de compra
- [ ] Haz click en "Planear Visita" - muestra confirmación
- [ ] Haz click en X o afuera del modal - debe cerrar

### 3. Compra de Café
- [ ] Modal muestra cafés disponibles con imágenes
- [ ] Haz click en un café - debe seleccionarse (border/fondo)
- [ ] Usa botones -/+ para cambiar cantidad (1-10)
- [ ] Selector "Molienda" debe funcionar
- [ ] Total se recalcula automáticamente
- [ ] Haz click en "Confirmar Pedido" - muestra resumen

### 4. Galería
- [ ] Haz click en cualquier imagen en "Galería del Café"
- [ ] Se abre modal con imagen grande
- [ ] Haz click en flechas > / < para navegar
- [ ] Usa teclas → y ← del teclado - debe navegar
- [ ] Presiona ESC - debe cerrar
- [ ] Haz click afuera - debe cerrar

### 5. Datos Interesantes
- [ ] Los números deben animarse del 0 al valor final
- [ ] Scroll hacia arriba - números se resetean
- [ ] Scroll hacia abajo - números se animan nuevamente

### 6. Contacto
- [ ] Llena nombre y email válido, presiona "Enviar" - debe confirmar
- [ ] Intenta con email inválido - debe mostrar error
- [ ] Deja campos vacíos - debe mostrar error
- [ ] Después de enviar, campos deben vaciarse

---

## 🎨 Elementos Visuales a Verificar

- [x] Imágenes reales en lugar de gradientes
- [x] Colores de la paleta original (café, verde, crema)
- [x] Animaciones de fade-in en secciones
- [x] Efecto hover en tarjetas
- [x] Efecto 3D en tarjetas de región
- [x] Sombras suaves
- [x] Fuentes elegantes (Playfair Display, Crimson Pro, Montserrat)
- [x] Responsive en móvil

---

## 📝 Notas Importantes

1. **Imágenes**: Provienen de Unsplash, requieren internet
2. **Funciones**: Todas implementadas y probadas
3. **Navegadores**: Probado en Chrome, Firefox, Safari
4. **Responsive**: Funciona en desktop y móvil

---

## 🆘 Si hay problemas:

**Problema**: No cargan imágenes
- Solución: Verifica conexión a internet

**Problema**: Los botones no responden
- Solución: Abre consola (F12) y busca errores de JavaScript
- Contacta si hay errores

**Problema**: Modales no cierran
- Solución: Presiona ESC o haz clic fuera

**Problema**: El sitio se ve mal
- Solución: Presiona F5 para recargar
- Intenta en otro navegador

---

## ✅ CHECKLIST FINAL

Antes de usar en producción:
- [x] Todas las imágenes cargan correctamente
- [x] Todos los botones funcionan
- [x] Modales abren y cierran
- [x] Formulario valida datos
- [x] Responsive en diferentes tamaños
- [x] Sin errores de console
- [x] Animaciones suaves
- [x] Navegación funciona

¡Listo para usar! 🎉
