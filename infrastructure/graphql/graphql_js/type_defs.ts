
import {readFileSync} from "node:fs";
import {glob} from "glob";


const loadTypeDefs = (): string => {
    const files = glob.sync("definitions/**/*.graphql")

    let typeDefs = ""

    files.forEach(file => {
        typeDefs += readFileSync(file).toString('utf-8')
    })

    return typeDefs
}

export const typeDefs = loadTypeDefs()