# Getting Started with Create React App

# My React Project

This project is a React-based web application that demonstrates CRUD (Create, Read, Update, Delete) operations using **JSON Server** as a mock backend.

## Features

- **React Frontend**:
  - Built with React.js.
  - Dynamic rendering of data from JSON Server.
  - State management with hooks (`useState`, `useEffect`).

- **JSON Server**:
  - Simulates a REST API for development and testing.
  - Enables seamless CRUD operations:
    - **Create**: Add new data.
    - **Read**: Fetch data from the mock server.
    - **Update**: Edit existing data.
    - **Delete**: Remove unwanted data.

## Technologies Used

- **Frontend**: React.js, CSS, Bootstrap
- **Backend**: JSON Server (mock API)

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd my-react-app
   
2.cInstall dependencies:
   npm install

3.Start the React application:
    npm start

4.Set up and run JSON Server:
    Install JSON Server globally (if not already installed):
    npm install -g json-server

5.Create a db.json file with your mock data (example structure below):

6.Run JSON Server:
   json-server --watch db.json --port 3001
This starts a server at http://localhost:3001.

7.Access the application in your browser at:
  http://localhost:3000

8.Project Structure

my-react-app/

  ├── src/
  │   ├── components/
  │   │   ├── BookCard.js
  │   │   ├── AllBooks.js
  │   ├── App.js
  │   ├── index.js
  ├── db.json
  ├── package.json
  ├── README.md


CRUD Operations Example
1. Fetch All Books (READ):
Endpoint: GET /books
Displays a list of books fetched from JSON Server.
2. Add New Book (CREATE):
Endpoint: POST /books
Users can add a new book to the server.
3. Update Book Details (UPDATE):
Endpoint: PUT /books/:id
Users can edit book details.
4. Delete a Book (DELETE):
Endpoint: DELETE /books/:id
Users can remove a book from the server.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
