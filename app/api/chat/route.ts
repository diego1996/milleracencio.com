import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, timestamp } = body

    // Validar que el mensaje existe
    if (!message) {
      return NextResponse.json(
        { error: 'Mensaje requerido' },
        { status: 400 }
      )
    }

    // URL del webhook de n8n (configurar en variables de entorno)
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/chat'

    // Enviar mensaje al webhook de n8n
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp,
        source: 'milleracencio.com',
        userAgent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for') || request.ip,
      }),
    })

    if (n8nResponse.ok) {
      const n8nData = await n8nResponse.json()
      
      // Retornar la respuesta del webhook de n8n
      return NextResponse.json({
        success: true,
        response: n8nData.response || n8nData.message || 'Gracias por tu mensaje. Te responderé pronto.',
        timestamp: new Date().toISOString(),
      })
    } else {
      // Si el webhook no responde correctamente, retornar respuesta de fallback
      console.error('Error en webhook n8n:', n8nResponse.status, n8nResponse.statusText)
      
      return NextResponse.json({
        success: true,
        response: 'Gracias por tu consulta sobre SG-SST. Un especialista te contactará pronto para resolver tus dudas.',
        timestamp: new Date().toISOString(),
        fallback: true,
      })
    }
  } catch (error) {
    console.error('Error en endpoint de chat:', error)
    
    // Respuesta de error con fallback
    return NextResponse.json({
      success: true,
      response: 'Gracias por tu consulta. Un especialista te contactará pronto para resolver tus dudas sobre SG-SST.',
      timestamp: new Date().toISOString(),
      fallback: true,
    })
  }
} 