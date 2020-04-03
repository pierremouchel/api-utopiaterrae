# API Utopia Terrae

Installation instruction for Utopia Terrae API

## Installation

Step 1 : Clone the repository.

Step 2 : Run npm install for dependencies.

```cmd
npm install
```
Step 3 : Create a database called "utopiaterrae"

Step 4 : Modify database parameters in config/config.json folder.

Step 5 : Run tables migration.

```cmd
npx sequelize db:migrate
```
Step 6 : Run the server.

```cmd
npm run start
```

Step 7 : Get an Api Key on [pip](http://localhost:3000/)

