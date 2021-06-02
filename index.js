const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs"); 


// generate questions with inquirer
const questions = 
    [
        {
            type: 'Input',
            message: "What is the title of your project?",
            name:'Title',
           
        },
        {
            type:'input',
            message: 'Please describe this app.',
            name:'Description',
           
        },
        {
            type: 'Input',
            message: 'How do you install this app?',
            name:'Installation',
            //validate to check if user provided a value
        },
        {
            type: 'Input',
            message: 'What is the usage of this app?',
            name:'Usage',
            //validate to check if user provided a value
        },
        {
            type: 'Input',
            message: 'Chose a license for your project?',
            name:'License',
        },
         {
            type: 'Input',
            message: 'Give an explaination of test written for this app and how to run them.(not required)',
            name:'Test',
         },
         {
            type: "Input",
            message: "Please add contributors",
            name: "Contributor",
          },
         {
            type: 'Input',
            message: 'What is your Github username?',
            name:'UserName',
            //validate to check if user provided a value

         },
         {
            type: 'Input',
            message: 'What is your Email?',
            name:'Email',
            //validate to check if user provided a value

         }
    ];
// Writing to a file 
function writeToFile(fileName, data) {

    fs.writeFile("./generatedReadMe/"+fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("Successfully wrote: " + fileName);
    })
    
    }
    
    
    // initialization function
    function init() {
      inquirer.prompt(questions)
      .then(function(data) {
        writeToFile("generatedReadme.md", generatorMarkdown(data));
      })
    }
    
    
    // run the app
    init();
