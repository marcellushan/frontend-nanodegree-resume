/*
This is empty on purpose! Your code to build the resume will go here.
 */

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

var bio = {
    "name": "Marc Hannah",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to MarcJHannah.com",
    "contacts": {
                    "mobile": "404-832-0748",
                    "email": "marcjhannah@gmail.com",
                    "github":"marcjhannah",
                    "twitter": "@marcjhannah",
                    "location" :"Rome, GA"
    },
    "skills": ["PHP","javascript","jQuery","mySQL","HTML","CSS"]
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

