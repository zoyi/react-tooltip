"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (doc) {
  return doc && (doc.defaultView || doc.parentWindow) || window;
};