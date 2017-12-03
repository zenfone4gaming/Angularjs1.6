angular.module('notesApp',[])
.controller('MainCtrl', [function(){
	var self = this;
	self.notes = [
		{label : 'First Note', done : false, assignee : 'Shyam'},
		{label : 'Second Note', done : false},
		{label : 'Third Note', done : true, assignee : 'Brad'}
	];
	
	self.getNoteClass = function(status){
		return {
			done : status,
			pending : !status
		}
	}
}]);