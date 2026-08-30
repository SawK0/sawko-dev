import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center gap-6 py-24">
      <p className="text-sm font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
        {profile.role}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
        {profile.tagline}
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        {profile.resumeUrl ? (
          <a
            href={profile.resumeUrl}
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            View résumé
          </a>
        ) : null}
        <a
          href="#contact"
          className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium transition hover:border-neutral-500 dark:border-neutral-700 dark:hover:border-neutral-500"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
