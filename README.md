Task Management Application

This is a simple task management application built with React and Next Js that helps users manage their tasks effectively. 
The app provides features to add, delete, edit, and search tasks, with data persistence using localStorage. The app also makes use of the Context API for state management and is fully responsive for mobile devices.

Features

1. Add Task
Users can add new tasks to their task list. 
Each task consists of a title, description,


2. Delete Task

Users can delete tasks from the list.
A confirmation prompt may be used to prevent accidental deletion.

3. Edit Task

Users can edit the details of any existing task.
The app allows updating the task title, description.

4. Save Task

The task list is saved in the browser's localStorage.
This ensures that tasks persist even after refreshing the page or closing the browser.

5. Search Functionality

Users can search for tasks using a Keyword.
The search filters the task list based on the title.

6. LocalStorage Integration

The app uses localStorage to persist tasks.
When a task is added, edited, or deleted, the changes are reflected in localStorage.

7. Context API

The Context API is used for state management, providing a centralized way to manage the task list and user actions.
It allows passing data and functions across the component tree without prop drilling.

8. Mobile Responsive Design
The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
The user interface adjusts to different screen sizes and orientations.