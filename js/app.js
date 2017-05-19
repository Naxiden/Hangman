
//docelowo ma tutaj byc wczytywana randomowo baza danych 

//var pass = "All we need is death";

var passArray = ['All we need is death', 'Robot', 'Death Door', 'apocalypse', 'Joker', 'afraid', 'black', 'corpse', 'Grim Reaper']

//losuje randomowe haslo

var randomIndex = Math.floor(Math.random() * passArray.length); 
var pass = passArray[randomIndex];

//zamieniam litery na duze

pass = pass.toUpperCase();

var passleng = pass.length;
var fails = 0;


var pass1 = "";
// tworze petle ktora maskuje haslo

for (i=0; i<passleng; i++)
{
	if (pass.charAt(i)==" ") pass1 = pass1 + " ";
	else pass1 = pass1 + "-";
}

function showPassword()
{
	document.getElementById("password").innerHTML = pass1;
}

window.onload = start;

//tworze nowa tabele z literami

var alphaLetters = new Array(25);

alphaLetters[0] = "A";
alphaLetters[1] = "B";
alphaLetters[2] = "C";
alphaLetters[3] = "D";
alphaLetters[4] = "E";
alphaLetters[5] = "F";
alphaLetters[6] = "G";
alphaLetters[7] = "H";
alphaLetters[8] = "I";
alphaLetters[9] = "J";
alphaLetters[10] = "K";
alphaLetters[11] = "L";
alphaLetters[12] = "M";
alphaLetters[13] = "N";
alphaLetters[14] = "O";
alphaLetters[15] = "P";
alphaLetters[16] = "Q";
alphaLetters[17] = "R";
alphaLetters[18] = "S";
alphaLetters[19] = "T";
alphaLetters[20] = "U";
alphaLetters[21] = "V";
alphaLetters[22] = "W";
alphaLetters[23] = "X";
alphaLetters[24] = "Y";
alphaLetters[25] = "Z";

//tworze divy zawierajace litery

function start()
{
	
	var alphabVal ="";
	
	for (i=0; i<=25; i++)
	{
		var element = "num" + i;
		alphabVal = alphabVal + '<div class="letter" onclick="checkLogic('+i+')" id="'+element+'">'+alphaLetters[i]+'</div>';
	}
	
	document.getElementById("letters").innerHTML = alphabVal;
	
	
	showPassword();
}

String.prototype.setLett = function(place, sign)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0, place) + sign + this.substr(place+1);
}

//tworze funkcje z logika

function checkLogic(nr)
{
	
	var hit = false;
	
	for(i=0; i<passleng; i++)
	{
		if (pass.charAt(i) == alphaLetters[nr]) 
		{
			pass1 = pass1.setLett(i,alphaLetters[nr]);
			hit = true;
		}
	}
	
	if(hit == true)
	{
		
		var element = "num" + nr;
		document.getElementById(element).style.background = "green";
		document.getElementById(element).style.cursor = "default";
		
		showPassword();
	}
	else
	{
		
		var element = "num" + nr;
        
		document.getElementById(element).style.backgroundColor= 'red'
        

		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//zly wybor
		
        fails++;
        console.log(fails)
		var hang = "img/s"+ fails + ".jpg";
		document.getElementById("animation").innerHTML = '<img src="'+hang+'"  />';
	}
	
	//prawidlowe haslo 
	
    if (pass == pass1){
	document.getElementById("letters").innerHTML  = "Correct !!!! Password : "+pass+'<br /><br /><span class="reset" onclick="location.reload()">Do you want to try again?</span>&nbsp;<button class="butt_yes" onClick="window.location.reload()">Yes</button> <button class = "butt_no" onClick="window.location.reload()">YESS!</button> '
    }
	
	//nieprawidlowe haslo
	
    if (fails>=9){
	document.getElementById("letters").innerHTML  = "Lose! Correct Password: "+pass+'<br /><br /><span class="reset" onclick="location.reload()">Do you want to try again?</span>&nbsp;<button class="butt_yes" onClick="window.location.reload()">Yes</button> <button class = "butt_no" onClick="window.location.reload()">YESS!</button>'
       
    }
   
   

}
 
    