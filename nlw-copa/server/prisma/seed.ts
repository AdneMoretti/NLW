import  {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({
        data: {
            name: "AdneMoretti",
            email: "morettiadne1@gmail.com",
            avatarUrl: 'https://github.com/AdneMoretti.png'
        }
    })
    const pool = await prisma.pool.create({
        data: {
            title: "pool 1",
            code: 'ABC345',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id
                }
            }

        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-15T18:03:57.940Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR'
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-30T18:03:57.940Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'BR',

            guesses: {
                create: {
                    firstTeamPoints:  3,
                    secondFirstPoints: 5,

                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    })
}

main()