## Teste Brain Agriculture - Backend

Crie o arquivo .env e copie a configuração do arquivo .env.example.

Crie a base de dados "dados-produtor" no postgreSQL.

## Instalação das dependências

```bash
$ npm install
```

## Rode as migrations e o generate prisma client

```bash
$ npx prisma migrate dev --name init
$ npx prisma generate
```
## Rode seed e generate mock data

```bash
$ npm run seed
```

## Rodando a aplicação

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## API endpoints

```bash
# reports
$ GET: http://localhost:9000/api/reports/total-farms
$ GET: http://localhost:9000/api/reports/total-arable-area
$ GET: http://localhost:9000/api/reports/total-hectares

#charts
$ GET: http://localhost:9000/api/reports/type-area
$ GET: http://localhost:9000/api/reports/farms-by-state

# producers
$ GET: http://localhost:9000/api/producers/
$ DELETE: http://localhost:9000/api/producers/1
$ POST: http://localhost:9000/api/producers/
$ PATCH: http://localhost:9000/api/producers/1
```

### Referências
```bash
https://docs.nestjs.com/
```
