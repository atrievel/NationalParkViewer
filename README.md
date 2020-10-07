# Welcome to the NationalParkViewer

Congrats for taking the initiative  to contribute to a repo during Hacktoberfest 2020! 🎃

## Project Description

[The National Park Service](https://www.nps.gov/index.htm) has provided a public API that lists a variety of data on each of the United States National Parks. Let's take advantage of this dataset and display it to our users. 

## Getting Started

I'm making a few assumptions here:

* You're using Windows (Mac and Linux users - don't fret. The instructions *should* still work, I just am not too familiar with those environments)
* You have installed [Node and npm](https://nodejs.org/en/download/)
* You have installed the Angular CLI globally using the command:  `npm i -g "@angular/cli"`
* You are using an IDE that supports TypeScript (such as VSCode - my personal IDE of choice)

Now that we got that out of the way, let's start building and running the app!

### Getting an API key

Getting an API key is simple. Just go to the NPS developer portal and follow their steps on getting a key. Once you've obtained your own personal key, place the value inside `./src/assets/config/appsettings.json`. The JSON looks like this: 
``` json
{
    "API": {
        "base": "https://developer.nps.gov/api/v1/",
        "key": "YOUR KEY HERE"
    }
}
```
where "YOUR KEY HERE" is the key you generated from the site. Don't worry - I have this file marked to be ignored, so your secret will not be uploaded when you push the code. However, if you want to be safe, feel free to delete your key before pushing your changes.

### Installing packages

All the npm packages needed to run the app can be installed via the command: `npm i` inside the `./src` directory

### Running the app

To run the app, simply execute the command: ```ng s --aot``` We are taking advantage of [ahead of time compliation](https://angular.io/guide/aot-compiler) here to speed up how fast the app is rendered by the browser. After the app is built and served correctly, the CLI will provide you a link that you can use to to view the app in the browser (the default is usually http://localhost:4200).

## Contributing Guidelines 

Please read: Contributing.md

## Contributors

* [Alec Trievel](https://github.com/atrievel)
* [Thomas Lian Ødegaard](https://github.com/thomaslian)
* [Nikolaj Dyring](https://github.com/NikoDyring)

## Questions

Feel free to open up a new issue or comment in an existing with questions! I will respond to questions and requests to participate ASAP.
