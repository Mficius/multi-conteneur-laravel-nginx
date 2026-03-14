FROM php:8.4-apache

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    libpng-dev \
    libzip-dev \
    libonig-dev \
    libjpeg-dev \
    libxml2-dev \
    libfreetype6-dev \
    zip \
    unzip 

RUN docker-php-ext-install pdo pdo_mysql mysqli
    
RUN a2enmod rewrite

RUN apt-get update -y 


COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

