//Should refactor to somewhere else
mo.configure({
  formatTokens: {
    'shortDate': 'D MMM YY', //3 Jan 15
    'longDate': 'Do [of] MMMM[,] YYYY', //3rd of January, 2015
    'longDatewithtime': 'Do [of] MMMM[,] YYYY hh:mm:ss'
  }
});


Template.stats.helpers({

	'Incidents':function(){
		return Incidents.find().fetch();
	}

});