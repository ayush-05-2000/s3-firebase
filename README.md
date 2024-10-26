# S3 File Upload Project

## Overview
This project allows users to upload files to AWS S3 buckets after authenticating through Firebase. Each environment (dev, preprod, prod) has its own AWS S3 bucket and Firebase configuration for testing in different stages.

## Features
- **Firebase Authentication**: Users must log in via Firebase to access the file upload feature.
- **File Upload to S3**: Files can be uploaded to different S3 buckets depending on the environment.
- **Environment-Specific Configuration**: Each environment (dev, preprod, prod) has separate configurations for AWS S3 and Firebase.

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure Node.js is installed.
- **AWS Account**: Set up AWS S3 buckets and IAM users for each environment.
- **Firebase Project**: Create Firebase projects or configurations for each environment.

### Step-by-Step Setup

1. **Clone the Repository**:
    ```bash
    git clone <your-repo-url>
    cd project-root
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
   - Create `.env.dev`, `.env.preprod`, and `.env.prod` files in the root directory.
   - Add the following variables to each file, replacing with your actual keys:

    ```plaintext
# .env.dev    
REACT_APP_FIREBASE_API_KEY=AIzaSyDJXiWYIkzX4Wt4UVJvM-qI_m9drkBncYw
REACT_APP_FIREBASE_AUTH_DOMAIN=my-app-dev-96655.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=my-app-dev-96655
REACT_APP_FIREBASE_STORAGE_BUCKET=my-app-dev-96655.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=721583108381
REACT_APP_FIREBASE_APP_ID=1:721583108381:web:a99405db56522dce6131f4
REACT_APP_FIREBASE_APP_MEASUREMENT_ID=G-56C45GG568
REACT_APP_S3_ACCESS_KEY_ID=AKIAQXPZDE6DOIV7JJDQ
REACT_APP_S3_SECRET_ACCESS_KEY=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
REACT_APP_S3_REGION=eu-north-1
REACT_APP_S3_BUCKET_NAME=my-app-dev-bucket1

# .env.preprod
REACT_APP_FIREBASE_API_KEY=AIzaSyCWgRAAFofTjz-wYHCl0kCPNRi1kf9a-Gc
REACT_APP_FIREBASE_AUTH_DOMAIN=my-app-preprod.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=my-app-preprod
REACT_APP_FIREBASE_STORAGE_BUCKET=my-app-preprod.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=554045825720
REACT_APP_FIREBASE_APP_ID=1:554045825720:web:95d477f26b76bed4afca4d
REACT_APP_FIREBASE_APP_MEASUREMENT_ID=G-RDTZF10GX9
REACT_APP_S3_ACCESS_KEY_ID=AKIAQXPZDE6DC34P4FDR
REACT_APP_S3_SECRET_ACCESS_KEY=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
REACT_APP_S3_REGION=eu-north-1
REACT_APP_S3_BUCKET_NAME=my-app-preprod-bucket1

# .env.prod
REACT_APP_FIREBASE_API_KEY=AIzaSyCEY7KW8Pg_LqONTrSKMZQUsWGT49D4gpQ
REACT_APP_FIREBASE_AUTH_DOMAIN=my-app-prod-b62f6.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=my-app-prod-b62f6
REACT_APP_FIREBASE_STORAGE_BUCKET=my-app-prod-b62f6.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=935673349436
REACT_APP_FIREBASE_APP_ID=1:935673349436:web:0f9c2433d720bded42ca39
REACT_APP_FIREBASE_APP_MEASUREMENT_ID=G-DLFMH2VD01
REACT_APP_S3_ACCESS_KEY_ID=AKIAQXPZDE6DLUIRCLP5
REACT_APP_S3_SECRET_ACCESS_KEY=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
REACT_APP_S3_REGION=eu-north-1
REACT_APP_S3_BUCKET_NAME=my-app-prod-bucket1

    ```

4. **Firebase Configuration**:
   - Set up Firebase for each environment, obtaining unique API keys and project IDs.
   - Ensure Firebase authentication is configured to allow email/password login.

5. **AWS IAM Configuration**:
   - Create three IAM users, one for each environment, with access limited to their respective S3 buckets.
   - Attach policies to each bucket to allow only the specific IAM user to upload, list, and get objects.

6. **Run Application**:
    - To start the app with a specific environment, use the following commands:

    ```bash
    # Development
    env-cmd -f .env.dev npm start

    # Preproduction
    env-cmd -f .env.preprod npm start

    # Production
    env-cmd -f .env.prod npm start
    ```

    *(Make sure `env-cmd` is installed globally or in your project)*

7. **Deploying to Firebase** (Optional):
    - Follow Firebase hosting instructions to deploy the app.
    - Set environment variables in Firebase settings or configure `.env` files accordingly.

## Usage
1. **Login**: Enter your Firebase credentials to log in.
2. **Upload File**: Select a file and click "Upload" to send it to the respective S3 bucket.
3. **Environment-Specific Buckets**: Ensure the correct environment is set to upload to the intended bucket.

## Troubleshooting
- **CORS Issues**: Make sure each S3 bucket has the appropriate CORS policy to allow requests from your frontend domain (e.g., `http://localhost:3000`).
- **403 Forbidden Errors**: Check IAM policies and ensure correct access is granted for each user to their respective S3 bucket.
- **Signature Mismatch**: Verify AWS credentials in `.env` files are accurate for each environment.

## License
This project is licensed under the MIT License.

## Author
Ayush Anand


