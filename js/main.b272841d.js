!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},e={},l=t.parcelRequirea632;null==l&&((l=function(t){if(t in a)return a[t].exports;if(t in e){var l=e[t];delete e[t];var n={id:t,exports:{}};return a[t]=n,l.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,a){e[t]=a},t.parcelRequirea632=l);var n=l("9XomO"),i=l("1WSjY"),r=l("7yamk"),s=l("5Fcxe"),u=function(){"use strict";function t(a){s.classCallCheck(this,t),this.wrap=document.getElementById(a),this.wrap&&(this.img=this.wrap.querySelector("svg"),this.imgWrap=this.wrap.parentElement,this.parallax=null,this._lastAutoInterval=null,this.startAutoSlide(),this.imgWrap.addEventListener("click",function(){this.nextSlide(),this.startAutoSlide()}.bind(this)))}return s.createClass(t,[{key:"startAutoSlide",value:function(){this._lastAutoInterval&&clearInterval(this._lastAutoInterval),this._lastAutoInterval=setInterval(function(){return this.nextSlide()}.bind(this),3e3)}},{key:"nextSlide",value:function(){var t=this.imgWrap.querySelector(".-active"),a=t.parentElement,e=t.nextElementSibling;a.appendChild(t),setTimeout((function(){t.classList.remove("-active"),e.classList.add("-active")}),0)}},{key:"startParallax",value:function(){this.wrap&&(this.parallax=new Parallax(this.wrap))}},{key:"stopParallax",value:function(){this.parallax&&(this.parallax.destroy(),this.parallax=null)}}]),t}(),o=l("5MXIn"),d=l("cFOr5"),c=l("86EjO"),p=l("aejQE"),h=l("aDS6s"),f=l("3dWDW"),x=l("iMjUV"),w=(s=l("5Fcxe"),function(){"use strict";function t(a){s.classCallCheck(this,t),this.wrap=document.getElementById(a),this.parallax=null}return s.createClass(t,[{key:"startParallax",value:function(){this.wrap&&(this.parallax=new Parallax(this.wrap))}},{key:"stopParallax",value:function(){this.parallax&&(this.parallax.destroy(),this.parallax=null)}}]),t}());d.default();new c.default(!1),new p.default("a[href^='#']"),new h.default(".js-dropdown-box"),new f.default(".popup");var v=new x.default(".js-relax"),m=new r.default(".js-fade-in"),y=new u("slider-mask"),g=new w("circles-move");new o.default;new i.default("(min-width: "+n.BREAKPOINTS.lg+")",(function(){m.start(),y.startParallax(),g.startParallax(),v.start()}),(function(){m.stop(),y.stopParallax(),g.stopParallax(),v.stop()}))}();