import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import Fastify from "fastify";

import { gameRoutes } from '../src/routes/game';
import { guessRoutes } from '../src/routes/guess';
import { poolRoutes } from '../src/routes/pool';
import { userRoutes } from '../src/routes/user';
import { authRoutes } from './routes/auth';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  //MUDAR PARA VARIAVEL DE AMBIENTE
  await fastify.register(jwt, { secret: 'nlwcopa' })

  await fastify.register(authRoutes);
  await fastify.register(poolRoutes);
  await fastify.register(userRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(gameRoutes);

  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()