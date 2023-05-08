Fullstack Node Realtime Chat
This is a fullstack web application that allows users to chat with each other in real time. The frontend of the application is built using ReactJS, while the backend is built using NodeJS. The chat functionality is implemented using Socket.IO.

Getting Started
To get started with this project, you will need to clone the repository to your local machine:

bash
Copy code
git clone https://github.com/<username>/fullstack-node-realtime-chat.git
Once you have cloned the repository, you will need to install the dependencies for both the frontend and backend:

bash
Copy code
cd fullstack-node-realtime-chat
cd client
npm install
cd ../server
npm install
After the dependencies have been installed, you will need to create a .env file in the server directory with the following contents:

makefile
Copy code
PORT=5000
CHATENGINE_PROJECT_ID=<your ChatEngine project ID>
CHATENGINE_SECRET_KEY=<your ChatEngine secret key>
You can obtain your ChatEngine project ID and secret key by signing up for a free account at https://chatengine.io/.

Finally, to start the application, you will need to run the following command from the server directory:

sql
Copy code
npm start
This will start both the backend and the frontend, and you should now be able to access the application at http://localhost:3000.

Features
This application allows users to:

Join a chat room with other users
Send and receive messages in real time
Add and manage users using ChatEngine.io
Contributing
Contributions to this project are welcome. If you find a bug or would like to suggest a new feature, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
