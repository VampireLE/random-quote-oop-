Welcome to the Random Quotes app!
This project consists of a client-side Vanila js and Node.js app.

## Running the App in Development Mode
#### Run server

1. Navigate to the root directory of the project.
2. Open a terminal window.
3. Change directory to the server subfolder
`cd server`
4. Install server dependencies by running the following command:
`npm install`
5. Run server in the production mode :
`npm run dev`
 Configure hosting server where you run application to forward all requests to the http://localhost:3000
7. Get assigned by the hosting provider URL for your backend API server for example https://my-random-quotes-api.com

#### Run client
1. There is no need to build the client as it already contains HTMK, CSS and JS files
2. In the `client/src/config.js` replace `http://localhost:5000` with URL assigned to the server API in the step 7. in the previous section. For example `http://my-random-quotes-api.com` 
3. Host all client files from the `client` subfolder on the public web server
4. Get assigned by the hosting provider URL for you client frontend application.
For example `http://random-quotes-frontend.com`
5. Open `https://random-quotes-frontend.com` in the web browser
