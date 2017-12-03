angular.module('freeData',[])
.controller('MainController', [function(){
	var self = this;
	self.submit= function(){
		alert('Form Submitted successfully !!');
	};
}]);