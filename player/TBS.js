#pragma strict

var collided : GameObject;
var filler : GameObject;
filler = new GameObject("blank");
collided = filler;
var canTop : boolean = true;


function Start () {

}

function Update () {


 	
	if(  collided.name != "blank"){
		canTop = false;
	}
	else{
		canTop = true;
	}
		

}

function OnCollisionEnter(col : Collision){

	collided = col.gameObject;

}

function OnCollisionStay(col : Collision){

	collided = col.gameObject;

}

function OnCollisionExit(col : Collision){

	collided = filler;




}