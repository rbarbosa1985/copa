import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function gameRoutes(fastify: FastifyInstance) {

  fastify.get('/pools/:id/games', { onRequest: [authenticate] }, async (request) => {
    const getPoolParams = z.object({
      id: z.string()
    })

    const getUser = z.object({
      sub: z.string(),
      name: z.string(),
      avatarUrl: z.string()
    })

    const userOn = getUser.parse(request.user);

    const { id } = getPoolParams.parse(request.params);

    const games = await prisma.game.findMany({
      orderBy: {
        date: 'asc'
      },
      include: {
        guesses: {
          where: {
            participant: {
              userId: userOn.sub,
              poolId: id
            }
          }
        }
      }
    })

    return {
      games: games.map(game => {
        return {
          ...game,
          guess: game.guesses.length > 0 ? game.guesses[0] : null,
          guesses: undefined
        }
      })
    }



  })
}