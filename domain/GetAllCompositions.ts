import {CompositionsRepository} from "./shared/CompositionsRepository";
import {Composition} from "./shared/Composition";

export class GetAllCompositions {
    constructor(private readonly compositionsRepository: CompositionsRepository) {
    }

    async run(): Promise<Composition[]> {
        return await this.compositionsRepository.all()
    }
}