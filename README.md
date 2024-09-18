## Graphql Decoupled
### This repo shows how to decouple business logic from infrastructure

- We have two folders: Domain (business logic) and Infrastructure (graphql - apollo, repositories, datadog, etc)
- Into the Domain folder we have our Application Services (CreateStuff, GetAllStuff, etc)
- This logic is called as resolvers from Apollo Server

### What do we achieve with this?
- Our business logic doesn't depend from GraphQL. We can move this one to another server different from Apollo, or even to another API type (RestFul, a new one that appears better than GraphQL, etc)
- Our unit tests can be focused into our Domain Folder, and we don't worry about Infrastructure

### How to start our Apollo Server?
- Move into `infrastructure/graphql/apollo` folder and execute:
    - `yarn install`
    - `yarn start`

#### Enjoy!! :)