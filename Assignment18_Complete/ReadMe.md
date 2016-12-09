# Assignment 18 - Squashing bugs
I tried converting assignment 13 into jQuery, but it is still not 100% working. I need your help to finish it out.  Read the comments in code and use your Chrome Console to fix all the issues.

## Known Issues

- I wrote some css to make all validation messages red and to hide them on page load.  It's not working properly.
- The `textarea` for 'Tell us about yourself' isn't getting caught in the validation when it has a 'blur' event.
- There is a function to validate email address, but it is throwing an error when I try to use it.
- The `valdiateRequiredInput` should fadeIn the corresponding `requiredMsg` span tag.
- The `validateEmail` isn't working as I had expected it to.  It is showing an error when it is valid and it's not turning red when it is invalid. 
- `validatePassword` should only validate when both passwordValue and passwordConfrimValue are filled out. I thought I had added this, but it stopped working.
- I want to re-run all the validation when the submit button is clicked.  I copied and pasted some code from another part of the application, but it doesn't seem to be working either.
- The form should fade out and fade in a success message when the form is properly filled out.  I have the HTML in place, but the CSS and JS aren't working.


## Tips & Hints
- Test selectors
- Work from top to bottom
- Check for spelling mistakes
- Read the comments to see what it should be doing.
- Check for commented out code that shouldn't be commented out.
- Look in the css, html, and js for errors. Don't focus solely on JS.