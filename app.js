(function() {
  'use strict';

  var $ = (!window.$ && !$) ? jOpa : {};

  $.get('#app p')
   .html('OPLYA')
   .css({
     color: 'red',
     fontSize: '20px'
   })
   .append('span', {}, 'trali-vali')
   .append('div', {class: 'test-class'}, 'asdasd');

  $.ajax({
    method: 'POST',
    path: 'test.html',
    headers: {
      'X-Auth': '123'
    },
    params: {
      name: 'Ilya',
      age: 23,
      position: false,
      contract: 'yes'
    }
  }, function(response) {
    $.get('.alala')
     .append('p', {id: 'test-id', class: 'test-class-2'}, response);
  });

  $.timeout(function() {
  	$.get('#test-id')
     .prepend('span', {class: 'prepend-class', data: 1}, 'prepend element');

    $.get('.prepend-class')
     .css({
       color: 'green'
     });
  }, 1);
})();