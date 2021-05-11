import React from 'react';
import self from '../img/selfie.png';


export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)"];
/*
I highly recommend using a gradient generator like https://paytonjewell.github.io/gradient-generator/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */



/*
 use "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Santosh",
    lastName: "Malaki",
    initials: "SM", // the example uses first and last, but feel free to use three or more if you like.
    position: "Junior Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self portrait in the "img" folder something else!
    gradient: `linear-gradient(135deg, ${colors})`, // don't change this either
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        ["☕️", "Fueled by Matcha"], // change the emojis to something related to your list item :)
        ["🇺🇸", "Based in the US"],
        ["💼", "Seeking Employment"],
        ["✉️", "santoshmalaki@gmail.com"],
    ],
    socials: [
        ["https://facebook.com/", facebookIcon()], // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        ["https://instagram.com/", instagramIcon()], // Just change the links so that they lead to your social profiles.
        ["https://linkedin.com", linkedInIcon()],

    ],
    bio: "Hello! I'm Santosh! I'm a current graduate from the JHU Bootcamp by Trilogy Services, and I'd be delighted to be both interviewed and hired by you ",
    hobbies: [
        ["📖", "reading"], // Same as above, change the emojis to match / relate to your hobbies or interests.
        ["🎭", "theater"], // You can also remove the emojis if you'd like, I just think they look cute :P
        ["🎥", "movies"],
        ["🌶", "spicy food"]
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            liveLink: "https://smalakidev.github.io/Work-Day-Scheduler-/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourceLink: "https://github.com/smalakidev/Work-Day-Scheduler-", // this should be a link to the **repository** of the project, where the code is hosted. Github, Phabricator, etc.
        },
        {
            title: "Project 2",
            liveLink: "https://smalakidev.github.io/Tell-me-the-weather/",
            sourceLink: "https://github.com/smalakidev/Tell-me-the-weather",
        },
        {
            title: "Project 3",
            liveLink: "https://asheth22.github.io/Astrozoders/",
            sourceLink: "https://github.com/asheth22/Astrozoders",
        },
        {
            title: "Project 4",
            liveLink: "https://intense-shelf-48021.herokuapp.com/",
            sourceLink: "https://github.com/smalakidev/wantmyburger",
        },
    ]
}

// leave these alone unless you know how to work with FontAwesome and want to change to your liking :)

function facebookIcon() {
    return <i className="fa fa-facebook" aria-hidden="true"/>
};

function instagramIcon() {
    return <i className="fa fa-instagram" aria-hidden="true"/>
};

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true"/>
};

function mediumIcon() {
    return <i className="fa fa-medium" aria-hidden="true"/>
};

function twitterIcon() {
    return <i className="fa fa-twitter" aria-hidden="true"/>
};

