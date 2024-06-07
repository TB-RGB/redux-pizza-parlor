# React Pizza Parlor
#### App Created by: 

#### Duration: _1 day sprint_

## Description



## Prerequisites

- [PostgreSQL](https://www.postgresql.org/download/)
- [Postico](https://eggerapps.at/postico/v1.php) (_or another way to interact with database for setup_)
- [Node.js](https://nodejs.org/en/download/package-manager/current)

## Installation
1. Create database titled `pizza-parlor`
2. The queries within `database.sql` will be all needed to intialize your database
3. Within a terminal, navigate to this directory after cloning and run `npm install`
4. Run both `npm run server` and `npm run client`
   - **Note** this project used [nodemon](https://www.npmjs.com/package/nodemon) for server management, but it is not a dependancy in the `package.json`. If not using nodemon you will need to change the `server` script to say `node server/server.js`
5. Visit `localhost:5173` in your browser to interact with the app

## Usage

1. Visit [`localhost:5173`](http://localhost:5173)
2. You will first see a list of all pizzas available to order. Clicking on the image will give you a description of the the pizza.
3. You can add or remove pizzes to your cart using the corresponding `+` or `-` buttons below either. When finished, hit the `Next` button at the bottom
    - As you add or remove pizzas, you can see this both in the count on the pizza tile as well as in the top right of the app along with the total cost of the order
4. Next, input your info for your order 


## STRETCH GOALS

- Improve the styling of the app using Material-UI cards, buttons, nav bar and icons.
- Allow the user to go back to previous pages (until they've completed checkout).
- Display a list of pizzas for each order on the orders page.
- Add pictures to the `public/images` folder and update the image url for each pizza in the database.
- Add a button on the orders page to track delivery status.
- Allow admins to click on an order and see all of the details for that order (which pizzas were a part of that particular order). For the details of the order with `id` of `1`, it will be available to anyone with the url [http://localhost:5173/order/1](http://localhost:5173/order/1). This route is not built on the server, so you will need to create it.
