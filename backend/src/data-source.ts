import "reflect-metadata"
import { DataSource } from "typeorm"
import { Following } from "./entities/Following"
import { Like } from "./entities/Like"
import { Reply } from "./entities/Reply"
import { Thread } from "./entities/Thread"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "circleapp",
  synchronize: false,
  logging: false,
  entities: [Reply, Following, Like, User, Thread],
  migrations: ['src/migrations/*.ts'],

  subscribers: [],
})
