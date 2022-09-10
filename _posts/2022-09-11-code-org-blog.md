---
toc: true
layout: post
categories: [markdown, csp, codeorg, app]
title: Code.org Blog
---

# Link

Here's the link to our AppLab project: [https://studio.code.org/...](https://studio.code.org/projects/applab/q4hZDkGXBcYJunc7WLT1YmG3eCs6XlK45Kkq_73Y__M)

# Initial Thinking

Alex and I want to build a quiz application that is user-friendly and easy to code. We want to avoid repetitive code so that we can have the most efficient programming experience. Our plan is to create an app that can support the selection of different quizzes given a dropdown selection. We want it to have 4 choices on each answer screen with only one correct answer. We also want to have a final screen which displays the score out of 3 as well as a percentage. There should be a way to go back to the main screen to retake a quiz or take the other quiz. Finally, there should be a "How to Play" screen for anyone confused about where to start.

# Design Work

Alex and I met up outside of school and did some sketches for the app on an iPad. We decided that we wanted to have a front screen with 3 images and a dropdown to select the quiz. On each question, we wanted to have a text box for the current quiz question and a 2x2 grid to display the answer choices with images and labels. We also planned out a score page that showed how many questions they got right out of 3 and percent accuracy with which they completed the quiz. The how to play screen was something Alex designed on the fly by himself since we didn't originally plan it but we wanted to add more features.

# Creation

![js-code]({{ site.baseurl }}/images/js-code.png)

Alex and I used the JavaScript editor for quite a bit of our code. We used it to define the basketball and tennis quizzes in JavaScript objects. We used block coding to define `onEvent` listeners and `setProperty` calls because it has useful autocompletion features for the IDs of elements and their respective properties/emitters.

We designed the quiz in such a way that all the questions would live on one screen. When the user clicks the "next" or "submit" button, the following function runs"

```javascript
function nextQuestion() {
    if (quiz[question - 1].answers[selected - 1].correct) {
        correct++;
    }

    if (question + 1 === quiz.length) {
        setProperty("nextButton", "text", "submit");
    } else {
        setProperty("nextButton", "text", "next");
    }
    setProperty("label" + selected, "text-color", "white");
    if (question === quiz.length) {
        finish();
        return;
    }

    question++;
    updateImages();
    updateQuestion();
    updateChoices();

    selected = null;
}
```

This function will set the label text, image sources, and question text to the next question without having to switch screens, avoiding repeated element creation and centralizing all the quiz logic in a single function. Additionally, it reduces the amount of event listeners being created (1 for each of the total 4 images).

## Program Purpose & Function

-   A quiz to assess the user's knowledge of tennis and basketball
-   Should display the user's score at the end to show their understanding

## Data Abstraction

-   Definition of the `tennis` and `basketball` variables containing objects representing the quizzes for each sport
-   Separated from functions that are actually using the data

## Managing Complexity

-   Use of a single screen to display all quiz questions using "containers" for images, the question, and the answer labels
    -   Setting certain properties on these based on the current question to show the correct information
    -   Creation of functions to abstract away logic for changing each of these individual parts of the quiz screen

## Procedural Abstraction

-   Use of functions to update images, questions, and choices
-   Use of function to abstract away quiz logic and execute the correct quiz based on user
-   Use of function to set the current selected answer choice
    -   Changes previously selected answer label's color, sets newly selected answer label's color, and sets the current selected answer choice in a global variable

## Algorithm Implementation

-   Creation of a `nextQuestion` algorithm that procedurally fills in the correct question, labels, and answer choices for each quiz question
    -   Handles answer choice colors, text value of the "next" button (changes to "submit" for the last question)
    -   Handles quiz ending scenario

## Testing

-   Use of `console.log` to debug unwanted behavior
-   Use of `console.log` to test the scoring feature
    -   Logged each correct answer, incorrect answer, and overall score
