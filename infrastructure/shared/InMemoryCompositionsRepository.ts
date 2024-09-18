import {CompositionsRepository} from "domain/shared/CompositionsRepository";
import {Composition} from "domain/shared/Composition";

export class InMemoryCompositionsRepository implements CompositionsRepository {
    async all(): Promise<Composition[]> {
        return [
            new Composition(9, 'Title 1'),
            new Composition(10, 'Title 2'),
        ];
    }

    async save(composition: Composition): Promise<Composition|null> {
        //TODO: persist
        return composition
    }
}