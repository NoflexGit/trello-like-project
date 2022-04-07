# Trellix Project

## [Demo](https://noflexgit.github.io/trello-like-project/)

## Installation
```sh
npm install

# or

yarn install
```

## Local development
```sh
npm run start

# or

yarn run start
```

## Tech Stack of the project
* [React](https://reactjs.org/)
* [Create React App](https://create-react-app.dev/)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [CSS-Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

### React
For this project I used a combination of React for UI and React Context combined with useReducer hook for the state management.
It is not popular and relevant choice for bigger projects, but in this case I wanted to show how a simple state management container could be written with React Hooks.

### CSS-Modules (SCSS)
For isolated styling of components I chose CSS-Modules with SCSS syntax. This allows you to write styles without fear of global clashes with component styles.

# Some commentaries

## What was implemented?
* User can add and name boards. (I think this is a very important part of being able to create boards.)
* User can add and name columns.
* User can add and edit cards. Also, user can move cards between columns.

## How is state working?
* For data persistence between sessions I use LocalStorage. All entities have flat and simple structure.
* Project context gets items from LocalStorage and provide actual data for all consumers components.
* Data store implemented in redux-like way. There are reducer and actions, which allows to set state and do some stuff like update data in LocalStorage.

## What would I improve in my code?
* Better code splitting for components
* Maybe I would add comments for some non-obvious parts of the codebase

## What would I add if this was a real application?
* Tags
* Search
* Better card editing
* Checklists
* etc
