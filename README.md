## NOTES

### 1. What to Edit, Where, and For What

Thanks to the decoupled design, you do not need to rewrite any complex layout code to update your portfolio. You only need to touch three areas: **Data**, **Static Assets**, and **Global Metadata**.

| Target File / Folder | What It Is | What to Edit / Add | Purpose |
| :--- | :--- | :--- | :--- |
| **`src/data.ts`** | Your local portfolio database. | Edit the text placeholders, lists, and tool tags inside the `PORTFOLIO_DATA` object. | This updates almost **95% of your website's text content** (Name, Statement, Experiences, Capstones, Skills, Emails, and Links) without modifying any design structures. |
| **`public/`** | The public directory. Any file placed here is statically served at the root URL. | **1.** Put your PDF resume here and name it **`resume.pdf`**.<br>**2.** Put your project images or technical drawings here (e.g., `bridge.jpg`, `plan.png`). | **1.** Ensures the "DOWNLOAD CV" buttons point directly to your actual CV.<br>**2.** Allows you to map those files in `data.ts` (e.g., mapping `image: "/bridge.jpg"`). |
| **`src/app/layout.tsx`** | The global layout wrapper. | Change the `title` and `description` inside the `metadata` block at the top of the file. | This changes the text that appears on the browser tab (e.g., "[Your Name] \| Civil Engineering Portfolio") and how your site is summarized on search engines or when shared on LinkedIn. |
| **`src/app/favicon.ico`** | The website tab icon. | Replace this file with your own `.ico` file (like a mini monogram or structural icon). | Replaces the default Next.js tab logo with your own personal icon. |

*Note: All of your visual components (`Hero.tsx`, `Projects.tsx`, etc.) are written dynamically. They read your inputs from `src/data.ts` instantly, meaning those layout files are completely hands-off unless you want to physically alter the page layout itself.*

---

### 2. Where to Edit Design, Colors, and Page Structure

If you want to alter the visual appearance, change colors, or adjust structural layouts, here is where those rules live:

#### A. Global Colors, Fonts, & Grid Aesthetics (`src/app/globals.css`)
Because we configured Tailwind CSS v4, your entire design system variables live inside the `@theme` block at the top of `src/app/globals.css`:

* **Color Palette:**
  * To change the paper background color: edit `--color-paper` or `--color-paper-dark`.
  * To change the text or border color: edit `--color-graphite` or `--color-graphite-light`.
  * To change the primary accent color: edit `--color-blueprint`.
  * To change the secondary safety accent: edit `--color-safety`.
* **Grid Pattern & Borders:** 
  * To make the background drafting grid lighter, darker, or change its spacing, edit the `background-size` or line opacity inside the `body` selector.
  * To change the default border line color, edit the `@utility structural-border` rule at the bottom of `globals.css`.

#### B. Component Layouts & Design Elements (`src/components/`)
If you want to change how a specific section is arranged (e.g., changing the grid columns, adjusting typography size, adding new icons):
* **Header & Sticky Nav:** Edit `src/components/Navbar.tsx`
* **Hero Title Block:** Edit `src/components/Hero.tsx`
* **Experience Table:** Edit `src/components/Experience.tsx`
* **Project Display Grid:** Edit `src/components/Projects.tsx`
* **Education & Skills Table:** Edit `src/components/Credentials.tsx`
* **Footer Title Block:** Edit `src/components/Footer.tsx`

#### C. Section Order & Overall Page Structure (`src/app/page.tsx`)
If you want to reorder sections (e.g., move Projects above Experience) or remove a section entirely, edit `src/app/page.tsx`. It acts as the assembly line for your home page:

```tsx
export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Experience /> {/* Swap order here if desired */}
      <Projects />
      <Credentials />
      <Footer />
    </main>
  );
}
```