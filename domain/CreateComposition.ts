import {CompositionsRepository} from "./shared/CompositionsRepository";
import {Composition} from "./shared/Composition";

export class CreateComposition {
    constructor(private compositionsRepository: CompositionsRepository) {
    }

    async run(id: number, title: string): Promise<Composition|null> {
        const composition = new Composition(id, title);
        return await this.compositionsRepository.save(composition);
    }
}