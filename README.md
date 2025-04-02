<div>
    <img src="frontend/public/logo.png" alt="Logo" style="width: 200px; height: auto;" />
</div>

&nbsp;

The **CroTechBot** is an advanced AI-powered chatbot that leverages Google Gemini AI to provide seamless, intelligent, and real-time conversational experiences. Built with a modern tech stack, including **React**, **Express.js**, and **MongoDB**, the application ensures a high-performance, scalable, and secure environment for users. It is designed to support multiple functionalities, such as **text-based conversations, image analysis, and interactive responses**, making it a powerful tool for both casual users and businesses looking to integrate AI-driven chat solutions.

&nbsp;

## Table of Contents

1. [Technologies](#technologies)    
    - [Backend Technologies](#backend-technologies)
    - [Frontend Technologies](#frontend-technologies)
2. [Features](#features)
3. [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)  
4. [Demo of the Application](#demo-of-the-application)
5. [Conclusion](#conclusion)

&nbsp;

## Technologies

### Backend Technologies

<div style="display: flex; justify-content: left; gap: 10px;">
    <a href="https://nodejs.org/" target="_blank">
        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" style="width: 150px; height: 45px;" />
    </a>
    <a href="https://expressjs.com/" target="_blank">
        <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" style="width: 150px; height: 45px;" />
    </a>
    <a href="https://www.mongodb.com/" target="_blank">
        <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" style="width: 150px; height: 45px;" />
    </a>
    <a href="https://deepmind.google/technologies/gemini/" target="_blank">
        <img src="https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini" style="width: 150px; height: 45px;" />
    </a>
    <a href="https://clerk.com/" target="_blank">
        <img src="https://img.shields.io/badge/Clerk-000000?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" style="width: 150px; height: 45px;" />
    </a>
</div>

&nbsp;

### Frontend Technologies

<div style="display: flex; justify-content: left; gap: 10px;">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" style="width: 150px; height: 45px;" />  
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" style="width: 150px; height: 45px;" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" style="width: 150px; height: 45px;" />
    </a>
    <a href="https://react.dev/" target="_blank">
        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" style="width: 150px; height: 45px;" />
    </a>
    <a href="https://imagekit.io/" target="_blank">
        <img src="https://img.shields.io/badge/ImageKit-000000?style=for-the-badge&logo=imagekit&logoColor=white" alt="ImageKit" style="width: 150px; height: 45px;" />
    </a>
</div>

&nbsp;

## Features

✅ **Real-Time AI Chat** – Engages in seamless, human-like conversations using Google Gemini AI.  
✅ **Image Upload & Recognition** – Users can upload images, and AI analyzes and responds accordingly.  
✅ **Persistent Chat History** – All conversations are stored in MongoDB for later retrieval.  
✅ **Streaming Responses** – AI responses are streamed in real-time, improving performance and interactivity.  
✅ **Secure Authentication** – User authentication powered by Clerk for enhanced security.  
✅ **Easy API Integration** – Developers can extend and customize chatbot functionalities.  

&nbsp;

## Installation

### Getting Started

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/Franjo7/CroTechBot.git
    ```
2. Open the project folder using your preferred code editor.

&nbsp;

### Backend Setup

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Create a `.env` file and configure environment variables:
    ```sh
    IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
    IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
    CORS_ORIGIN=http://localhost:5173
    MONGO_URI=your_mongo_uri
    CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key 
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the backend server:
    ```sh
    npm start
    ```
5. The backend should now be running on `http://localhost:3000`.

&nbsp;

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Create a `.env` file and configure environment variables:
    ```sh
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    VITE_IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
    VITE_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    VITE_GEMINI_PUBLIC_KEY=your_gemini_public_key
    VITE_API_URL=http://localhost:3000
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the frontend server:
    ```sh
    npm run dev
    ```
5. The frontend should now be running on `http://localhost:5173`.

&nbsp;

## Demo of the Application

🚀 *Coming soon...*

&nbsp;

## Conclusion

The **CroTechBot** project demonstrates the power of AI-driven chatbots in providing intelligent and interactive conversations. With **real-time responses, image recognition, and persistent storage**, it serves as a foundation for various chatbot applications, from personal assistants to customer support solutions.

Future enhancements could include:
- **Voice Input & Speech-to-Text** for an even more interactive experience.
- **Multi-Language Support** to expand usability globally.
- **Advanced User Analytics** for insights into chatbot interactions.

Thank you for exploring the **CroTechBot** project! If you have any questions or suggestions, feel free to reach out. Happy coding!