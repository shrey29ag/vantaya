# Vantaya

Vantaya is a web application inspired by Airbnb, allowing users to list and book various properties around the world. It provides a platform for property owners to share their spaces and for travelers to find unique accommodations.

## Features

-   **User Authentication**: Secure signup and login functionality using Passport.js.
-   **Listings Management**: Users can create, read, update, and delete (CRUD) property listings.
-   **Reviews**: Users can leave ratings and reviews for listings.
-   **Image Upload**: Integration with Cloudinary for storing listing images.
-   **Responsive Design**: Built with Bootstrap for a mobile-friendly user interface.
-   **Session Management**: Express sessions with MongoDB store (connect-mongo).

## Tech Stack

-   **Frontend**: HTML, CSS, Bootstrap, EJS (Embedded JavaScript templating).
-   **Backend**: Node.js, Express.js.
-   **Database**: MongoDB (with Mongoose ODM).
-   **Authentication**: Passport.js.
-   **Cloud Storage**: Cloudinary.

## Prerequisites

Before running the application, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v20 or higher recommended)
-   [MongoDB](https://www.mongodb.com/) (Local or Atlas)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd Vantaya
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**

    Create a `.env` file in the root directory and add the following configuration keys:

    ```env
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_api_secret
    MAP_TOKEN=your_mapbox_token
    ATLASDB_URL=your_mongodb_atlas_connection_string
    SECRET=your_session_secret
    ```

4.  **Initialize the Database:**

    Populate the database with sample data.

    ```bash
    node init/index.js
    ```

5.  **Run the Application:**

    Start the server locally.

    ```bash
    node app.js
    ```

6.  **Access the App:**

    Open your browser and navigate to `http://localhost:8080`.

## Directory Structure

-   `controllers/`: Application logic for listings, reviews, and users.
-   `init/`: Database initialization scripts and sample data.
-   `models/`: Mongoose schemas for Database models (Listing, Review, User).
-   `public/`: Static files (CSS, JS, Images).
-   `routes/`: Express routes definitions.
-   `utils/`: Utility helper functions and error wrappers.
-   `views/`: EJS templates for the frontend.
-   `app.js`: Main entry point of the application.
