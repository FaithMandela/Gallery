  pipeline {
  agent any
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/Beckychellah/gallery'
      }
    }
        stage('Build') { 
        steps {
        nodejs(nodeJSInstallationName: 'Node17') {
           sh 'npm -v'
           sh 'node -v'
    }
  } 
            }
    stage('Test'){
      steps{
      echo 'Testing'
      }
    }
     stage('Deploy to heroku'){
     steps{
         withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/fierce-harbor-37915.git master'
    }
     }
 }
        }
    }
  
  
  
  
  
 
