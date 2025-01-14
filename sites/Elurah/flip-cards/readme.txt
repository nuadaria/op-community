CSS Breakdown:

.image-flip: this is the main container. This is set as a flexbox so that it will encompass all of the card. As a wrap flexbox, it'll automatically distribute the cards for the best page fit on it's own.
.flip-card: this is your main styling for the card itself, front and back. You can set the dimensions and border. The perspective here is to add depth to the flip animation.
.flip-card-inner: this is for animating the card flip. you can adjust the transform duration for a slower or quicker flip. 0.8 seconds is my default.
.flip-card:hover: this just tells the code to rotate 180° when hovered. Don't fiddle with this one.
.flip-card-front, .flip-card-back: This is just for alignment.
.flip-card-front: front div. It has a bg color value as a fallback for mis-sized images or transparent pngs.
.flip-card-back: same as front.

HTML Breakdown:

image-flip is wrapping everything. This div is the container for all the other html.
<div class="flip-card-front"> this is where you want to place your front img.
<div class="flip-card-back" style="text-align: center"> This is where you place the back image. the text-align here is if you want to overlay text on the backside.
The next part is just a href for hyperlinking if you want. I didn't include it, but the "topped" div is just a positioning div I use for text ".topped {position: absolute; top: 0%; left: 0%; height: 50%;}"
After that there's the content text with some formatting.
Then you jsut close out all the divs and the hyperlink. *except* for the image-flip div. don't close that one out until you've placed all of your cards. The remainder of the HTML is just a repeat of cards with new text/images.

Notes:

There's some html on the images for sizing them. That's because I'm dumb and it's mostly jsut an artifact of me changing a bunch of things and forgetting to remove. feel free to ignore.
I created the front and backs as a mirrored version, if you're trying to do some sort of backside reveal like that, make sure to flip the backside image to face the other way!

Enjoy!
