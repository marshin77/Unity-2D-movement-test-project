#pragma strict

var speed : float = 5;
var health : float = 3;
var right : boolean = true;
var pos = Vector3(0,0,0);
var sword : GameObject;
var lastmove : int = 0;
var swingRate : float = .5;
var nextSwing : float = 0.0;
var CanMove : boolean = true;


public var RB : GameObject;
private var rbs : RBS;

public var TB : GameObject;
private var tbs : TBS;

public var LB : GameObject;
private var lbs : LBS;

public var BB : GameObject;
private var bbs : BBS;


function Start () {

rbs = RB.GetComponent(RBS);


tbs = TB.GetComponent(TBS);

lbs = LB.GetComponent(LBS);

bbs = BB.GetComponent(BBS);

}

function Update () {

pos = transform.position;
	
	if(Input.GetAxis("sword") && lastmove == 1){
		if (Time.time >= nextSwing){
			Instantiate(sword, Vector3(pos.x - 1,pos.y,2.528), Quaternion.Euler(0,0,90));
			CanMove = false;
			nextSwing = Time.time + swingRate;

		}
	}
	else if(Time.time >= nextSwing){

		CanMove = true;
	
	}

	if(Input.GetAxis("sword") && lastmove == 2){
		if (Time.time >= nextSwing){
			Instantiate(sword, Vector3(pos.x + 1,pos.y,2.528), Quaternion.Euler(0,0,270));
			CanMove = false;
			nextSwing = Time.time + swingRate;

		}
	}
	else if(Time.time >= nextSwing){

		CanMove = true;
	
	}


	if(Input.GetAxis("sword") && lastmove == 3){
		if (Time.time >= nextSwing){
			Instantiate(sword, Vector3(pos.x ,pos.y + 1,2.528), Quaternion.Euler(0,0,0));
			CanMove = false;
			nextSwing = Time.time + swingRate;

		}
	}
	else if(Time.time >= nextSwing){

		CanMove = true;
	
	}

	if(Input.GetAxis("sword") && lastmove == 4){
		if (Time.time >= nextSwing){
			Instantiate(sword, Vector3(pos.x ,pos.y - 1,2.528), Quaternion.Euler(0,0,180));
			CanMove = false;
			nextSwing = Time.time + swingRate;

		}
	}
	else if(Time.time >= nextSwing){

		CanMove = true;
	
	}





	if(CanMove == true ){
	 Movement();
 }
	

}



function Movement() : void {




	




	if(Input.GetAxis("Horizontal") < 0 && lbs.canLeft == true){
		
			
			transform.Translate(Vector3(-1 * speed * Time.deltaTime,0,0));
			lastmove = 1;
	}

	if(Input.GetAxis("Horizontal") > 0 && rbs.canRight == true){
		

		transform.Translate(Vector3(1 * speed * Time.deltaTime,0,0));
		lastmove = 2;
	}

	if(Input.GetAxis("Vertical") > 0 && tbs.canTop == true){
		
			transform.Translate(Vector3( 0,1 * speed * Time.deltaTime,0));
			lastmove = 3;
	}

	if(Input.GetAxis("Vertical") < 0 && bbs.canBot == true){

		transform.Translate(Vector3( 0,-1 * speed * Time.deltaTime,0));
		lastmove = 4;
	}


	if(lbs.collided.tag == "basicDamage"){

		health = health - .5;

		transform.Translate(Vector3(3,0,0));
		
	}

	if(rbs.collided.tag == "basicDamage"){

		health = health - .5;

		transform.Translate(Vector3(-3,0,0));
	}


	if(tbs.collided.tag == "basicDamage"){

		health = health - .5;

		transform.Translate(Vector3(0,-3,0));
	}


	 

	if(bbs.collided.tag == "basicDamage"){

		health = health - .5;
		transform.Translate(Vector3(0,2,0));
	}


}