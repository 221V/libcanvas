/*
---

name: "Behaviors.Drawable"

description: "Abstract class for drawable canvas objects"

license: "[GNU Lesser General Public License](http://opensource.org/licenses/lgpl-license.php)"

authors:
	- "Shock <shocksilien@gmail.com>"

requires:
	- LibCanvas

provides: Behaviors.Drawable

...
*/

var Drawable = LibCanvas.Behaviors.Drawable = function () {
	
var start = function () {
	this.libcanvas.addElement(this);
	return 'removeEvent';
};
var stop = function () {
	this.libcanvas.rmElement(this);
	return 'removeEvent';
};

return Class({
	Implements: [Class.Events],
	libcanvasIsReady: false,
	setLibcanvas : function (libcanvas) {
		if (this.libcanvas) {
			this.libcanvas.rmElement(this);
			this.libcanvas = libcanvas;
		} else {
			this.libcanvas = libcanvas;
			this.addEvent('libcanvasReady', function () {
				this.libcanvasIsReady = true;
			});
			this.readyEvent('libcanvasSet');
			this.libcanvas.addEvent('ready', this.readyEvent.context(this, ['libcanvasReady']));
		}
		return this;
	},
	isReady : function () {
		return this.libcanvasIsReady;
	},
	getCoords : function () {
		return this.shape.getCoords();
	},
	getShape : function () {
		return this.shape;
	},
	setShape : function (shape) {
		this.shape = shape;
		return this;
	},
	getZIndex : function () {
		return this.zIndex || 0;
	},
	setZIndex : function (zIndex) {
		this.zIndex = zIndex;
		return this;
	},
	toLayer: function (name) {
		this.libcanvas.layer(name)
			.addElement(this);
		return this;
	},
	startDrawing: function () {
		return this
		  .removeEvent('libcanvasSet', stop)
		     .addEvent('libcanvasSet', start);
	},
	stopDrawing: function () {
		return this
		  .removeEvent('libcanvasSet', start)
		     .addEvent('libcanvasSet', stop);
	},
	update : Class.abstractMethod,
	draw   : Class.abstractMethod
});

}();