import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  subtitle_2: string;
  date: string;
  isLast?: boolean;
  index?: number;
  children?: React.ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
  subtitle_2,
  date,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center min-h-6 shrink-0">
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-slate-900/80 bg-slate-100 dark:border-slate-200 dark:bg-slate-50/30 z-10"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
        />
        {!isLast && (
          <motion.div
            className="w-px grow bg-gradient-to-b from-slate-900/50 to-slate-500/50 dark:from-slate-100/60 dark:to-slate-50/30"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          />
        )}
      </div>
      <div className={cn("pb-8 mt-[-4px]", isLast ? "pb-0" : "")}>
        <motion.div
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle} <br /> {subtitle_2}</p>
          <p className="text-xs text-muted-foreground/70 mb-2">{date}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
