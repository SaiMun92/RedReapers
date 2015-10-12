Incidents = new Mongo.Collection("incident");
PSI = new Mongo.Collection("PSI");

//mongo collection contructor creates a collection object which acts just like a MongoDb collection. 
//if u pass a name, u are declaring a persistent collection -> one that is stored on the server and can be published to clients.
//what u did above is to declare them as a global variable. 
//to delclare them as a local variable, set the name to null.
//meteor remove autopublish prevent the collections from publishing to your client. 