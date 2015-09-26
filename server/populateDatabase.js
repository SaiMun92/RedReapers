Meteor.startup(function(){
	console.log("Hey!");
	console.log(Incidents.find().count());
	if (Incidents.find().count()==0){

		console.log("Injecting Dummy Data");
		//No Incidents found, auto populate database with test data
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


	}


});