Read Me !!

Running Guideline
Clone Repo
install Nodemodules :npm i
start : npm run start

Url Of Hosted Website :https://adarshchaudhari300.github.io/Intern_to_do_list/

User Authentication Requirement

If a user is not logged in, the site will not display any tasks. Instead, they will be prompted to log in before accessing task-related features.

![alt text](<Screenshot 2025-03-09 130821-1.png>)

Login Process

When a user is not logged in, a login modal appears, prompting them to enter their username, email, and password. Upon successful authentication, a token is generated and stored in local storage. Additionally, the user's name is also saved in local storage.
![alt text](<Screenshot (30).png>)

Landing Page

After logging in, the landing page appears, displaying all tasks available to the user.
![alt text](<Screenshot (31).png>)

Task Management

Clicking on the "Add To-Do" dropdown opens a form where users can add a new task.
Users can schedule tasks for a specific date using the integrated calendar.
A "Clear" option is available next to the calendar to remove the typed text.
![alt text](<Screenshot (26).png>)

Dashboard Layout

Left Column:

Displays user information.
"Today's Tasks" accordion: Shows all tasks scheduled for today.
"All Tasks" accordion: Displays the total number of tasks.
Progress bar: Indicates the number of today's tasks that have been completed.
Right Column:

Clicking on a task opens a larger modal for detailed viewing and management.
![alt text](<Screenshot (27).png>)

Navbar Functionality

The leftmost button in the navbar controls the visibility of the left column.
Clicking the button toggles the left column, either showing or hiding it.
![alt text](<Screenshot (35).png>)

Navbar Controls

Leftmost Button: Toggles the visibility of the left column.
Rightmost Button: Controls the display of tasks, switching between grid view and row view when clicked.
![alt text](<Screenshot (33).png>)

Task Actions

Delete Button: Permanently deletes the selected task.
Checkbox: Marks a task as done and moves it to the bottom of the task list.
![alt text](<Screenshot (28).png>)



