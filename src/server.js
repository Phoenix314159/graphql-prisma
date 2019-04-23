import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from'./db'
import './prisma'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import Subscription from './resolvers/Subscription'
import dotenv from 'dotenv'


dotenv.config()
const stringt = process.env.DATABASE_URL
const pubSub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
  },
  context: {db, pubSub}
})

server.start(() => {
  console.log('the server is running!')
})