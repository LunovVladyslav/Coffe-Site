import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // Тут можна додати логіку відправки на сервер
    setIsSubmitted(true);
    reset();
    
    // Сховати повідомлення після 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-xl"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold text-amber-950 mb-6">
        Напишіть нам
      </h3>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-green-800">
              Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-semibold text-amber-950 mb-2">
            Ім'я *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { 
              required: "Будь ласка, введіть ваше ім'я",
              minLength: { value: 2, message: "Ім'я повинно містити мінімум 2 символи" }
            })}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-amber-200 bg-amber-50/50'
            }`}
            placeholder="Ваше ім'я"
          />
          {errors.name && (
            <motion.p
              className="text-red-600 text-sm mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.name.message}
            </motion.p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-semibold text-amber-950 mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Будь ласка, введіть ваш email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Невірний формат email'
              }
            })}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-amber-200 bg-amber-50/50'
            }`}
            placeholder="email@example.com"
          />
          {errors.email && (
            <motion.p
              className="text-red-600 text-sm mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        {/* Phone Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="phone" className="block text-sm font-semibold text-amber-950 mb-2">
            Телефон
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 bg-amber-50/50 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="+38 (0XX) XXX-XX-XX"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="message" className="block text-sm font-semibold text-amber-950 mb-2">
            Повідомлення *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { 
              required: 'Будь ласка, введіть ваше повідомлення',
              minLength: { value: 10, message: 'Повідомлення повинно містити мінімум 10 символів' }
            })}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-amber-200 bg-amber-50/50'
            }`}
            placeholder="Ваше повідомлення..."
          />
          {errors.message && (
            <motion.p
              className="text-red-600 text-sm mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.message.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Send className="w-5 h-5" />
          Відправити повідомлення
        </motion.button>
      </form>
    </motion.div>
  );
}
