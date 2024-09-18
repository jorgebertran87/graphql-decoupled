import {StuffRepository} from "./shared/StuffRepository";
import {Stuff} from "./shared/Stuff";

export class GetAllStuff {
    constructor(private readonly stuffRepository: StuffRepository) {
    }

    async run(): Promise<Stuff[]> {
        return await this.stuffRepository.all()
    }
}