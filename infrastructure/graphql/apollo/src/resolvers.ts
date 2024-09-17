const compositions = [
    {
        title: 'The Awakening',
        id: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        id: 'Paul Auster',
    },
];

export const resolvers = {
    Query: {
        compositions: () => compositions
    },
    Mutation: {
        createComposition: (_source: any, args: any) => args.input
    }
}