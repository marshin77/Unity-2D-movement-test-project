#pragma strict
import UnityEngine.SceneManagement;



private var ps : player;


function Start () {


ps = GetComponent(player);


}

function Update () {

	if(ps.health<=0){
		 SceneManager.LoadScene (SceneManager.GetActiveScene ().name);
	}




}