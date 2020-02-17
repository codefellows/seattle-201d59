# Class 11

## Feedback

- Last week was difficult. Hopefully we're moving past it.
- Enough to finish assignments.

Suggestion:

- More reviews of other people's code.
- Summaries of the day's content.
- More group work.

## Code Review

- Chocolate Pizza:
  -  Let's look at some examples:
  -  Thanks Robert and Jesse for your code examples.


## Audio and Video in HTML

- Rendering Video and Audio elements
  - Work like other elements that require a `src` attribute to display content.

```html

<video width="700" height="500" src="path/to/video/file.mp4" controls>
<!-- 
  1) controls is an attribute that is set to a boolean 
  2) Setting the size of the video element:
    We have to set "width" and "height" attributes with pixel values we choose.
  -->
```

- Most places will tell you to use a different syntax

```html

<video width="700" height="500">
  <source src="path/to/video/file.mov" type="video/mp4">
  <source src="path/to/different/video/file.mov">
</video>

```

- Audio is veeeeery similar

```html

<audio src="path/to/video/file.mp3" controls>
<!-- 
  1) controls is an attribute that is set to a boolean 
  2) Setting the size of the video element:
    We have to set "width" and "height" attributes with pixel values we choose.
  -->

- There are a few other attributes to be aware of:
  - autoplay: another boolean that will automatically start audio/video when the page loads: ** only works if muted is true **
  - muted: a boolean that turns volume off for content.

```html
<audio width="700" height="500">
  <source src="path/to/video/file.mov" type="video/mp4">
  <source src="path/to/different/video/file.mov">
</audio>

```
