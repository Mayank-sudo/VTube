const express = require('express')
const { MongoClient, MongoServerSelectionError } = require('mongodb');

const app = express();







// const http = require('http');

// // Create a server object
// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Send a response
//   res.end('Hello, World!');
// });

app.use(express.json());

app.post('/api/data', (req, res) => {
  const data = req.body; // Access the data sent in the request body
  // Process the data and perform desired operations (e.g., save to MongoDB)
  res.status(200).json({ message: 'Data received successfully' }); // Send a response back to the client
});

app.get('/api/data', (req, res) => {
  // Logic to handle the GET request
  res.status(200).json({ message: 'hye this is mayank data sending to you' });
});

app.use(express.static('public')); // Assuming your static files are in the 'public' directory





// Define the port number

// Start the server and listen on the specified port
const port = 8800; // Choose a port number
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);

});

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// Connection URL
const url = "mongodb+srv://mayanloop:amit123@cluster0.3qogcwe.mongodb.net/?retryWrites=true&w=majority"

// Set the server selection timeout (in milliseconds)
const serverSelectionTimeoutMS = 5000; // 5 seconds

// Create a new MongoClient
const client = new MongoClient(url, {
  serverSelectionTimeoutMS,
});

// Connect to the MongoDB server
(async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB server');
    // Perform database operations
  } catch (error) {
    if (error instanceof MongoServerSelectionError) {
      console.error('Failed to select a MongoDB server:', error.message);
    } else {
      console.error('An error occurred during MongoDB connection:', error);
    }
  } finally {
    // Close the client connection
    await client.close();
  }
})();

