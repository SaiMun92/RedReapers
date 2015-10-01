//For reactive search

var options = {
  keepHistory: 1000 * 60 * 1,
  localSearch: true
};
var fields = ['comment','type'];

IncidentSearch = new SearchSource('incident', fields, options);



