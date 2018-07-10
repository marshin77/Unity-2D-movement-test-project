#pragma strict

var collided : GameObject;
var filler : GameObject;
filler = new GameObject("blank");
collided = filler;
var canBot : boolean = true;


function Start () {

}

function Update () {


 	
	if(  collided.name != "blank"){
		canBot = false;
	}
	else{
		canBot = true;
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