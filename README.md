# Project Setup

This project was built using **React, Vite, Tailwind CSS, SVGR, and TypeScript**. The combination of these tools provides a modern development workflow, clean styling, and a scalable, maintainable codebase.

---

## 🛠 Tech Choices & Why

- **React + Vite**  
  Vite gives a super fast dev server and build process compared to older setups like CRA or Webpack. Combined with React, it provides a modern and efficient environment with hot reloading and easy project structure.

- **Tailwind CSS**  
  Utility-first styling keeps components consistent and responsive without writing long custom CSS files. It also speeds up prototyping while maintaining a design system.

- **SVGR**  
  Used to import SVG files directly as React components. This allows icons and graphics to be styled and reused easily with props or Tailwind classes, instead of treating them only as static assets.

- **TypeScript**  
  Adds type safety, catches errors early, and makes the project easier to scale and maintain. It also improves the developer experience with autocomplete and inline documentation.

---

## 🚀 Getting Started

1. Clone the repo:

   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Preview the build:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
src/
 ├── assets/        # SVGs, images
 ├── components/    # Reusable React components
 ├── App.tsx        # Main app entry
 ├── main.tsx       # Vite + React entry
 └── index.css      # Tailwind styles
```

---

## ⚡ Notes

- SVGs under `src/assets` can be imported either as React components (via SVGR) or as image URLs depending on size and usage.
- Tailwind config can be extended for custom colors, spacing, and typography.
- TypeScript ensures safer props, state, and component reuse.
