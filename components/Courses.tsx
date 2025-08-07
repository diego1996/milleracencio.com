'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Clock, Users, Star, Play, CheckCircle, ShoppingCart, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Fundamentos de SG-SST',
      description: 'Curso completo sobre los fundamentos del Sistema de Gestión en Seguridad y Salud en el Trabajo.',
      duration: '40 horas',
      students: 1250,
      rating: 4.8,
      price: 299000,
      originalPrice: 450000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Certificación oficial',
        'Acceso de por vida',
        'Material descargable',
        'Soporte 24/7',
        'Proyecto final',
        'Certificado digital'
      ],
      level: 'Básico',
      category: 'SG-SST'
    },
    {
      id: 2,
      title: 'Auditoría Interna SG-SST',
      description: 'Aprende a realizar auditorías internas efectivas en sistemas de gestión de seguridad y salud.',
      duration: '60 horas',
      students: 890,
      rating: 4.9,
      price: 450000,
      originalPrice: 650000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Certificación auditor interno',
        'Acceso de por vida',
        'Material descargable',
        'Soporte 24/7',
        'Simulacros de auditoría',
        'Certificado digital'
      ],
      level: 'Intermedio',
      category: 'Auditoría'
    },
    {
      id: 3,
      title: 'Psicología Organizacional Aplicada',
      description: 'Desarrollo de competencias en psicología organizacional para entornos laborales seguros.',
      duration: '50 horas',
      students: 1100,
      rating: 4.7,
      price: 380000,
      originalPrice: 550000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Certificación en psicología organizacional',
        'Acceso de por vida',
        'Material descargable',
        'Soporte 24/7',
        'Casos prácticos',
        'Certificado digital'
      ],
      level: 'Avanzado',
      category: 'Psicología'
    },
    {
      id: 4,
      title: 'ISO 45001: Implementación Práctica',
      description: 'Implementación práctica de la norma ISO 45001 en organizaciones de cualquier tamaño.',
      duration: '80 horas',
      students: 650,
      rating: 4.9,
      price: 550000,
      originalPrice: 800000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Certificación ISO 45001',
        'Acceso de por vida',
        'Material descargable',
        'Soporte 24/7',
        'Proyecto de implementación',
        'Certificado digital'
      ],
      level: 'Avanzado',
      category: 'ISO'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Básico':
        return 'bg-green-100 text-green-700'
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-700'
      case 'Avanzado':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const handlePurchase = (courseId: number) => {
    // Aquí se integraría con Stripe para el procesamiento de pagos
    console.log(`Comprando curso ${courseId}`)
  }

  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-6"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Cursos Online Certificados
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Formación Especializada en{' '}
            <span className="text-gradient">SG-SST</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cursos online certificados con metodología práctica y casos reales. 
            Acceso de por vida y soporte especializado.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="card overflow-hidden group"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Level Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                  {course.level}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-gray-700">
                  {course.category}
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-primary-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {course.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gradient">
                      {formatPrice(course.price)}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(course.originalPrice)}
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePurchase(course.id)}
                    className="btn-primary flex items-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar Ahora
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Necesitas formación personalizada para tu empresa?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Ofrezco programas corporativos a medida con descuentos especiales 
              para grupos de 5 o más participantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Solicitar Cotización
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
              >
                Ver Todos los Cursos
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses 