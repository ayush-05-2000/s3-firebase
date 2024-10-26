# S3 File Upload Project

## Overview
This project allows users to upload files to AWS S3 buckets after authenticating through Firebase. Each environment (dev, preprod, prod) has its own AWS S3 bucket and Firebase configuration for testing in different stages.

## Features
- **Firebase Authentication**: Users must log in via Firebase to access the file upload feature.
- **File Upload to S3**: Files can be uploaded to different S3 buckets depending on the environment.
- **Environment-Specific Configuration**: Each environment (dev, preprod, prod) has separate configurations for AWS S3 and Firebase.

## Setup Instructions

### Prerequisites
-**npm version**: 10.8.2
- **Node.js**: Ensure Node.js is installed.
- **AWS Account**: Set up AWS S3 buckets and IAM users for each environment.
- **Firebase Project**: Create Firebase projects or configurations for each environment.

### Step-by-Step Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ayush-05-2000/s3-firebase

    ```

2. **Install Dependencies**:
    ```bash
    npm install
    npm install firebase
    npm install aws-sdk
    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/icons-material
    npm install -g env-cmd


    ```

3. **Environment Variables**:
   - Create `.env.dev`, `.env.preprod`, and `.env.prod` files in the root directory.
   - Add the following variables to each file, replacing with your actual keys:



4. **Run Application**:
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


## Usage
1. **Login**: Enter your Firebase credentials to log in.
 ### Credentials

- **Production**
  - **Email:** test2@gmail.com  
  - **Password:** Password123  

- **Preproduction**
  - **Email:** test1@gmail.com  
  - **Password:** Password123  

- **Development**
  - **Email:** testuser@example.com  
  - **Password:** Password123  



3. **Upload File**: Select a file and click "Upload" to send it to the respective S3 bucket.
4. **Environment-Specific Buckets**: Ensure the correct environment is set to upload to the intended bucket.

## Troubleshooting
- **CORS Issues**: Make sure each S3 bucket has the appropriate CORS policy to allow requests from your frontend domain (e.g., `http://localhost:3000`).
- **403 Forbidden Errors**: Check IAM policies and ensure correct access is granted for each user to their respective S3 bucket.
- **Signature Mismatch**: Verify AWS credentials in `.env` files are accurate for each environment.


## Author
Ayush Anand


