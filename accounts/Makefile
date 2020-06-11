up:
	docker-compose up -d $(cmd)

up-and-build:
	make up cmd=$(cmd)
	make build

down:
	docker-compose down $(cmd)

build:
	docker-compose exec node npm run build
	docker-compose exec php php composer.phar install
