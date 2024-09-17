import {glob} from "glob";
import {readFileSync} from "node:fs";


const loadTypeDefs = (): string => {
    const files = glob.sync("src/definitions/**/*.graphql")

    let typeDefs = ""

    files.forEach(file => {
        typeDefs += readFileSync(file).toString('utf-8')
    })

    return typeDefs
}

export const typeDefs = loadTypeDefs()