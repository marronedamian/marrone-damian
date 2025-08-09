
# Portfolio – [Damian Marrone](https://damianmarrone.com/)

Este proyecto es un **portfolio minimalista y responsive** desarrollado con **Next.js (App Router)**, **Tailwind CSS** y **Framer Motion**.  
Incluye un diseño moderno con efectos glassmorphism, acentos en `#6D53F4`, animaciones suaves y una estructura modular fácil de personalizar.

---

## 🚀 Características
- **Diseño responsive** optimizado para mobile y desktop.
- **Hero Section** con imagen de fondo, overlay y texto destacado.
- Secciones de:
  - Habilidades (Skills)
  - Experiencia (Timeline)
  - Proyectos (Cards)
  - Educación
  - Contacto
- **Navbar flotante** y footer.
- Animaciones con **Framer Motion**.
- Datos centralizados en `lib/data/cv.ts`.

---

## 📂 Estructura de carpetas

```
portfolio/
│
├── app/
│   ├── globals.css        # Estilos globales Tailwind
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│
├── components/            # Componentes UI
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── Timeline.tsx
│   ├── SkillsCloud.tsx
│   ├── Card.tsx
│   ├── Navbar.tsx
│   ├── Contact.tsx
│
├── lib/data/cv.ts         # Datos del portfolio (editable)
│
├── public/images/         # Carpeta para tus imágenes
│
├── tailwind.config.ts     # Configuración Tailwind
├── package.json           # Dependencias
└── README.md              # Este archivo
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio o descomprimir el ZIP.
2. Instalar dependencias:
```bash
npm install
```
3. Levantar el servidor de desarrollo:
```bash
npm run dev
```
4. Abrir en el navegador:
```
http://localhost:3000
```

---

## 🖼️ Cambiar la imagen de fondo del Hero
1. Colocar tu imagen en `public/images/bg.jpg` (o el nombre que quieras).
2. En `components/Hero.tsx`, modificar:
```tsx
<section
  className="relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/images/bg.jpg')" }}
>
```
3. Guardar y recargar.

---

## 🎨 Personalización rápida
- **Colores:** editar en `tailwind.config.ts`.
- **Datos personales:** modificar `lib/data/cv.ts`.
- **Animaciones:** se configuran en cada componente que usa `framer-motion`.

---

## 📄 Licencia
Este proyecto es libre para uso personal y educativo.  
Si lo usas, agradecería la mención a [Damian Marrone](https://www.linkedin.com/in/damian-marrone/).
