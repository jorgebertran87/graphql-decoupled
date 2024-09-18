import {GetAllStuff} from "domain/GetAllStuff";
import {CreateStuff} from "domain/CreateStuff";
import {stuffRepository} from "root/di.config";

export const resolvers = {
    Query: {
        stuff: () => (new GetAllStuff(new stuffRepository())).run()
    },
    Mutation: {
        createStuff: (_source: any, args: any) => (new CreateStuff(new stuffRepository())).run(args.input.id, args.input.title)
    }
}