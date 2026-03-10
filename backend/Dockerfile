FROM php:8.4-apache

WORKDIR /var/www/html

RUN a2enmod rewrite

RUN apt-get update -y 


COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

