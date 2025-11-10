'use client';

import Image from 'next/image';
import { projects } from '../data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Projects.css';

type Project = (typeof projects)[number];

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  // Появление карточки снизу-вверх со сдвигом
  const cardRef = useScrollReveal<HTMLElement>({
    variant: 'up',
    distance: 24,
    delay,
  });

  return (
    <article
      ref={cardRef}
      className="project-card reveal"
      data-reveal="up"
      aria-label={project.title}
    >
      <div className="project-image-wrapper">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 33vw, 90vw"
          className="project-image"
        />
        <div className="project-meta">
          <span>{project.area}</span>
          <span>{project.status}</span>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-location">{project.location}</p>
      </div>
    </article>
  );
}

export function Projects() {
  // Заголовок и золотая линия — как в CustomBusiness
  const titleRef = useScrollReveal<HTMLHeadingElement>({
    variant: 'up',
    distance: 20,
    delay: 0,
  });

  const lineRef = useScrollReveal<HTMLDivElement>({
    variant: 'fade',
    delay: 120,
    duration: 600,
  });

  const subRef = useScrollReveal<HTMLParagraphElement>({
    variant: 'up',
    distance: 16,
    delay: 220,
  });

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 ref={titleRef} className="projects-title reveal" data-reveal="up">
            Портфель реализованных проектов
          </h2>
          <div
            ref={lineRef}
            className="projects-line reveal"
            data-reveal="fade"
            aria-hidden="true"
          />
          <p ref={subRef} className="projects-subtext reveal" data-reveal="up">
            От креативных кластеров и гибких офисов до форматных retail-пространств —
            мы адаптируем концепцию под стратегию инвестора.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              // Стаггер по 90 мс на карточку
              delay={400 + i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
