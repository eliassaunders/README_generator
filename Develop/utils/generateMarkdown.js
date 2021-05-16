// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    return `[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    return `Link: https://choosealicense.com/licenses/${data.license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    return `This project is licensed by ${data.license}`
}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
  return  `# ${projectData.title}

# Project Description:
### ${projectData.projectDescription}

# Table of contents:
[Description](#Project Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)

# Installation:
### ${projectData.installation}

# Usage:
### ${projectData.usage}

# Licence:
${renderLicenseBadge(projectData)}
### ${renderLicenseLink(projectData)}
### ${renderLicenseSection(projectData)}


# Contributing:
### ${projectData.contribution}

# Tests:
### ${projectData.test}

# Questions:
### Leave questions at: https://github.com/${projectData.username}
### Leave Additional questions at: ${projectData.email}
`;
}

module.exports = generateMarkdown;
