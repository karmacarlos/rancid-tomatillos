

# Rancid Tomatillos
Mod 3 Project


## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Install and Set Up](#install-and-set-up)
  - [Illustrations](#illustrations)
  - [Wins](#wins)
  - [Challenges](#challenges)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)

## Abstract
The Rancid Tomatillos web application allows users to view available movies. To get additional information on the movie the user clicks the movie poster and will be brought to a different page which has a movie trailer and additional movie content. The user can click "add to watch list" on the movie detail page and their movie will be added to their watch list. When the user is on the home page and clicks the watch list icon, they can review all the movies they have on their watch list.

## Technologies
  - Javascript
  - HTML
  - CSS
  - React
  - Cypress
  - Express.js

## Install and Set Up

You can play with our deployed app [here](https://rancid-tomatillos-2107.herokuapp.com)

To run the application:

1) Clone down the Rancid Tomatillos repo
2) Cd into `rancid-tomatillos`
3) Run `npm install`
4) Run `npm start`
5) Your browser will open the website.
6) Clone down the [Rancid Tomatillos API](https://github.com/jhortizu01/rancid-tomatillos-api)
7) In a seperate terminal run `npm install`
8) Run `npm start`

To run Cypress tests:
1) In a seperate terminal, run `npx cypress open`
2) Cypress browser will load, choose a test and see the results

## Code Architecture

  The React arquitecture is based on two class components and three functional components. The class components holds state and are in charge of the network requests, while the functional components just render information passed down as props.

## Illustrations

Home Page

<img src="https://user-images.githubusercontent.com/81398850/138782932-61503ea7-8276-4a74-a48a-982a8dc47426.png" alt="movie details page of rancid tomatillos" style="width:400px;"/>

Movie Details

<img src="https://user-images.githubusercontent.com/21073095/138612093-ad775d8a-869f-4c2b-b470-065b6dff92c1.png" alt="movie details page of rancid tomatillos" style="width:400px;"/>

Watch List

<img src="https://user-images.githubusercontent.com/81398850/138782969-bfbc28c1-63ef-48f1-8faa-86dca76b05c8.png" alt="empty watch list page of rancid tomatillos" style="width:400px;"/>

Responsive Design: Mobile View

<img src="https://user-images.githubusercontent.com/81398850/138783006-54c92533-04e5-477d-9f16-2d80c8144177.png" alt="empty watch list page of rancid tomatillos" style="width:400px;"/>
<img src="https://user-images.githubusercontent.com/81398850/138783012-56936455-8d6b-45aa-af67-805aaedba8d0.png" alt="empty watch list page of rancid tomatillos" style="width:400px;"/>

Lighthouse Score

<img src="https://user-images.githubusercontent.com/21073095/138777905-445699e0-37fa-48cb-b3db-98937fb1703f.png" alt="lighthouse score" style="width:400px;"/>


## Wins
  - Great team collaboration
  - Demonstrated proficiency in React
  - Applied Router for a multipage user experience
  - Implemented proptypes to bullet proof our application and functioning of the app
  - Created Express server to add watchlist functionality

## Challenges & Improvements
  - Had trouble intercepting API requests during Cypress testing
  - Had challenges implementing router at the begining of the project
  - Had challenges debugging router 

## Future Features
  - Deploy the web application
  - Add log in capabilities so multiple users can use the web application
  - Responsive web design

## Contributors
  - [Carlos Gomez](https://github.com/karmacarlos)
  - [Janika Hortizuela](https://github.com/jhortizu01)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)
