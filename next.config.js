/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
                env: {
                STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
                STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
                RESEND_API_KEY: process.env.RESEND_API_KEY,
                N8N_WEBHOOK_URL: process.env.N8N_WEBHOOK_URL,
              },
}

module.exports = nextConfig 