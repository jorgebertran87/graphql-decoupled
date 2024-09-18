import {StuffRepository} from "domain/shared/StuffRepository";
import {Stuff} from "domain/shared/Stuff";

export class InMemoryStuffRepository implements StuffRepository {
    async all(): Promise<Stuff[]> {
        return [
            new Stuff(9, 'Title 1'),
            new Stuff(10, 'Title 2'),
        ];
    }

    async save(stuff: Stuff): Promise<Stuff|null> {
        //TODO: persist
        return stuff
    }
}