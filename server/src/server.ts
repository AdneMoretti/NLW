import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client'

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    })
    const prisma = new PrismaClient()

    fastify.get('/', () => {
        return {"status": "ok"}
    })
    fastify.get('/pools/count', () => {
        const allPools = prisma.pool.findMany()
        console.log(allPools)
        return {count: allPools}
    }) 
    await fastify.listen({port: 3333})
}

bootstrap()