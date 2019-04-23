import { Prisma } from 'prisma-binding'
import dotenv from 'dotenv'
dotenv.config()

const prisma = new Prisma ({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.DOCKER_URL
});

(async () => {
  const users = await prisma.query.users(null, '{id name email}')
  console.log(users)
})()



