// Axios is a package that provides many pre-built HTTP
// client-server requests, with a database. In this 
// demonstration we can call an Axios request to retrieve
// stored user data via a GET request.
//
// Also demonstrated is an asynchronous call. When creating
// web-services, they very likely will want to (or need to)
// interact with other web-services. This could be by sending
// a request for some data or to process something. It may take
// time for the request to return, and we don't want to halt
// our entire server while waiting for the return.
//
// We use the ASYNC keyword for functions we want to be
// asynchronous, and the AWAIT keyword for HTTP requests in
// which we expect a return from 'at some point in the future'.


// Import the required packages
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


// Handle a GET request of a user of a specified ID. Note that 
// we are making the request asynchronously, meaning that we
// make the request, and then act on the result once it arrives
// in the future. To do so, we use the ASYNC keyword.
app.get('/api/users/:id', async (req, res) => {

    // Use a try-catch block to handle (catch) any unexpected errors
    try {
        // Retrieve the ID from the URL
        const { id } = req.params;
        console.log(`Retrieving user ID: {id}`);

        // Send a GET request to retrieve the user. We use the AWAIT
        // keyword to specify that this is an asynchronous call, and
        // that we will receive the response at a later time.
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        // When the response is received, display it.
        console.log(response.data);
        res.send(response.data);
    }
    catch (error) {
        // Handle (catch) any unexpected errors.
        console.error(error);
        res.status(500).send('Error received');
    }
});


app.get('/', (req, res) => {
    res.send("Welcome!");
});


app.listen(PORT, () => {
    console.log(`Microservice listening at http://localhost:${PORT}`);
    console.log()
});
