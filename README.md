# Pferd Store

Pferd eCommerce project for ReactJS Course from Coderhouse by Darío Javier Romero


## Made with Create React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  
## Installing project dependences

In the project directory, run:

`npm install`

## Running the project

To run the app in the development mode, in the project directory, run:

`npm start`

* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* The page will reload if you make edits.\
* You will also see any lint errors in the console.

## Usage

### Store

* The store can be accessed at the root web level (/).
* Every product can be added to cart from the item detail view (item/:itemId).
* Every product category can be accesed and navigated (/category/:categoryId) from the dropdown menu in the navbar. 
* To add any product to the cart, it needs to be in stock (stock > 0).
* The cart only appears when there are at leas 1 item on it.
* Cart page (/cart) provides support to delete one or all cart items and also to proceed to checkout.

### Checkout / Payment

* Once on (/checkout) the user can fill the form with delivery and contact data and then proceed to payment.
* Payment form (/payment/:orderId) can be filled with any card data and mock the payment with succesfull state.
* When the payment is received, user will be redirected to orders view.

### Orders

* Orders view (/order/:orderId) is intended to guide the user based on the given order status
* For a Created but not paid order, it will offer the option to proceed to payment.
* For a Paid order, instead, it will show the confirmed order view, allowing user to return to home.
* For non-existent orderID it will return NotFound view.

### General considerations

* In order to provide a better User Experience, many views has validations on parameters, routes and UI Elements.
* Important messages related to cart will appear in a customized Toaster component.
* About (/about) and Resellers (/resellers) are just mock views, sorry about the lack of content.
* I did the best for making the website mobile Friendly, but it's not the best viewport to run it.
* That's why I strongly recommend to access the app via desktop browser.
* There is a live instance of the main branch at [Firebase](https://pferd-store.web.app/)
* The project is in development instance, that's why a TODO.md file exists on the repository, you can check it out to know what's next, and if you feel so, let me know your thoughts on [my e-mail](mailto://dario.javier.romero@gmail.com/) ;)

> Thanks!
This was a very fun start for a project, and I hope that i can keep it going!
Special thanks to the teacher Agus, for making every class better than the last one and inspire us to keep learning every day!