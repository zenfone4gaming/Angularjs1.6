angular.module('noteApp',[])
.controller('MainCtrl', [function(){
	console.log('main controller');
	this.helloMsg = 'Hello';
	
	this.changeMsg = function(){
		this.helloMsg = 'Bye';
	}
	
}])
;