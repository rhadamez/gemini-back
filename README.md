# Backend

## Requirements

- Git: --------------> yes
- GraphQL: -----> yes
- Apollo: ---------> yes
- TypeScript: ---> yes
- Jest: ------------> yes
- NestJS: --------> yes
- RxJS: -----------> no
- ESLint: ---------> yes
- Prettier: --------> yes
- Postgres: ------> yes

## How to execute

1 - Install dependencies with npm:

```
npm i
```

2 - Construct a postgres connection with docker-compose:

```
docker-compose up -d
```

3 - Create the migration through prisma:

```
npx prisma migrate dev
```

4 - Execute by:

```
npm run start:dev
```

5 - Access "localhost:3333/graphql" and make use of graphql:

_Create_

```
mutation {
  create(data: {
    description: "First description"
  })
  {
    id
    description
    done
    createdAt
    updatedAt
  }
}
```

_Update_

```
mutation {
  update(data: {
    id: 1
    done: false
    description: "Task updated"
  })
  {
    id
    description
  }
}
```

_Delete_

```
mutation{
  delete(data: {
    id: 1
  })
}
```

_List_

```
query {
  list {
    id
    description
    done
    createdAt
    updatedAt
  }
}
```

## Tests

1 - Run the default test command of nestjs:

```
npm run test
```
