# Technical Handover: Blackwood Agency Site

## 1. File Structure
The project follows a standard React + Vite structure. Key directories and files in `client/src` include:

- **`src/pages/`**: Contains the main route components.
  - `Home.tsx`: Landing page.
  - `Services.tsx`: Detailed services overview.
  - `Store.tsx`: Digital product store.
  - `Contact.tsx`: Contact form and information.
  - `Demo.tsx`: Interactive demo page.
  - `NotFound.tsx`: 404 error page.

- **`src/components/`**: Reusable UI components.
  - `Navigation.tsx`: Main site navigation.
  - `Footer.tsx`: Site footer.
  - `ui/`: Shadcn UI components (buttons, cards, dialogs, etc.).

- **`src/lib/`**: Utility functions.
  - `utils.ts`: Helper functions (e.g., `cn` for class merging).
  - `seo.ts`: SEO helper utilities.

- **`src/contexts/`**: React Context providers.
  - `ThemeContext.tsx`: Manages theme state (light/dark mode).

- **`src/App.tsx`**: Main application component with routing configuration.
- **`src/main.tsx`**: Entry point rendering the React app.
- **`src/index.css`**: Global styles and Tailwind directives.

## 2. Supabase Setup
**Status:** Not Configured.

- There is currently **no Supabase client initialization** found in the codebase.
- No `supabaseClient.ts` file exists in `src/lib/` or elsewhere.
- No Supabase-related environment variables are currently set.

**Action Required:** The new developer will need to:
1.  Install the Supabase client: `npm install @supabase/supabase-js`
2.  Create `src/lib/supabaseClient.ts` to initialize the client.
3.  Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the environment variables.

## 3. Current Dependencies
Key dependencies from `package.json`:

- **React:** `^18.3.1`
- **Build Tool:** `Vite ^7.1.7`
- **Routing:** `wouter ^3.3.5` (Note: This project uses `wouter`, NOT `react-router-dom`).
- **Styling:** `Tailwind CSS ^4.1.14`, `tailwindcss-animate`, `clsx`, `tailwind-merge`.
- **UI Components:** `Radix UI` primitives (via shadcn/ui).
- **Icons:** `lucide-react`.
- **Forms:** `react-hook-form`, `zod`.
- **Animation:** `framer-motion`.

## 4. Routing
The application uses **`wouter`** for routing, configured in `src/App.tsx`.

- **Router Component:** The `Router` function inside `App.tsx` handles route definitions using `<Switch>` and `<Route>`.
- **Routes:**
  - `/` -> `Home`
  - `/services` -> `Services`
  - `/store` -> `Store`
  - `/contact` -> `Contact`
  - `/demo` -> `Demo`
  - `/404` -> `NotFound`
  - Fallback -> `NotFound`

**Note for Developer:** Navigation links should use the `Link` component from `wouter` or standard `<a>` tags (if external).

## 5. Existing Pages
- **Login/Dashboard:** There are currently **NO** `Login.tsx` or `Dashboard.tsx` pages. The site is currently a public-facing marketing and e-commerce site without user authentication or a private dashboard area.

- **Current Pages Overview:**
  - **Home:** Hero section, value proposition, and introduction.
  - **Services:** Detailed breakdown of agency services.
  - **Store:** E-commerce section for digital downloads and subscriptions.
  - **Contact:** Lead capture form.
  - **Demo:** Showcase of AI capabilities.
