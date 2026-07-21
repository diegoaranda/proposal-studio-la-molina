# Proposal Studio v1 — La Molina Florería

Propuesta digital interactiva para La Molina Florería, construida con Next.js 16, React 19 y Tailwind CSS 4.

## Requisitos

- Node.js 20 o superior.
- npm 10 o superior.

## Instalación local

```bash
npm install
cp .env.example .env.local
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Requerida en producción | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sí | URL pública completa del despliegue, sin rutas adicionales. Se utiliza como base para metadata y Open Graph. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Recomendada | Correo que recibirá el CTA “Quiero comenzar”. Si no se configura, se utiliza `diaran_2222@outlook.com`. |

Ejemplo:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_CONTACT_EMAIL=correo@tu-dominio.com
```

No se deben versionar archivos `.env.local` ni otras credenciales locales.

## Comandos de validación

```bash
npm run lint
npm run typecheck
npm run build
```

Para ejecutar localmente el build de producción:

```bash
npm run start
```

## Despliegue en Vercel

1. Importar el repositorio desde GitHub en Vercel.
2. Mantener el framework detectado como Next.js y usar los comandos predeterminados.
3. Configurar `NEXT_PUBLIC_SITE_URL` con la URL pública definitiva.
4. Configurar `NEXT_PUBLIC_CONTACT_EMAIL` si el correo de contacto será diferente al valor predeterminado.
5. Ejecutar el despliegue y verificar la página principal, el favicon, la imagen Open Graph y los CTA de correo y WhatsApp.

La propuesta está configurada con `robots.index` y `robots.follow` desactivados para mantener el enlace fuera de buscadores. Cambiar esa decisión únicamente si la propuesta debe indexarse públicamente.
