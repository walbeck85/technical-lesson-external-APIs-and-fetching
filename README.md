# Technical Lesson: Handling Events with JavaScript

## Introduction

In this lesson, we’ll walk through the steps of building interactive functionality in a web application by handling events dynamically with JavaScript. This involves attaching event listeners, responding to user actions, and updating the DOM in real-time.

A software company wants to enhance user experience by allowing elements on a webpage to respond dynamically to user interactions. The goal is to build a system where users can move an object (like a customizable avatar) left and right on a webpage using keyboard inputs, simulating a typical problem encountered in developing interactive user interfaces.

## Challenge

1. **Define the Problem:**
   - Identify the interactivity requirements for moving a rectangle (the "dodger") left and right on a webpage using keyboard inputs.

2. **Access Elements:**
   - Select the DOM elements that need to be manipulated.

3. **Attach Event Listeners:**
   - Add event listeners to detect user actions and respond accordingly.

4. **Handle Events:**
   - Implement functions to move the dodger left and right based on key presses.

5. **Test and Debug:**
   - Verify the functionality and ensure the dodger remains within the game field boundaries.

6. **Document the Code:**
   - Maintain proper documentation and version control for the project.

## Bonus Challenge

7. **Implement Additional Features and Improvements**

## Instructions

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Define the Problem:**
   - Identify interactivity requirements. Our goal is to move a rectangle (the "dodger") left and right across a game field when the user presses the arrow keys.
   - **User Action:** Pressing the left arrow key moves the dodger left. Pressing the right arrow key moves it right.
   - **Constraints:** The dodger must remain within the boundaries of the game field.

3. **Design and Develop the Code:**

   - **Step 1: Access Elements**
     - Select the element we want to manipulate in the DOM.
       ```javascript
       const dodger = document.getElementById("dodger");
       ```

   - **Step 2: Attach Event Listeners**
     - Detect user interactions (keypresses) and respond accordingly.
       ```javascript
       document.addEventListener("keydown", function (event) {
         console.log(event.key); // Logs the key pressed
       });
       ```

   - **Step 3: Handle Events - Move Left**
     - Move the dodger left when the left arrow key is pressed.
       ```javascript
       function moveDodgerLeft() {
         const leftNumbers = dodger.style.left.replace("px", "");
         const left = parseInt(leftNumbers, 10);

         if (left > 0) { // Prevent moving off-screen
           dodger.style.left = `${left - 10}px`;
         }
       }
       ```

   - **Step 4: Handle Events - Move Right**
     - Move the dodger right when the right arrow key is pressed.
       ```javascript
       function moveDodgerRight() {
         const leftNumbers = dodger.style.left.replace("px", "");
         const left = parseInt(leftNumbers, 10);

         if (left < 360) { // Prevent moving off-screen
           dodger.style.left = `${left + 10}px`;
         }
       }
       ```

   - **Step 5: Combine Event Handling**
     - Call the moveDodgerLeft or moveDodgerRight functions based on key presses.
       ```javascript
       document.addEventListener("keydown", function (event) {
         if (event.key === "ArrowLeft") {
           moveDodgerLeft();
         } else if (event.key === "ArrowRight") {
           moveDodgerRight();
         }
       });
       ```

4. **Test and Refine:**
   - Open `index.html` in the browser.
   - Use the arrow keys to move the dodger left and right.
   - Confirm the dodger stops at the edges of the game field.
   - Debug using `console.log()` to verify event listener functionality.

5. **Document and Maintain:**
   - Use version control to track changes and updates.
   - Schedule regular reviews to ensure content remains relevant and accurate.
   - Maintain a repository with all lab documents and example code.

## Bonus Challenge: Implement Additional Features and Improvements

1. **Handling Edge Cases:**
   - Ensure the dodger does not move outside the game field boundaries.

2. **Add New Features:**
   - Allow the dodger to move vertically.
   - Enable users to toggle the movement speed.

3. **Experiment with Other Event Types:**
   - Implement mouse clicks or drag-and-drop functionality.

## Resources

- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
