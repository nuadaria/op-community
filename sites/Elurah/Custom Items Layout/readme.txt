Instructions:

Paste the custom-items.html into the Settings -> Advanced -> Custom Items Layout field.
Paste the custom-items.css into the Custom CSS field.

Use: 

The coding works based on how items are tagged using the custom tags when editing an item. 
For example, tagging an item with the armor tag will cause it to be filtered into the Armor section of you items.
Each tag added should also be added to the final "unfiltered" category as part of the Not exclusion.
This category excludes every tag in use so it acts as a catchall for any item that does not fall into another category. It's quite useful in case you make an item that you forget to tag.

The CSS is very simple. It simply checks for tags and applies a colored border based on the tag specified. The default CSS included colors items based on their rarity.

Customization:

For the CSS borders the simplest changes would be to either change the tags that you want to be colored, or to swap out the hex color codes to customize the colors of the borders for each tag.
For the Custom Items HTML, you can easily change the section headers to whatever categories you want as well as to change what tags are filtered into those categories.

I highly recommend that any new tags you add also make their way into the Unfiltered exclusion section. It is there to catch things that slip through.

Enjoy!
