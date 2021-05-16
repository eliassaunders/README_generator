// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return "";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return "";
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `#Licence: 
    ### `
  }
}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
  return  `#${projectData.title}

  #Project Description:
  ### ${projectData.projectDescription}

  #Table of contents:
  [Description]()
  [Installation](#Installation)
  [Usage](#Usage)
  [License]()
  [Contributing]()
  [Tests]()

  #Installation:
  ${projectData.installation}

  #Usage:
  ${projectData.usage}

  #Licence:

  #Contributing:
  ${projectData.contribution}

  #Tests:
  ${projectData.test}

  #Questions:
  ### Leave questions at: https://github.com/${projectData.username}
  ### Leave Additional questions at: ${projectData.email}
  `;
}

module.exports = generateMarkdown;
