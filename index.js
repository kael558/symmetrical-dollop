import { nodes_svg } from './nodes'
import {} from './diversityMaps'

document.addEventListener('DOMContentLoaded', (event) => {
	displayNodes();
  
  document.getElementById('visualize-button').addEventListener('click', displayViz);
	document.getElementById('back-button').addEventListener('click', displayNodes);
 
  function displayNodes(){
    	document.getElementById('node-div').style.display = 'block';
			document.getElementById('viz-div').style.display = 'none';
  }
  
  function displayViz(){
  		document.getElementById('node-div').style.display = 'none';
			document.getElementById('viz-div').style.display = 'block';
  }
});

