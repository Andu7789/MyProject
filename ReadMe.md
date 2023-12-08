# My First Project

## Recipe finder and shop

This site was created to showcase my learnings from a 12 week course (an Introduction to learning HTML, Javascripts and c#) and formed part of my final presentation.

  <img src="Assets/Screen Shots/Recipe Finder.png" alt="Image 1">


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
    * [Stock Management Page](#Stock-Management-Page)
    * [Address Choice](#Address-Choice)
    * [Address Management](#Address-Management)
    * [New Address Lookup](#New-Address-Lookup)
    * [Previous Orders](#Previous-Orders)
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

Logon Page

* Background image
* Enlarged Logo
* Logon Button
    * On click - display the logon option screen
        * Email logon or
        * Use Google Account

Video Page

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

Checkout Page

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

Change Address Popup

* Displays current addresses saved in the users address book
* Provides the option to choose one of the saved ones, cancel or find a new address

Find New Address Popup

* Field which will auto complete as the user starts to enter their address
* Buttons to select the chosen address or cancel

User Account Popup

* Button to view previous orders
* Button to access address book

Address Book

* Cards for each saved address
    * Each address has a button to make it default or to remove it
* Buttons to close the section or add a new address

Stock Control Page

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

* #### Navigation Bar

* #### Recipe Page
    * Product View Page
    * Recipe Carousel

* #### Shopping Page

* #### Checkout Page
    * Delivery Slot Chooser
    * Apply discount code

 * #### Shopping Cart

* #### Stock Management Page

* #### Login Page

* #### Address Choice

* #### Address Management

* #### New Address Lookup

* #### Previous Orders

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



