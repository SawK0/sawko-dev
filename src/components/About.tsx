import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      <p className="mt-6 max-w-2xl text-neutral-600 dark:text-neutral-300">
        {profile.bio}
      </p>
    </section>
  );
}
