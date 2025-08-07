'use client'

import { motion } from 'framer-motion'
import { Shield, Users, GraduationCap, FileText, Brain, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Consultoría SG-SST',
      description: 'Implementación y seguimiento de sistemas de gestión en seguridad y salud en el trabajo.',
      features: ['Evaluación de riesgos', 'Planificación estratégica', 'Auditorías internas'],
      price: 'Desde $2.500.000',
      color: 'primary'
    },
    {
      icon: Brain,
      title: 'Psicología Organizacional',
      description: 'Evaluación y desarrollo de factores psicosociales en el entorno laboral.',
      features: ['Evaluación psicosocial', 'Intervención individual', 'Desarrollo organizacional'],
      price: 'Desde $1.800.000',
      color: 'secondary'
    },
    {
      icon: GraduationCap,
      title: 'Capacitación Especializada',
      description: 'Cursos y talleres certificados en seguridad y salud ocupacional.',
      features: ['Cursos online', 'Talleres presenciales', 'Certificaciones'],
      price: 'Desde $500.000',
      color: 'accent'
    },
    {
      icon: FileText,
      title: 'Auditorías y Certificaciones',
      description: 'Auditorías externas para certificación en normas de seguridad laboral.',
      features: ['Auditorías OHSAS 18001', 'ISO 45001', 'Certificaciones'],
      price: 'Desde $3.200.000',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Gestión del Talento Humano',
      description: 'Desarrollo de políticas y programas de bienestar organizacional.',
      features: ['Políticas de bienestar', 'Programas de salud', 'Gestión del cambio'],
      price: 'Desde $2.000.000',
      color: 'secondary'
    },
    {
      icon: TrendingUp,
      title: 'Indicadores y Métricas',
      description: 'Seguimiento y análisis de indicadores de seguridad y salud.',
      features: ['Dashboard de métricas', 'Reportes mensuales', 'Análisis predictivo'],
      price: 'Desde $1.500.000',
      color: 'accent'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 border-primary-200 text-primary-700'
      case 'secondary':
        return 'bg-secondary-50 border-secondary-200 text-secondary-700'
      case 'accent':
        return 'bg-accent-50 border-accent-200 text-accent-700'
      default:
        return 'bg-primary-50 border-primary-200 text-primary-700'
    }
  }

  return (
    <section id="servicios" className="py-20 bg-gray-50">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4 mr-2" />
            Servicios Profesionales
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones Integrales en{' '}
            <span className="text-gradient">SG-SST</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco servicios especializados en seguridad y salud en el trabajo, 
            respaldados por más de 15 años de experiencia en el sector público y privado.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="card p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gradient">
                  {service.price}
                </span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
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
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Necesitas una consultoría personalizada?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una sesión gratuita de 30 minutos para evaluar las necesidades 
              específicas de tu empresa en SG-SST.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Agendar Consulta Gratuita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 