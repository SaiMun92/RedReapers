<<<<<<< HEAD
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
=======
# RedReapers [CMS]
Red Reapers CMS (or Crisis Management System) allows incident reporting and crisis management
from a top-level view. Still under development for a school project. Red Reapers is developed
in Singapore's context. 

### Current Features
1. Incident reporting (CRUD functionalities)
2. User accounts (with Social media login - FB/Twitter)
3. Subscription Lists
4. Roles (admin, operators)
5. Live PSI data from NEA's API
6. Live Traffic Data from LTA's API
7. Email Reports (Basic only)
8. Google Maps Integration (Geospatial Visualisation of incidents)

### Roadmap / Todos

##### Nice to have upcoming features
1. Search & Filters
2. Twitter / Facebook Dispatchers
3. Better CRUD functionalities
4. Better UI (??)
5. Weather API
6. Data Visualisation / Dashboard 
7. Data Analytics Component
8. Live tracker (??)
9. Notifications?


##### Misc Todos
1. Tests
2. Validation
3. Pub/Sub Optimisations

LOL what else do I need?

#### Usage
Will fill this in someday :) Just remember to get your own API keys. 
FB/Twitter/NEA/LTA Api Creds are omitted on purpose! 

#### Developers
Tay Yi - ytay2@e.ntu.edu.sg
Drop me an email if you have any issues/queries

#### Version
0.0.1



>>>>>>> ytay2/master
