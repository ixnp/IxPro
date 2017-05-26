//data attribute whatever//
'use strict';
// displays projects//
// var projectsArr = []
//
// function Projects (rawDataObj){
//   this.name = rawDataObj.name;
//   this.image = rawDataObj.image;
//   this.git = rawDataObj.git;
//   this.about = rawDataObj.about;
// }
//
// Projects.prototype.toHtml= function(){
//   var template = Handlebars.compile($("#template").html());
//   return template(this);
// };
//
// rawData.forEach(function(projectsArrObject){
//   projectsArr.push(new Projects(projectsArrObject));
// })
//
// projectsArr.forEach(function(projectsArr){
//   $('#content').append(projectsArr.toHtml())
// });

// about button//
$('h1').css('background', 'transparent');
$('#aboutButton').on('click',function(e){
  $('#aboutMe').toggleClass('aboutMe aboutMeTwo');
  e.preventDefault();
});

// initIndexPage = function(){
// projectsArr.forEach(function(projectsArr){
//   $('#content').append(projectsArr.toHtml())
// });
// }
