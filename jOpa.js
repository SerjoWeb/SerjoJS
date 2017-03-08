(function() {
  'use strict';

  window.jOpa = (window.jOpa) ? window.jOpa : {
    get: function (selector) {
      if (typeof selector === 'string') {
        this.el = document.querySelectorAll(selector)[0];
      }

      return this;
    },
    html: function(html) {
      this.el.innerHTML = html;

      return this;
    },
    append: function() {
      if (arguments.length === 3 && typeof arguments[0] === 'string' && typeof arguments[1] === 'object' && typeof arguments[2] === 'string') {
        var create = document.createElement(arguments[0]);
            create.innerHTML = arguments[2];

        if (arguments[1]) {
          for (var attr in arguments[1]) {
            create.setAttribute(attr, arguments[1][attr]);
          }
        }

        this.el.appendChild(create);
      }

      return this;
    },
    prepend: function() {
      if (arguments.length === 3 && typeof arguments[0] === 'string' && typeof arguments[1] === 'object' && typeof arguments[2] === 'string') {
        var create = document.createElement(arguments[0]);
            create.innerHTML = arguments[2];

        if (arguments[1]) {
          for (var attr in arguments[1]) {
            create.setAttribute(attr, arguments[1][attr]);
          }
        }

        this.el.insertBefore(create, this.el.firstChild);
      }

      return this;
    },
    css: function() {
      if (arguments.length === 1 && typeof arguments[0] === 'object') {
        for (var arg in arguments[0]) {
          this.el.style[arg] = arguments[0][arg];
        }
      }

      return this;
    },
    ajax: function(data, callback) {
      if (typeof data === 'object') {
        var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(e) {
              if (e.target.readyState === 4 && e.target.status === 200) {
                if (typeof callback === 'function') {
                  callback(e.target.response);  
                }
              }
            };

            xhttp.open(data.method, data.path, true);

            if (data.headers) {
              if (typeof data.headers === 'object') {
                for (var header in data.headers) {
                  xhttp.setRequestHeader(header, data.headers[header]);
                }
              }
            }

            if (data.params) {
              if (typeof data.params === 'object') {
                var send = '';
                var i = 0;

                for (var param in data.params) {
                  i++;

                  if (i > 1) {
                    send += '&'+param +'='+data.params[param];
                  } else {
                    send += param +'='+data.params[param];
                  }
                }

                xhttp.send(send);
              }
            } else {
              xhttp.send();
            }
      }

      return this;
    },
    timeout: function(callback, time) {
      if (typeof time === 'number') {
        if (typeof callback === 'function') {
          setTimeout(function() {
            callback();
          }, time);
        }
      }

      return this;
    }
  };

  return jOpa;
})();