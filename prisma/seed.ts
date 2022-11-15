import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //Group A
  await prisma.game.create({
    data: {
      date: '2022-11-20T13:00:00.201Z',
      firstTeamCountryCode: 'QT',
      secondTeamCountryCode: 'EC',
      group: 'A'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-21T13:00:00.201Z',
      firstTeamCountryCode: 'SN',
      secondTeamCountryCode: 'NL',
      group: 'A'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-25T10:00:00.201Z',
      firstTeamCountryCode: 'QT',
      secondTeamCountryCode: 'SN',
      group: 'A'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-25T13:00:00.201Z',
      firstTeamCountryCode: 'NL',
      secondTeamCountryCode: 'EC',
      group: 'A'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-29T12:00:00.201Z',
      firstTeamCountryCode: 'NL',
      secondTeamCountryCode: 'QT',
      group: 'A'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-29T12:00:00.201Z',
      firstTeamCountryCode: 'EC',
      secondTeamCountryCode: 'SN',
      group: 'A'
    }
  })

  //GROUP B
  await prisma.game.create({
    data: {
      date: '2022-11-21T10:00:00.201Z',
      firstTeamCountryCode: 'GB-ENG',
      secondTeamCountryCode: 'IR',
      group: 'B'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-21T16:00:00.201Z',
      firstTeamCountryCode: 'US',
      secondTeamCountryCode: 'GB-WLS',
      group: 'B'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-25T07:00:00.201Z',
      firstTeamCountryCode: 'GB-WLS',
      secondTeamCountryCode: 'IR',
      group: 'B'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-25T16:00:00.201Z',
      firstTeamCountryCode: 'GB-ENG',
      secondTeamCountryCode: 'US',
      group: 'B'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-29T16:00:00.201Z',
      firstTeamCountryCode: 'IR',
      secondTeamCountryCode: 'UB',
      group: 'B'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-29T16:00:00.201Z',
      firstTeamCountryCode: 'GB-WLS',
      secondTeamCountryCode: 'GB-ENG',
      group: 'B'
    }
  })

  //GRUPO C
  await prisma.game.create({
    data: {
      date: '2022-11-22T07:00:00.201Z',
      firstTeamCountryCode: 'AR',
      secondTeamCountryCode: 'SA',
      group: 'C'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-22T13:00:00.201Z',
      firstTeamCountryCode: 'MX',
      secondTeamCountryCode: 'PL',
      group: 'C'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-26T10:00:00.201Z',
      firstTeamCountryCode: 'PL',
      secondTeamCountryCode: 'SA',
      group: 'C'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-26T16:00:00.201Z',
      firstTeamCountryCode: 'AR',
      secondTeamCountryCode: 'MX',
      group: 'C'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-30T16:00:00.201Z',
      firstTeamCountryCode: 'PL',
      secondTeamCountryCode: 'AR',
      group: 'C'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-30T16:00:00.201Z',
      firstTeamCountryCode: 'SA',
      secondTeamCountryCode: 'MX',
      group: 'C'
    }
  })

  //GRUPO D
  await prisma.game.create({
    data: {
      date: '2022-11-22T10:00:00.201Z',
      firstTeamCountryCode: 'DK',
      secondTeamCountryCode: 'TN',
      group: 'D'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-22T16:00:00.201Z',
      firstTeamCountryCode: 'FR',
      secondTeamCountryCode: 'AU',
      group: 'D'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-26T07:00:00.201Z',
      firstTeamCountryCode: 'TN',
      secondTeamCountryCode: 'AU',
      group: 'D'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-26T13:00:00.201Z',
      firstTeamCountryCode: 'FR',
      secondTeamCountryCode: 'DK',
      group: 'D'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-30T12:00:00.201Z',
      firstTeamCountryCode: 'TN',
      secondTeamCountryCode: 'FR',
      group: 'D'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-30T12:00:00.201Z',
      firstTeamCountryCode: 'AU',
      secondTeamCountryCode: 'DK',
      group: 'D'
    }
  })

  //GRUPO E
  await prisma.game.create({
    data: {
      date: '2022-11-23T10:00:00.201Z',
      firstTeamCountryCode: 'AL',
      secondTeamCountryCode: 'JP',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-23T13:00:00.201Z',
      firstTeamCountryCode: 'ES',
      secondTeamCountryCode: 'CR',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-27T07:00:00.201Z',
      firstTeamCountryCode: 'JP',
      secondTeamCountryCode: 'CR',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-27T16:00:00.201Z',
      firstTeamCountryCode: 'ES',
      secondTeamCountryCode: 'AL',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-01T16:00:00.201Z',
      firstTeamCountryCode: 'JP',
      secondTeamCountryCode: 'ES',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-01T16:00:00.201Z',
      firstTeamCountryCode: 'CR',
      secondTeamCountryCode: 'AL',
      group: 'E'
    }
  })

  //GROUP F
  await prisma.game.create({
    data: {
      date: '2022-11-23T07:00:00.201Z',
      firstTeamCountryCode: 'MA',
      secondTeamCountryCode: 'HR',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-23T16:00:00.201Z',
      firstTeamCountryCode: 'BE',
      secondTeamCountryCode: 'CA',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-27T10:00:00.201Z',
      firstTeamCountryCode: 'BE',
      secondTeamCountryCode: 'MA',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-27T13:00:00.201Z',
      firstTeamCountryCode: 'HR',
      secondTeamCountryCode: 'CA',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-01T12:00:00.201Z',
      firstTeamCountryCode: 'HK',
      secondTeamCountryCode: 'BE',
      group: 'E'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-01T12:00:00.201Z',
      firstTeamCountryCode: 'CA',
      secondTeamCountryCode: 'MA',
      group: 'E'
    }
  })

  //GRUPO F
  await prisma.game.create({
    data: {
      date: '2022-11-24T07:00:00.201Z',
      firstTeamCountryCode: 'CH',
      secondTeamCountryCode: 'CM',
      group: 'F'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-24T16:00:00.201Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'RB',
      group: 'F'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-28T07:00:00.201Z',
      firstTeamCountryCode: 'CM',
      secondTeamCountryCode: 'RB',
      group: 'F'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-28T13:00:00.201Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'CH',
      group: 'F'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-02T16:00:00.201Z',
      firstTeamCountryCode: 'CM',
      secondTeamCountryCode: 'BR',
      group: 'F'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-02T16:00:00.201Z',
      firstTeamCountryCode: 'RB',
      secondTeamCountryCode: 'CH',
      group: 'F'
    }
  })

  //GRUPO G
  await prisma.game.create({
    data: {
      date: '2022-11-24T10:00:00.201Z',
      firstTeamCountryCode: 'UY',
      secondTeamCountryCode: 'KR',
      group: 'G'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-24T13:00:00.201Z',
      firstTeamCountryCode: 'PT',
      secondTeamCountryCode: 'GH',
      group: 'G'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-28T10:00:00.201Z',
      firstTeamCountryCode: 'KR',
      secondTeamCountryCode: 'GH',
      group: 'G'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-28T16:00:00.201Z',
      firstTeamCountryCode: 'PT',
      secondTeamCountryCode: 'UY',
      group: 'G'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-02T12:00:00.201Z',
      firstTeamCountryCode: 'KR',
      secondTeamCountryCode: 'PT',
      group: 'G'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-12-02T12:00:00.201Z',
      firstTeamCountryCode: 'GH',
      secondTeamCountryCode: 'UY',
      group: 'G'
    }
  })

}

main()