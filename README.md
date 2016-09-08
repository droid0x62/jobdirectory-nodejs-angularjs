
A starter node js and angular application which provides crud operations ,allows users to post job listings with job requirement ,location ,salary.Use this to create any crud based application simply change the schema and form data

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Gulp - Gulp is used to build the project and automate project tasks.

```bash
$ npm install gulp -g
```

* Grunt - (Optional) You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process.

```bash
$ npm install -g grunt-cli
```

## Downloading MEAN.JS
There are several ways you can get the MEAN.JS boilerplate:

### Cloning The GitHub Repository
The recommended way to get MEAN.js is to use git to directly clone the MEAN.JS repository:

```bash
$ git clone https://github.com/meanjs/mean.git meanjs
```

This will clone the latest version of the MEAN.JS repository to a **meanjs** folder.

### Downloading The Repository Zip File
Another way to use the MEAN.JS boilerplate is to download a zip copy from the [master branch on GitHub](https://github.com/meanjs/mean/archive/master.zip). You can also do this using the `wget` command:

```bash
$ wget https://github.com/meanjs/mean/archive/master.zip -O meanjs.zip; unzip meanjs.zip; rm meanjs.zip
```

Don't forget to rename **mean-master** after your project name.

### Yo Generator
Another way would be to use the [Official Yo Generator](http://meanjs.org/generator.html), which generates a copy of the MEAN.JS 0.4.x boilerplate and supplies an application generator to ease your daily development cycles.

## Quick Install
Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop your MEAN application.

The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application. To learn more about the modules installed visit the npm & Package.json section.

To install Node.js dependencies you're going to use npm again. In the application folder run this in the command-line:

```bash
$ npm install
```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application

## Running Your Application

The MEAN.JS project integrates both Grunt and Gulp as build tools and task automation, but Grunt will be deprecated in favor of Gulp.
While you are free to use both of them directly, we have wrapped Gulp tasks with npm scripts so that regardless of the build tool running the project is transparent to you.

Run your application using npm:

```bash
$ npm start
```

Your application should run on port 3000 with the *development* environment configuration, so in your browser just go to [http://localhost:3000](http://localhost:3000)

That's it! Your application should be running. To proceed with your development, check the other sections in this documentation.
If you encounter any problems, try the Troubleshooting section.



### Running in Production mode
To run your application with *production* environment configuration, execute grunt as follows:

```bash
$ npm start:prod
```

* explore `config/env/production.js` for production environment configuration options

### Running with User Seed
To have default account(s) seeded at runtime:

In Development:
```bash
MONGO_SEED=true npm start
```
It will try to seed the users 'user' and 'admin'. If one of the user already exists, it will display an error message on the console. Just grab the passwords from the console.

In Production:
```bash
MONGO_SEED=true npm start:prod
```
This will seed the admin user one time if the user does not already exist. You have to copy the password from the console and save it.


## Running your application with Grunt

After the install process, you can easily run your project with:

```bash
$ grunt
```
The server is now running on http://localhost:3000 if you are using the default settings.

### Running your application with Gulp

Start the development environment with:

```bash
$ gulp
```



```

## Getting Started With MEAN.JS
You have your application running, but there is a lot of stuff to understand. We recommend you go over the [Official Documentation](http://meanjs.org/docs.html).
In the docs we'll try to explain both general concepts of MEAN components and give you some guidelines to help you improve your development process. We tried covering as many aspects as possible, and will keep it updated by your request. You can also help us develop and improve the documentation by checking out the *gh-pages* branch of this repository.

