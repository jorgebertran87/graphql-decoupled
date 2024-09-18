import {Stuff} from "./Stuff";

export interface StuffRepository {
    all: () => Promise<Stuff[]>
    save: (stuff: Stuff) => Promise<Stuff|null>
}