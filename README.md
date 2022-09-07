# Backend API Application
This is the backend side of Products Web Application.

## Config-environment
Thecnologies used to build and run this project.

- Node.js
- Express.js
- Sequelize
- Docker

## Getting Started

If you like to run this amazing app in you local machine. These are the steps you should follow:
### Prerequisites
In order to execute the project, it is necessary the latest version of npm and Node.js. In your machine you need to install docker system.

```sh
npm install npm@latest -g
```

## Installation
Perfect! Let's clone the repo, and install the dependencies of the project.

1. Clone the repo
    ```sh
    git clone https://github.com/NousCode/BE-veterinarian-commerce.git
    ```
2. Install NPM packages
    ```sh
    npm install 
    ```
3. Run the docker compose file
    ```sh
    docker-compose up -d
    ```
4. Run the project
    ```sh
    npm run dev
    ```


## Data Persistence
Docker provides a different way to use databases without install any DB environment. For this case I use 'Postgres Database' in a docker image service which is being used to persist data in this project.


## Endpoints Created - Queries
1. API 
    ```sh
    http://localhost:3000
    ```
2. Products
   * Get all Products:
        ```sh
        GET http://localhost:3000/products
        ```
   * Get a product by id
        ```sh
        GET http://localhost:3000/products/${id}
        ```
    * Add bot
        ```sh
        POST http://localhost:3000/products
        Content-Type: application/json

        {
            "name": string,
            "quantity": number,
            "store": string,
            "arehouse": bool
        }
        ```
    * Modify a product by id
        ```sh
        PUT http://localhost:3000/products/${id}

        Content-Type: application/json
        
        {
            "name": string,
            "quantity": number,
            "store": string,
            "warehouse": bool
        }
        
        ```
    * Delete a product by id
        ```sh
        DELETE http://localhost:3000/products/${id}
        ```
## Data Modeling
![Modelo de datos](./public/img/DiagramaF%C3%ADsico.png)

---
 This project was made with 🛠️ by Juan.
