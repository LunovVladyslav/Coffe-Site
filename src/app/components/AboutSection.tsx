import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Heart,
    title: 'З любов\'ю',
    description: 'Кожна чашка кави готується з душею та увагою до деталей',
  },
  {
    icon: Award,
    title: 'Якість',
    description: 'Використовуємо лише найкращі зерна з перевірених плантацій',
  },
  {
    icon: Users,
    title: 'Атмосфера',
    description: 'Затишне місце для зустрічей, роботи та відпочинку',
  },
];

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${(scrollY - 1000) * 0.3}px)`,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680853413523-02b598b61c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGJhcmlzdGF8ZW58MXx8fHwxNzY3NTI2NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Coffee beans"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/50 to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Про нас
          </h2>
          <p className="text-lg text-amber-900/70 max-w-3xl mx-auto">
            Ми — команда справжніх кавових ентузіастів, які вірять, що кава — це не просто напій, 
            а спосіб життя. Вже більше 5 років ми створюємо незабутні моменти для наших гостей.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-950 mb-2">{feature.title}</h3>
              <p className="text-amber-900/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3Njc2MzEyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Latte art"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <div>
            <motion.h3
              className="text-3xl font-bold text-amber-950 mb-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Наша історія
            </motion.h3>
            <motion.p
              className="text-amber-900/70 mb-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Все почалося з простої мрії — створити місце, де люди зможуть насолоджуватися 
              справжньою якісною кавою в атмосфері затишку та гостинності.
            </motion.p>
            <motion.p
              className="text-amber-900/70"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Наші бариста — справжні професіонали своєї справи, які постійно вдосконалюють 
              свою майстерність та експериментують з новими рецептами, щоб подарувати вам 
              незабутні смакові враження.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
