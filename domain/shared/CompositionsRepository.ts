import {Composition} from "./Composition";

export interface CompositionsRepository {
    all: () => Promise<Composition[]>
    save: (composition: Composition) => Promise<Composition|null>
}