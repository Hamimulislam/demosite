import ThemeToggle from "./ui/theme-toggle";
import { useState } from "react";
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky z-50 w-full bg-gradient-to-b">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Light Mode Logo */}
          <img
            src="/demosite//H_new.svg"
            alt="Logo"
            className="h-6 w-6 block dark:hidden"
          />
          
          {/* Dark Mode Logo */}
          <img
            src="/demosite//H_new2.svg"
            alt="Logo"
            className="h-6 w-6 hidden dark:block"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["updates", "experience", "skills", "education", "publications"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="transition-colors hover:text-foreground text-foreground/60"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: 0 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            )
          )}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              key={isMenuOpen ? "close" : "open"}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </motion.div>
          </motion.button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden overflow-hidden backdrop-blur-md backdrop-filter bg-transparent"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.nav
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col space-y-4 text-sm font-medium px-4 py-6"
            >
              {["updates", "experience", "skills", "education", "publications"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="hover:text-foreground text-foreground/60 transition-colors py-2"
                    whileHover={{  y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                )
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
