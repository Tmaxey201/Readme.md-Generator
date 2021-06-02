function generateMarkdown(data) {
    return`
  # ${data.Title}
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})
  
  # Description
  ${data.Description}
  
  # Table of Contents 
  
  * [Installation](#installation)
 
  * [Usage](#usage)
 
  * [License](#license)
 
  * [Contributing](#contributing)
 
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  # Installation
 
  The following necessary dependencies must be installed to run the application properly: ${data.Installation}
 
  # Usage
 
  ​This application is used for ${data.Usage}
 
  # License
 
  This project is license under the ${data.License} license.
  
  # Contributing
  ​
  Contributors: ${data.Contributor}
  
  # Tests
 
  To run tests, you need to run the following command: ${data.Test}
  
  # Questions
  
  If you have any questions about the repo, open an issue or contact ${data.UserName} directly ${data.Email}.
  `
  }
  
  module.exports = generateMarkdown;