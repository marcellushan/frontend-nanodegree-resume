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
                    "github":"marcjhannah",
                    "twitter": "@marcjhannah",
                    "location" :"Rome, GA"
    },
    "welcomeMessage": "Welcome to MarcJHannah.com",
    "skills": ["PHP","javascript","jQuery","mySQL","HTML","CSS"],
    "biopic": "images/marc.jpg"
};

var work = {
    "jobs": [
        {   "employer": "Southern Company",
            "title": "Systems Analyst",
            "location": "Atlanta, GA",
            "dates": "2011-2013",
            "description": "Web Analytics for various websites"
        },
        {   "employer": "Coca-Cola Enterprises",
            "title": "Systems Administrator",
            "location": "Atlanta, GA",
            "dates": "2001-2011",
            "description": "IIS Web Admin"
        },
        {   "employer": "Georgia Highlands College",
            "title": "Webmaster",
            "location": "Rome, GA",
            "dates": "2015-2016",
            "description": "LAMP Web Developer"
        }
    ]
};



var projects = {
    "project": [
        {   "title": "Collaboration Cutover",
            "dates": "2010-2011",
            "description": "Decouple the collaboration infrastructure",
            "images": ["marc.jpg","toni.jpg"]
        }
    ]
};

var education = {
    "schools": [
        {   "name": "NAU",
            "location": "Flagstaff, AZ",
            "degree": "",
            "majors": ["Computer Science Engineering"],
            "dates": "1983-1985",
            "url": "https://www.nau.edu/"
        },
            {"name": "UA",
            "city": "Tucson",
            "state": "Arizona",
            "major": "Systems Engineering",
             "dates": "1981-1983",
            "url": "http://www.arizona.edu/"
        },
         {"name": "UTA",
            "city": "Arlington",
            "state": "TX",
            "major": "Computer Engineering",
           "dates": "1992-1994",
            "url": "http://www.arizona.edu/"
         }
    ],
    "online courses": [
        {"title": "Google Analytics IQ",
         "school": "Google Academy",
         "dates": "2013 - 2014",
         "url": "https://analyticsacademy.withgoogle.com/course01"
        }
    ]
    
};

//console.log("test");

/*var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks= (x,y);
    console.log("y" + y + "x"+ x);
    
});
*/

function locationizer(work_obj) {
      var locationArray = [];
      var myJobs = work.jobs;
    for(var job in myJobs)
    {
        locationArray.push(myJobs[job].location);
    }
    return locationArray;


}

console.log(projects.project[0].title);
bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);
    
    $("#header").append(formattedBioPic); 
    $("#header").append(HTMLskillsStart); 

    var mySkills = bio.skills;
if(mySkills.length)
    {
     //$("#header").append(HTMLskillsStart);
        for(skill in bio.skills)
            {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
    }
    
    
    return;
}
bio.display();
