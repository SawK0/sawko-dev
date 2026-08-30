import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {category}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
