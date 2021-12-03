var ids=["r","p","s"]
const KEY_USER = 'y-c-arr' ;
const KEY_COMP = 'c-c-arr' ;
const KEY_RESULT = 'result-arr';
function getRandomId(){
        let chosenOne = Math.floor((Math.random() * 3) + 0);
        console.log(chosenOne)
        return chosenOne;
}

function rpsGame(yourChoice){
    var yourChoiceId= yourChoice.id
    console.log(yourChoiceId)
    var yourChoiceIndex=ids.indexOf(yourChoiceId)
    var compChoiceIndex=getRandomId()
    var result=""

    if(yourChoiceIndex===compChoiceIndex) {result="You Tied !";}

    else if(yourChoiceIndex==0){
        if(compChoiceIndex==1) result="You Lose !";
        else result="You Win !"
    }

    else if(yourChoiceIndex==1){
        if(compChoiceIndex==2) result="You Lose !";
        else result="You Win !"
    }

    else  {
        if(compChoiceIndex==0) result="You Lose !";
        else result="You Win !"
    }
        onSessionSave(yourChoiceIndex,compChoiceIndex,result);
        showResult(yourChoiceIndex,compChoiceIndex,result);
}

//for saving results to session storage
function onSessionSave(yourChoiceIndex,compChoiceIndex,result){
    var yArr ,cArr,rArr , testArray;
        yArr=sessionStorage.getItem(KEY_USER);
        cArr=sessionStorage.getItem(KEY_COMP);
        rArr=sessionStorage.getItem(KEY_RESULT);

        var yArr ,cArr,rArr , testArray;
        if(yArr==null){
            yArr=[];
            yArr.unshift(ids[yourChoiceIndex]);
            sessionStorage.setItem(KEY_USER,JSON.stringify(yArr));
        }
        else{
            testArray=JSON.parse(yArr);
            testArray.unshift(ids[yourChoiceIndex]);
            sessionStorage.setItem(KEY_USER,JSON.stringify(testArray));
        }


        //
        if(cArr==null){
            cArr=[];
            cArr.unshift(ids[compChoiceIndex]);
            sessionStorage.setItem(KEY_COMP,JSON.stringify(cArr));
        }
        else{
            testArray=JSON.parse(cArr);
            testArray.unshift(ids[compChoiceIndex]);
            sessionStorage.setItem(KEY_COMP,JSON.stringify(testArray));
        }

        //
        if(rArr==null){
            rArr=[];
            rArr.unshift(result);
            sessionStorage.setItem(KEY_RESULT,JSON.stringify(rArr));
        }
        else{
            testArray=JSON.parse(rArr);
            testArray.unshift(result);
            sessionStorage.setItem(KEY_RESULT,JSON.stringify(testArray));
        }

}

//UI changes after result calculation
function showResult(playerId , computeId , result){

//Img nodes of the player chosen and computer chosen object    
var playerImgId = document.createElement("img")
var computeImgId =document.createElement("img")

//Setting image source of the object chosen 
var playerImgSrc = document.getElementById(ids[playerId]).getAttribute("src")
var computeImgSrc= document.getElementById(ids[computeId]).getAttribute("src")
computeImgId.src = computeImgSrc
playerImgId.src = playerImgSrc

console.log(playerImgId.src)

//Removing all child nodes of flex box
let oldFlexBox = document.getElementById("flex-box")
removeAllChildNodes(oldFlexBox)

//result element creation
var h3 = document.createElement("h3");
let resultNode = document.createTextNode(result);
h3.style.color
h3.appendChild(resultNode)

//Adding css to the new created elements
if(result=="You Tied !"){
    computeImgId.style.setProperty("box-shadow","7px -3px 77px 0px rgba(194,31,31,0.75)");
    playerImgId.style.setProperty("box-shadow","7px -3px 77px 0px rgba(194,31,31,0.75)");
    h3.style.fontSize="400%"
    h3.style.color="#fcba03"
    h3.style.fontWeight="bold"
    h3.style.fontFamily="'Asap Condensed', sans-serif"
    console.log(h3);
}
else if(result=="You Win !"){
    computeImgId.style.setProperty("box-shadow","7px -3px 77px 0px rgba(194,31,31,0.75)");
    playerImgId.style.setProperty("box-shadow","7px -3px 77px 0px rgba(14,94,219,0.75)")
    h3.style.fontSize="400%"
    h3.style.color="#0335ff"
    h3.style.fontWeight="bold"
    h3.style.fontFamily="'Asap Condensed', sans-serif"
    console.log(h3);
}
else if(result=="You Lose !"){
    computeImgId.style.setProperty("box-shadow","7px -3px 77px 0px rgba(14,94,219,0.75)");
    playerImgId.style.setProperty("box-shadow","7px -3px 77px 0px rgba(194,31,31,0.75)")
    h3.style.fontSize="400%"
    h3.style.color="#db2509"
    h3.style.fontWeight="bold"
    h3.style.fontFamily="'Asap Condensed', sans-serif"
    console.log(h3);
}


//Updating Flex Box 
let updatedFlexBox =document.getElementById("flex-box");
updatedFlexBox.appendChild(computeImgId);
updatedFlexBox.appendChild(h3);
updatedFlexBox.appendChild(playerImgId);
console.log(playerImgId);

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

localStorage.setItem('name','yatinGarg');
console.log(localStorage.getItem('name'))