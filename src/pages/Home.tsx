import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Clock, Users, Star, Sparkles, Gift, Award, Cake, Camera, Coffee, Music } from 'lucide-react';
import { products } from '../data/products';
import { galleryImages } from '../data/gallery';
import ProductCard from '../components/ProductCard';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  viewport: { once: true, margin: "-100px" }
};

const Home: React.FC = () => {
  const eventTypes = [
    { icon: Gift, title: 'Bodas', description: 'Mesas de dulces elegantes y románticas para tu día especial' },
    { icon: Cake, title: 'XV Años', description: 'Diseños únicos que complementan la temática de tu fiesta' },
    { icon: Award, title: 'Corporativos', description: 'Presentaciones profesionales para eventos empresariales' },
    { icon: Music, title: 'Fiestas', description: 'Opciones divertidas para celebraciones y reuniones' },
    { icon: Camera, title: 'Graduaciones', description: 'Montajes especiales para momentos académicos' },
    { icon: Coffee, title: 'Eventos Sociales', description: 'Soluciones dulces para cualquier tipo de reunión' }
  ];

  const stats = [
    { number: '500+', label: 'Eventos Realizados' },
    { number: '50+', label: 'Variedades de Dulces' },
    { number: '100%', label: 'Clientes Satisfechos' },
    { number: '5+', label: 'Años de Experiencia' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Candy background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mesas de Dulces para Eventos Inolvidables
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              Creamos experiencias dulces personalizadas para bodas, XV años, eventos corporativos y todo tipo de celebraciones en México.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="px-6 py-3 bg-white text-pink-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Ver Paquetes
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            ¿Por qué elegir <span className="text-pink-500">DulceMesa</span>?
          </motion.h2>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { bg: "pink", icon: Heart, title: "Personalización Total", desc: "Adaptamos cada detalle al estilo y temática de tu evento para crear una experiencia única." },
              { bg: "purple", icon: Sparkles, title: "Calidad Premium", desc: "Utilizamos productos de la más alta calidad y presentaciones elegantes para impresionar a tus invitados." },
              { bg: "yellow", icon: Clock, title: "Montaje Puntual", desc: "Nos encargamos de todo el montaje y desmontaje para que tú solo te preocupes por disfrutar." },
              { bg: "blue", icon: Star, title: "Experiencia Comprobada", desc: "Más de 500 eventos realizados y cientos de clientes satisfechos nos respaldan." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-${feature.bg}-50 p-6 rounded-xl text-center`}
              >
                <div className={`w-16 h-16 mx-auto bg-${feature.bg}-500 text-white rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              Tipos de Eventos
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Creamos mesas de dulces perfectas para cualquier ocasión especial. Cada evento merece una presentación única.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <event.icon className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex justify-between items-center mb-10"
          >
            <h2 className="text-3xl font-bold">Nuestros Paquetes</h2>
            <Link 
              to="/products" 
              className="flex items-center text-pink-500 hover:text-pink-600 font-medium"
            >
              Ver todos <ArrowRight size={18} className="ml-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              ¿Cómo Trabajamos?
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Nuestro proceso está diseñado para hacer tu experiencia fácil y sin complicaciones.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: "1", title: "Consulta Inicial", desc: "Discutimos tus ideas y requerimientos para el evento" },
              { step: "2", title: "Diseño Personalizado", desc: "Creamos una propuesta única para tu evento" },
              { step: "3", title: "Confirmación", desc: "Ajustamos los detalles finales y confirmamos la reserva" },
              { step: "4", title: "Entrega", desc: "Montamos todo en tu evento y nos encargamos de cada detalle" }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-500">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-3">Galería de Eventos</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Explora nuestras mesas de dulces en eventos reales y déjate inspirar para tu próxima celebración.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {galleryImages.slice(0, 6).map((image) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                className="relative overflow-hidden rounded-lg h-64 md:h-80"
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4">
                    <p className="font-medium">{image.alt}</p>
                    <p className="text-sm text-white/80">{image.tier}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link 
              to="/gallery" 
              className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition-colors shadow-md"
            >
              Ver toda la galería
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                text: "La mesa de dulces fue el centro de atención en nuestra boda. El diseño complementó perfectamente nuestra decoración y los dulces estaban deliciosos. ¡Todos nuestros invitados quedaron encantados!",
                author: "María Castillo",
                role: "Boda en CDMX",
                initials: "MC",
                color: "pink"
              },
              {
                text: "Contratamos el paquete premium para la fiesta de XV años de mi hija y fue todo un éxito. El servicio fue impecable y la mesa quedó hermosa. Las fotos quedaron preciosas y mi hija estaba feliz.",
                author: "Laura Rodríguez",
                role: "XV años en Guadalajara",
                initials: "LR",
                color: "purple"
              },
              {
                text: "Contratamos DulceMesa para un evento corporativo importante y superaron nuestras expectativas. La presentación fue elegante y profesional, y el servicio fue excelente. Definitivamente los recomendaría.",
                author: "Javier Gutiérrez",
                role: "Evento corporativo en Monterrey",
                initials: "JG",
                color: "blue"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-${testimonial.color}-100 rounded-full flex items-center justify-center text-${testimonial.color}-500 font-bold mr-3`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              ¿Listo para endulzar tu evento?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Contáctanos hoy para una asesoría personalizada y haz que tu evento sea inolvidable con nuestras mesas de dulces.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-pink-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contactar ahora
              </Link>
              <Link 
                to="/products" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Ver paquetes
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;