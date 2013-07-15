'use strict';

describe('Directive: dataTables', function () {
  beforeEach(module('angularApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<data-tables></data-tables>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the dataTables directive');
  }));
});
