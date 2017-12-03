angular.module('loginForm',[])
.controller('mainCtrl', [function(){
	var self = this;
	self.submit= function(){
		console.log(self.user);
		console.log(self.user.profile);	
	}
	
	
}]);