import { motion } from 'motion/react';
import { Coffee, IceCream, Cake } from 'lucide-react';

const menuItems = [
  {
    category: 'Гарячі напої',
    icon: Coffee,
    items: [
      { name: 'Еспресо', price: '45 грн', description: 'Класичний італійський кави' },
      { name: 'Американо', price: '50 грн', description: 'М\'який і насичений смак' },
      { name: 'Капучино', price: '65 грн', description: 'З шовковистою молочною піною' },
      { name: 'Лате', price: '70 грн', description: 'Ніжний молочний напій' },
      { name: 'Флет Вайт', price: '75 грн', description: 'Бархатиста текстура' },
    ],
  },
  {
    category: 'Холодні напої',
    icon: IceCream,
    items: [
      { name: 'Айс Лате', price: '75 грн', description: 'Освіжаючий холодний напій' },
      { name: 'Фрапе', price: '80 грн', description: 'Крижана насолода' },
      { name: 'Колд Брю', price: '85 грн', description: 'Холодне заварювання' },
      { name: 'Афогато', price: '90 грн', description: 'Еспресо з морозивом' },
    ],
  },
  {
    category: 'Десерти',
    icon: Cake,
    items: [
      { name: 'Чізкейк', price: '85 грн', description: 'Класичний нью-йоркський' },
      { name: 'Тірамісу', price: '90 грн', description: 'Італійський десерт' },
      { name: 'Брауні', price: '75 грн', description: 'Шоколадний смак' },
      { name: 'Круасан', price: '55 грн', description: 'Французька випічка' },
    ],
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Наше меню
          </h2>
          <p className="text-lg text-amber-900/70">
            Відкрийте для себе наші смачні пропозиції
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-3 rounded-full">
                  <category.icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-amber-950">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="border-b border-amber-100 pb-4 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-amber-950">{item.name}</span>
                      <span className="text-amber-700 font-bold">{item.price}</span>
                    </div>
                    <p className="text-sm text-amber-900/60">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
