## Workout Tracker Documentation

This project provides a simple workout tracker web application. The application allows users to log their workouts and view their workout history and total calories burned. 

### File Structure:

* **index.html:** The main HTML file containing the structure of the application.
* **styles.css:** The CSS file responsible for styling the application's appearance.
* **script.js:** The JavaScript file containing the application's logic and functionality.


### `index.html` Explanation:

1. **DOCTYPE Declaration:** Defines the document type as HTML5.
2. **HTML Tag:** The root element of the HTML document.
3. **Head Section:** Contains metadata about the document.
   - **charset:** Sets the character encoding to UTF-8 for proper display of various characters.
   - **viewport:** Defines the viewport for responsive design, ensuring proper rendering across devices.
   - **title:** Sets the title of the HTML document, displayed in the browser tab.
   - **link:** Links the `styles.css` file for styling the page.
4. **Body Section:** Contains the visible content of the page.
   - **Container:** A `div` element to group the application's content for styling purposes.
     - **Heading:** An `h1` element displaying the application's title "Workout Tracker."
     - **Workout Form (`workoutForm`):** 
        - A `form` element to collect workout details from the user.
        - **Form Groups:**  `div` elements used to group the labels and input fields.
           - **Labels:** `label` elements for each input field, providing descriptive text.
           - **Input Fields:**
             - **Type:** `input` field of type "text" to accept the workout type.
             - **Duration:** `input` field of type "number" to accept the workout duration in minutes.
             - **Intensity:** `select` element allowing users to choose from "Low," "Medium," or "High" intensity levels.
             - **Calories Burned:** `input` field of type "number" to accept the calories burned during the workout.
        - **Submit Button:** `button` element with `submit` type to trigger the form submission.
     - **Workout History Section:**
        - **Heading:** `h2` element titled "Workout History."
        - **Workout List (`workoutList`):**  A `div` element where workout history will be displayed.
     - **Total Calories Burned Section:**
        - **Heading:** `h2` element titled "Total Calories Burned."
        - **Total Calories (`totalCalories`):** A `p` element displaying the total calories burned. 
5. **Script Tag:** Links the `script.js` file for functionality.

### `styles.css` Explanation:

The `styles.css` file contains CSS rules to style the elements of the HTML document, ensuring a visually appealing and user-friendly interface. 

- **General Styling:**
  - Sets basic styles for the body, container, headings, and form elements. 
- **Form Styling:**
  - Styles the form elements like input fields, labels, and the submit button.
- **Workout History Styling:**
  - Styles the "Workout History" section, including the list of workouts.
- **Total Calories Styling:**
  - Styles the "Total Calories Burned" section.

### `script.js` Explanation:

The `script.js` file contains JavaScript code that handles the functionality of the Workout Tracker application. 

1. **Event Listener:**
   - Attaches an event listener to the "Log Workout" button (`workoutForm`) to trigger the `handleSubmit` function on form submission.

2. **handleSubmit Function:**
   - Retrieves data from the form input fields.
   - Validates the input data to ensure it's in the correct format.
   - Creates a new workout object containing the retrieved data.
   - Adds the new workout object to the `workoutHistory` array.
   - Updates the total calories burned.
   - Clears the form for the user to log another workout.
   - Renders the workout history in the `workoutList` section.
   - Updates the total calories burned in the `totalCalories` element.

3. **renderWorkoutHistory Function:**
   - Clears the previous workout history content from the `workoutList` element.
   - Iterates through the `workoutHistory` array.
   - For each workout in the array, it creates a new `div` element to display the workout details.
   - Appends the newly created `div` element to the `workoutList` element.

4. **updateTotalCalories Function:**
   - Calculates the total calories burned by summing the calories burned from all workouts in the `workoutHistory` array.
   - Updates the `totalCalories` element with the new total calories burned.

This documentation provides a comprehensive overview of the Workout Tracker application, explaining each file and its purpose. The code is well-organized and commented, allowing for easy understanding and modification.
