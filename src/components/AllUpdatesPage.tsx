import React from "react";
import { updates } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { Siren } from '@phosphor-icons/react';

export default function AllUpdatesPage() {
  return (
    <section className="py-12 relative min-h-screen">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        {/* Move heading outside MotionWrapper */}
        <h1 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <Siren size={24} weight="duotone" className="translate-y-[1px] block dark:hidden" />
          <Siren size={24} weight="duotone" className="translate-y-[1px] hidden dark:block" />
          All Updates
        </h1>

        <ul className="space-y-4">
          {updates.map((update, index) => (
            <MotionWrapper key={update.name + update.date} delay={index * 0.05}>
              <li className="flex flex-col md:flex-row md:items-start md:justify-start gap-2 text-sm">
                <span className="text-muted-foreground w-24 shrink-0">
                  {update.date}
                </span>
                <span className="text-foreground">{update.name}</span>
              </li>
            </MotionWrapper>
          ))}
        </ul>
      </div>
    </section>
  );
}
