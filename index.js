import { Sunburst } from './navi-class';
import { RingDiagram } from './ring-diagram';

document.addEventListener('DOMContentLoaded', (event) => {
	//Ring diagram object
  let rd; 

	//Set node and Main viz SPA ups
  displayNodes();
  document.getElementById('visualize-button').onclick = displayViz;
	document.getElementById('back-button').onclick = displayNodes;
 	document.getElementById('info-open-button').onclick = displayInfo;
  document.getElementById('info-div').onclick = hideInfo;
  document.getElementById('info-close-button').onclick = hideInfo;
  
  function displayNodes(){
    	document.getElementById('node-div').style.display = 'block';
			document.getElementById('viz-div').style.display = 'none';
  }
  
  function displayViz(){
      let test = false;
    	let academicValuesTest = {
           	 'Academic Year': ['Total'],
             Degree: ['Bachelors', 'Masters'],
             Faculty: ['Science', 'Business'],
             'Study Status': ['Total']
          };
       let diversityValuesTest = {     
              Age: [],
              Sex:  ['Male', 'Female'],
              'Citizenship Status': ['International', 'Domestic']
       }

    	if (rd){
         let diversityValues = test?diversityValuesTest: sb.diversityValues();
         let academicValues = test?academicValuesTest: sb.academicValues();

         let valid = false;

         for (const attr in diversityValues){
        	 if (diversityValues[attr].length > 0){
             valid = true;
             break;
           }
         }
        
         if (!valid){
           	console.log(diversityValues);
        		alert('Please select at least one diversity attribute');  
         } else {
           	 document.getElementById('node-div').style.display = 'none';
						 document.getElementById('viz-div').style.display = 'block';
      	 		 //rd.render(academicValues, diversityValues); //For ring-diagram1.js
           	 rd.initialRender(academicValues, diversityValues);
         }
      } else {
         alert('Please wait for the data to finish loading');
      }
  }
  
  function displayInfo(){
    console.log("open");
    document.getElementById('info-div').style.display = 'block';
  }
  
  function hideInfo(){
     document.getElementById('info-div').style.display = 'none';
  }
  
  let sb = new Sunburst()
     .container('#chart-container')
     .svgWidth(window.innerWidth-200)
     .svgHeight(window.innerWidth)
     .initialZoom(0.3)
     .render()

  new RingDiagram()
         .container('#sunburst-container')
  			 .displayNodes(displayNodes)
    		 .setup('https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/00827b9d532883343191f6144d41d0a0bbad5df8/fall.csv')
				 .then(value => rd = value);
});





       
       
       
       
       
       
       
       


