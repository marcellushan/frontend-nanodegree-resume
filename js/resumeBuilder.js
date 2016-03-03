/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var formattedName = HTMLheaderName.replace("%data%", "Marc Hannah");
//var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");


var bio = {
    "name": "Marc Hannah",
    "role": "Web Developer",
    "contacts": {
      "mobile": "404-832-0748",
      "email": "marcjhannah@gmail.com",
      "github": "marcjhannah",
      "twitter": "@marcjhannah",
      "location": "Rome"
    },
    "welcomeMessage": "Welcome to my amazing page",
    "skills": [
        "PHP","Javascript","jQuery"
    ],
    "pictureURL": "images/marc.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedSkills);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedTwitter);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#mapDiv").append(googleMap);

console.log(formattedRole);

