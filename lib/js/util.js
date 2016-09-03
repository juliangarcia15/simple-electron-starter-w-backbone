/* jshint esversion: 6 */

/**
 * Simply a starter point for your app's utility functions.
 * Currently contains:
 * 		Util.notify(title, msg)
 */

// NODE MODULES
const electron = require('electron');
const moment = require('moment');
const fs = require('fs');

// CONSTRUCTOR
var Util = function(creator) {
    // default string messages, feel free to add/modify/remove
    this.UNDERCONSTRUCTION = 'This feature is still under construction.';
    this.WHOOPS = 'Whoops! Something went wrong...';
    // keep track of who made you
    this.creator = creator;
    // console.log('Util initialized');
};

/**
 * Simple wrapper to call electron's Notification
 * module and create a notification
 * @param  String       title           The title for the notification
 * @param  String       msg             The message for the body of the notification
 * @return Notification
 */
Util.prototype.notify = function (title, msg) {
    // defaults
    title = title || 'Sorry...';
    msg = msg || this.UNDERCONSTRUCTION;
    // notify
    return new Notification(title , {
        body: msg
    });
};

/**
 * Get a template file from the 'templates' dir
 * @param  {String}   filename The name and extension of the file
 * @param  {Function} callback What to do with the html
 * @return {Function}          callback
 */
Util.prototype.getTmpl = function (filename, callback) {
    // assuming you have your templates under this directory in the project....
    let tmplPath = './lib/templates/';
    fs.readFile(tmplPath + filename, {encoding: "utf8"}, function(err, html) {
        if (err) {
            throw err;
        }
        return callback(html);
    });
};

// Export the Util constructor from this module.
module.exports = Util;
