
const fs = require('fs')
const inquirer = require('inquirer');
const util = require('util')


const writeFileAsync = util.promisify(fs.writeFile);

//inquirer to generate questions 
 function promptUser(){

 return inquirer.prompt([
      /* Pass your questions in here */
        {  type: "input",
        message:"What is the project title?",
        name: "title",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Please enter description of Project",
        name: "description",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },


        {  type: "input",
        message:"What are the installation instructions for this project. write NONE if no instructions",
        name: "installation",
     
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"How would you like your application to be used",
        name: "usage",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Who contributed on this project?",
        name: "contribution",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"What are the Test Instructions?",
        name: "test",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },
     
        {  type: "checkbox",
        message:"Please select a license.",
        name: "license",
        choices: ['MIT','ISC','Apache','GNU GPLv3','N/A'],
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Who is credit is this work?",
        name: "credit",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Please enter Github Username",
        name: "git",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Please enter your E-mail",
        name: "email",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
        
        },


  ])

}

function generateMarkdown(data) 
{    
  return `
  # ${data.title}

  # Table of Contents 


   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Test](#test)
   - [Credits](#credits)
   - [License](#license)
   - [Questions](#description)
  
  ##  Description:

  ![License](https://img.shields.io/badge/License-${data.license}-blue)


   ${data.description}

  ## Installation:

   ${data.installation}

  ## Usage:

   ${data.usage}

  ## Contributing:

   ${data.contribution}

  ## Test:

   ${data.test}

  ## Credits:

   ${data.credit}

  ## License:

   For more information about the Liscense, click on the link below .
  - [License](https://opensource.org/licenses/${data.license})

  ## Questions:

   For questions about the Generator you can go to my GitHub Page at the following Link:

  - [GitHub Profile](https://github.com/${data.git})

  - [View Code](https://github.com/${data.git}/${data.title})

   For additional questions please reach out to my email at: ${data.email}
    `
}


  async function init() {
     try{
        const response = await promptUser();

        const readMe = generateMarkdown(response);
        
        await writeFileAsync("README.md", readMe);

        console.log("Sucess!");

     } catch (err){
        console.log(err);
     }
  }

  init();


//## Acceptance Criteria


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
