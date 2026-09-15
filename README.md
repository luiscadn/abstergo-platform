# Abstergo — Clinical Web Architecture

> Arquitectura e ingeniería web de alta conversión para medicina estética, cirugía plástica y clínicas de alta gama orientadas a la captación internacional y turismo médico.

---

## Descripción General

Abstergo es una plataforma desarrollada para consultorios boutique y centros quirúrgicos especializados. Resuelve la fricción entre la pauta publicitaria en Meta Ads, como Instagram o Facebook, y la conversión efectiva en citas privadas de valoración.

### Diferenciales Clave
* Carga Sub-Segundo: Velocidad menor a 1.0 segundo, optimizada para el navegador integrado de Instagram y conexiones móviles 4G.
* Estética Clinical Luxury: Diseño sobrio, minimalista e hiper-pulido con códigos de hospitalidad suiza que justifican tarifas de alto ticket entre 3.000 y 8.000 USD.
* Triaje Inteligente y Trazabilidad UTM: Captura automática de parámetros de campaña y referrers de redes, conectándolos directamente con WhatsApp Business mediante códigos de atribución.
* Bilingüe Nativo: Soporte simultáneo en Español e Inglés mediante next-intl con enrutamiento dinámico y cero recargas.
* Escaparate de Instalaciones Certificadas: Módulos fotográficos de alta resolución con visor modal interactivo para consultorios Nivel 1, cabinas Nivel 3 y suites estéticas.

---

## Estructura del Monorepo

```text
abstergo-platform/
├── frontend/             # Aplicación web bilingüe en Next.js 16 con App Router
│   ├── messages/         # Diccionarios de traducción es.json y en.json
│   ├── public/images/    # Fotografías clínicas y suites médicas en alta resolución
│   └── src/
│       ├── app/          # Layout y páginas con rutas por idioma
│       ├── components/   # Navbar, Hero, ClinicSpaces, Comparison, Features, Contact, Footer
│       └── hooks/        # useUtmTracking para atribución de pauta Meta Ads
│
├── backend/              # API REST de servicios clínicos y triaje en NestJS 11
│   ├── src/              # Módulos, controladores y servicios
│   └── test/             # Pruebas unitarias y e2e con Jest
│
└── docker-compose.yml    # Contenedor de base de datos PostgreSQL 16
```

---

## Puesta en Marcha Local

### Prerrequisitos
* Node.js v20 o superior
* pnpm, activable con corepack enable o mediante npm i -g pnpm
* Docker y Docker Compose

### 1. Iniciar la Base de Datos PostgreSQL
```bash
docker compose up -d
```

### 2. Iniciar el Backend NestJS
```bash
cd backend
pnpm install
pnpm start:dev
```
> Disponible en: http://localhost:3000

### 3. Iniciar el Frontend Next.js
En una nueva terminal:
```bash
cd frontend
pnpm install
pnpm dev
```
> Disponible en: http://localhost:3000/es, o el puerto asignado si el backend ocupa el 3000.

---

## Despliegue a Producción

* Frontend: Desplegable en Vercel en un clic conectando este repositorio y seleccionando la carpeta frontend como directorio raíz.
* Backend: Desplegable en Railway o Render seleccionando la carpeta backend.
* Base de Datos: PostgreSQL administrado en Supabase o Neon.

---

## Licencia

Desarrollado bajo principios de confidencialidad y grado clínico para el ecosistema de salud y medicina estética.
