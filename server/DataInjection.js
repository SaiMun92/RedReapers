/** 
 *  @function 
 *  Runs only if no incidents
 *  Injects dummy data into db
 *  Simulates test data
 *	@Author - Tay Yi 
 */

Meteor.startup(function(){
	/*
	if (Incidents.find().count()==0){	
	//No Incidents found, auto populate database with test data
		console.log("Injecting Dummy Data");
		Incidents.insert({
			'contact':'93749392',
			'type':'Accident',
			'comment':'Traffic Accident, serious injury',
			'location':{
				lat:1.4326652823450687,
				lng:103.78880739212036
			},
			'reportedTime':moment()._d,
			'status':'pending'
		});
		Incidents.insert({
			'contact':'93749392',
			'type':'Dengue',
			'comment':'Dengue Fever. Verified case by doctor. Victim 49 year old male',
			'location':{
				lat:1.3776214548774328,
				lng:103.76212477684021
			},
			'reportedTime':moment()._d,
			'status':'verified'
		});
		Incidents.insert({
			'contact':'93749392',
			'type':'Accident',
			'comment':'Accident along BKE.  Urgent!',
			'location':{
				lat:1.4205240044069118,
				lng:103.77128720283508
			},
			'reportedTime':moment()._d,
			'status':'urgent'
		});

	}*/

	if(Subscribers.find().count()==0){
		//Inject Subscribers for subscribe test
		Subscribers.insert({
		'email':'taeyi90@gmail.com',
		'type':'admin'
		});
		Subscribers.insert({
		'email':'HCHUA009@e.ntu.edu.sg',
		'type':'admin'
		});
		Subscribers.insert({
		'email':'MLEE016@e.ntu.edu.sg',
		'type':'admin'
		});
		Subscribers.insert({
		'email':'LEES0152@e.ntu.edu.sg',
		'type':'admin'
		});
		Subscribers.insert({
		'email':'BNG009@e.ntu.edu.sg',
		'type':'admin'
		});
		Subscribers.insert({
		'email':'LAW003@e.ntu.edu.sg',
		'type':'admin'
		});

	};

});