FROM php:7.4-fpm

WORKDIR /api

RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"

RUN docker-php-ext-install pdo pdo_mysql mysqli
