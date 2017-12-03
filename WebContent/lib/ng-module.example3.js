angular.module('notesApp', [])
	.controller('MainCtrl', [ function() {
		var self = this;
		self.notes = [
			{
				id : 1,
				label : 'First Note',
				done : false,
				someRandom : 31431
			},
			{
				id : 2,
				label : 'Second Note',
				done : false
			},
			{
				id : 3,
				label : 'Third Note',
				done : true
			}
		];

		self.notes1 = angular.copy(self.notes);
		self.notes2 = angular.copy(self.notes);
		
		self.changeNote = function(){
			notes = [
				{
					id : 1,
					label : 'First Note Changed',
					done : false,
					someRandom : 4242
				},
				{
					id : 2,
					label : 'Second Note Changed',
					done : false
				},
				{
					id : 3,
					label : 'Third Note Changed',
					done : true
				}
			] ;
			self.notes1 = angular.copy(notes);
			self.notes2 = angular.copy(notes);
		}

	} ]);