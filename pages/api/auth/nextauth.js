import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: '73522869905-uho0mdk8dqpbd2rqaf6m7v75gp96593e.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // You can add more providers here if needed
  ],
})