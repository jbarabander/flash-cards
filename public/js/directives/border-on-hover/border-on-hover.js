app.directive('borderOnHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      element.on('mouseenter', function() {
        element.addClass('border-enter');
      });
      element.on('mouseleave', function() {
        element.removeClass('border-enter');
      })
    }
  }
});
