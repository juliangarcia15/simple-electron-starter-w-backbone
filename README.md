#  _electron starter w/ Backbone_
An easily extendable simple electron starter app with the following features:
  * Sidebar Navigation
  * "Hello, World" Example with Backbone


### Getting Started:
_This walkthrough assumes you've installed nodejs._

1. First things first, copy/download the project under a new directory and modify the following fields in [package.json](./package.json):
  * Name (cannot contain spaces)
  * Description
  * Author

2. Next, set up your main window creator in [/lib/main.js](./lib/main.js) by modifying the BrowserWindow options (see the [BrowserWindow docs](http://electron.atom.io/docs/all/#browserwindow) for more options). This file is used for electron app window logic, not to control html elements.

3. On to [/lib/index.html](./lib/index.html). Here is where you can create the first view of your app. Modify as needed.

4. To the [Renderer](./lib/renderer.js)! This file contains all your view control logic, the "meat" of the app. Modify as needed. I've left some examples of how to require in project files and some tips about where to begin placing backbone objects.

5. To start the app for the first time run `npm install && npm start` from the new directory created in the first step. You'll only need to run `npm start` to restart your app once it's been closed or a new package/library is installed. `Command-R` will refresh the app to show html/functionality changes.

6. After the app starts, check out the navigation items in the left sidebar of the starter app. Alright, that's enough blabbering from me. Enjoy building your electron app. **Good Luck!**

### Some Helpful things
1. To "require" in an HTML file (hint: html template files are the bees knees) simply create a `Util` object:
```javascript
let util = new Util();
```
then pass the file name + extension and a callback function to the `Util.getTmpl` function:
```javascript
util.getTmpl('template.html',function (html) {
    console.log('html',html);
});
```
If you restructure the project directories, visit the `Util.getTmpl` function in [/lib/js/util.js](./lib/js/util.js) to change the default directory for templates.

### Included in the project (or after `npm install`):
_A few libraries I've found helpful, add to and/or remove what you wish_

* Request 2.74.0
* Jquery 3.1.0
* Underscore 1.8.3
* Backbone 1.3.3
* Moment 2.14.1
* [Photonkit css](http://photonkit.com/)

---
#### _Author's Note:_
I am in no way, shape, or form an javascript/HTML/Electron/Node/Backbone/etc. expert. I'm just trying to grasp a better understanding of each of these items. Keep learning as much as you can, folks, that's my plan.
