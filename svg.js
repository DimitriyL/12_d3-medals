var pic = document.getElementById("pic");

var Germany = [14,10,7];
var Canada = [11,8,10];

var gold = document.createElementNS("http://www.w3.org/2000/svg","circle");
var silver = document.createElementNS("http://www.w3.org/2000/svg","circle");
var bronze = document.createElementNS("http://www.w3.org/2000/svg","circle");

var medals = d3.selectAll("circle");
medals.attr("r",Germany);
