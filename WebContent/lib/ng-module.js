angular.module('notesApp', [])
	.service('ItemService',[ItemService])
	.controller('MainCtrl', [ function() {
		var self = this;
		self.tab = 'first' ;
		self.open = function(menu) {
			self.tab = menu;
		};
	} ])
	.controller('Subctrl', ['ItemService', function(ItemService) {
		var self = this;
		self.list = function(){
			return ItemService.list();
		};
		self.add = function() {
			ItemService.add({
				id : self.list().length + 1,
				label : 'Item ' + self.list().length
			});
		};
	} ]);

function ItemService(){
	var items =  [ {
		id : 1,
		label : 'Item 0'
	},
		{
			id : 2,
			label : 'Item 1'
		}
	];
	this.list =  function(){
		return items;
	};
	this.add =  function(item){
		items.push(item);
	};
}

	/*.factory('ItemService', [function(){
		var items =  [ {
			id : 1,
			label : 'Item 0'
		},
			{
				id : 2,
				label : 'Item 1'
			}
		];
		return {
			list : function(){
				return items;
			},
			add : function(item){
				items.push(item);
			}
		};
	}]);*/