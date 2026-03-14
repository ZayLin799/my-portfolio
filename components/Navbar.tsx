import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
            <a href={personalProfile.resumeUrl} className="button-secondary">
              Resume
            </a>
          </div>

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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <p className="eyebrow" style={{ margin: 0 }}>Navigation</p>
            <button
              type="button"
              className="menu-toggle"
              style={{ display: "flex" }}
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
          <a href={personalProfile.resumeUrl} className="button-primary">
            Download resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
