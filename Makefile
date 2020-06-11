init:
	make create-networks

up:
	sudo chmod -R 777 docker/mysql/sql_data
	docker-compose up -d $(cmd)
	make start-all-sub-projects cmd=$(cmd)

up-and-build:
	docker-compose up -d $(cmd)
	make accounts-up-and-build cmd=$(cmd)

down:
	docker-compose down $(cmd)
	make stop-all-sub-projects cmd=$(cmd)

create-networks:
	docker network create accounts

start-all-sub-projects:
	make accounts-up cmd=$(cmd)

stop-all-sub-projects:
	make accounts-down cmd=$(cmd)

accounts-up:
	make up -C ./accounts cmd=$(cmd)

accounts-up-and-build:
	make up-and-build -C ./accounts cmd=$(cmd)

accounts-down:
	make down -C ./accounts cmd=$(cmd)
