import { motion } from 'motion/react';
import { Coffee, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Coffee className="w-6 h-6 text-amber-400" />
            <span className="font-bold text-xl">Aroma Café</span>
          </motion.div>

          <motion.p
            className="text-amber-50/70 text-center flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Зроблено з <Heart className="w-4 h-4 text-red-400 inline fill-current" /> для любителів кави
          </motion.p>

          <motion.p
            className="text-amber-50/50 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © 2026 Aroma Café. Всі права захищені.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
