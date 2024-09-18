export class Composition {
    constructor(private readonly _id: number, private readonly _title: string) {
    }

    id(): number {
        return this._id;
    }

    title(): string {
        return this._title;
    }
}