const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 flex justify-end gap-6 bg-white/80 py-4 backdrop-blur dark:bg-neutral-950/80">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
