/* jshint esversion: 6 */

/**
 * The "meat" of your app will be controlled in this file.
 * Use the Main View to control how to display
 * Models/Collections in Views and how the user will interact
 * with those views. Feel free to scrap this entirely and start
 * fresh.
 */

// NODE MODULES/LIBRARIES
const electron = require('electron');
const $ = require('jquery');
const Backbone = require('backbone');
const ipc = electron.ipcRenderer; // talk to /lib/main.js if you need (see electron docs for ipcRenderer/ipcMain)

// APP MODULES
const Util = require('./js/util');
// const someCollection = require('./js/collections/someCollection');
// const someModel = require('./js/models/someModel');
// const someView = require('./js/views/someView');

var MainView = Backbone.View.extend({
    // the selector of the element in the DOM that the view will hook to
    el: ".window-content",

    // any events this view should control
    events: {
        // "<event> <selector>": '<function>',
        "click .nav-group-item": 'navigate',
    },

    /**
     *  initialize your backbone collections, models, views
     *  or other variables in this function
     */
    initialize: function() {
        let self = this;
        console.log('mainview initialized!');
        // optional, Backbone.View.initialize doesn't HAVE to call this
        // keep this in mind for other views.
        this.render();
    },

    /**
     *  initialize and/or render your backbone views in this function
     */
    render: function() {
        console.log('mainview rendered!');
        // good practice in order to maintain a reference to this view
        return this;
    },

    /**
     * Simply marks the clicked nav item 'active' and changes
     * the text of $("h6#navClickedName") to show what was
     * clicked
     * @param  jquery.event e The event passed in by jquery
     * @return Backbone.View  The MainView reference
     */
    navigate: function(e) {
        e.preventDefault();
        targetHash = e.target.hash;
        $('.nav-group-item').removeClass('active');
        $(e.currentTarget).addClass('active');

        $("h6#navClickedName").html(targetHash + " clicked");

        return this;
    }
});


// Finally, get this show on the road
var mainView = new MainView();
