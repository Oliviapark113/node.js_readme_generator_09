
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
        message:"What are the test Instructions to run test?",
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

  ## Demo Project.

    ![Demo in gif](demo1.gif)
  - [Demo Video Link](https://oliviapark113.github.io/Readme.md_demo_video/.)
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


