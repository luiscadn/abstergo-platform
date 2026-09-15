# Abstergo — Clinical Web Architecture

> Arquitectura e ingeniería web de alta conversión para medicina estética, cirugía plástica y clínicas de alta gama orientadas a la captación internacional y turismo médico.

---

## 🏛️ Descripción General

**Abstergo** es una plataforma monorepo desarrollada para consultorios boutique y centros quirúrgicos especializados. Resuelve la fricción entre la pauta publicitaria en redes sociales (**Meta Ads: Instagram y Facebook**) y la conversión efectiva en citas privadas de valoración.

### Diferenciales Clave
* **Carga Sub-Segundo (< 1.0s):** Optimizada para el navegador integrado (*in-app browser*) de Instagram y conexiones móviles 4G.
* **Estética *Clinical Luxury*:** Diseño sobrio, minimalista e hiper-pulido con códigos de hospitalidad suiza que justifican tarifas de alto ticket ($3,000 – $8,000 USD).
* **Triaje Inteligente & Trazabilidad UTM:** Captura automática de `utm_source`, `utm_campaign`, `fbclid` y referrers de redes, conectándolos directamente con WhatsApp Business con códigos de atribución.
* **Bilingüe Nativo:** Soporte simultáneo en Español (`/es`) e Inglés (`/en`) mediante `next-intl` con enrutamiento dinámico y cero recargas.
* **Escaparate de Instalaciones Certificadas:** Módulos fotográficos de alta resolución con visor modal interactivo (Lightbox) para consultorios Nivel 1, cabinas Nivel 3 y suites estéticas.

---

## 🏗️ Estructura del Proyecto (Monorepo)

```text
abstergo-platform/
├── frontend/             # Aplicación web bilingüe en Next.js 16 (App Router)
│   ├── messages/         # Diccionarios de traducción (es.json, en.json)
│   ├── public/images/    # Fotografías clínicas y suites médicas en alta resolución
│   └── src/
│       ├── app/          # Layout y páginas con rutas [locale]
│       ├── components/   # Navbar, Hero, ClinicSpaces, Comparison, Features, Contact, Footer
│       └── hooks/        # useUtmTracking para atribución de pauta Meta Ads
│
├── backend/              # API REST de servicios clínicos y triaje en NestJS 11
│   ├── src/              # Módulos, controladores y servicios
│   └── test/             # Pruebas unitarias y e2e (Jest)
│
└── docker-compose.yml    # Contenedor de base de datos PostgreSQL 16
```

---

## 🚀 Puesta en Marcha Local

### Prerrequisitos
* Node.js v20+ o v24+
* [pnpm](https://pnpm.io/) (`corepack enable` o `npm i -g pnpm`)
* Docker & Docker Compose

### 1. Iniciar la Base de Datos (PostgreSQL)
```bash
docker compose up -d
```

### 2. Iniciar el Backend (NestJS)
```bash
cd backend
pnpm install
pnpm start:dev
```
> Disponible en: `http://localhost:3000`

### 3. Iniciar el Frontend (Next.js)
En una nueva terminal:
```bash
cd frontend
pnpm install
pnpm dev
```
> Disponible en: `http://localhost:3000/es` (o puerto asignado si el backend está en 3000).

---

## 🌐 Despliegue a Producción

* **Frontend:** Desplegable en **Vercel** en un clic conectando este repositorio y seleccionando `Root Directory: frontend`.
* **Backend:** Desplegable en **Railway** o **Render** seleccionando `Root Directory: backend`.
* **Base de Datos:** PostgreSQL administrado en **Supabase** o **Neon.tech**.

---

## 📄 Licencia

Desarrollado bajo principios de confidencialidad y grado clínico para el ecosistema de salud y medicina estética.
