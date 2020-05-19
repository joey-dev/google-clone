This is a clone of Google and it's apps. This project is just for me to learn.


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
