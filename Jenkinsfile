//Define the variable CODE_CHANGES.
CODE_CHANGES = getGitChanges(); //Is a ruby script to check if there any changes to code and sets the value to CODE_CHANGES
pipeline {
    agent any
    
    parameters {
        string(name: 'VERSION', defaultValue:'', description:'Deployed production version')
        choice(name: 'VERSION', choices:['1.1.0','1.1.1'], description:'')
        booleanParam(name: 'executeTests', defaultValue:true, description:'')
    }
    stages {
        stage("build"){
             
            } //CODE_CHANGES is a variable you can define on your own
            steps{
                    echo "Build version ${NEW_VERSION}"
            }
        }

        stage("test"){
            when{
                expression{                   

                    //Execute only of executeTest is set to true
                    params.executeTests 
                }
            } 
            steps{
                echo "We are now testing phase"
            }
        }

        stage("deploy"){
            steps{

                echo "Deploying the system"
                echo "Deploy Version ${VERSION}"
                
            }
        }
    }
}

