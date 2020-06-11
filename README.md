to install:
- get or create the .env file for api
---
- cd /api
- composer install
- mkdir -p config/jwt
- openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
- openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout
- php bin/console make:migration
- php bin/console doctrine:migrations:migrate
- php bin/console doctrine:fixtures:load
- cd ../spa
- npm install
- npm run build

# Google clone

This is a clone of Google and it's apps. This project is just for me to learn.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Requires docker and docker-compose

```
docker --version
docker-compose --version
```

### Installing

A step by step series of examples that tell you how to get a development env running

First the url's need to be added to the `/etc/hosts`. 
Those are:
- 172.0.0.1 accounts.googleclone.com

```
nano /etc/hosts

...
172.0.0.1 accounts.googleclone.com
...
```

Create and fill in the .env files. with the correct values

```
cp accounts/core/example.env accounts/core/.env
nano accounts/core.env
```

Run the docker-compose commands with make
```
make up
```

Initialise the database
```
make initialiseDatabase
```

Now go to accounts.google.com and you should see a login screen where you can login

## Running the tests

To run all the tests, run the command `make testAll`. This will run all the tests in all projects

## Deployment

To deploy this on a live server, you should have docker swarm on that server. Than you can just run all the docker-compose files with service.

## Built With

* React
* Symfony
* Mysql

## Authors

* **Joey** - *All the work :)*

## License

This project is licensed under the MIT License

## Acknowledgments

* This is just a clone project to learn from.
