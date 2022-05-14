import { DataSource } from "typeorm";
import { Comment } from "./entity/Comment";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-3-229-161-70.compute-1.amazonaws.com",
  port: 5432,
  username: "juydasvgxhzvzi",
  password: "6e5c56c615e57720ebb872921ce6987f5284b72a50c4549f521ff1857d51ef13",
  database: "d1n8ufr19h77h0",
  synchronize: true,
  logging: true,
  entities: [Comment],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
