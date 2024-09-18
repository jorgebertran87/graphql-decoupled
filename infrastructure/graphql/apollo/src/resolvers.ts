import {GetAllCompositions} from "domain/GetAllCompositions";
import {InMemoryCompositionsRepository} from "infrastructure/shared/InMemoryCompositionsRepository";
import {CreateComposition} from "domain/CreateComposition";

const compositionsRepository = InMemoryCompositionsRepository;

export const resolvers = {
    Query: {
        compositions: () => (new GetAllCompositions(new compositionsRepository())).run()
    },
    Mutation: {
        createComposition: (_source: any, args: any) => (new CreateComposition(new compositionsRepository())).run(args.input.id, args.input.title)
    }
}