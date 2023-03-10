#Chat-Gpt AI App

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
The project is a fullstack web application that utilizes the OpenAI API to generate text completions based on user input. The application is built with a frontend and a backend, connected to the OpenAI API.

The frontend is built using HTML, CSS and JavaScript, and allows the user to input a prompt and select various options such as temperature, max_tokens and other parameters. The user can also specify the filename to which the response should be exported. When the user submits the form, an AJAX request is sent to the backend with the user input and the selected options.

The backend is built using Node.js and Express.js, and listens for the AJAX request from the frontend. When a request is received, the backend calls the OpenAI API with the user input and options, and receives a response which is then sent back to the frontend. The response is also written to a file with the specified filename, so that it can be downloaded by the user.

The backend also has a route to handle the download of the generated response files. It listens to the GET request on /download and serves the file with the specified name in the root directory as a download.

The backend uses the dotenv package to load environment variables, and uses the openai package to interact with the OpenAI API.

Overall, the application allows users to generate text completions using the OpenAI API, and to export and download the generated response..
	
## Technologies
Project is created with:
* Vanilla Javascript
* Yarn
* Nodemon
* Node JS
* Express
* Express
* cors
* Open AI Api
	
## Setup
To run this project, install it locally using npm:

```
$ cd ./client <!-- "npm run dev" to start the app on the client side  -->
$ cd ./server <!-- "npm run server" to start the app on the server side  -->
$ npm start
```