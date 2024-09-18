import {buildSchema} from "graphql/utilities";
import {typeDefs} from "./type_defs";
import express = require('express');
import {createHandler} from "graphql-http/lib/use/express";
import {GetAllStuff} from "domain/GetAllStuff";
import {stuffRepository} from "root/di.config";
import {CreateStuff} from "domain/CreateStuff";

const schema = buildSchema(typeDefs);

const root = {
    stuff: () => (new GetAllStuff(new stuffRepository()).run()),
    createStuff: () => (new CreateStuff(new stuffRepository()).run(1, "Hola")),
}

const app = express();

app.all(
    "/",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)
app.listen(4001)
console.log("Running a GraphQL API server at localhost:4001")