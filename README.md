## Getting Started with Rocket

Create and manage your logistics needs

## Installation

```
$ clone https://github.com/whoisasey/rocket.git
$ cd rocket
```

Install project dependencies

```
$ npm install
```

Start the app:

```
$ npm run start
```

## Demo

Check out the [Demo](https://whoisasey.github.io/rocket/)

_Note_ if you see a blank page upon load, click the "Home" button in the navigation

## How to use

**Home Page**

Summary of all routes

Navigate to individual route information by clicking _See More Details_

**Create Route**

Start Address: Type in any address as your Route Origin

End Address: Type in any address as your Route Destination

Description: A description of the route

_Note:_ A route project name will automatically be created based on your Start and End addresses

**Get Routes**

1. Select an Origin Address from the dropdown
2. Select a Destination Address from the dropdown

_Note:_ If left blank, the default Origin and Destination will be Toronto,ON

3. Get Routes button will render a map with the remaining addresses from the data

## Other Notes and Considerations

Any code marked with `//` is a developer note

Although this didn't require a server or database, I'd love to add a NoSQL database like MongoDB (either locally or on the cloud), so data can be persisted and scalable. This would also include building out Mongoose Schemas and Routes.
I'd also like to add a user auth component so that only an Admin/Manager user can create/edit/delete new routes. Another user type, such as the driver can only view routes and route information, and/or mark the route as completed. Another user type, such as the Receiver, can view if the route has been dispatched or is en route.
