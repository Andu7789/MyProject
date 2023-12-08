# My First Project

## Recipe finder and shop

This site was created to showcase my learnings from a 12 week course (an Introduction to learning HTML, Javascripts and c#) and formed part of my final presentation.

  <img src="Assets/Screen Shots/Recipe Finder.png" alt="Recipe Finder">


## Contents


* [Introduction](#My-First-Project)
* [Libraries, Technologies and Techniques](#Libraries,-Technologies-and-Techniques)
* [Design (UXD)](#design-uxd)
    * [Scope](#scope)
    * [Structure](#structure)
* [Features](#Features)
    * [Login Page](#Login-Page)
    * [Navigation Bar](#Navigation-Bar)
    * [Recipe Page](#Recipe-Page)
        * [Product View Page](#DProduct-view-Page)
        * [Recipe Carousele](#Recipe-Carousel)
    * [Shopping Page](#Shopping-Page)
    * [Checkout Page](#Checkout-Page)
        * [Delivery Slot Chooser](#Delivery-Slot-Chooser)
        * [Apply discount code](#Apply-discount-code)
    * [Shopping Cart](#Shopping-Cart)
    * [Email](#Email)
    * [User Account Management](#User-Account-Management)
        * [Stock Management Page](#Stock-Management-Page)
        * [Address Choice](#Address-Choice)
        * [Address Management](#Address-Management)
        * [New Address Lookup](#New-Address-Lookup)
        * [Previous Orders](#Previous-Orders)
    * [Admin Portal](#Admin-Portal)
        * [Stock Control](#Stock-Control)
        * [Discount Codes](#Discount-Codes)
        * [Memory Destruction](#Memory-Destruction)
* [Future Feature Enhancements](#Future-Feature-Enhancements)
* [Known outstanding bugs](#Known-outstanding-bugs)
* [Contributors](#Contributors)

## Libraries, Technologies and Techniques

* HTML - for the Web Pages
* Javascript for the majority of the data manipulation and the backend API calls
* C# for the logon details storage on the Admin Portal
* Local Storage - used to store Addresses (before I had taught myself how to use Databases)

* [BootStrap](https://getbootstrap.com/) - to assist with the visuals I learnt  as I found this gave me greater control over the style and layout of the pages.
* [EDAMAM](https://api.edamam.com/) - provided the API data for the recipe lookup
* [Express js](https://expressjs.com/) - for running the Web Server
* [NEeDB](https://dbdb.io/db/nedb) - for running my Databases
* [@ideal-postcodes/address-finder](https://www.npmjs.com/package/@ideal-postcodes/address-finder) - for the address lookup functionality
* [Clerk.com](https://clerk.com/) - for the Google Authentication at log on
* [Nodemailer](https://www.npmjs.com/package/nodemailer) - for sending the customer order email
* [cxgenie.ai](https://cxgenie.ai/) - for the chatbot
* [.md](https://www.ionos.co.uk/digitalguide/websites/web-development/what-is-a-md-file/) - so that I could learn how to write this ReadMe
## Design

### Scope

The scope of the project has grown over the 12 weeks of the course.  Initially the idea was to have just the 2 pages (recipe finder and a phone shop)...  As it is, to create those 2 pages didn't take me long so I started to investigate what other features I could add to stretch myself and from that small acorn grew a not too small Oak!!  

As the shopping side of the project took shape I took inspiration from [tesco.com](https://www.tesco.com/) and [Amazon.com](https://www.amazon.co.uk/) to see which features they provided and to see if I could work out how to replicate them.

### Structure

For both the Recipe Finder page and the shopping Page I wanted to make sure they had the same 'look and feel' to ensure seemless continuity as the user moved through the site.  On both pages there are:-

* Background image
* Navigation Bar
    * Website Logo
    * With links to the Recipe, Shop and Video Pages
    * Links to the users Google Account, User Account sections and a link to the Checkout (cart icon)
* Shopping cart
    * When items have been selected they are shown here and can be deleted [see below for more information](#Shopping-Cart)
* Search bar - with Search and reset buttons - utilises 'focus' on search bar so a user can press the 'enter' key once they have typed and this will carry out the same functionality as clicking the 'search' button
* Filter buttons
    * On the Recipe page these are used for selecting different types of meals and by country
    * On the Shopping pade these are used for selecting the type of food item by category
        * Also the option to fiter by price -
            * High to Low 
            * Low to High
* Item cards
    * Display the requested recipes/items

* Login Page

    * Background image
    * Enlarged Logo
    * Logon Button
        * On click - display the logon option screen
            * Email logon or
            * Use Google Account

* Video Page

    * Background image
    * Navigation Bar
        * Website Logo
        * With links to the Recipe, Shop and Video Pages
        * Links to the users Google Account, User Account sections and a link to the Checkout (cart icon)
    * Shopping cart
        * When items have been selected they are shown here and can be deleted [see below for more information](#Shopping-Cart)
    * Search bar - with Search and reset buttons - utilises 'focus' on search bar so a user can press the 'enter' key once they have typed and this will carry out the same functionality as clicking the 'search' button
    * 2 Images, each with a 'Watch Now' button
        * On click of either button, the corresponding video is displayed which is linked to [YouTube](https://www.youtube.com/)

* Checkout Page

    Background image
    * Navigation Bar
        * Website Logo
        * With links to the Recipe, Shop and Video Pages
        * Links to the users Google Account, User Account sections and a link to the Checkout (cart icon)
    * Shopping cart
        * When items have been selected they are shown here and can be deleted [see below for more information](#Shopping-Cart)
    * Search bar - with Search and reset buttons - utilises 'focus' on search bar so a user can press the 'enter' key once they have typed and this will carry out the same functionality as clicking the 'search' button
    * Cards displaying each of the items from the shopping cart:-
        * Product image
        * Product name
        * Product Quantity
        * Price of items
    * Default address - with a button to select a different address 
    * Delivery slot - with a button to select a time slot and on selection the chosen details are populated under the button
    * Discount code - with an input box and button.  Depending on the code entered or the number of codes enetered, different information is displayed under the input box
    * Complete order button

* Change Address Popup

    * Displays current addresses saved in the users address book
    * Provides the option to choose one of the saved ones, cancel or find a new address

* Find New Address Popup

    * Field which will auto complete as the user starts to enter their address
    * Buttons to select the chosen address or cancel

* User Account Popup

    * Button to view previous orders
    * Button to access address book

* Address Book

    * Cards for each saved address
        * Each address has a button to make it default or to remove it
    * Buttons to close the section or add a new address

* Stock Control Page

    * Nav bar with logo, Username and Password enrty fileds and confirmation button

        * Once logged in:-

            * Stock Control Section

                * Filter buttons to choose product type
                * Card for each product with:
                    * Product name
                    * Input box to amend quantity
                    * Update button

            * Discount Code Section

                * Card for each discount code with:
                    * Input box containg code name
                    * Input box to amend code value
                    * Update and cancel buttons
            
            * Memory Destruct Button
 

## Features

### Login Page
 <img src="Assets/Screen Shots/Logon Page.png" alt="Logon Page">

 On clicking the 'Sign in' button the Google logon popup is displayed giving the option to use an email to login or to use their Google account login.
  <img src="Assets/Screen Shots/Logon Google.png" alt="Google Logon">

  On a succesful login, the user is directed to the [Recipe Page](#Recipe-Page)


### Navigation Bar
<img src="Assets/Screen Shots/Navigation Bar.png" alt="avigation Bar">

* Buttons
    * Links to Recipe, Shop and Video pages - The selected pages name is highlighted 
    * Link to users Google account - user can use this to log out or manage their Google account
    * Account button - on click this opens up the [User Account Management](#User-Account-Management) section
    * Shopping cart icon - If there are items in the shopping cart, when clicked the user is taken to the Checkout Page.  If no items in the cart, clicking has no impact

### Recipe Page
  <img src="Assets/Screen Shots/Recipe Finder.png" alt="Recipe Finder">

  * Search Input Bar with Search and reset buttons - 
    * User can enter a main ingredient which in conjunction with the filters will return 20 recipes
    * utilises 'focus' on search bar so a user can press the 'enter' key once they have typed and this will carry out the same functionality as clicking the 'search' button
  * Filters
    * Cuisine Type - Choose a country
    * Meal Type - Breakfast, lunch, dinner etc
    * Dish Type - Starter, salad, soup etc

  * Recipe cards
    * Each card displays:-
        * Recipe Image - clickable and takes the user to URL
        * Recipe Title - clickable and takes the user to URL
        * Meal Type
        * Dish Type
        * Cusine Type
        * Number the recipe serves

  * Shopping Cart
    * Displays currently selected items from the shopping page with:
        * The option to delete an item
        * Button to click through to the checkout

### Shopping Page
  <img src="Assets/Screen Shots/Shop.png" alt="Shop">
  
 * Search Input Bar with Search and reset buttons - 
    * User can use 'fuzzy search' to find items
    * utilises 'focus' on search bar so a user can press the 'enter' key once they have typed and this will carry out the same functionality as clicking the 'search' button
    * If any products match the serach phrase they will be displayed
    <img src="Assets/Screen Shots/Product Search.png" alt="Product Search">
    * Also the option to fiter by price -
        * High to Low 
        * Low to High
    <img src="Assets/Screen Shots/Filter by Price.png" alt="Filter by Price">
    * If no matches a message will be displayed
     <img src="Assets/Screen Shots/Shop - no items match search.png" alt="Shop - no items match search">
    

 * Product filters
    * On clicking, any products equal to the selected type will be displayed
    * Selected 'type' button will be highlighted
    <img src="Assets/Screen Shots/Shop - Filter by type.png" alt="Filter by Type">
  

 * Product Cards
    <img src="Assets/Screen Shots/Shop cards.png" alt="Shop Cards">

    * Product Image
    * Product Price
    * Amount in Stock 
    * Amount selected and in the cart
    * Input box to enter quantity
    * Add to cart box

    If the item is out of stock, the following are displayed
    * Product Image
    * Product Price
    * Out of stock message

    Stock amounts can be amended in the [Admin Portal](#Admin-Portal)

    If an item is selected and added to the shopping cart, the 'In Cart' section will be highlighted and will reflect the number in the cart.

    If the amount in the input box is increased or decreased, this is reflected in both the 'In Cart' section and the [Shopping cart](#Shopping-cart).

    If a user clicks on the **Product Image** or **Product Price** this will display the [Product View Page](#Product-View-Page).

### Product View Page
<img src="Assets/Screen Shots/Product View.png" alt="Product View">

All the information from the item which was clicked is displayed.  This includes pulling through the the number already in the cart and populating the quantity input box.  Again, if you amend the quantity it will be reflected in the 'In Cart' section and be highlighted.

* Recipe Carousel
    * The 3 filters from the Recipe Page are used here again, once selected, a user clicks serach and a carousel will be dispalyed which scrolls automatically on a 2 second delay
    * If the user hovers over an image the carousel will stop
    * If the user clicks on an image it will open that recipe in a new page

### Shopping Cart
<img src="Assets/Screen Shots/Shopping Cart.png" alt="Shopping Cart">

* Contains all the items chosen by the user:-
    * Product Price
    * Quantity chosen
    * Total price of the product * quantity chosen
* Red 'x'
    * If a user clicks this it will delete the item from the shopping cart and update the individual product card
* Sub Total
    * Price of all items in the Shopping Cart
* Checkout Button
    * If a user click this it takes them to the [Checkout Page](#Checkout-Page)


### Checkout Page
<img src="Assets/Screen Shots/Checkout Screen.png" alt="Checkout Page">

#### Left hand side

Displays number of items in the cart, if items is equal to 1 then it displays the word **item**, if there are more than 1 it displays **items**

* List of items in cart - 1 line per **Product Title**
    * Product Image
    * Product Title
    * Quantity
    * Total price of the product * quantity chosen

    * Total Price of cart

#### Right hand side

* Address section
    * Displays the **Default** Address and a button to change the address - this takes the user to the [Address Choice](#Address-Choice) popup
* Delivery Slot Chooser
    * Displays a button to choose a delivery slot and a message detailing either
        * "No slot selected"

            or

        * the date, time and price of the selected slot

        On clicking the 'Choose Delivery Slot' button the delivery slot window is displayed
    <img src="Assets/Screen Shots/Choose Delivert Slot.png" alt="Checkout Page">

    *   The dates shown are always today and the next 6 days.  When a user selects a slot the background and the text in the selected slot change.  This will then be used to populate the message under the 'Choose Delivery Slot' on the Checkout Screen.


        <img src="Assets/Screen Shots/Delivery Slot message.png" alt="Delivery slot message">        

* Apply discount code
    * Displays an input box to enter a discount code and a button to add that code
    * 3 options are possible with the discount codes:
        * Invalid code
        <img src="Assets/Screen Shots/Discount Code - invalid.png" alt="Discount code invalid">

        * Successful code
        <img src="Assets/Screen Shots/Discount Code - Valid.png" alt="Discount code successful">

        * Only 1 code is allowed
        <img src="Assets/Screen Shots/Discount Code - Only 1 code allowed.png" alt="Discount code only 1 allowed">
    
    If a code is a valid one, the total cost of the shopping cart is reduced by the discount %

* Checkout Button

    Displays the total checkout price (including the discount if a valid code was entered).  On clicking of the Checkout Button:-

    * An [email](#email-sent-to-user) is sent to the user with their order details
    * A [popup message](#email-popup) is displayed confirming an email has been sent

### Email

* #### Email sent to user

    User receives an email containing all the information gathered throughout the shopping process:-
    *   Website Logo
    *   Delivery details
    *   Product details, quantities, prices
    *   Total price of the order including the delivery charge
    *   Delivery address

    <img src="Assets/Screen Shots/Email - Received Email.png" alt="Received Email">

* #### Email popup

    On clicking the checkout button a pop up is displayed
     <img src="Assets/Screen Shots/Email - Confirmation.png" alt="Email Confirmation">
    
    When the user clicks the **Close** button, the recipe page is displayed

### User Account Management

* #### Address Choice
* #### Address Management
* #### New Address Lookup
* #### Previous Orders

### Admin Portal
 <img src="Assets/Screen Shots/Admin Portal - Logon Full.png" alt="Admin Portal">






## Future Feature Enhancements

1. I would like to enchance the capabilities of the chatbot so that it could interact with the site and be able to provide links to products - this will require hosting the site.

2. It would also be interesting to look into how to create analysis of the customers orders and utilise libraries like [chartjs.org](#https://www.chartjs.org/) to produce interactive analytics.

## Known outstanding bugs

1. Previous Orders sometimes duplicate
    * Clicking back and forth through the site can cause items to be duplicated when the order is completed and the previous order is populated - This does not affect actual orders.

2. Intermittent behaviour when on the 'choose new address screen'. 
     * Sometimes when a user clicks on 'cancel' the program will take the user back to the recipe screen.  Other times it will act as expected.

## Contributors

Thanks goes to Colin Mattholie for reviewing the build each week and providing valuable feedback and spotting bugs.  Thanks also goes to Paul Ginn for the idea of adding the discount code section.  

Also, thanks goes to Gareth Holmes for showing me the great GitHub work done by [Martin Ward](https://github.com/mwarddev), which has inspired me to create this ReadMe.

Many thanks also to the numerous You-Tubers who have led me down many a rabbit hole, without whom I would not have been able to create this site. 




