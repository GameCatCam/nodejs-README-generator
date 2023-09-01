// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (`${license}` != null) {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)]`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (`${license}` === 'MIT') {
    return '(https://lbesson.mit-license.org/)'
  } else if (`${license}` === 'GPLv3') {
    return '(http://perso.crans.org/besson/LICENSE.html)'
  } else if (`${license}` === 'Creative Commons Licenses') {
    return '(https://creativecommons.org/licenses/by-nd/4.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (`${license}` != null) {
    return `This project is protected under the ${license} license`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ name, description, installation, usage, license, contribute, tests, github, email }) {
  return `# ${name} ${renderLicenseBadge(license)}${renderLicenseLink(license)}

  ## Description
  ${description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  ${renderLicenseSection(license)}
  
  ## Contributing
  ${contribute}
  
  ## Tests
  ${tests}
  
  ## Questions
  What is your Github? My github is ${github}.\
  What is your email? My email is ${email}.
  `;
}

module.exports = generateMarkdown;
