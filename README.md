# Welcome to the Vention Rails Frontend Test!

The goal of this test is to create some interactive cards using HTML, CSS/SCSS, and JavaScript inside a Ruby on Rails application.

## Rules

- Vanilla JS and CSS/SCSS only (no Bootstrap, React or other frontend frameworks).
- The layout for the cards should be responsive.
- The page must be built within the provided Rails application.
- Provide access to your code, e.g. link to a GitHub repo.
- The card data should be stored (e.g. in JS mocked API response).

## Setup

Before you begin building, clone this repo and follow the steps below to setup Ruby on Rails on your system.

### 1. Install Ruby

Rails requires Ruby. Install Ruby 3.1.4.

For installation methods for most Operating Systems take a look at [ruby-lang.org](https://www.ruby-lang.org/en/documentation/installation/).

Run the following command to verify Ruby is installed on your system:

```bash
ruby --version
```

### 2. Install SQLite3

You will also need an installation of the SQLite3 database. Many popular UNIX-like OSes ship with an acceptable version of SQLite3. Others can find installation instructions at the [SQLite3 website](https://www.sqlite.org/).

Run the following command to verify SQLite3 is installed on your system:

```bash
sqlite3 --version
```

### 3. Install Rails

In the root directory of this repo, run the following command to install Rails and its dependencies.

```bash
bundle install
```

Verify that Rails has been installed with:

```bash
rails --version
```

### 4. Start the Web Server

Run the following command in the root directory to start the Web server in dev mode:

```bash
./bin/dev
```

This will start up Puma, a web server distributed with Rails by default.

To see your application in action, open a browser window and navigate to http://localhost:3000. You should see a white page with a "Ready" heading and an image.

### 5. Start Building

To start building, locate the following files/folders:

`app/views/layouts/application.html.erb`
- This file is used to render the layout of the page, including the `<head>` and `<body>` tags.

`app/views/home/index.html.erb`
- You can use this file to write your HTML.

`app/assets/stylesheets/application.scss`
- You can use this file to write your CSS/SCSS.

`app/javascript/application.js`
- You can use this file to write your JS.

`public/images/`
- You can use and reference the images from this folder.

## What to Build

The card states are shown below. The image should fade and a button should appear when the card is hovered over. When an item is added to the cart, an icon should appear on the top left-hand corner of the card indicating that it has been added to the cart. A new button should now appear allowing you to remove the item from the cart, which resets the card back to its original state.

### Card States

![State 1](/docs/state-1.png "Normal state")

![State 2](/docs/state-2.png "Hover state")

![State 3](/docs/state-3.png "Hover state with items in cart")


