import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ContactForm } from './ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Адреса',
    content: 'вул. Кавова, 42, Київ',
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+38 (044) 123-45-67',
  },
  {
    icon: Clock,
    title: 'Режим роботи',
    content: 'Пн-Нд: 08:00 - 22:00',
  },
];

const socialLinks = [
  { icon: Instagram, name: 'Instagram', url: '#' },
  { icon: Facebook, name: 'Facebook', url: '#' },
  { icon: Mail, name: 'Email', url: '#' },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Завітайте до нас
          </h2>
          <p className="text-lg text-amber-900/70">
            Ми завжди раді бачити вас у нашій кав'ярні
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                  <info.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-950 mb-1">{info.title}</h3>
                  <p className="text-amber-900/70">{info.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-bold text-amber-950 mb-4">Слідкуйте за нами</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6 text-amber-700" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl h-64 flex items-center justify-center">
            <div className="text-amber-900/60">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p>Інтерактивна карта</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}