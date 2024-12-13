Prerequisite:

WSL installed
Unbuntu installed
Docker engine installed

Download Postgres:

docker pull postgres:17.2-alpine

Create volume pgdata:

docker volume create pgdata

Use the DB:

docker compose up -d
