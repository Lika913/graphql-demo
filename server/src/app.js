import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema.js";
import { root } from "./root.js";

const port = 5550;
const app = express();

app.use(cors());
app.use("/graphq", graphqlHTTP({
    graphiql: true, // подключает графический интерфейс
    schema: schema, 
    rootValue: root
}))

const server = app.listen(port, () => console.log(`server started on port ${port}`));
