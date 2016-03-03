
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
<<<<<<< Updated upstream
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
||||||| merged common ancestors
    "online courses": [
        {"title": "Google Analytics IQ",
         "school": "Google Academy",
         "dates": "2013 - 2014",
         "url": "https://analyticsacademy.withgoogle.com/course01"
        }
    ]
    
};

var mySkills = bio.skills;
if(mySkills.length)
    {
     $("#header").append(HTMLskillsStart);
        for(skill in bio.skills)
            {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
    }
function displayWork()
    {
    var myJobs = work.jobs;
    for(job in myJobs)
        {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",myJobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",myJobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",myJobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", myJobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",myJobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

        };
    };
displayWork();

//console.log(contactInfo);
=======
    "online courses": [
        {"title": "Google Analytics IQ",
         "school": "Google Academy",
         "dates": "2013 - 2014",
         "url": "https://analyticsacademy.withgoogle.com/course01"
        }
    ]
    
};

var mySkills = bio.skills;
if(mySkills.length)
    {
     $("#header").append(HTMLskillsStart);
        for(skill in bio.skills)
            {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
    }
function displayWork()
    {
    var myJobs = work.jobs;
    for(job in myJobs)
        {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",myJobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",myJobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",myJobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", myJobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",myJobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

        };
    };
displayWork();

$("#main").append(internationalizeButton);


function inName (lowerName) {
    var intName = "";
    newName = intName.concat(lowerName.slice(0,1).toUpperCase(), lowerName.slice(1,lowerName.search(" ")), lowerName.slice(lowerName.search(" ")).toUpperCase())
    return newName;
}

    console.log(inName("marc hannah"));
