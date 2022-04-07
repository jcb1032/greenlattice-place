# Green Lattice Overlay for r/place



## Step 1

Install one of the following extensions for your browser.

[Chrome (TamperMonkey)](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)

[Firefox (ViolentMonkey)](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)

## Step 2

Install the Userscript:

[lattice.user.js](https://raw.githubusercontent.com/jcb1032/greenlattice-place/main/lattice.user.js)

#

### Updates

The overlay will be automatically updated by our team, and you shouldn't have to change anything.

However, sometimes your browser will cache the overlay image for faster loading times. You can go to [this link](https://raw.githubusercontent.com/jcb1032/greenlattice-place/main/lattice_overlay.png) and click the refresh button (F5) while holding shift to re-cache the image.

### Contributing

1. Open `lattice_full.png` in photoshop, make changes, and save over the original, with the same name
2. Run the `dithering.py` script* in the same folder as the saved `lattice_full.png` image
3. Upload `lattice_full.png` and the newly generated `lattice_overlay.png` to github

**You can also submit a PR with just the `lattice_full.png`, others can dither it for you**

*\*You will need to install Pillow and NumPy for the script to work:*
`py -m pip install NumPy>=1.22`
`py -m pip install Pillow>=9.0`


### Credits

[_artillect#8709_](https://github.com/artillect), _jcb#1032_, & [_jumpinglizard#4404_](https://github.com/BlueRedBlueYellow)

### Links

[rplace.tk](https://rplace.tk/)

[r/greenlattice](https://www.reddit.com/r/greenlattice)

[Green Lattice Discord](https://discord.gg/D38szSvvX3)
