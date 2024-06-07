# Prime Pizza Parlor

Welcome to Prime Pizza Parlor! This is a web application designed to facilitate the ordering of pizzas online. Customers can browse through a selection of pizzas, view their descriptions and prices, and add them to their cart for checkout.

The pizzas they selected will stay in the cart while they go through the rest of the ordering process, filling out their Customer Information.  After filling out their info, the customer will be brought to the Checkout page, where they will see an overview of their order before submitting. Once they submit their order, the data combined into a single object and sent to the database.  When it is submitted, the user is brought back to the home page to view the pizzas, and the cart is emptied. 

## Features

- **Browse Pizzas**: Users can browse through a variety of pizzas available in the shop.
- **View Pizza Details**: Users can view detailed information about each pizza, including its name, description, and price.
- **Add to Cart**: Users can add as many of each type of pizza as they would like. The current number of items, and cost is displayed in the Header, and each Pizza in the shop view will display the quantity of that type selected. 
- **Remove from Cart**: Users can remove pizzas from their cart if they change their mind.
- 


## Technologies Used

- **React**: The frontend of the application is built using React 
- **Redux**: Redux is used for managing the application state, particularly for managing the cart and customer info state.
- **React Router**: React Router is used for handling navigation within the application.
- **CSS**: Cascading Style Sheets (CSS) are used for styling the components and layout of the application.

## Installation

To run Prime Pizza Parlor locally on your machine, follow these steps:

1. Fork & Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/redux-pizza-parlor.git
```

2. Navigate to the project directory:

```bash
cd redux-pizza-parlor
```

3. Install dependencies:

```bash
npm install
npm install -g nodemon
```
##### note: Nodemon was used in this project, but it is not a dependency. So you will either need to run the script above to globally install it for use, or modify the server script to say `server server/server.js`

4. Start the development server:

```bash
npm run server
npm run client
```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the application.

## Usage

- **Browsing Pizzas**: Navigate to the home page to browse through the available pizzas. Click on a pizza to view its details.
- **Adding to Cart**: To add a pizza to your cart, click on the "+" button next to the pizza. The quantity will be updated in the cart.
- **Removing from Cart**: To remove a pizza from your cart, click on the "−" button next to the pizza. The quantity will be updated in the cart.
- **ADMIN PAGE** You can directly navigate to `/admin` to view a table with all the Orders and their basic info.  


## Contributing

Contributions are welcome! If you'd like to contribute to the development of the Pizza Shop Application, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---