# API Utopia Terrae

Installation instruction for Utopia Terrae API

## Installation

Step 1 : Clone the repository.

Step 2 : Install Node.js on your computer.

Step 3 : In your command prompt in the project foler, run npm global install for sequelize.

```cmd
npm install sequelize -g
```

Step 4 : Run npm install for dependencies.

```cmd
npm install
```
Step 5 : Create a database called "utopiaterrae"

Step 6 : Modify database parameters in config/config.json folder.

Step 7 : Run tables migration.

```cmd
npx sequelize db:migrate
```
Step 8 : Run the server.

```cmd
npm run start
```

Step 9 : Get an Api Key on [localhost](http://localhost:3000/)

Step 10 : Follow api documentation in the "doc" folder.

