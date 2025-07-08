import React from "react";
import { updates } from "@/lib/data";
import { Siren, ArrowRight } from '@phosphor-icons/react';

export default function UpdatesSection() {
  const latestUpdates = updates.slice(0, 4);

  return (
    <section id="updates" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <Siren size={24} weight="duotone" className="translate-y-[1px] block dark:hidden" />
          <Siren size={24} weight="duotone" className="translate-y-[1px] hidden dark:block" />
          Updates
        </h2>

        <ul className="space-y-4">
          {latestUpdates.map((update) => (
            <li
              key={update.name + update.date}
              className="flex flex-col md:flex-row md:items-start md:justify-start gap-2 text-sm"
            >
              <span className="text-muted-foreground w-24 shrink-0">
                {update.date}
              </span>
              <span className="text-foreground">{update.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-left">
          <a
            href={`${import.meta.env.BASE_URL}updates`}
            className="flex items-center gap-1 text-sm hover:underline"
          >
            View all updates
            <ArrowRight size={12} className="translate-y-[1px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
