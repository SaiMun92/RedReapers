# RedReapers
You are not supposed to see this yet. 

Client
event, helpers, templates

Server
methods, and the Meteor.publish statement

the PlayersList = new Mongo.Collection('something') needs to run on both the server and client so we place it outside. (stated in the collection.js)

"private" folder for server
"public" folder for visitors
"lib" folder are loaded first.

meteor.startup(func) -> run code when a server or client starts