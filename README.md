# Локальное развертывание

На локальной машине должны быть установлены [node](https://nodejs.org/en/download), [docker](https://www.docker.com/products/docker-desktop/).

1. Клонируем приложение с репозитория:
```
git clone https://github.com/shtuchka666/rabbitmq-test.git ./
```
2. Устанавливаем необходимые зависимости:
```
npm i
```
3. Разворачиваем RabbitMQ в docker-контейнере:
```
install:rabbitmq
```
4. Запускаем оба микросервиса:
```
npm run dev
```