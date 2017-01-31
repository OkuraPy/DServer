angular.module('app').directive('doubleClick', function() {
    return {
        restrict: 'A',
        link: function ($scope, el, attrs) {
			var hammer = new Hammer(el[0]);
			hammer.on('doubletap', function(e) {
			  	$scope.$eval(attrs.doubleClick);
			});
    	}
    }
});