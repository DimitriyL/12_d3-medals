var pic = document.getElementById("pic");
var switchButt = document.getElementById("switch");
var isGermany = True;

var Germany = [14,10,7];
var Canada = [11,8,10];

var display = function(){
    var gold = document.createElementNS("http://www.w3.org/2000/svg","circle");
    gold.setAttribute("cx", 100);
    gold.setAttribute("cy", 50);
    gold.setAttribute("r",10);
    gold.setAttribute("fill", "goldenrod");
    var silver = document.createElementNS("http://www.w3.org/2000/svg","circle");
    silver.setAttribute("cx", 100);
    silver.setAttribute("cy", 150);
    silver.setAttribute("r",10);
    silver.setAttribute("fill", "lightsteelblue");
    var bronze = document.createElementNS("http://www.w3.org/2000/svg","circle");
    bronze.setAttribute("cx", 100);
    bronze.setAttribute("cy", 250);
    bronze.setAttribute("r",10);
    bronze.setAttribute("fill", "orange");
    
    pic.appendChild(gold);
    pic.appendChild(silver);
    pic.appendChild(bronze);
}

var medalize = function(e){
    var medals;
    if(isGermany == True){
	medals = d3.selectAll("circle").data(Germany);
    }
    else{
	medals = d3.selectAll("circle").data(Canada);
    }
    medals.attr("r", function(d){return d*10;});
}

var switchFxn = function(e){
    if(isGermany == True){
	isGermany = False;
    }
    else{
	isGermany = True;
    }
}

switchButt.addEventListener("click", switchFxn);

display();
medalize();