import Image from "next/image";

import { projects } from "../data/content";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-[1440px] px-6 pb-24">
      <div className="rounded-[40px] bg-[#050b1d] p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold text-white">
            Портфель реализованных проектов
          </h2>
          <p className="max-w-xl text-base text-white/70">
            От креативных кластеров и гибких офисов до форматных retail-пространств — мы адаптируем концепцию под стратегию инвестора.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white/5"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040d1f] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/80">
                  <span>{project.area}</span>
                  <span>{project.status}</span>
                </div>
              </div>
              <div className="space-y-3 p-8">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-white/70">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
