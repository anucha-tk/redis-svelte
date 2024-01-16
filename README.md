# REDIS-SVELTE

this project we focus build redis

## learn

- data structures
- add, update, and query with command
- key Naming Methodology
- lua script
- sort
- concurrency
- transactions(WATCH,LOCK)
- modules

## redis docker

```bash
docker run -d --name rbay -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

## connect with redis-cli

```bash
docker exec -it redis-stack redis-cli
```

## run app

```bash
npm install && npm run dev
```
