/* Creates an appropriate badge for the license given in the prompts
If there is no license, return an empty string */
function renderLicenseBadge(license) {
  if (`${license}` != null) {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)]`
  } else {
    return ''
  }
}

/* Creates an appropriate link for the license given in the prompts
If there is no license, generates an empty string */
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

/* Generates the license section of the README depending on the License given in the prompts
If there is no license, generates an empty string */
function renderLicenseSection(license) {
  if (`${license}` != null) {
    return `This project is protected under the ${license} license`
  } else {
    return ''
  }
}

// Template used to generate the README file given all the inquirer information.
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
  Q: What is your Github? A: My github is [${github}](www.github.com/${github}).\
  Q: What is your email? A: My email is ${email}.
  `;
}

// Exports the functions to the main index.js
module.exports = generateMarkdown;
