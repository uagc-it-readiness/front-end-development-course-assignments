# Assignment 20 - Mock Q and A screen

This assignment is going to utilize most of the concepts we have covered the past few months. It is going to simulate a real world work request. You will be provided a list of Visual Requirements and Interactive requirements that your client is expecting.  You are going to be building out a basic JavaScript driven Question and Answer form that acts similar to Stack Overflow.  You will be building out the User Interface and hand off code to the backend development team for finalization (database/webservices/etc).

# Visual Requirements.
Your UX and creative team has provided you a set of wire frames that defines the general layout of the page.  It is located in this folder on your local machine.  Your final product needs to fulfill the following requirements.

- The main body of the page needs to be between 960 and 1200 pixels wide.  The client is not interested in supporting mobile devices.
- The company currently doesn't have a finalized logo. Please use the provided URL for the logo
  - `http://placehold.it/350x100`
- The company's brand font is Roboto.  They said you can get it off Google Fonts, but they are ok with a helvetica font.
  - `"Helvetica Neue", Helvetica, Arial, sans-serif`
- The company's primary brand colors are the following.  Suggested use of color is mentioned below.
  - `#5a5a5a` - Primary Text Color. The main text of the site needs to use this color. Client also mentioned using this for any borders.
  - `#aa0000` - Primary Brand Color. The client has mentioned they'd like the navigation to use this color and they'd like their hyperlinks to be this color too.
  - `#620010` - Accent Brand Color. Use this for any heading titles that need to stand out.
- Navigation - The client's website isn't heavy on pages, but they want to point users to their social presence.  Put the following links in the site's navigation
  - Home - Opens in same window - URL: `#`
  - Q & A - Opens in same window - URL: `#`
  - Twitter - Opens in new window - Url: `https://twitter.com/HalluxInc` - Optional: The client has said they'd like an icon if possible
  - Facebook - Opens in new window - Url: `https://www.facebook.com/HalluxInc/` - Optional: The client has said they'd like an icon if possible
- Question Section
  - See wire frames for layout
  - Find an image through google to represent a user's avatar image
- Answers
  - Answers need to take up about 75% of the left hand side of the container.
  - Find an image through google to represent a user's avatar image
  - The page needs to have two to three answers populated on the page when the page loads.
- Activity log
  - The activity log needs to take up whatever remaining space is available on the right.
- Answer Form
  - The look and feel of the form should match the rest of the web page
  - Name should be a text box
  - Answer should be a textarea
  - Any validation errors need to be in Red



# Interactive Requirements
- Answer Form
  - Both inputs should validate and show errors when the element looses focus (blur event) or when the user tries to submit the form.

- Invalid Form Behavior
  - The inputs should get a red border around them
  - An error message should fade in when if the input is invalid.

- Valid Form Behavior
  - The Form should clear and fade out.
    - Optional: The client wants a thank you message to fade in. The message will have a button to submit another answer. This button should fade out the message and fade in a clean form.
  - A new HTML element should be built to match the structure  of the existing answers.
  - The new element should be appended to the list of answers
    - Optional: The client has asked if a fade in or slide down effect could be used. Not required, but nice to have.
  - The user's name should be prepended to the activity log.

- Optional: The backend team is expected to come in and setup all of the ajax requests.  Try to impress them and do the following.
  - Mock out a get ajax request on page load to get all the answers.
  - Mock out a post ajax request when the form is submitted.

