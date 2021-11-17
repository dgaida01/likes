
// index 0: Neil M; 1: Nichole K; 2:Jim R
var likeCnts =[9,12,9];


function updateLike(element){
   var elementUpdate = document.getElementById((element.id+"Likes"));
   console.log(elementUpdate);
    if(element.id == "card1"){
        likeCnts[0]= likeCnts[0]+1;
        elementUpdate.innerHTML=likeCnts[0]+" Like(s)";     
    }
    else if(element.id == "card2"){
        likeCnts[1]= likeCnts[1]+1;
        elementUpdate.innerHTML=likeCnts[1]+" Like(s)";
    }
    else{
        likeCnts[2]= likeCnts[2]+1;
        elementUpdate.innerHTML=likeCnts[2]+" Like(s)";
    }
   

   
}