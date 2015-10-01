SearchSource.defineSource('incident', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {type: regExp},
      {comment: regExp}
    ]};
    
    console.log(Incidents.find(selector, options).fetch());

    return Incidents.find(selector, options).fetch();
  } else {
    return Incidents.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}