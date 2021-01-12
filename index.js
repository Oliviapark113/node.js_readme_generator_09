
const fs = require('fs')
const inquirer = require('inquirer');
// const temp = require('template')
const slugify = require('slugify')
// const slugify = require('slugify')

//inquirer to generate questions 
inquirer
  .prompt([
      /* Pass your questions in here */
        {  type: "input",
        message:"What is the project title?",
        name: "title",
        //validate property to check that the user provided a value
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Please enter description of Project",
        name: "description",
        //validate property to check that the user provided a value
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },


        {  type: "input",
        message:"What are the installation instructions for this project. write NONE if no instructions",
        name: "installation",
        //validate property to check that the user provided a value
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Instructions to be follow?",
        name: "instructions",
        //validate property to check that the user provided a value
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
       //liscense used 
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
  .then((
    data)=>{
    // Use user feedback for... whatever!!
    console.log(data)
    const template =
  `
  # ${data.title}

  # Table of Contents 


    -  [Description](#description)
    -  [Installation](#installation)
    -  [Usage](#usage)
    -  [Contributing](#contributing)
    -  [Test](#test)
    -  [Credits](#credits)
    -  [License](#license)
    -  [Questions](#description)
  
  ##  Description:
    
  ![GitHub](https://img.shields.io/github/license/Oliviapark113/node.js_readme_generator_09?logo=${data.license}&?color=blue&?style=flat-square&logo=appveyor    "License Badge")

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

  - [GitHub Profile](https://github.com/${data.git}/${data.title})

    For additional questions please reach out to my email at: ${data.email}
    `
    //fuction to create readme using fs
    createRMFile(title, template);
  });


  function createRMFile(fileName, data){
      fs.writeFile(`./${slugify(fileName, {
        replacement: '-',
        lower: false
      })}.md`, data, (err)=>{
          if(err){
              console.log(err)
          }
          console.log("README generated sicessfully")

      })
  }
//Install our package

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
