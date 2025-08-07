'use client'

import { motion } from 'framer-motion'
import { Building, GraduationCap, Award, Calendar, MapPin, Users, Shield, BookOpen } from 'lucide-react'
import Image from 'next/image'

const Experience = () => {
  const experiences = [
    {
      period: '2018 - Presente',
      title: 'Consultor Independiente SG-SST',
      company: 'Consultoría Privada',
      location: 'Colombia',
      description: 'Consultoría especializada en implementación de sistemas de gestión en seguridad y salud en el trabajo para empresas del sector público y privado.',
      achievements: [
        'Más de 500 empresas asesoradas',
        'Implementación exitosa de SG-SST en 200+ organizaciones',
        'Reducción del 60% en accidentes laborales en clientes'
      ],
      icon: Shield,
      color: 'primary'
    },
    {
      period: '2015 - 2018',
      title: 'Funcionario Administrativo',
      company: 'INPEC - Instituto Nacional Penitenciario',
      location: 'Bogotá, Colombia',
      description: 'Gestión administrativa y coordinación de programas de seguridad y salud ocupacional en el sistema penitenciario colombiano.',
      achievements: [
        'Coordinación de programas de bienestar para funcionarios',
        'Implementación de protocolos de seguridad',
        'Gestión de más de 1000 funcionarios'
      ],
      icon: Building,
      color: 'secondary'
    },
    {
      period: '2012 - 2015',
      title: 'Militante y Coordinador',
      company: 'INPEC - Instituto Nacional Penitenciario',
      location: 'Bogotá, Colombia',
      description: 'Coordinación de operaciones de seguridad y gestión de personal en establecimientos penitenciarios de alta seguridad.',
      achievements: [
        'Liderazgo de equipos de hasta 50 personas',
        'Desarrollo de protocolos de seguridad',
        'Coordinación de operaciones especiales'
      ],
      icon: Users,
      color: 'accent'
    },
    {
      period: '2010 - Presente',
      title: 'Docente Universitario',
      company: 'Universidades Colombianas',
      location: 'Colombia',
      description: 'Docencia en programas de psicología organizacional, seguridad y salud ocupacional, y gestión del talento humano.',
      achievements: [
        'Más de 1000 estudiantes formados',
        'Desarrollo de 15 cursos especializados',
        'Publicaciones en revistas indexadas'
      ],
      icon: GraduationCap,
      color: 'primary'
    }
  ]

  const certifications = [
    {
      name: 'Especialista en SG-SST',
      issuer: 'Universidad Nacional de Colombia',
      year: '2015',
      icon: Award
    },
    {
      name: 'Auditor Interno OHSAS 18001',
      issuer: 'Bureau Veritas',
      year: '2016',
      icon: Shield
    },
    {
      name: 'Psicología Organizacional',
      issuer: 'Universidad de los Andes',
      year: '2012',
      icon: BookOpen
    },
    {
      name: 'ISO 45001 Lead Auditor',
      issuer: 'TÜV Rheinland',
      year: '2018',
      icon: Award
    }
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4 mr-2" />
            Trayectoria Profesional
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experiencia en{' '}
            <span className="text-gradient">Sector Público y Privado</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 15 años de experiencia combinando la práctica en el sector público 
            con la consultoría especializada y la docencia universitaria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-secondary-200 to-accent-200"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-primary-500 rounded-full -translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div className="ml-16">
                    <div className="card p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl bg-${exp.color}-100 flex items-center justify-center`}>
                            <exp.icon className={`w-6 h-6 text-${exp.color}-600`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            <p className="text-lg font-semibold text-gradient">{exp.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Logros Principales:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-8"
            >
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Certificaciones y Especializaciones
                </h3>

                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-white rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <cert.icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                          <p className="text-xs text-gray-500">{cert.year}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">15+</div>
                      <div className="text-sm text-gray-600">Años Experiencia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">500+</div>
                      <div className="text-sm text-gray-600">Empresas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">1000+</div>
                      <div className="text-sm text-gray-600">Estudiantes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">4</div>
                      <div className="text-sm text-gray-600">Certificaciones</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 