import { Chart } from './charts-class';
import { Sunburst } from './sunburst-class';

document.addEventListener('DOMContentLoaded', (event) => {
	//sunburst 
  let sb; 

	//Set node and Main viz SPA ups
  displayNodes();
  document.getElementById('visualize-button').onclick = displayViz;
	document.getElementById('back-button').onclick = displayNodes;
 	
  
  function displayNodes(){
    	document.getElementById('node-div').style.display = 'block';
			document.getElementById('viz-div').style.display = 'none';
  }
  
  function displayViz(){
    	let academicValuesTest = {
           	 'Academic Year': ['Total'],
             Degree: ['Bachelors', 'Masters', 'Ph.D.'],
             Faculty: ['Business'],
             'Study Status': ['Part-time', 'Co-op']
          };
       let diversityValuesTest = {     
              Age: ['<=17', '18-20', '26-30', '55+'],
              Sex:  ['Male', 'Female'],
              'Citizenship Status': ['International', 'Domestic']
       }
       console.log('clicked');
    	if (sb){
         let diversityValues = ht.diversityValues();
         let valid = false;
         console.log(diversityValues);
         for (const attr in diversityValues){
        	 if (diversityValues[attr].length > 0){
             valid = true;
             break;
           }
         }
        
         if (!valid){
        		alert('Please select at least one diversity attribute');  
         } else {
           	 console.log('Valid');
             let academicValues = ht.academicValues();
           	 document.getElementById('node-div').style.display = 'none';
						 document.getElementById('viz-div').style.display = 'block';
      	 		 sb.initialRender(academicValues, diversityValues);
         }
      } else {
         alert('Please wait for the data to finish loading');
      }
  }
  
  let ht = new Chart()
     .container('#chart')
     .svgWidth(window.innerWidth)
     .svgHeight(window.innerWidth)
     .initialZoom(0.3)
     .render()

  new Sunburst()
         .container('#sunburst')
         .svgWidth(window.innerWidth)
         .svgHeight(window.innerWidth)
  			 .displayNodes(displayNodes)
    		 .setup('https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/00827b9d532883343191f6144d41d0a0bbad5df8/fall.csv')
				 .then(value => sb = value);
});





       
       
       
       
       
       
       
       


