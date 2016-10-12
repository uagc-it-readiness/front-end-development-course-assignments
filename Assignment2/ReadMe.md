# Assignment 2
In this assignment, we will be doing some HTML we have already covered, some new HTML, and some basic CSS.  We will also have a file directory path exercise.

## Part 1 - Review
Practice your HTML by performing the following updates to index.html inside of the Essay folder.

- Wrap The text "Header Information" in an `h1` tag.
- Wrap the two "Sub Header" headings in an `h2` tag.
- Wrap each of the 4 paragraphs a `p` tag.

## Part 2 - New HTML
Add new html tags into our file.

- Wrap the "Sub" in the "Sub Header" with a `span` tag.
- Wrap "Sub Heading 1", "Paragraph 1", and "Paragraph 2" in a `div` tag.
- Wrap "Sub Heading 2", "Paragraph 3", and "Paragraph 4" in a `div` tag.

## Part 3 - Attributes
Modify your html to include some IDs and Classes

- Add the ID of "header" to the `h1` tag.
- Add the class "main-point" to the first `div` tag.
- Add the class "follow-up" to the second `div` tag.

## Part 4 - CSS
Add CSS in the main.css file to apply the following rules.

- An element with the ID of "header" should have its text color be 	`#DC143C`
- All text in `span` tags should be underlined.
- All text inside of the element with the class 'main-point' should have the following font applied to it. `"Courier New", Courier, monospace`
- All text inside of an `h2` tag should be bold. Use CSS and not a `strong` tag to do this.

Your end result should look something like this: [Result](result.png)


## Part 5 - File paths
You will find 3 html files inside of the "Files" folder.  Each file contains 3 hyperlinks.  You are to update the `href` values to match the file path of the text of that specific hyperlink. 

Example:
index.html
```
    <h1>Main Page</h1>
    <ul>
        <li><a href="index.html" title="Main Page">Index.html</a></li>
        <li><a href="folder1/subpage.html" title="Sub Page">SubPage.html</a></li>
        <li><a href="folder1/folder2/verysubpage.html" title="Very Sub Page">VerySubPage.html</a></li>
    </ul
```
Refer to the [Basic HTML presentation](https://uagc-it-readiness.github.io/front-end-development-course-info/presentations/html/basics.html#/5/5) if you need a refresher.
