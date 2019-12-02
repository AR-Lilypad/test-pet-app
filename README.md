# Project-2
## Furever Match - - Petfinder
**Furever Match** is a web application for finding a cat or dog type pet.  It takes in user input via a survey and returns an animal based on the user's selected parameters such as coat type, age, and/or other.

## Technologies used:
**Node.js** takes the javascript engine inside of chrome and enables one to write asychronus processes.  It was built as a server-side engine (a javaScript runtime) in order to have executable sets of libraries that can interpret and execute code.

#### Why do we need it? 
Any program that runs on your computer needs a runtime to execute programs.  Examples include apps, phones, zoom.  It is a runtime that allows you to write code to run. In other words, you can write programs that don't run on a browser, but you can run it on your computer.  It's a two-way connection where both client and server can initiate communication allowing them to exchange data freely.  A good example for the use of Node.js is ***CHAT***.

Node.js has a built in support tool called ***NPM***. NPM modules are free packages for download and use.  They contain all of the files you need for a module, modules being JavaScript libraries that you can use in your project...  

**Express**
 is a node package that coupled with ***Node JS*** gives javascript and front end development-- back-end functionality. This enables developers the ability of building software with javascript on the server side.  One can develop an application with Node.js and then publish it as a website with Express.

**MYSQL** is an open source SQL database management system that is developed, distributed, and supported by Oracle Corporation.  MYSQL is a relational database management system based on SQL – Structured Query Language - and with a client-server model. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. The most common use for mySQL however, is for a web database.  It is called a relational database management system because it can store data in separate tables rather than putting all the data in one big storeroom. The database structures are organized into physical files optimized for speed. 

As stated by 'sitepoint' (a developer's hub for information sharing) "*NoSQL* databases (node js and mysql) are all the rage these days, and probably the preferred back end for Node.js applications. But you shouldn’t architect your next project based on what’s hip and trendy. The type of database you use should depend on the project’s requirements. *If your project involves dynamic table creation, real-time inserts etc. then NoSQL is the way to go.* But on the other hand, if your project deals with complex queries and transactions, then an SQL database makes much more sense.

**Application dependencies || NPM Packages:** Node Package Manager  (AKA No Purchase Made :smirk:) These packages are known as "dependencies" as they are required for certain aspects of the application to function.  In this application they include:

  - `@petfinder/petfinder-js` - this npm package is a package manager that simplifies the use of the Petfinder API (that can be very difficult to work with :confounded:).    This is the new library required for this project.  

  - `dotenv` -Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code.  In this case, dotenv is used to store the API Petfinder passwords away from public view.  Even when the page's code is inspected in the browser, the passwords will not be exposed.

  - `fs` - fs is used to read the content of files synchronously in Node.js.

  `Path` - Node.js path module is used for handling and transforming file paths. In this case, path.basename which returns the last portion of a path and path.join which is used to join all arguments together and normalize the resulting path.

  **How the APP Works**
  the application is set up with both a front and back end.   It was written by a team of developers working on the single responsibility principle also known as SOLID that states that "every module, class, or function should have responsibility over a single part of the functionality provided by the software." ***Robert Martin, AGILE Software Development Principles.***   Working in this manner, each part of our 4-person team was able to take a piece of the software to develop from their environment.  And then puzzle the pieces together during a team meeting.

  ##Furever Match is a petfinder application.   The front end involves user input to select the attributes of an animal they would like, dog or cat.   When the user 'submits', that on click event sends an order to a route that then makes an API Call to the Petfinder API.   The api returns an object that captures the user's preferences and drops the object into a data base.     There are various files built to configure the files, model responses, export the date associate it with a file and route it to a resulting module that will display the result to the user.

 