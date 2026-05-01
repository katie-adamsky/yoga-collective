# Update the website's text

### What is HTML?
The content for each web page lives in an HTML file. For example, the Schedule page is defined by `schedule.html`. HTML uses tags to describe the structure of the document. The tags don't get displayed on the website, instead they control things like how big the text is and how it interacts with the rest of the elements on the page. For example, if you wanted to make a title on your home page, you would use the h1 tag, which is used for headlines. It would look like this:

```
<h1>Home Page</h1>
```

### Updating content in an HTML file
To figure out where the content is, and which file you need to edit, you can go to the search bar and enter the text that you want to change. This will work for everything except for text that comes from some other source, like our teacher signup spreadsheet.

You can edit files directly on the Github website, by clicking on the file to open it, then clicking the pencil icon in the upper right corner.

Once you are editing your file - **do not make changes to the tags!** Instead, make changes to the text *inside* the tags. Github will use different colors to identify the tags vs the text, so it will be easy to tell which text is safe to edit. So, if you wanted to change the name of your home page from "Home Page" to "Yoga Collective", you would edit the text to look like this:

```
<h1>Yoga Collective<h1>
```

When you're done, press the button that says "Commit changes". Select the option that says "Commit directly to the main branch." Once you've committed your change, it will appear on the public website. 

If you accidentally break something, you can look in the history to figure out what you changed, edit it, and make that as a new commit. If that doesn't fix it, you can try asking an AI bot for help by copying and pasting the entire file into the chat and asking it to find what is broken. It is also fine to ask Katie for help!