# Assignment 4
We are going to be working heavily in CSS today. You will not need to modify ANY html. Do all of your work inside of styles/main.css.

## Part 1: Global Styles
Apply the following rules to the appropriate tags.

- `body`
  - Set the width to 960 pixels
  - Set the top and bottom margin to 20 pixels. Set the left and right to a value that will center it. [hint](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
- `h1`    
  - Set the color of the text to `#777777`
  - Add a bottom border of 1 pixel that is solid and `#777777` 
- `h2`
  - Set the color of the text to `#aa0000`
  - Add a bottom border of 1 pixel that is dashed and `#aa0000` 
- `hr`
  - Add a property that clears floats in both directions
  
## Part 2: Horizantal Navigation
Apply the following rules to the following classes.

- `navigation-link`
  - Set the background to `#000000`
  - Set the font color to `#ffffff`
  - Overwrite the default styling and make the elements to display `block`
  - Float the elements from left to right.
  - Use shorthand and set the margins and padding to 20 pixels.
  - Remove the underline from the links

## Part 3: Image Gallery
Change the default styling of the list and create a simplistic image gallery.  Add the following rules to the following classes.

- `image-list`
  - Change the list style to not display any bullets or icons.
  - Remove the default padding and margin.
- `gallery-image`
  - Make the images display in a line similar to the links in Part 2 of the excercise.
  - Add 20 pixels of padding and 20 pixels of margin around each image.

## Part 4: Content with sidebar
Style the content to make it more readable.

- `main-content`       
  - Float the content to the left
  - Set the width of the content to 70% of the available space
- `side-bar`
  - Set the background to `#e7e7e7`. This will help identify what space this element takes up
  - Float the element so it is rendered to the right of `main-content`
- `content-footer`
  - Set the top border of the content to be 1 pixel wide solid and #000000;
  - Clear the element so it appears below `main-content` and `side-bar`
  - Add 10 pixels of spacing between the content and the border.  Try to remember the property that adds space *inside* and element.
 
## Part 5: Bonus Section. Descendant Selectors.
Leverage decendant selectors to apply the following styles without them affecting the rest of the document.

- `image-list2` - This is going to be the base or first selector used
  - Remove any padding and margins.
  - Remove the default list style
- `li` all li elements inside of `image-list2` should have the following    
  - Float the items left
  - Have 10 pixels of padding and margins.
- `img` all images inside of `image-list2` should have the following
  - Overwrite the default sizes and make the images 100 pixels high and 100 pixels wide
- `h4` all h4 tags inside of `image-list2` should have the following
  - Align the text to the center.
 
 
## [Final Product](final.PNG)
