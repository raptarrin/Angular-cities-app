cityApp.directive('myLoadingSpinner', function() {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            scope: {
                loading: '=myLoadingSpinner'
            },
            templateUrl: 'lib/templates/loading.html',
            link: function(scope, element, attrs) {
                var spinner = new Spinner().spin();
                var loadingContainer = element.find('.my-loading-spinner-container')[0];
                loadingContainer.appendChild(spinner.el);
            }
        };
    });/**
 * Created by TcsWebIntern on 2/6/2015.
 */
