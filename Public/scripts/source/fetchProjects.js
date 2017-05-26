//data attribute whatever//
'use strict';
// displays projects//
var projectsArr = []

function Projects (rawDataObj){
  for (key in rawDataObj){
    this[key] = rawDataObj [key];
  }
};


Projects.prototype.toHtml= function(){
  var template = Handlebars.compile($("#template").html());
  return template(this);
};


function handleFetchProjects(){
    $.getJSON('data/tempPro.json')
    .then(function(data){
      console.log('data',data);
      data.forEach(function(projectsObj){
        projectsArr.push(new Project(projectsObj));
        console.log('project array being built', projectsArr);
      });
  projectsArr.forEach(function(newProjectObject){
    $('#template').append(newProjectObject.toHtml());
  });
  }, function(err){
    console.error(err);
  });


////////////////////////


}
