//data attribute whatever//
'use strict';
var projectsArr = []

function Projects (rawDataObj){
  this.name = rawDataObj.name;
  this.image = rawDataObj.image;
  this.git = rawDataObj.git;
  this.about = rawDataObj.about;
}

Projects.prototype.toHtml= function(){
  var template = Handlebars.compile($("#template").text());
  return template(this);
};

rawData.forEach(function(projectsArrObject){
  projectsArr.push(new Projects(projectsArrObject));
})

projectsArr.forEach(function(projectsArr){
  $('#content').append(projectsArr.toHtml())
});


$('h1').css('background', 'transparent');
$('#aboutButton').on('click',function(e){
  $('#aboutMe').toggleClass('aboutMe aboutMeTwo');
  e.preventDefault();
});
