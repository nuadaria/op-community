CSS Breakdown:

.book-body: this is your main container to hold all of the popups. it's a flex wrap container, so it will automatically arrange and distrubte on your page.
.bood-card: the container for an entire popup. The perspective here is used by other parts of the CSS for the transform effect. You can adjust this value for more dramatic or subtle transformations. The max-width value here is the basis for all the % values used in the rest of the CSS.
.cover-image: the background image. It fills 100% of the max-width value.
.book-container: holds all the moving parts.

the following 2 :hover effects are to 1) tilt the book-container back and 2) give the cover image a shadow and reduce saturation.


.book-container::before and ::after adds elements to the transformation. timing on the trnasition, positioning as the gradient effect across the top.
It's recommended to color match the rgba value to the background of your own page. This is the effect that allows the top edge to 'disappear'

the next hovers are for setting the opacity on hover and the height of the effect.

.book-title-up and -down: these are for moving the title text either up or down. they are separate so you can mix and match within the HTML. the transform value can be used to change the speed of the movement.
:hovers: these are what determines the movement. the first & value is for horizontal movement, the second is for vertical. You can tweak these %s to adjust travel distance. the drop shadow here is used as a glow/highlight effect.

.book-character-up and -down: pretty much exactly the same as the titles.

HTML Breakdown:

book-body: is used here as our overall container. It holds all of the cards (heh) and distrubutes them on the page.
href: wraps the whole card to make it a clickable link
book-card: wraps an individual card
book-container: holds the background image (cover-image) in the following <img>.
next you have the character and the title <img>. The order is IMPORTANT. Things tend to beak if you swap them the other way around. Here you can choose between either your up or down movement for each element by changing the class.
close out your open divs. Except the book-body. Don't close that div until the very end.

Notes:

This was a whole lot of trial and error. This can almost certainly be cleaned up and optimized but once I got it to a working state I didn't want to fiddle around and break it again.

So...it is what it is.

...

Good Luck!
