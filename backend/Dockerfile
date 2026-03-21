# Etape composer

FROM composer:2 as vendorSave

WORKDIR /app

COPY . .

RUN composer install  \
    --no-dev  \
    --optimize-autoloader \
     --prefer-dist \ 
     --no-scripts

# Etape php Etape finale

FROM php:8.4-fpm-alpine

RUN apk add --no-cache \
    bash \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    oniguruma-dev \
    libxml2-dev \
    zip \
    unzip \
    git

RUN docker-php-ext-install pdo \
    pdo_mysql \
    mbstring \
    xml \
    pcntl \
    exif \
    bcmath


WORKDIR /var/www/html

# copier le dossier vendor
COPY --from=vendorSave /app . 

# Optimiser laravel

RUN php artisan package:discover --ansi && \
    php artisan config:cache || true && \
    php artisan route:cache || true && \
    php artisan view:cache || true


RUN chown -R www-data:www-data /var/www/html

USER www-data

EXPOSE 9000

CMD ["php-fpm"]
