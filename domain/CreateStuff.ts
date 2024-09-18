import {StuffRepository} from "./shared/StuffRepository";
import {Stuff} from "./shared/Stuff";

export class CreateStuff {
    constructor(private stuffRepository: StuffRepository) {
    }

    async run(id: number, title: string): Promise<Stuff|null> {
        const stuff = new Stuff(id, title);
        return await this.stuffRepository.save(stuff);
    }
}