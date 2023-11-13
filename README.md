#Day26
The project is a simple web application for managing reminders. Here's overview:
User Interface:

The application has an HTML structure that includes a form for adding reminders, a section for displaying added reminders, and various other elements for displaying the current time, date, and greetings.
Styling:

The CSS code is used for styling the user interface, making it visually appealing. Styles include color schemes, font sizes, borders, and layouts.
JavaScript Interactivity:

JavaScript is used to add interactivity to the webpage. Event listeners are employed to trigger actions in response to user clicks and form submissions.
Functionality:

The application allows users to click a button ("+ New Reminder") to add a new reminder. Clicking this button triggers the displayTime function, which hides certain elements and displays a form for adding reminders.

The form allows users to input a title, date, and location for a reminder. When the form is submitted, the saveReminder function is called. This function stores the reminder in the browser's local storage, clears the form, and then fetches and displays the updated list of reminders.

The application also provides a mechanism for deleting reminders. Each displayed reminder has a "Delete" button that, when clicked, triggers the deleteRem function, removing the corresponding reminder from local storage and updating the displayed list.

The fetchReminders function retrieves stored reminders from local storage and dynamically generates HTML elements to display them on the webpage.

Dynamic Time Display:

The application dynamically displays the current time and date, updating every second. The displayTime function is responsible for this behavior.
Greeting Message:

Depending on the time of day, a greeting message is displayed using the sayHi function.
Responsive Design:

The CSS includes media queries, suggesting that the application is designed to be responsive to different screen sizes.

In summary,the project is a simple reminder application that allows users to add, view, and delete reminders.The use of local storage allows reminders to persist even if the user refreshes the page or closes the browser.
