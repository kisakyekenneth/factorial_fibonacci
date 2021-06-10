pipeline {
    agent any
    
    parameters {
        string(name: 'VERSION', defaultValue:'', description:'Deployed production version')
        choice(name: 'VERSION', choices:['1.1.0','1.1.1'], description:'')
        booleanParam(name: 'executeTests', defaultValue:true, description:'')
    }
    stages {
        stage("build"){           
          
            steps{
                    echo "Build version ${NEW_VERSION}"
            }
        }

        stage("test"){
            when{
                expression{                 

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

