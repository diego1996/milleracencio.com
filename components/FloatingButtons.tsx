'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp, MessageSquare } from 'lucide-react'
import { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'ai', message: string}>>([])

  // Mostrar botones cuando se hace scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const phone = '+573001234567' // Número de WhatsApp
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre tus servicios de SG-SST.')
    const url = `https://wa.me/${phone}?text=${message}`
    window.open(url, '_blank')
  }

  // Función para enviar mensaje al chat de IA
  const sendChatMessage = async () => {
    if (!chatMessage.trim()) return

    const userMessage = chatMessage
    setChatMessage('')
    
    // Agregar mensaje del usuario al historial
    setChatHistory(prev => [...prev, { type: 'user', message: userMessage }])

    try {
      // Simular envío al webhook de n8n
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        const data = await response.json()
        // Agregar respuesta de la IA al historial
        setChatHistory(prev => [...prev, { type: 'ai', message: data.response || 'Gracias por tu mensaje. Te responderé pronto.' }])
      } else {
        // Respuesta de fallback si el webhook no está disponible
        setChatHistory(prev => [...prev, { 
          type: 'ai', 
          message: 'Gracias por tu consulta. Un especialista te contactará pronto para resolver tus dudas sobre SG-SST.' 
        }])
      }
    } catch (error) {
      console.error('Error enviando mensaje:', error)
      // Respuesta de fallback en caso de error
      setChatHistory(prev => [...prev, { 
        type: 'ai', 
        message: 'Gracias por tu consulta. Un especialista te contactará pronto para resolver tus dudas sobre SG-SST.' 
      }])
    }
  }

  // Función para scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Botones flotantes */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-8 right-8 flex flex-col space-y-3 z-50"
          >
            {/* Botón WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openWhatsApp}
              className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                WhatsApp
              </span>
            </motion.button>

            {/* Botón Chat IA */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsChatOpen(true)}
              className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Chat con IA"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat IA
              </span>
            </motion.button>

            {/* Botón Scroll to Top */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-6 h-6" />
              <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Arriba
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal del Chat IA */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[600px] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del chat */}
              <div className="bg-primary-600 text-white p-4 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="font-semibold">Asistente IA SG-SST</h3>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Historial del chat */}
              <div className="flex-1 p-4 overflow-y-auto max-h-[400px] space-y-3">
                {chatHistory.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">¡Hola! Soy tu asistente virtual especializado en SG-SST.</p>
                    <p className="text-sm mt-2">¿En qué puedo ayudarte hoy?</p>
                  </div>
                ) : (
                  chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          chat.type === 'user'
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Input del mensaje */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={sendChatMessage}
                    disabled={!chatMessage.trim()}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Enviar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingButtons 