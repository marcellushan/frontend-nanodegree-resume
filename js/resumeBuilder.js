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
    "biopic": "images/marc2.jpg"
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
    "projects": [
        {   "title": "Collaboration Cutover",
            "dates": "2010-2011",
            "description": "Decouple the collaboration infrastructure",
            "images": ["images/project.jpg","images/toni.jpg"]
        }
    ]
};

var education = {
    "schools": [
        {   "name": "NAU",
            "location": "Flagstaff, AZ",
            "degree": "",
            "major": ["Computer Science Engineering","Mechanical Engineering"],
            "dates": "1983-1985",
            "url": "https://www.nau.edu/"
        },
            {"name": "UA",
            "location": "Tucson, AZ",
            "major": ["Systems Engineering"],
             "dates": "1981-1983",
            "url": "http://www.arizona.edu/"
        },
         {"name": "UTA",
            "location": "Arlington, TX",
            "major": ["Computer Engineering"],
           "dates": "1992-1994",
            "url": "http://www.arizona.edu/"
         }
    ],
    "online courses": [
        {"title": "Google Analytics IQ",
         "school": "Google Academy",
         "dates": "2013 - 2014",
         "url": "https://analyticsacademy.withgoogle.com/course01"
        },
        {"title": "Google Analytics IQ",
         "school": "Google Academy",
         "dates": "2013 - 2014",
         "url": "https://analyticsacademy.withgoogle.com/course01"
        }
    ]
    
};


function locationizer(work_obj) {
      var locationArray = [];
      var myJobs = work.jobs;
    for(var job in myJobs)
    {
        locationArray.push(myJobs[job].location);
    }
    return locationArray;


}

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
     $("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedMobile);
    
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

work.display =function ()
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

work.display();

projects.display =function ()
    {
    var myProjects = projects.projects;
    for(project in myProjects)
        {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",myProjects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",myProjects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",myProjects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var myImages = myProjects[project].images;
            for(image in myImages) {
                var formattedImages = HTMLprojectImage.replace("%data%",myImages[image]);
                $(".project-entry:last").append(formattedImages);
                //console.log(image);
            };
            };
    };
projects.display();

education.display =function () {
    var mySchools=education.schools;
        for(school in mySchools){
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%",mySchools[school].name);
             $("#education").append(formattedName);
            var formattedDates = HTMLschoolDates.replace("%data%",mySchools[school].dates);
             $("#education").append(formattedDates);
            var formattedMajors = HTMLschoolMajor.replace("%data%",mySchools[school].major);
             $("#education").append(formattedMajors);
            var formattedLocation = HTMLschoolLocation.replace("%data%",mySchools[school].location);
             $("#education").append(formattedLocation);
            var myMajors = mySchools[school].majors
            for(major in myMajors)
                {
                   var formattedMajor = HTMLschoolMajor.replace("%data%",myMajors[major]);
                    $("#education").append(formattedMajor);
                }
    };
    var myOnline=education["online courses"]
        $("#education").append(HTMLonlineClasses);
        for(online in myOnline) {
            var formattedTitle = HTMLonlineTitle.replace("%data%",myOnline[online].title);
             $("#education").append(formattedTitle);
/*               var formattedOnlineDates = HTMLonlineDates.replace("%data%",myOnline[online].dates);
             $("#education").append(formattedOnlineDates);*/
            var formattedSchool = HTMLonlineSchool.replace("%data%",myOnline[online].school);
             $("#education").append(formattedSchool);

            console.log(HTMLonlineTitle);


        }
};
education.display();

$("#mapDiv").append(googleMap);
