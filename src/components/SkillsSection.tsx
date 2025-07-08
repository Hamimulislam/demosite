import React from "react";
import { skills } from "@/lib/data";
import { GlassCard } from "./ui/glass-card";
import { Stack } from '@phosphor-icons/react';

function SkillTag({ skill }: { skill: string }) {
  return (
    <div className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-slate-100/10 shadow-sm">
      {skill}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <Stack size={25} weight="duotone" className="translate-y-[1px] block dark:hidden" />
          <Stack size={25} weight="duotone" className="translate-y-[1px] hidden dark:block" />
          Skills
        </h2>

        <div className="space-y-6">
          <GlassCard className="p-4">
            <h3 className="text-lg font-medium mb-3 flex flex-col items-center md:flex-row md:items-center text-center md:text-left">
              Programming Language & Libraries
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.programmingLanguages.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-4">
            <h3 className="text-lg font-medium mb-3 flex flex-col items-center md:flex-row md:items-center text-center md:text-left">
              Design & Modeling
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.design.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-4">
            <h3 className="text-lg font-medium mb-3 flex flex-col items-center md:flex-row md:items-center text-center md:text-left">
              Documentation & Data Visualization
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.documentation.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
