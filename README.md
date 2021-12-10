# Leave Module DB

## Project description
Sample connection and model definition for Leave Module DB using Sequelize and Sqlite

## Folder structure

    config/ # Database conections for different environments

    models/ # Models definitions, basicly ORM mapping for properties and relationships between tables

    migrations/ # Code that allows to track database changes, add or revert features in database

    seeders/ # Code that allows to populate database with dummy or real data depends on the environments and the needs


## Installation

    npm install

## Run migrations

    npx sequelize-cli db:migrate

## Populate database

    npx sequelize-cli db:migrate


