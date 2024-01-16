# REDIS-SVELTE

this project we focus redis

## learn

- data structures
- add, update, and query with command
- key Naming Methodology
- lua script
- sort
- concurrency
- transactions(WATCH,LOCK)
- modules
- search and query

## redis docker

```bash
docker run -d --name rbay -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

## connect with redis-cli

```bash
docker exec -it redis-stack redis-cli

```

## seed

```bash
npm run seed
```

## run app

```bash
npm install && npm run dev
```
