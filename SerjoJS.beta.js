/**
 * JavaScript small library.
 * Similiar to JQuery or same as.
 * Practicing and deep learning about JS and new features.
 * Author: SerjoWeb (sergeyweb87@gmail.com).
 * Free License. Open Code.
 */

class SerjoJS {
    constructor() {
        
    }

    get(selector) {
        try {
            if (typeof selector === 'string') {
                this.el = document.querySelectorAll(selector)[0];
            } else {
                console.error('invalid element');
            }
        
            return this;
        } catch (err) {
            console.error('Server Error:', err.message);
        }
    }

    /**
     * html()
     * function similiar to JQuery - html
     */
    html(val) {
        try {
            this.el.innerHTML = val;
            return this;
        } catch (err) {
            console.err(err);
        }
    }

    /**
     * append()
     * function similiar to JQuery - append
     */
    append() {
        try {
            if (arguments.length > 0) {
                if (
                    arguments.length === 3 && 
                    typeof arguments[0] === 'string' && 
                    typeof arguments[1] === 'object' && 
                    typeof arguments[2] === 'string'
                ) {
                    let create = document.createElement(arguments[0]);
                        create.innerHTML = arguments[2];
    
                    if (arguments[1]) {
                        for (let attr in arguments[1]) {
                            create.setAttribute(attr, arguments[1][attr]);
                        }
                    }
                  
                    this.el.appendChild(create);
                } else {
                    console.error('invalid arguments');
                }
            } else {
                console.error('invalid arguments length');
            }

            return this;
        } catch (err) {
            console.error('Server Error:', err.message);
        }
    }

    /**
     * prepend()
     * function similiar to JQuery - prepend
     */
     prepend() {
        try {
            if (arguments.length > 0) {
                if (
                    arguments.length === 3 && 
                    typeof arguments[0] === 'string' && 
                    typeof arguments[1] === 'object' && 
                    typeof arguments[2] === 'string'
                ) {
                    let create = document.createElement(arguments[0]);
                        create.innerHTML = arguments[2];
    
                    if (arguments[1]) {
                        for (let attr in arguments[1]) {
                            create.setAttribute(attr, arguments[1][attr]);
                        }
                    }
            
                    this.el.insertBefore(create, this.el.firstChild);
                } else {
                    console.error('invalid arguments length');
                }
            } else {
                console.error('invalid arguments length');
            }
    
            return this;
        } catch (err) {
            console.error('Server Error:', err.message);
        }
    }

    /**
     * css()
     * function similiar to JQuery - css
     */
    css() {
        try {
            if (arguments.length > 0) {
                if (arguments.length === 1 && typeof arguments[0] === 'object') {
                    for (let arg in arguments[0]) {
                        this.el.style[arg] = arguments[0][arg];
                    }
                } else {
                    console.error('invalid arguments');
                }
            } else {
                console.error('invalid arguments length');
            }
      
            return this;
        } catch (err) {
            console.error('Server Error:', err.message);
        }
    }

    /**
     * ajax()
     * function similiar to JQuery - ajax
     */
    ajax(data, callback) {
        try {
            if (data && callback) {
                if (typeof data === 'object') {
                    let xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = (e) => {
                            if (e.target.readyState === 4 && e.target.status === 200) {
                                if (typeof callback === 'function') {
                                    callback(e.target.response);  
                                }
                            }
                        };
    
                    xhttp.open(data.method, data.path, true);

                    if (data.headers) {
                        if (typeof data.headers === 'object') {
                            for (let header in data.headers) {
                                xhttp.setRequestHeader(header, data.headers[header]);
                            }
                        }
                    }

                    if (data.params) {
                        if (typeof data.params === 'object') {
                            let send = '';
                            let i = 0;

                            for (let param in data.params) {
                                i++;

                                if (i > 1) {
                                    send += '&'+param +'='+data.params[param];
                                } else {
                                    send += param +'='+data.params[param];
                                }
                            }

                            xhttp.send(send);
                        } else {
                            console.error('invalid arguments');
                        }
                    } else {
                        xhttp.send();
                    }
                }
            } else {
                console.error('invalid arguments length');
            }
    
            return this;
        } catch (err) {
            console.error('Server Error:', err.message);
        }
    }

    /**
     * timeout()
     * function similiar to JQuery - timeout
     */
    timeout(callback, time) {
        try {
            if (callback && time) {
                if (typeof time === 'number' && typeof callback === 'function') {
                    setTimeout(() => {
                        callback();
                    }, time);
                } else {
                    console.error('invalid arguments');
                }
            } else {
                console.error('invalid arguments length');
            }

            return this;
        } catch (err) {
            console.error('Server Error:', err.message);
        }
    }
}