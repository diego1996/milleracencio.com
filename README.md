# 🚀 Sitio Web Portafolio - Psicólogo SG-SST

Un sitio web moderno y profesional para un psicólogo especialista en SG-SST (Sistema de Gestión en Seguridad y Salud en el Trabajo), exfuncionario del INPEC y docente universitario.

## ✨ Características Principales

### 🎨 Diseño Moderno
- **Diseño responsive** que se adapta a todos los dispositivos
- **Animaciones suaves** con Framer Motion
- **Gradientes y efectos visuales** modernos
- **Tipografía profesional** con Inter y Merriweather
- **Paleta de colores** personalizada y coherente

### 🛠️ Funcionalidades
- **Navegación fluida** con scroll suave
- **Formularios de contacto** con validación
- **Sección de servicios** con precios
- **Timeline de experiencia** profesional
- **Tienda de cursos online** con e-commerce
- **Blog integrado** (preparado para CMS)
- **Botones flotantes** para WhatsApp y chat IA
- **Chat IA integrado** con webhook n8n
- **SEO optimizado** con metadatos completos

### 💼 Secciones del Sitio
1. **Hero Section** - Presentación impactante con estadísticas
2. **Servicios** - 6 servicios principales con precios
3. **Experiencia** - Timeline profesional + certificaciones
4. **Cursos Online** - E-commerce para formación
5. **Contacto** - Formulario funcional + información
6. **Footer** - Enlaces útiles + newsletter

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconografía moderna

### Backend & Integraciones
- **Stripe** - Procesamiento de pagos online
- **Resend** - Envío de emails transaccionales
- **n8n** - Automatización y webhooks para chat IA
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **React Hot Toast** - Notificaciones

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/psicologo-sg-sst-portfolio.git
cd psicologo-sg-sst-portfolio
```

### 2. Instalar dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Stripe (para pagos online)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# Resend (para emails)
RESEND_API_KEY=re_...

# n8n Webhook (para chat IA)
N8N_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook/chat

# URLs del sitio
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en `http://localhost:3000`

### 5. Construir para producción
```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección hero
│   ├── Services.tsx         # Servicios ofrecidos
│   ├── Experience.tsx       # Experiencia profesional
│   ├── Courses.tsx          # Cursos online
│   ├── Contact.tsx          # Formulario de contacto
│   └── Footer.tsx           # Pie de página
├── public/                  # Archivos estáticos
├── styles/                  # Estilos adicionales
└── package.json
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... más tonos
    900: '#0c4a6e',
  },
  secondary: {
    // Colores secundarios
  },
  accent: {
    // Colores de acento
  }
}
```

### Contenido
- **Servicios**: Editar en `components/Services.tsx`
- **Experiencia**: Modificar en `components/Experience.tsx`
- **Cursos**: Actualizar en `components/Courses.tsx`
- **Contacto**: Cambiar información en `components/Contact.tsx`

### Imágenes
- Reemplazar URLs de imágenes en los componentes
- Usar imágenes optimizadas (WebP recomendado)
- Mantener proporciones consistentes

### Botones Flotantes
El sitio incluye tres botones flotantes que aparecen al hacer scroll:
- **WhatsApp**: Abre chat directo con número configurado
- **Chat IA**: Modal con asistente virtual conectado a n8n
- **Scroll to Top**: Regresa al inicio de la página

**Configuración:**
- Editar número de WhatsApp en `components/FloatingButtons.tsx`
- Configurar webhook de n8n en variables de entorno
- Personalizar respuestas de fallback en `app/api/chat/route.ts`

## 🔧 Configuración de Integraciones

### Stripe (Pagos Online)
1. Crear cuenta en [Stripe](https://stripe.com)
2. Obtener claves API (test y live)
3. Configurar webhooks para confirmación de pagos
4. Implementar lógica de checkout en `components/Courses.tsx`

### Resend (Emails)
1. Registrarse en [Resend](https://resend.com)
2. Verificar dominio de email
3. Obtener API key
4. Configurar templates de email

### n8n (Chat IA)
1. Configurar instancia de [n8n](https://n8n.io)
2. Crear workflow para procesar mensajes del chat
3. Configurar webhook endpoint
4. Agregar variable de entorno `N8N_WEBHOOK_URL`
5. El chat incluye respuestas de fallback si n8n no está disponible

### CMS (Opcional)
Para gestionar contenido dinámicamente:
- **Sanity.io** - CMS headless recomendado
- **Strapi** - CMS open source
- **Contentful** - CMS empresarial

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

### Netlify
1. Conectar repositorio a Netlify
2. Configurar build settings
3. Agregar variables de entorno

### Otros
- **AWS Amplify**
- **Google Cloud Run**
- **DigitalOcean App Platform**

## 📊 SEO y Performance

### SEO Optimizado
- Meta tags completos
- Open Graph tags
- Twitter Cards
- Sitemap automático
- Robots.txt

### Performance
- Imágenes optimizadas con Next.js Image
- Lazy loading de componentes
- Code splitting automático
- Bundle analyzer incluido

## 🔒 Seguridad

- Validación de formularios con Zod
- Sanitización de inputs
- HTTPS obligatorio en producción
- Headers de seguridad configurados

## 📈 Analytics (Opcional)

Agregar Google Analytics o Plausible:
```javascript
// En _app.tsx o layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- Email: soporte@tu-dominio.com
- WhatsApp: +57 300 123 4567
- Documentación: [docs.tu-dominio.com](https://docs.tu-dominio.com)

---

**¡Disfruta creando un sitio web profesional y moderno para tu negocio! 🎉** 