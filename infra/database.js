import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
}

export default {
  query: query,
};
