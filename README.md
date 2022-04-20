# reddit-place-2022-overlay-script
This userscript was created and used during the 2022 r/place to overlay pixel art images onto the canvas. 
It adds two buttons into the r/place UI: One for loading an image to overlay, another to toggle between showing/hiding it.

This used a different approach from the mainly used overlays where instead of overlaying an image with a hardcoded host,
the user could paste a JSON file with a configuration of what and how the image should be displayed.

This was less intuitive for mass collaboration, but allowed for fast iteration while deciding on the final art and coordinates.

![example](https://user-images.githubusercontent.com/44736064/164263436-49e8d0af-a89a-4daa-8d98-4e9660e5ea81.png)

## Installation
This is how you'd install it. Probably doesn't work anymore because of now invalid element query selections.

1. Install the Tampermonkey Beta (Chromium) or Violetmonkey (Firefox) browser extensions.
2. Open the [raw source file link](https://raw.githubusercontent.com/g-otn/reddit-place-2022-overlay-script/main/overlay.user.js) and the extension will automatically ask for installation.
3. Accept it and the next time r/place is loaded it should show two buttons on the bottom of the screen.

Alternativetly, access the console window of the r/place iframe (title "Reddit A1 2022" from "https://hot-potato.reddit.com/"), paste and run the script there.
(Has to be done every page reload)

## Configuration format
An example of what you'd paste in the prompt opened by clicking the <kbd>Load overlay</kbd> button. More in [examples/](examples).
```json
{
  "name": "tiny marisa",
  "url": "https://media.discordapp.net/attachments/959481084708548722/960107970467872838/unknown.png",
  "x": 468,
  "y": 514,
  "width": 16,
  "height": 16
}
```
- `name`: Optional. A name for the config/image, to avoid confusion
- `url`: The URL of the image
- `x`, `y`: The x and y coordinates in the canvas
- `width`, `height`: Optional, and are also ignored if not used together. 
Desired width/height of the image. Useful for images that were not in the `1px : 1 canvas square` proportion.

## Example of uses during the event

https://user-images.githubusercontent.com/44736064/164262320-f2936b56-054e-49c6-af00-182077b37a74.mp4

https://user-images.githubusercontent.com/44736064/164262401-f864f7cd-f552-4134-8c40-4d1ea9d69ac4.mp4

