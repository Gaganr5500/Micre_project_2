Micro Project 2 – Express & MongoDB CRUD API
📌 Overview
This project is a RESTful API built with Express.js and MongoDB. It demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations, serving as a foundational backend for applications requiring user management and data persistence.

🛠️ Technologies Used
Node.js: JavaScript runtime environment

Express.js: Web framework for Node.js

MongoDB: NoSQL database

Mongoose: ODM (Object Data Modeling) library for MongoDB

dotenv: Module to load environment variables

Nodemon: Utility that monitors for changes and automatically restarts the server

📁 Project Structure
pgsql
Copy
Edit
project-root/
├── server.js
├── db.js
├── itemRoutes.js
├── models/
│   └── Item.js
├── .env
├── package.json
└── README.md
server.js: Entry point of the application

db.js: Handles MongoDB connection

itemRoutes.js: Defines API routes

models/Item.js: Mongoose schema and model

.env: Environment variables

package.json: Project metadata and dependencies

README.md: Project documentation

🚀 Getting Started
Prerequisites
Node.js installed on your machine

MongoDB instance (local or MongoDB Atlas)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/micro_project_2.git
cd micro_project_2
Install dependencies:

bash
Copy
Edit
npm install
Configure environment variables:

Create a .env file in the root directory and add your MongoDB URI:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=3000
Start the server:

bash
Copy
Edit
npm run dev
The server will start on http://localhost:3000.

📬 API Endpoints
Base URL
bash
Copy
Edit
http://localhost:3000/api
Routes
Create Item

Endpoint: POST /api/items

Description: Adds a new item to the database

Request Body:

json
Copy
Edit
{
  "name": "Sample Item",
  "description": "This is a sample item."
}
Response:

json
Copy
Edit
{
  "message": "Item created successfully.",
  "item": {
    "_id": "unique_item_id",
    "name": "Sample Item",
    "description": "This is a sample item.",
    "createdAt": "timestamp"
  }
}
Read All Items

Endpoint: GET /api/items

Description: Retrieves all items from the database

Read Single Item

Endpoint: GET /api/items/:id

Description: Retrieves a single item by ID

Update Item

Endpoint: PUT /api/items/:id

Description: Updates an existing item

Request Body: (Include fields to update)

Delete Item

Endpoint: DELETE /api/items/:id

Description: Deletes an item by ID

🧪 Testing the API
You can use tools like Postman to test the API endpoints:

Create Item:

Method: POST

URL: http://localhost:3000/api/items

Headers:

Content-Type: application/json

Body:

json
Copy
Edit
{
  "name": "Test Item",
  "description": "This is a test item."
}
Get All Items:

Method: GET

URL: http://localhost:3000/api/items

Get Single Item:

Method: GET

URL: http://localhost:3000/api/items/{id}

Update Item:

Method: PUT

URL: http://localhost:3000/api/items/{id}

Headers:

Content-Type: application/json

Body: (Include fields to update)

Delete Item:

Method: DELETE

URL: http://localhost:3000/api/items/{id}

📸 Assignment Submission Guidelines
For your assignment submission:

Folder Structure:

Take a screenshot of your project's folder structure in your code editor (e.g., VS Code).

Terminal Window:

Capture the terminal showing the current working directory and the server running (e.g., output of npm run dev).

MongoDB Atlas:

Provide a screenshot of your MongoDB Atlas dashboard showing the collection and at least one document.

CRUD Operation (Create):

Use Postman to perform a POST request to create a new item.

Capture the request and response in Postman.

If necessary, take multiple screenshots to clearly show the process.

Compile Screenshots:

Paste all screenshots into a Word document.

Add brief descriptions or captions for each screenshot.

Convert the Word document to a PDF.

Submit:

Upload the PDF file to the assignment submission section on BBU.

📄 License
This project is licensed under the MIT License.
