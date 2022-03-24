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
        }
    }
  
  
  
  
  
 
