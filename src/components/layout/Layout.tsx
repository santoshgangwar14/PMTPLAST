import type { ReactNode } from "react";
import { NAVBAR_HEIGHT_VAR_EXPR } from "@/lib/layout";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout — the ONE place responsible for pushing page content below the
 * fixed navbar.
 *
 * Every route is rendered through this component's `<main>`, which is
 * padded by `var(--navbar-height)` (kept in sync by Navbar.tsx). Because
 * this is the only element in the app that applies a navbar-offset, pages
 * and sections never need their own top-offset padding (no more
 * pt-24 / pt-28 / pt-32 guesswork scattered across files) — they can start
 * their content at the very top of their own markup and it will always
 * land exactly below the navbar, on every breakpoint.
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <main style={{ paddingTop: NAVBAR_HEIGHT_VAR_EXPR }}>
      {children}
    </main>
  );
};

export default Layout;
