import React from "react";
import { publications } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PencilSimpleLine } from '@phosphor-icons/react';
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
            <PencilSimpleLine size={24} weight="duotone" className="translate-y-[1px] block dark:hidden" />
              <PencilSimpleLine size={24} weight="duotone" className=" translate-y-[1px] hidden dark:block" /> Publications
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-6">
          {publications.map((publication, index) => (
            <MotionWrapper delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-slate-100/10 h-full flex flex-col">
                
                <CardContent className="flex-grow pt-6">
                  <ul className="list-disc pl-3 text-sm space-y-4">
                      {publication.papers.map((paper, i) => (
                        <motion.li
                          key={i}
                          className="text-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          <div>
                            <span className="font-semibold">{paper.title}</span>
                          </div>
                          <div className="text-muted-foreground text-sm mt-1">
                      {paper.authors.map((author, idx) => (
                        <span key={idx}>
                          {author.underline ? (
                            <span className="underline underline-offset-2">{author.name}</span>
                          ) : (
                            author.name
                          )}
                          {idx < paper.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                          <div className="text-muted-foreground text-sm">
                            {paper.status}
                          </div>
                        </motion.li>
                      ))}
                  </ul>
                </CardContent>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
