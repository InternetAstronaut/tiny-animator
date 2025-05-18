/* Wick - (c) 2017 Zach Rispoli, Luca Damasco, and Josh Rispoli */

/*  This file is part of Wick. 
    
    Wick is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Wick is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Wick.  If not, see <http://www.gnu.org/licenses/>. */
    
if(!window.Tools) Tools = {};

Tools.Anything = function (wickEditor) {
}
Tools.Anything.prototype.getCursorImage = function() {
  return "move";
}
Tools.Anything.prototype.getToolbarIcon = function() {
  return "resources/tools/Pan.svg";
}
Tools.Anything.prototype.getTooltipName = function() {
  return "Unkown?";
}
Tools.Anything.prototype.onMouseDown = function() { console.log("Mouse Down!"); }
Tools.Anything.prototype.onMouseDrag = function() { console.log("Mouse Drag!"); }
Tools.Anything.prototype.onMouseUp = function() { console.log("Mouse Up!"); }