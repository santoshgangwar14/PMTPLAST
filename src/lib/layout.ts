/**
 * Layout constants — single source of truth for navbar-related spacing.
 *
 * WHY THIS FILE EXISTS
 * ---------------------------------------------------------------------------
 * Previously the navbar height was hard-coded in multiple, disconnected
 * places (Navbar.tsx's own constant, App.tsx's `pt-24`, per-page wrapper
 * divs using `pt-24`, and section-level heroes using `pt-28`/`pt-32`/a
 * `calc(100vh - 72px)` guess). Because none of these values were derived
 * from one another, they drifted out of sync — some pages ended up with
 * too little top offset (content rendering under the fixed navbar) and
 * others with too much (double top padding).
 *
 * `NAVBAR_HEIGHT` below is the ONLY hard-coded pixel value in the app.
 * Every other file reads spacing from the CSS custom property
 * `--navbar-height`, which Navbar.tsx keeps in sync with the navbar's real,
 * rendered height (see Navbar.tsx). `NAVBAR_HEIGHT` is only used as the
 * initial/fallback value for that CSS variable and as the navbar's own
 * inline height, so if the navbar's design ever changes, this is the one
 * number that needs to change.
 */
export const NAVBAR_HEIGHT = 80;

/** Name of the CSS custom property that stores the live navbar height. */
export const NAVBAR_HEIGHT_CSS_VAR = "--navbar-height";

/** Convenience helper for inline styles: `var(--navbar-height, 80px)`. */
export const NAVBAR_HEIGHT_VAR_EXPR = `var(${NAVBAR_HEIGHT_CSS_VAR}, ${NAVBAR_HEIGHT}px)`;
