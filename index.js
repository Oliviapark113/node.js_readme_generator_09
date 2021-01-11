
const fs = require('fs')
const inquirer = require('inquirer');
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
        message:"How would you like to install your app?",
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
        message:"How do you use your app",
        name: "usage",
        //validate property to check that the user provided a value
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },
       //list of liscense used 
        {  type: "list",
        message:"What license did you use?",
        name: "license",
        choices: ['The MIT license','The GPL liense','Apache license','The GNU liscense','N/A'],
        //validate property to check that the user provided a value
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Please enter Github Username",
        name: "git",
        //validate property to check that the user provided a value
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  type: "input",
        message:"Please enter your E-mail",
        name: "email",
        //validate property to check that the user provided a value
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        //fuctions to create reademe using fs
        
        },


  ])
  .then(({   
      title,
      installation,
      instructions,
      credit,
      license,
      git,
      linkedin,
      email,
      usage,
      contribution
    })=>{
    // Use user feedback for... whatever!!

    const template =`# ${title}
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [License](#license)
    # Installation
    ${installation}
    ### Usage
    ${usage}
    ### Contribution
    ${contribution}
    ### Instruciton
    ${instructions}
    ### Credits
    ${credit}

    ### Liscense
    ${license}

    # Contact
    * Github : ${git}
    * Linkedin : ${linkedin}
    *  Email :${email} 
    
    
    `
    //fuction to create readme using fs
    createRMFile(title, template);
  });
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });

  function createRMFile(fileName, data){
      fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err)=>{
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
