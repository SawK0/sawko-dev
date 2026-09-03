const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const externalLinks = [
  { href: "https://rambloo.com", label: "Blog" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 bg-white/95 backdrop-blur dark:bg-neutral-950/95">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-end gap-x-4 gap-y-1 px-6 py-4 sm:gap-x-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-medium text-neutral-600 hover:text-neutral-900 sm:text-sm dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {link.label}
          </a>
        ))}
        {externalLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-600 hover:text-neutral-900 sm:text-sm dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
