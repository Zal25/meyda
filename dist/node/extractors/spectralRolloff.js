"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	if (_typeof(arguments[0].ampSpectrum) !== "object") {
		throw new TypeError();
	}
	var ampspec = arguments[0].ampSpectrum;
	//calculate nyquist bin
	var nyqBin = arguments[0].sampleRate / (2 * (ampspec.length - 1));
	var ec = 0;
	for (var i = 0; i < ampspec.length; i++) {
		ec += ampspec[i];
	}
	var threshold = 0.99 * ec;
	var n = ampspec.length - 1;
	while (ec > threshold && n >= 0) {
		ec -= ampspec[n];
		--n;
	}
	return (n + 1) * nyqBin;
};

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

module.exports = exports['default'];