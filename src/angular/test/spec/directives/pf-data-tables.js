'use strict';

describe('Directive: pfDataTables', function () {
  beforeEach(module('angularApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<pf-data-tables></pf-data-tables>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the pfDataTables directive');
  }));
});
