# Portfolio Refactor — CV 2025 Alignment

## Goal

Update the portfolio content to match the current CV (2025) and remove all dead code (blog, projects pages) that is not in use.

## Scope

Two active pages: **Home** (`/`) and **About** (`/about`). No new pages. Minimal styling change limited to adding a scroll container for the experience timeline. All other styling remains unchanged.

## 1. Home Page (`src/pages/index.astro`)

### Hero Text

Replace current intro with:

> "Hello, I'm Oriol. I'm an Engineering Manager & Software Engineer living in Zürich. With 10+ years of experience building scalable systems and leading high-performing teams."

### Skills List

Replace current list with:

- Java & Kotlin Development
- Cloud & Microservices Architecture
- Engineering Leadership
- DevOps & CI/CD
- Web Application Development

### Cleanup

Remove commented-out code (lines 69-72 referencing Projects and Writings components).

## 2. About Page (`src/pages/about.astro`)

### PageHeading Description

Replace the `description` prop of the `PageHeading` component with the updated CV summary:

> Detail-oriented Software Engineer with a strategic and pragmatic approach to driving project success and ensuring client satisfaction. With over 10 years of experience in designing and developing large-scale cloud-based technology solutions, I bring a strong technical foundation combined with proven leadership in delivering impactful results.

### Short Bio Section

Keep the current personal/hobbies paragraph as-is (basketball, biking, surfing, skiing, cars). Update the location reference: replace "Barcelona" references with "Switzerland" where applicable (current text already mentions Switzerland, so no change needed).

### Experience Timeline

Update `src/collections/experiences.json` with all 8 positions from the CV (canonical dates from PDF):

Date format: use full month names consistently (matching existing `experiences.json` convention).

1. **Natwest Group** — Senior Software Engineer (April 2025 – Present)
   - Description: "Led the design and development of a modular microservices-based API platform. Delivered scalable solutions on AWS using Docker and Kubernetes, integrating Kafka for streaming and applying DevOps best practices."
   - Logo: `natwest.ico`

2. **Beyond Beauty Club** — Senior Software Engineer (September 2023 – February 2025)
   - Description: "Led a team to develop and deploy a multi-level marketing mobile application growing to +20,000 users and 5 countries in six months. Implemented robust data management strategies including database optimisation and caching."
   - Logo: `bbc.ico` (existing)

3. **WOW Concept** — Head of Engineering (January 2023 – September 2023)
   - Description: "Ensured compliance with software development methodology and SDLC. Managed software development projects and designed strategies for future development based on company objectives."
   - Logo: `wow.ico` (existing)

4. **SEAT:CODE** — Engineering Manager (August 2020 – January 2023)
   - Description: "Coordinated the product roadmap between legacy and cloud-based products. Managed a team of 12 engineers responsible for mentorship, growth, and performance evaluation."
   - Logo: `code.ico` (existing)

5. **Roche Diagnostics** — Senior Software Engineer (May 2018 – August 2020)
   - Description: "Built solutions for Medical Diagnostics Software using Java, Spring Boot, Angular and React. Hexagonal Architecture with Domain-Driven Design structured in Microservices."
   - Logo: `roche.ico` (existing)

6. **Alemany Informatica** — Senior Software Engineer (February 2016 – May 2018)
   - Description: "Built technical solutions and completed projects to budgetary and quality requirements. Involved in requirements gathering, demonstrating software prototypes, and customer training."
   - Logo: `alemany.ico` (new — download favicon from company website or use placeholder)

7. **SII Concatel** — Software Engineer (March 2015 – February 2016)
   - Description: "Developed web and Android applications using Javascript, JQuery, Spring Security, Spring MVC, and Hibernate inside the Scrum team."
   - Logo: `sii.ico` (new — download favicon from company website or use placeholder)

8. **Accenture** — System Analyst (February 2013 – March 2015)
   - Description: "Worked with the financial risk team of Banc Sabadell. Developed with SQL Server, Oracle, C#, Java, Matlab and financial applications."
   - Logo: `accenture.ico` (new — download favicon from company website or use placeholder)

### Scroll Container

Add Tailwind utility classes `max-h-[600px] overflow-y-auto` directly on the experience list container div (currently `div.px-5.py-10`). This shows approximately 3-4 entries before scrolling.

### Experience Loop Logic

Update the hardcoded conditional in `about.astro` (currently `loop == 0 || loop == 1 || loop == 2`) to use dynamic logic: `loop < experiences.length - 1`. This ensures all entries except the last one render with the `border-l` connector line.

### Separator Component

The `about.astro` page imports `Separator` from `src/components/home/separator.astro` (line 6, used at line 68). Since `separator.astro` is being deleted:

1. Remove the `Separator` import (line 6)
2. Replace the **entire block** on lines 67-69 (the outer `<a>` wrapper + `<Separator>`) with a single `<Button text="More in my resume" link="/OriolSubiranaCV2025.pdf" />`. The `Button` component already renders its own `<a>` tag internally, so the outer wrapper must be removed to avoid invalid nested `<a>` tags.

### Company Logos

New logo files needed in `public/assets/images/experiences/`:
- `natwest.ico` — 32x32 minimum, .ico or .png format
- `alemany.ico` — 32x32 minimum, .ico or .png format
- `sii.ico` — 32x32 minimum, .ico or .png format
- `accenture.ico` — 32x32 minimum, .ico or .png format

Source from company website favicons. The `about-experience.astro` component renders logos at `w-8 h-8` (32x32px).

## 3. Dead Code Removal

### Pages to delete

- `src/pages/projects.astro`
- `src/pages/posts.astro`
- `src/pages/post/[slug].astro`

### Components to delete

- `src/components/project.astro`
- `src/components/posts-loop.astro`
- `src/components/home/projects.astro`
- `src/components/home/writings.astro`
- `src/components/home/separator.astro`

### Content collections to delete

- `src/content/` (entire directory — including `config.js` and all 15 markdown files in `post/`)

### Layouts to delete

- `src/layouts/post.astro`

### Data files to delete

- `src/collections/projects.json`

### Public assets to delete

- `public/assets/images/projects/` (directory, if it exists)

### Typography plugin cleanup

- Remove `@tailwindcss/typography` from `tailwind.config.mjs` plugins array
- Remove `@tailwindcss/typography` devDependency from `package.json`
- Remove any `.prose`-related CSS rules from `src/assets/css/main.css` if present

## 4. Files to Keep (no changes unless specified above)

- `src/layouts/main.astro`
- `src/components/header.astro`
- `src/components/footer.astro`
- `src/components/logo.astro`
- `src/components/button.astro`
- `src/components/page-heading.astro`
- `src/components/about-experience.astro`
- `src/components/square.astro`, `square-line.astro`, `square-lines.astro`
- `src/assets/css/main.css`
- `src/assets/js/main.js`
- `src/collections/menu.json`
- `astro.config.mjs`
- All profile photos and favicon

## 5. Configuration

- **`src/collections/menu.json`**: No changes (already Home + About only)
- **`astro.config.mjs`**: No changes
- **`package.json`**: Remove `@tailwindcss/typography` devDependency
- **`tailwind.config.mjs`**: Remove typography plugin

## Out of Scope

- Visual/styling redesign (beyond scroll container)
- New pages (Education, Languages)
- Blog reactivation
- Projects page reactivation
- Deployment changes
