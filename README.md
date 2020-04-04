This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Mindful

This is a case management application created to help case managers keep track of their clients' appointments with different medical and mental health providers. The case manager (or user) is able to add new clients to their caseload, add new providers to the database and create and delete appointments with providers. The case manager can also find contact information about clients and providers on their respective show pages. This application is styled with CSS and Bootstrap.

This application has two parts: the front end and the back end. The front end was created utilizing Javascript, React and Redux. To run the front end, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The backend was created using Rails and can be found at https://github.com/nbert100/mindful-backend

You can run:

### `rails s -p 8080`

You may then open [http://localhost:8080] to view in browser

#### Future Goals

As I continue to build on this application, I hope to add login functions for each case manager or user; connect to a database of real providers with real contact information and include insurance carrier in order to assist case managers in the search for in-network providers for their clients.
