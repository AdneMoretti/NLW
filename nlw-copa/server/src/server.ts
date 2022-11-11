import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'
import {z} from 'zod'
import ShortUniqueId from 'short-unique-id'

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    })
    const prisma = new PrismaClient()

    await fastify.register(cors, {
        origin: true
    })

    fastify.get('/', () => {
        return {"status": "ok"}
    })

    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count()
        return {count}
    }) 
    
    fastify.get('/users/count', async () => {
        const count = await prisma.user.count()
        return {count}
    }) 

    fastify.get('/guesses/count', async () => {
        const count = await prisma.guess.count()
        return {count}
    }) 

    fastify.post('/pools', async (request, reply) => { 
        const createPoolBody = z.object({
            title: z.string(), 
            code: z.string()
        })

        const {title} = createPoolBody.parse(request.body)
        const generate = new ShortUniqueId({length: 6})
        const code = String(generate()).toUpperCase()
        await prisma.pool.create({
            data: {
                title,
                code: code
            }
        })
        return reply.status(201).send({code})
    }) 

    fastify.post('/users', async (request, reply) => { 
        const createUserBody = z.object({
            name: z.string(), 
            code: z.string()
        })

        // const {title} = createUserBody.parse(request.body)
        // const generate = new ShortUniqueId({length: 6})
        // const code = String(generate()).toUpperCase()
        // await prisma.pool.create({
        //     data: {
        //         title,
        //         code: code
        //     }
        // })
        // return reply.status(201).send({code})
    }) 

    await fastify.listen({port: 3333})
}

bootstrap()