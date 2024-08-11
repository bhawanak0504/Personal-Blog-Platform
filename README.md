# Personal-Blog-Platform

This is a personal blog platform built using Next.js and Firebase. It allows users to create, edit, and manage their blog posts. The platform includes user authentication and leverages Firebase Firestore for storing blog posts.

## Features

1. User Authentication: Secure sign-up, login, and logout functionality using Firebase Authentication.

2. Create and Edit Posts: Users can create and edit their own blog posts.

3. Firestore Integration: Blog posts are stored and retrieved from Firebase Firestore.

4. Protected Routes: Certain routes are protected and only accessible to authenticated users.

5. Responsive Design: The platform is responsive and works on various screen sizes.


## Project Structure
    ```bash
      personal-blog/
      ├── components/
      │   └── PrivateRoute.js
      ├── context/
      │   └── AuthContext.js
      ├── lib/
      │   └── firebase.js
      ├── pages/
      │   ├── posts/
      │   │   └── [id].js
      │   ├── auth/
      │   │   ├── login.js
      │   │   └── signup.js
      │   ├── create.js
      │   ├── edit.js
      │   ├── index.js
      │   ├── profile.js
      │   └── _app.js
      ├── styles/
      │   ├── globals.css
      ├── README.md
      ├── package.json
      └── next.config.js
  

## Installation Prerequisites

 Node.js and npm must be installed on your system.
   - Steps
   1. Clone the repository:

      ```bash
        git clone https://github.com/your-username/personal-blog.git
        cd personal-blog
      
   2. Install dependencies:

     ```bash
       npm install
   3. Set up your Firebase project:

       - Create a Firebase project at the Firebase Console.

       - Enable Firestore and Authentication (Email/Password) in your Firebase project.

   4. Copy your Firebase config details and create a .env.local file in the root directory with the following content:
     
     ```bash
       NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
       NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
       NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
       NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
       NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
       NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   5. Start the development server:
       ```bash
       npm run dev
     
<h2>The application will be available at "http://localhost:3000."


## Usage

1. Home Page: Displays a list of blog posts.
2. Login/Signup: Access the authentication pages at /auth/login and /auth/signup.
3. Create Post: Create a new post by navigating to /create.
4. Edit Post: Edit an existing post by navigating to /edit/[id], where [id] is the post's ID.
5. Profile: View the user's profile and their posts at /profile.

   
## Deployment
   
   You can deploy this application using Vercel or Firebase Hosting.

<h2>Deploying to Vercel</h2>

1. Push your project to a GitHub repository.

2. Go to Vercel, sign in with GitHub, and import your repository.

3. Follow the instructions to deploy your application.

4. Deploying to Firebase Hosting

5. Install Firebase CLI:

   ```bash
     npm install -g firebase-tools

6. Initialize Firebase in your project:

       firebase init

7. Select Hosting and follow the prompts.

## Deploy the application:

    ```bash
    npm run build
    firebase deploy
    
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
