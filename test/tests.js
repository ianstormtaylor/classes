describe('classes', function () {

var assert = require('assert')
  , Classes = require('classes');

function View () {
  this.el = document.createElement('div');
}

Classes(View.prototype);

var view = new View();

describe('#addClass', function () {
  it('should add a class', function () {
    assert('' === view.el.className);
    view.addClass('name');
    assert('name' === view.el.className);
  });

  it('should return this', function () {
    assert(view === view.addClass('name'));
  });
});

describe('#removeClass', function () {
  it('should remove a class', function () {
    view.el.className = 'name';
    view.removeClass('name');
    assert('' === view.el.className);
  });

  it('should return this', function () {
    assert(view === view.removeClass('name'));
  });
});

describe('#hasClass', function () {
  it('should return presence of a class', function () {
    view.el.className = 'name';
    assert(true === view.hasClass('name'));
  });
});

describe('#toggleClass', function () {
  it('should toggle a class', function () {
    view.el.className = '';
    view.toggleClass('name');
    assert('name' === view.el.className);
    view.toggleClass('name');
    assert('' === view.el.className);
  });

  it('should return this', function () {
    assert(view === view.toggleClass('name'));
  });
});

});