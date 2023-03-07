# Getting Started with News Core Application

This project is a simple react application which gives daily news feed. This sample app is powered by [NewsAPI](https://newsapi.org/) and [Auth0 React SDK Quickstart](https://auth0.com/docs/quickstart/spa/react).

## Plugins used

- https://www.npmjs.com/package/react-paginate
- https://www.npmjs.com/package/react-axios
- https://www.npmjs.com/package/react-router-dom
- https://www.npmjs.com/package/react-moment

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```
### Configure credentials

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

## If you want to run:
- Go to [NewsAPI](https://newsapi.org/) and generate an API key (It's only 2 steps!)
- Put the API key at useAxios.js file
`
 const apiKey = "{API_KEY}"
`
- Go to index.js file and add the AuthO Credentials
`
      domain="{DOMAIN}"
      clientId="{CLIENT_ID}"
`
- Run the app

--------------------

## Screenshots

<img alt="NewsApp Home Page" height="450px" width="800px" src="https://github.com/Surabhi3/News-Core/blob/main/public/HeaderPage.jpg" />


<img alt="NewsApp Main Page" height="450px" width="800px" src="https://github.com/Surabhi3/News-Core/blob/main/public/MainPage.jpg" />

--------------------

