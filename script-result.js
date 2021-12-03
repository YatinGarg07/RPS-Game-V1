const KEY_USER = 'y-c-arr' ;
const KEY_COMP = 'c-c-arr' ;
const KEY_RESULT = 'result-arr';
const WIN ="You Win !"
const TIED="You Tied !"
const LOSE="You Lose !"
function updateUI(y_c,c_c,result){

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 =document.createElement('td');
    var td3 = document.createElement('td');

    switch(y_c){
        case 'r' : y_c = "Rock"; break;
        case 'p' : y_c = "Paper"; break;
        case 's' : y_c = "Scissor"; break;
    };
    switch(c_c){
        case 'r' : c_c = "Rock"; break;
        case 'p' : c_c = "Paper"; break;
        case 's' : c_c = "Scissor"; break;
    }

    switch(result){
        case WIN :{
            td1.style.backgroundColor="blue";
            td2.style.backgroundColor="green";
            td3.style.backgroundColor="#7207b0"; break;
        }
        case TIED :{
            td1.style.backgroundColor="yellow";
            td2.style.backgroundColor="yellow";
            td3.style.backgroundColor="yellow"; break; 
        }
        case LOSE :{
            td1.style.backgroundColor="#7207b0";
            td2.style.backgroundColor="red";
             td3.style.backgroundColor="blue"; break;
        }
    }
    console.log(c_c)
    y_c=document.createTextNode(y_c)
    c_c= document.createTextNode(c_c)
    result=document.createTextNode(result)

    
    //some styling
    
    
    td1.appendChild(y_c)
    td2.appendChild(result)
    td3.appendChild(c_c)

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    var table = document.getElementById("score_table")
    table.appendChild(tr);    

}


function fetchData(){
    if(sessionStorage.getItem(KEY_USER))
    var user_data =sessionStorage.getItem(KEY_USER);
    var res_data =sessionStorage.getItem(KEY_RESULT);
    var comp_data = sessionStorage.getItem(KEY_COMP)

    if(user_data==null){
        alert("NO DATA AVAILABLE \n To play the game press OK");
        location.href="/index.html"
    }
    var td1Text = JSON.parse(user_data);
    var td2Text = JSON.parse(res_data);
    var td3Text = JSON.parse(comp_data);

    let n = Object.keys(td1Text).length
    console.log(n)
    
    for(let i=0;i<n;i++){
    console.log(td1Text[i])
    updateUI(td1Text[i],td3Text[i],td2Text[i]);
    }
    
}


function goBack(){
    location.href="index.html"
}