# E-Commerce Client-Side

This repository contains the client-side code of an e-commerce platform, providing a user-friendly interface for customers to browse products, manage their shopping cart, and complete purchases.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse products by categories
- Search and filter products
- Shopping cart management
- User authentication and authorization
- Checkout process
- Responsive design for various devices

## Tech Stack

- **Frontend**: React, Redux
- **Styling**: CSS/SCSS
- **API**: Consumes REST API built with Nodejs (backend)
- **Database**: MongoDb (backend-side)
- **State Management**: Redux for handling global state
- **Routing**: React Router for navigation

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/azdinserhani/e-commerce-client-side.git
    cd e-commerce-client-side
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file at the root of the project with the following environment variables (adjust based on your setup):
    ```bash
    REACT_APP_API_URL=<backend-api-url>
    ```

### Usage

To start the development server, run:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Production Build

To build the app for production, run:

```bash
npm run build
```

This will create a production-ready build in the `build` folder.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and create a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
