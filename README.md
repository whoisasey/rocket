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
_Note_ if you see a blank page upon load, click "Home"

## How to use

**Home Page**

Summary of all routes
Navigate to individual routes information by clicking _See More Details_

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

To build on the app, I would want to add a NoSQL database like MongoDB, so data can be persisted and scalable. This would also include building out Mongoose Schemas and Routes for adding data
