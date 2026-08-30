import { profile } from "@/data/profile";

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.github },
    ...(profile.linkedin ? [{ label: "LinkedIn", href: profile.linkedin }] : []),
  ];

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-300">
        Open to full-stack roles, and happy to hear about other opportunities
        too. Reach out through any of the links below.
      </p>
      <ul className="mt-6 flex flex-wrap gap-6">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
