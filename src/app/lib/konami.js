/*
 * Konami-JS ~ 
 * :: Now with support for touch events and multiple instances for 
 * :: those situations that call for multiple easter eggs!
 * Code: http://konami-js.googlecode.com/
 * Examples: http://www.snaptortoise.com/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.4.2 (9/2/2013)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
 */
var Konami = function (callback) {
    'use strict';

    var konami = {
        addEvent: function (obj, type, fn, refObj) {
            if (obj.addEventListener) {
                obj.addEventListener(type, fn, false);
            } else if (obj.attachEvent) {
                // IE
                obj['e' + type + fn] = fn;
                obj[type + fn] = function () {
                    obj['e' + type + fn](window.event, refObj);
                };
                obj.attachEvent('on' + type, obj[type + fn]);
            }
        },
        input: '',
        pattern: '38384040373937396665',
        load: function (link) {
            this.addEvent(document, 'keydown', function (e, refObj) {
                if (refObj) { 
                    konami = refObj; // IE
                }
                konami.input += e ? e.keyCode : '';
                if (konami.input.length > konami.pattern.length) {
                    konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
                }
                if (konami.input === konami.pattern) {
                    konami.code(link);
                    konami.input = '';
                    e.preventDefault();
                    return false;
                }
            }, this);
            this.iphone.load(link);
        },
        code: function (link) {
            window.location = link;
        },
        iphone: {
            startX: 0,
            startY: 0,
            stopX: 0,
            stopY: 0,
            tap: false,
            capture: false,
            origKeys: '',
            keys: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'TAP', 'TAP'],
            code: function (link) {
                konami.code(link);
            },
            load: function (link) {
                this.origKeys = this.keys;
                konami.addEvent(document, 'touchmove', function (e) {
                    if (e.touches.length === 1 && konami.iphone.capture === true) {
                        var touch = e.touches[0];
                        konami.iphone.stopX = touch.pageX;
                        konami.iphone.stopY = touch.pageY;
                        konami.iphone.tap = false;
                        konami.iphone.capture = false;
                        konami.iphone.checkDirection();
                    }
                });
                konami.addEvent(document, 'touchend', function () {
                    if (konami.iphone.tap === true) {
                        konami.iphone.checkDirection(link);
                    }
                }, false);
                konami.addEvent(document, 'touchstart', function (evt) {
                    konami.iphone.startX = evt.changedTouches[0].pageX;
                    konami.iphone.startY = evt.changedTouches[0].pageY;
                    konami.iphone.tap = true;
                    konami.iphone.capture = true;
                });
            },
            checkDirection: function (link) {
                var x,y, xMagnitude, yMagnitude, result;

                xMagnitude = Math.abs(this.startX - this.stopX);
                yMagnitude = Math.abs(this.startY - this.stopY);
                x = ((this.startX - this.stopX) < 0) ? 'RIGHT' : 'LEFT';
                y = ((this.startY - this.stopY) < 0) ? 'DOWN' : 'UP';
                result = (xMagnitude > yMagnitude) ? x : y;
                result = (this.tap === true) ? 'TAP' : result;

                if (result === this.keys[0]) {
                    this.keys = this.keys.slice(1, this.keys.length);
                }
                if (this.keys.length === 0) {
                    this.keys = this.origKeys;
                    this.code(link);
                }
            }
        }
    };

    if (typeof callback === 'string') {
        konami.load(callback);
    }

    if (typeof callback === 'function') {
        konami.code = callback;
        konami.load();
    }

    return konami;
};
