/*	@utilities
 *	Utility.js
 * 	Contain several utility/misc functionalities that do not belong anywhere
*/

setInterval(function() {
    Session.set("time", new Date())
}, 1000); 

mo.configure({
  formatTokens: {
    'shortDate': 'D MMM YY', //3 Jan 15
    'longDate': 'Do [of] MMMM[,] YYYY', //3rd of January, 2015
    'longDatewithtime': 'Do [of] MMMM[,] YYYY HH:mm:ss'
  }
});
