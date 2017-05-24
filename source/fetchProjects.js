//data attribute whatever//
'use strict';
// displays projects//
var projectsArr = []

function Projects (rawDataObj){
  this.name = rawDataObj.name;
  this.image = rawDataObj.image;
  this.git = rawDataObj.git;
  this.about = rawDataObj.about;
}

Projects.prototype.toHtml= function(){
  var template = Handlebars.compile($("#template").html());
  return template(this);
};


function handleFetchProjects(){
  $.get('data/tempPro.json')
  .then(function(data){
    console.log(data);
    data.forEach(function(projectsObj){
      projectsArr.push(new Project(projectsObj));
      console.log('project array being built', projectsArr);
    });
    projectsArr.forEach(function)
  })

};
handleFetchProjects();
