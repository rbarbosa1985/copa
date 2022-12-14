import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function guessRoutes(fastify: FastifyInstance) {

  fastify.get('/guesses/count', async () => {
    const count = await prisma.guess.count();
    return { count }
  })

  fastify.post('/pools/:poolId/games/:gameId/guesses', { onRequest: [authenticate] }, async (request, reply) => {
    let winner = 'EMP';

    const createGuessParams = z.object({
      poolId: z.string(),
      gameId: z.string(),
    })

    const createGuessBody = z.object({
      firstTeamPoints: z.number(),
      secondTeamPoints: z.number(),
    })

    const getUser = z.object({
      sub: z.string(),
      name: z.string(),
      avatarUrl: z.string()
    })

    const userOn = getUser.parse(request.user);

    const { poolId, gameId } = createGuessParams.parse(request.params);
    const { firstTeamPoints, secondTeamPoints } = createGuessBody.parse(request.body);

    const participant = await prisma.participant.findUnique({
      where: {
        userId_poolId: {
          poolId,
          userId: userOn.sub
        }
      }
    })

    if (!participant) {
      return reply.status(400).send({
        message: "Você não pertence a este bolão!"
      })
    }

    const guess = await prisma.guess.findUnique({
      where: {
        participantId_gameId: {
          participantId: participant.id,
          gameId
        }
      }
    })

    if (guess) {
      return reply.status(400).send({
        message: "Você já fez um palpite para esse jogo!"
      })
    }

    const game = await prisma.game.findUnique({
      where: {
        id: gameId
      }
    })

    if (!game) {
      return reply.status(400).send({
        message: "Jogo não encontrado!"
      })
    }

    if (game.date < new Date()) {
      return reply.status(400).send({
        message: "Você não pode criar palpite depois da data do jogo!"
      })
    }

    if (firstTeamPoints > secondTeamPoints) {
      winner = game.firstTeamCountryCode
    } else if (firstTeamPoints < secondTeamPoints) {
      winner = game.secondTeamCountryCode
    }

    await prisma.guess.create({
      data: {
        gameId,
        participantId: participant.id,
        firstTeamPoints,
        secondTeamPoints,
        winner
      }
    })

    return reply.status(201).send()
  })

  fastify.get('/guesses/:id', async (request) => {
    const getPoolParams = z.object({
      id: z.string()
    })

    const { id } = getPoolParams.parse(request.params);

    const games = await prisma.guess.findMany({
      where: {
        participant: {
          id: id
        }
      },
      select: {
        id: true,
        firstTeamPoints: true,
        secondTeamPoints: true,
        winner: true,
        game: {
          select: {
            id: true,
            firstTeamCountryCode: true,
            secondTeamCountryCode: true,
            winner: true,
            firstTeamPoints: true,
            secondTeamPoints: true,
            group: true,
            date: true
          }
        }
      },
      orderBy: {
        game: {
          date: 'asc'
        }
      },
    })

    return { games };
  })

}
