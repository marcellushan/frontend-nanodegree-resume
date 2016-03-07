/*
bio, work, projects and education objects validated by JSONlint.com
*/
var bio = {
	"name": "Marc Hannah",
	"role": "Web Developer",
	"contacts": {
		"mobile": "404-832-0748",
		"email": "marcjhannah@gmail.com",
		"github": "marcjhannah",
		"blog": "marcjhannah.com",
		"twitter": "@marcjhannah",
		"location": "Rome, GA"
	},
	"welcomeMessage": "Welcome to MarcJHannah.com",
	"skills": ["PHP", "javascript", "jQuery", "mySQL", "HTML", "CSS"],
	"biopic": "images/marc2.jpg"
};

var work = {
	"jobs": [
        {
		"employer": "Coca-Cola Enterprises",
		"title": "Systems Administrator",
		"location": "Atlanta, GA",
		"dates": "2001-2011",
		"description": "IIS Web Admin",
		"url": "https://www.cokecce.com/"
	},{
		"employer": "Southern Company",
		"title": "Systems Analyst",
		"location": "Atlanta, GA",
		"dates": "2011-2013",
		"description": "Web Analytics for various websites",
		"url": "https://www.southerncompany.com/"
	}, {
		"employer": "Georgia Highlands College",
		"title": "Webmaster",
		"location": "Rome, GA",
		"dates": "2015-2016",
		"description": "LAMP Web Developer",
		"url": "https://www.highlands.edu/"
	}]
};

var projects = {
	"projects": [{
		"title": "Georgia Highlands College Online Assessment Reporting Application",
		"dates": "2015-2016",
		"description": "Allow faculty and administration at GHC to submit initial and complete final assessment.  System administrators manage and report on results",
		"images": ["images/project.png", "images/admin.jpg"]
	},
    {
		"title": "Georgia Highlands College Institutional Website",
		"dates": "2016",
		"description": "Full Service Website at highlands.edu",
		"images": ["images/highlands1.jpg", "images/highlands2.jpg"]
	}]
};

var education = {
	"schools": [{
		"name": "Shorter College",
		"location": "Rome, GA",
		"degree": "Business Administration",
		"major": ["Business Administration"],
		"dates": "2005 - 2008",
		"url": "https://www.shorter.edu/"
	}],
	"online courses": [{
		"title": "Google Analytics IQ",
		"school": "Google Academy",
		"dates": "2013 - 2014",
		"url": "https://analyticsacademy.withgoogle.com/course01"
	}, {
		"title": "Object Oriented PHP",
		"school": "Udemy",
		"dates": "2015",
		"url": "http://udemy.com"
	}]

};
// bio. display function 
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedBlog);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedBlog);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);
	$("#header").append(formattedBioPic); 
	$("#header").append(formattedMsg);
	$("#header").append(HTMLskillsStart); 
	var mySkills = bio.skills;
	if(mySkills.length){
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
			}
	}
return;
}

work.display =function (){
	var myJobs = work.jobs;
	for(job in myJobs){
		$("#workExperience").append(HTMLworkStart);
		var nameEmployer = HTMLworkEmployer.replace("%data%",myJobs[job].employer);
		var formattedEmployer = nameEmployer.replace("#",myJobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%",myJobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",myJobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", myJobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",myJobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
		};
	return;
};

projects.display =function (){
	var myProjects = projects.projects;
	for(project in myProjects){
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
			};
		};
	return;
};

education.display =function (){
	var mySchools=education.schools;
	for(school in mySchools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",mySchools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDates = HTMLschoolDates.replace("%data%",mySchools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajors = HTMLschoolMajor.replace("%data%",mySchools[school].major);
		$(".education-entry:last").append(formattedMajors);
		var formattedLocation = HTMLschoolLocation.replace("%data%",mySchools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var myMajors = mySchools[school].majors;
		for(major in myMajors){
			var formattedMajor = HTMLschoolMajor.replace("%data%",myMajors[major]);
			$(".education-entry:last").append(formattedMajor);
			}
		};
		var myOnline=education["online courses"];
		$("#education").append(HTMLonlineClasses);
		for(online in myOnline){
			$("#education").append(HTMLonlineStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%",myOnline[online].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",myOnline[online].school);
			var together = formattedTitle + formattedSchool;
			$(".online-entry:last").append(together);
			var formattedDates = HTMLonlineDates.replace("%data%",myOnline[online].dates);
			$(".online-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%",myOnline[online].url);
			$(".online-entry:last").append(formattedURL);
			}
};
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
