# Guider's NASA API Tech Test

Create a simple web app that takes a picture from the NASA Astronomy Picture of the Day, and allows you to save your favourites.

## Requirements

-   A Random Picture (from the API)
-   A Next Button
-   A Save Button
-   A Favourites route

## Stack

-   React
-   React Router
-   TypeScript
-   MUI

## Current State of the APP

### Main page

-   Main page retrieves a random picture from the NASA API and displays it with its title.
-   Next button will grab a new random image
-   Save button will add the current Photo Data to state (which will be updated to Redux eventually)
-   Home navigates to "/" which is currently redundant
-   Favourites navigates to "/favourites"

### Favourites Page

-   Grabs all photos from State from APP via props, and maps them out
-   Click on an image to visit the HD Image in a new page
-   Click home to go back to the home page
-   Currently favourites page will NOT be updated with new saved photos, due to the nature of state/refresh and my useEffect. Was in process of setting up Redux when I ran out time.

## What I would have liked to add with extra time

#### Redux Store

I started implementing a Redux Store for the storing of Favourites, however ran out of time after managing to implement the scaffolding for it.

#### Aesthetics

Absolutely no aesthetics have gone into this so far, just basic scaffolding and positioning. With more time I would have started to do what I am fantastic at - Layout Design.

#### Optimisation

React Hooks double firing - once the Redux Store was implemented, I could start fixing the React Hooks for smoother user usage. Also getting the type/value which is so integral to Typescript all in working order would be a priority too.

#### Environmental Variables

Currently the API Key is visible, and not hidden within a .env - would be nice to hide those important pieces of data in a correct manner with PROCESS.ENV etc.

## Experience

This was made in less than 3 hours - and its my first time making a Typescript app, first time with Material UI, and first time touching Redux. So I am pretty impressed with what I managed to cobble together!

## DEMO

A quick link to a deployment of the website after 2hours49mins of Dev work: [Random Astronomy Picture](https://guider-tech-test-ueq6orcuu-westycodes.vercel.app/)
