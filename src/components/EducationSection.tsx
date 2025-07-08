import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { GraduationCap } from '@phosphor-icons/react';

export default function EducationSection() {
  return (
    <section id="education" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <GraduationCap size={24} weight="duotone" className="translate-y-[1px] block dark:hidden" />
          <GraduationCap size={24} weight="duotone" className="translate-y-[1px] hidden dark:block" />
          Education
        </h2>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={edu.degree}
              subtitle={edu.institution}
              subtitle_2={edu.location}
              date={edu.period}
              isLast={index === education.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
