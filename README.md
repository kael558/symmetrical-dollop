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
- Diagram choice - Captures hierarchical nature of data. Displays proportions of uncollected vs collected. 
- STEM vs non-STEM option - Aggregated other faculty data to provide this option. 
- Uncollected category choices - Indigineity, Ethnicity, Race etc... Suggested by Prof Gananatha as data categories relevant to current times.
- Uncollected category values - Students upto age 85 displayed as uncollected (because average age of student is rising)
- Descriptions in center - Provides data description and context if necessary. Must know how and where data is gathered for data context (e.g. sex vs gender).
- On category click zoom - Displays the categories to allow the user to clearly see all attributes
- Information icon - Provides metadata of visualization (intro, sources, choices & credits). 
- Select all - Ease of use for users to click one button to select all attributes
- Selected Categories on right - Additional interface to let users know (in a list format) what categories they have selected to visualize
- Legend - Identifies the meaning behind each color
- Black text in slices - Contrasts with  color blind colors
- White text otherwise - Contrasts with background color
- Gray for uncollected - Gray is symbolic for missing
- Text in slices was written clockwise - To make it easier to read without rotating ones head to read
- Text in slices switches direction (becomes counterclockwise) at the 90 & 270 (assuming 0 degrees at top) - The text is not upside down
- Back button functionality - Lets users navigate back from zoomed in view
- Visualize button in top right - Right is usually associated with moving forward

##### TODO
- [ ] Make text go from inward to outward, so more text is displayed
- [x] Center description text should not overlap with visualization

#### Ring diagram design
- Diagram choice - Able to encapsulate all available diversity data, show visual comparison within demographics and allow comparisions between demographics.
- Circular format with slices - Doesn't indicate any demographic is first or last and thus more important
- Center circle is white - To draw the users attention to hover and observe numbers
- Fixed size slices - The purpose is to compare diversity populations within academic demographic (slices), so fixed size slices are used because comparison of total population between academic demographics is not the priority. 
- Compare mode - Allows comparison of diversity populations between academic demographics.
- Arc length dependent on diversity % within slice - Allows users to easily know how much of the student population is of a particular diversity within a demographic (slice)
- On arc hover - Lets the user see the values associated with that demographic
- \# of students provided - So users may see a numerical value because the visualization does not demonstrate a numerical value
- '<5' is displayed if less than 5 students - To prevent identifiability
- If no students are in demographic slice, a grey arc is displayed - grey indicates no students and displays 'No students' in center if hovered
- If no students are in diversity population, the arc length is 0 - corresponds to the arc size dependent on diversity %
- % of students - So users see the percent value associated with the size of the arc within the demographic slice
- Legend - Identifies each category with the color
- Year & Age are sorted - To allow users to easily observe time or age progression trends
- On arc click zoom - Lets the user see the other diversity attributes associated with that demographic.
- On compare click - Puts all slices in their own ring diagram. Allows users to switch between views.
- On arc hover (in compare mode) - Displays values associated with that demographic in all diagrams. Legend category also highlights to let user know which category is being hoverred.
- On arc click (in compare mode) zoom - Same as before but for all diagrams.
- Back button functionality - Lets users navigate back from zoomed in view
- Title displays unselected demographics - Lets users know what each demographic (each arc) is including 
- Color assignments are set in a randomized order - To prevent association of any color with any demographic
- Age is the only sequential colored set - To allow users to observe age progression trends


##### TODO
- [x] Fix transitions
- [x] Slice text should not overlap with visualization
- [ ] Put category within arc to allow the user to identify the category more easily

#### General (applies to all)
- Colorblind accessility
- Ordering of data should be randomized (or ordered by popoulation size)
- Dark background - Easier on the eyes
- Back button in top left - Left is usually associated with going back