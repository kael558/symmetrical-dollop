### Files 
| Filename     | Description |
| ----------- | ----------- |
| index.html      | Contains all necessary html elements. The Javascript files build upon these elements (e.g. the svg). [Github Pages](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Using_Github_pages) will automatically use this file as the primary entry point.        |
| index.js | The main code that creates the visualization objects from the imported files. It handles displaying the two different pages. It includes a test mode that automatically renders the main visualization page with default categories. |
| bundle.js   | Concatenates all Javascript (.js) files. You may use the [bundle package from npm](https://www.npmjs.com/package/bundle-js) to create this file. This is implemented in this way so index.html will only require **one** script source. |
| navi-class.js | Defines and exports the sunburst diagram seen on the first page. Imports the data categories from nodes.js and displays them with their respective child categories. |
| nodes.js | Defines the data categories with descriptions, child categories, data type (uncollected, academic or diversity) and if the child categories should be ordered (e.g. age). |
| styles.css | Defines the stylings used for the various classes and elements. |
| ring-diagram.js | Defines and exports the ring diagram seen on the attribute visualization page. This is the current file being used. However, this was the first attempt and it does not support any sort of animation. |
| ring-diagram1.js | This was the second attempt at the implementation. The code is more modular and follows more closely with d3 oriented principles. It supports animation. The slice labels & other minor features were incomplete and other minor bugs were also prevalent. |

### Steps to create GitHub Page
#### Create new repo
1. Create a new (public is required for GitHub Pages if you do not have GitHub Pro) repo on github.com

#### Clone and update local repo
2. Navigate to a folder that you want the code to be in using any kind of terminal.
3. Clone the repository using `git clone https://github.com/kael558/symmetrical-dollop.git`
4. Rename the current remote origin to upstream `git remote rename origin upstream`
5. Update the origin using `git remote add origin URL_TO_GITHUB_REPO_FROM_STEP_1`
6. Push the contents of the repo to your new repo using `git push origin master`

#### Set up pages
7. In your new repo, navigate to 'Settings' and then to the 'Pages' tab
8. Select the source to be the 'master' branch and click save.
9. A link should appear to your new github page.

### Design Rationale Document
#### Sunburst diagram design
- Diagram choice -  Captures hierarchical nature of data. Displays proportions of uncollected vs collected. 
- STEM vs non-STEM option- 
- Prof Gananatha - Combine Science & Engineering into STEM vs non-STEM students. Uncollected categories. Students upto age 85 should be collected as average age of student is rising.
- Descriptions in center - Provides data description and context if necessary. Must know how and where data is gathered for data context (e.g. sex vs gender).
- On category click zoom - Displays the categories to allow the user to clearly see all attributes
- Information icon - Provides metadata of visualization (intro, sources, choices & credits). 
- Select all - Ease of use for users to click one button to select all attributes
- Selected Categories on right - Ease of use for users to know in a list format what categories they have selected to visualize
- Legend - Identifies the meaning behind each color
- Black text in visualization - contrasts with  color blind colors
- White text otherwise - contrasts with background
- Dark background - Easier on the eyes
- Gray for uncollected - Gray could be interpreted as lifeless or missing

##### TODO
- Make text go alongside arc, so more text is displayed
- Text should not cover visualization

#### Ring diagram design
- Diagram choice - encapsulate all available diversity data and allow comparisions between demographics .

##### TODO
- Fix transitions

#### General
- Colorblind accessility
- Ordering of data should be randomized (or ordered by popoulation size)
- Color assignments should be randomized
