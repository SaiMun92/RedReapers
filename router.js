Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('index');
});
Router.route('/report', function () {
  this.render('report');
});
Router.route('/operator',function(){
	this.render('operator');
});

Router.route('/usersystem',function(){
	this.render('usersystem');
});

Router.route('/claimrole',function(){
	this.render('claimrole');
});