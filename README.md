# Ayurvedic Dosha Prediction Website

This Ayurvedic Dosha Prediction Website is a full stack, responsive web application developed using the MERN stack (MongoDB, Express, React, Node.js) and Flask (Python). 
The website aims to detect an individual's dosha through a questionnaire and provides a meal plan along with detailed information about the user's dosha.

## Tech Stack

<p align="center">
<a href="https://react.dev/"><img src="https://user-images.githubusercontent.com/75678927/229337642-bc08741b-a9f1-4d8b-9c20-0e63ebed6fcb.png" width="70px" border="0" alt="React" title="React"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://nodejs.org/"><img src="https://user-images.githubusercontent.com/75678927/229337648-36131d8b-8098-4c33-95c7-3438a7990d83.png" border="0" width="70px" alt="NodeJS" title="NodeJS"/></a>&nbsp;&nbsp;&nbsp;&nbsp; 
<a href="https://expressjs.com/"><img src="https://user-images.githubusercontent.com/75678927/229337923-e4f100a3-4378-49b0-a1c3-26e47a9f7de5.png" border="0" width="70px" alt="ExpressJS" title="ExpressJS"/></a>&nbsp;&nbsp;&nbsp;&nbsp; 
<a href="https://www.mongodb.com/"><img src="https://user-images.githubusercontent.com/75678927/229337732-ec83ff2c-3029-4dc0-a316-f10146037e8e.png" width="70px" border="0" alt="MongoDB" title="MongoDB"/></a>  
<a href="https://flask.palletsprojects.com/en/3.0.x/"><img src="https://flask.palletsprojects.com/en/3.0.x/_images/flask-horizontal.png" width="200px" border="0" alt="Flask" title="Flask"/></a>  
</p>

## Features
1. Dosha Detection: Uses a decision tree machine learning algorithm to predict the user's dosha based on their responses to a questionnaire.
2. Meal Plan Recommendation: Provides a personalized meal plan according to the detected dosha.
3. User-Friendly Interface: Features a clean and intuitive user interface for easy navigation.

## Installation

1. - Fork the [repo](https://github.com/StevenNoronha/ayurveda)
   - Clone the repo to your local system

   ```git
   git clone https://github.com/StevenNoronha/ayurveda
   ```

2. - Front End:
     Install all the dependencies

   ```bash
   cd frontend
   npm install # This will install all the required dependencies for the front-end
   ```

   - Run Front End:

   ```bash
   npm start
   ```

3. - Back End:
     Install all the dependencies

    ```bash
   cd ..
   cd backend/
   npm install # This will install all the required dependencies for the back-end
   ```

   Go to db.js and add ur mongoDB url in
     ```bash
   const mongoURI = 'ADD YOUR URL HERE'
     ```

   - Run Back End:

   ```bash
   nodemon index.js # For Development with nodemon
   ```
   If it shows "Connected successfully" in the terminal your good to go!
   If not add your IP address to your mongoDB server on atlas to access the db server locally from your machine


## Screenshots

1. Landing Page
![image](https://github.com/StevenNoronha/ayurveda/assets/125193808/37a781c0-05bc-4cfa-bfe8-aa0bb4af95dd)

2. Login Page
![image](https://github.com/StevenNoronha/ayurveda/assets/125193808/0e25fb06-3a20-46e5-be85-3826e2dd63fa)

3. Questionnare
![image](https://github.com/StevenNoronha/ayurveda/assets/125193808/8a9f453e-b3bf-4c8f-a54c-43fb5e93439b)

4. Prediction
![image](https://github.com/StevenNoronha/ayurveda/assets/125193808/f4ee61d1-1255-42d7-92b2-6324ecc8d4e1)

5. User Profile
![image](https://github.com/StevenNoronha/ayurveda/assets/125193808/6ea9e670-f233-459c-95a1-b811d4369516)

6. Meal Plan
![image](https://github.com/StevenNoronha/ayurveda/assets/125193808/92a750b9-1f37-479c-872a-29454215480b)

7. Doctors Nearby
![image](https://github.com/StevenNoronha/ayurveda/assets/125193808/f6329956-7f56-4083-b89a-3cd86d6eb2f6)

