# Portfolio Refactor — CV 2025 Alignment Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Astro portfolio to match the 2025 CV and remove all dead code (blog, projects).

**Architecture:** Two-page Astro static site (Home + About) with Tailwind CSS. Content lives in JSON data files and inline Astro templates. No framework changes — only content updates and file deletions.

**Tech Stack:** Astro 4.x, Tailwind CSS 3.x, TypeScript, Netlify adapter

**Spec:** `docs/superpowers/specs/2026-03-16-portfolio-refactor-design.md`

---

## Chunk 1: Content Updates

### Task 1: Update Home Page Hero and Skills

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Update hero text**

In `src/pages/index.astro`, replace the `<h1>` and intro `<p>` content (lines 15-21):

```astro
        <h1
          class="mb-5 text-4xl font-bold leading-tight md:text-4xl lg:text-6xl dark:text-white"
        >
          Hello, I'm Oriol.
        </h1>
        <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
          I'm an Engineering Manager & Software Engineer living in Zürich. <br
            class="hidden lg:block"
          />With 10+ years of experience building scalable systems and leading high-performing teams.
        </p>
```

- [ ] **Step 2: Update skills list**

Replace the skills `<ul>` content (lines 26-32):

```astro
          <li>Java & Kotlin Development</li>
          <li>Cloud & Microservices Architecture</li>
          <li>Engineering Leadership</li>
          <li>DevOps & CI/CD</li>
          <li>Web Application Development</li>
```

- [ ] **Step 3: Remove commented-out code**

Delete the commented-out block at the bottom of the file (lines 69-72):

```astro
  <!-- <Separator text="Check out my projects" />
  <Projects />
  <Separator text="Some of my writing" />
  <Writings />-->
```

- [ ] **Step 4: Verify Home page renders**

Run: Open `http://localhost:3001/` in browser.
Expected: Updated hero text, updated skills list, no errors in terminal.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: update home page hero and skills to match CV 2025"
```

---

### Task 2: Update Experiences Data

**Files:**
- Modify: `src/collections/experiences.json`

- [ ] **Step 1: Replace experiences.json with all 8 CV positions**

Overwrite `src/collections/experiences.json` with:

```json
[
	{
		"dates": "April 2025 · Present",
		"role": "Senior Software Engineer",
		"company": "Natwest Group",
		"description": "Led the design and development of a modular microservices-based API platform. Delivered scalable solutions on AWS using Docker and Kubernetes, integrating Kafka for streaming and applying DevOps best practices.",
		"logo": "/assets/images/experiences/natwest.ico"
	},
	{
		"dates": "September 2023 · February 2025",
		"role": "Senior Software Engineer",
		"company": "Beyond Beauty Club",
		"description": "Led a team to develop and deploy a multi-level marketing mobile application growing to +20,000 users and 5 countries in six months. Implemented robust data management strategies including database optimisation and caching.",
		"logo": "/assets/images/experiences/bbc.ico"
	},
	{
		"dates": "January 2023 · September 2023",
		"role": "Head of Engineering",
		"company": "WOW Concept",
		"description": "Ensured compliance with software development methodology and SDLC. Managed software development projects and designed strategies for future development based on company objectives.",
		"logo": "/assets/images/experiences/wow.ico"
	},
	{
		"dates": "August 2020 · January 2023",
		"role": "Engineering Manager",
		"company": "SEAT:CODE",
		"description": "Coordinated the product roadmap between legacy and cloud-based products. Managed a team of 12 engineers responsible for mentorship, growth, and performance evaluation.",
		"logo": "/assets/images/experiences/code.ico"
	},
	{
		"dates": "May 2018 · August 2020",
		"role": "Senior Software Engineer",
		"company": "Roche Diagnostics",
		"description": "Built solutions for Medical Diagnostics Software using Java, Spring Boot, Angular and React. Hexagonal Architecture with Domain-Driven Design structured in Microservices.",
		"logo": "/assets/images/experiences/roche.ico"
	},
	{
		"dates": "February 2016 · May 2018",
		"role": "Senior Software Engineer",
		"company": "Alemany Informatica",
		"description": "Built technical solutions and completed projects to budgetary and quality requirements. Involved in requirements gathering, demonstrating software prototypes, and customer training.",
		"logo": "/assets/images/experiences/alemany.ico"
	},
	{
		"dates": "March 2015 · February 2016",
		"role": "Software Engineer",
		"company": "SII Concatel",
		"description": "Developed web and Android applications using Javascript, JQuery, Spring Security, Spring MVC, and Hibernate inside the Scrum team.",
		"logo": "/assets/images/experiences/sii.ico"
	},
	{
		"dates": "February 2013 · March 2015",
		"role": "System Analyst",
		"company": "Accenture",
		"description": "Worked with the financial risk team of Banc Sabadell. Developed with SQL Server, Oracle, C#, Java, Matlab and financial applications.",
		"logo": "/assets/images/experiences/accenture.ico"
	}
]
```

- [ ] **Step 2: Download company logos for new entries**

Download favicons for the 4 new companies and save to `public/assets/images/experiences/`:

```bash
curl -L -o public/assets/images/experiences/natwest.ico "https://www.natwestgroup.com/favicon.ico"
curl -L -o public/assets/images/experiences/alemany.ico "https://www.alemanyinformatica.com/favicon.ico"
curl -L -o public/assets/images/experiences/sii.ico "https://sii-concatel.com/favicon.ico"
curl -L -o public/assets/images/experiences/accenture.ico "https://www.accenture.com/favicon.ico"
```

If any download fails, create a simple 32x32 placeholder PNG with the company initial letter. The `about-experience.astro` component renders these at `w-8 h-8` inside a 56x56 circle.

- [ ] **Step 3: Commit**

```bash
git add src/collections/experiences.json public/assets/images/experiences/
git commit -m "feat: update experiences data with all 8 CV positions and logos"
```

---

### Task 3: Update About Page

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Remove Separator import, add Button import**

In `src/pages/about.astro`, replace line 6:

Old:
```astro
import Separator from "../components/home/separator.astro";
```

New:
```astro
import Button from "../components/button.astro";
```

- [ ] **Step 2: Update PageHeading description**

Replace the `description` prop in the `PageHeading` component (line 13):

Old:
```
description="Hello 👋 I'm Oriol Subirana, an Engineering Manager from Barcelona with over a decade of experience in designing and developing scalable technology solutions. My technical expertise centers around Java, Kotlin, and the Spring framework, with strong competencies in frontend development using React and Angular. I'm also deeply passionate about fostering a DevOps culture, with a focus on automation, CI/CD, containerization, and cloud technologies."
```

New:
```
description="Detail-oriented Software Engineer with a strategic and pragmatic approach to driving project success and ensuring client satisfaction. With over 10 years of experience in designing and developing large-scale cloud-based technology solutions, I bring a strong technical foundation combined with proven leadership in delivering impactful results."
```

- [ ] **Step 3: Add scroll container and fix experience loop logic**

Replace the experience container div (line 38) to add scroll classes:

Old:
```astro
    <div class="px-5 py-10">
```

New:
```astro
    <div class="px-5 py-10 max-h-[600px] overflow-y-auto">
```

Then replace the hardcoded loop conditional (lines 43-61):

Old:
```astro
      {
        experiences.map((experience, loop) => {
          return (
            <>
              {loop == 0 || loop == 1 || loop == 2 ? (
                <div class="pb-10 border-l border-gray-200 dark:border-neutral-700">
                  <AboutExperience
                    dates={experience.dates}
                    role={experience.role}
                    company={experience.company}
                    description={experience.description}
                    logo={experience.logo}
                  />
                </div>
              ) : (
                <AboutExperience
                  dates={experience.dates}
                  role={experience.role}
                  company={experience.company}
                  description={experience.description}
                  logo={experience.logo}
                />
              )}
            </>
          );
        })
      }
```

New:
```astro
      {
        experiences.map((experience, loop) => {
          return (
            <>
              {loop < experiences.length - 1 ? (
                <div class="pb-10 border-l border-gray-200 dark:border-neutral-700">
                  <AboutExperience
                    dates={experience.dates}
                    role={experience.role}
                    company={experience.company}
                    description={experience.description}
                    logo={experience.logo}
                  />
                </div>
              ) : (
                <AboutExperience
                  dates={experience.dates}
                  role={experience.role}
                  company={experience.company}
                  description={experience.description}
                  logo={experience.logo}
                />
              )}
            </>
          );
        })
      }
```

- [ ] **Step 4: Replace Separator with Button**

Replace the entire Separator block (lines 67-69):

Old:
```astro
    <a href="/OriolSubiranaCV2025.pdf">
      <Separator text="More in my resume" link="/OriolSubiranaCV2025.pdf" />
    </a>
```

New:
```astro
    <Button text="More in my resume" link="/OriolSubiranaCV2025.pdf" />
```

- [ ] **Step 5: Verify About page renders**

Run: Open `http://localhost:3001/about` in browser.
Expected: Updated bio, 8 experience entries with scroll, Button link to CV, no errors.

- [ ] **Step 6: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: update about page with CV 2025 content, scroll container, and dynamic loop"
```

---

## Chunk 2: Dead Code Removal and Cleanup

### Task 4: Delete Dead Pages, Components, Layouts, and Content

**Files:**
- Delete: `src/pages/projects.astro`
- Delete: `src/pages/posts.astro`
- Delete: `src/pages/post/[slug].astro`
- Delete: `src/components/project.astro`
- Delete: `src/components/posts-loop.astro`
- Delete: `src/components/home/projects.astro`
- Delete: `src/components/home/writings.astro`
- Delete: `src/components/home/separator.astro`
- Delete: `src/layouts/post.astro`
- Delete: `src/collections/projects.json`
- Delete: `src/content/` (entire directory)
- Delete: `public/assets/images/projects/` (if exists)

- [ ] **Step 1: Delete dead pages**

```bash
rm src/pages/projects.astro
rm src/pages/posts.astro
rm -rf src/pages/post/
```

- [ ] **Step 2: Delete dead components**

```bash
rm src/components/project.astro
rm src/components/posts-loop.astro
rm src/components/home/projects.astro
rm src/components/home/writings.astro
rm src/components/home/separator.astro
```

- [ ] **Step 3: Delete dead layout, data, and content**

```bash
rm src/layouts/post.astro
rm src/collections/projects.json
rm -rf src/content/
rm -rf public/assets/images/projects/
```

- [ ] **Step 4: Verify build still works**

```bash
pnpm build
```

Expected: Build succeeds with no errors. Only `index.astro` and `about.astro` pages are generated.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove dead code — blog, projects, unused components and layouts"
```

---

### Task 5: Remove Typography Plugin

**Files:**
- Modify: `tailwind.config.mjs`
- Modify: `package.json`
- Modify: `src/assets/css/main.css`

- [ ] **Step 1: Remove typography plugin from Tailwind config**

In `tailwind.config.mjs`, replace line 8:

Old:
```js
	plugins: [require("@tailwindcss/typography")],
```

New:
```js
	plugins: [],
```

- [ ] **Step 2: Remove `.prose img` rule from main.css**

In `src/assets/css/main.css`, delete lines 7-9:

```css
.prose img {
  border-radius: 30px;
}
```

- [ ] **Step 3: Remove typography devDependency from package.json**

In `package.json`, delete the `@tailwindcss/typography` line from `devDependencies`:

```json
		"@tailwindcss/typography": "^0.5.13",
```

- [ ] **Step 4: Reinstall dependencies**

```bash
pnpm install
```

Expected: Lockfile updates, no errors.

- [ ] **Step 5: Verify build**

```bash
pnpm build
```

Expected: Build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.mjs src/assets/css/main.css package.json pnpm-lock.yaml
git commit -m "chore: remove unused @tailwindcss/typography plugin"
```

---

### Task 6: Final Verification

- [ ] **Step 1: Full build check**

```bash
pnpm build
```

Expected: Clean build, no warnings about missing files or components.

- [ ] **Step 2: Visual check — Home page**

Open `http://localhost:3001/`
Verify:
- Hero says "Engineering Manager & Software Engineer living in Zürich"
- Skills list has 5 items
- No commented-out sections visible
- CV download link works

- [ ] **Step 3: Visual check — About page**

Open `http://localhost:3001/about`
Verify:
- PageHeading has updated description
- 8 experience entries render with correct dates, roles, companies, descriptions
- Experience container scrolls vertically
- Border-left line connects all entries except the last
- "More in my resume" button links to PDF
- Company logos display (or placeholders for new ones)

- [ ] **Step 4: Check no dead routes exist**

Open `http://localhost:3001/projects` — should return 404.
Open `http://localhost:3001/posts` — should return 404.

- [ ] **Step 5: Final commit if any fixes needed**

If any fixes were made during verification:

```bash
git add -A
git commit -m "fix: address issues found during final verification"
```
