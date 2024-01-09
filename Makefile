start:
	docker run -d --name rbay -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
stop:
	docker container stop rbay
down:
	docker container rm rbay