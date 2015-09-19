//For reactive search

var options = {
  keepHistory: 1000 * 60 * 1,
  localSearch: true
};
var fields = ['comment','type'];

IncidentSearch = new SearchSource('incident', fields, options);



Template.search.helpers({
  getIncidents: function() {
    return IncidentSearch.getData({
    transform: function(matchText, regExp) {
    return matchText.replace(regExp, "$&")
    },
    sort: {isoScore: -1}
    });
},

  isLoading: function() {
    return IncidentSearch.getStatus().loading;
  },

});

