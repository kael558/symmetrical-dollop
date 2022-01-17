https://kael558.github.io/symmetrical-dollop/

### Files 
Filename |
| Filename     | Description |
| ----------- | ----------- |
| index.html      | Contains all necessary html elements. The Javascript files build upon these elements (e.g. the svg). [Github Pages](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Using_Github_pages) will automatically use this file as the primary entry point.        |
| index.js | The main code that creates the visualization objects from the imported files. It handles displaying the two different pages. It includes a test mode that automatically renders the main visualization page with default categories. |
| bundle.js   | Concatenates all Javascript (.js) files. You may use the [bundle package from npm](https://www.npmjs.com/package/bundle-js) to create this file. This is implemented in this way so index.html will only require **one** script source. |
| navi-class.js | Defines and exports the sunburst diagram seen on the first page. Imports the data categories from nodes.js and displays them with their respective child categories. |
| nodes.js | Defines the data categories with descriptions, child categories, data type (uncollected, academic or diversity) and if the child categories should be ordered (e.g. age). |
| styles.css | Defines the stylings used for the various classes and elements. |
| sunburst-class.js | Defines and exports the ring diagram seen on the attribute visualization page. This is the current file being used. However, this was the first attempt and it does not support any sort of animation. |
| sunburst-class1.js | This was the second attempt at the implementation. The code is more modular and follows more closely with d3 oriented principles. It supports animation. The slice labels & other minor features were incomplete and other minor bugs were also prevalent. |

