import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

import { personalProfile } from "../data/portfolio";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Capabilities", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : prefersDark
        ? "dark"
        : "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setThemeReady(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const ThemeIcon = theme === "dark" ? FaSun : FaMoon;

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
        <nav className="site-nav">
          <Link href="/#home" className="brand-mark">
            <span className="brand-icon">ZL</span>
            <span className="brand-copy">
              <strong>Zay Lin Htet</strong>
              <small>{personalProfile.title}</small>
            </span>
          </Link>

          <div className="desktop-nav">
            <div className="nav-links">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href={personalProfile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Resume
            </a>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              suppressHydrationWarning
            >
              {themeReady && <ThemeIcon size={16} />}
            </button>
          </div>

          <button
            type="button"
            className="theme-toggle mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            suppressHydrationWarning
          >
            {themeReady && <ThemeIcon size={16} />}
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
          >
            <AiOutlineMenu size={18} />
          </button>
        </nav>
      </header>

      <div
        className={`mobile-overlay ${menuOpen ? "mobile-overlay-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`mobile-drawer ${menuOpen ? "mobile-drawer-open" : ""}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <p className="eyebrow">Navigation</p>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <AiOutlineClose size={18} />
            </button>
          </div>
          <div className="mobile-link-list">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={personalProfile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Download resume
          </a>
          <button type="button" className="theme-toggle theme-toggle-wide" onClick={toggleTheme}>
            {themeReady && <ThemeIcon size={16} />}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
