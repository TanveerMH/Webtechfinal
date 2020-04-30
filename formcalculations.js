 //Set up an associative array
 //The keys represent the choosing type
 //We use this this array when the user selects a choosing from the form
 var choices= new Array();
 choices["None"]=0;
 choices["int"]=0;
 choices["local"]=1;


//drop down selection
function getChoices()
{
    var choiceValue=0;
    //Get a reference to the form id="pform"
    var theForm = document.forms["pform"];
    //Get a reference to the select id="choosing"
     var selectedChoice = theForm.elements["choosing"];
    choiceValue = choices[selectedChoice.value];

    //finally we return choiceValue
    return choiceValue;
}


function cppPrice()
{
    var cpp=0;
    //Get a reference to the form id="pform"
    var theForm = document.forms["pform"];
    //Get a reference to the checkbox id="includeCpp"
    var includeCpp = theForm.elements["includeCpp"];
	var temp = getChoices();
    if(includeCpp.checked==true && temp == 0)
    {
        cpp=2000;
    }
	else if(includeCpp.checked==true && temp == 1)
    {
        cpp=1000;
    }

    //finally we return the cpp
    return cpp;
}

function spPrice()
{
    var sp=0;
    //Get a refernce to the form id="pform"
    var theForm = document.forms["pform"];
    //Get a reference to the checkbox id="includeSp"
    var includeSp = theForm.elements["includeSp"];
	var temp = getChoices();
    if(includeSp.checked==true && temp == 0) {
        sp=1280;
    }
	else if(includeSp.checked==true && temp == 1){
        sp=1000;
    }
    //finally we return the sp
    return sp;
}



function partwpapers()
{
    var partwpapers=0;
    //Get a refernce to the form id="pform"
    var theForm = document.forms["pform"];
    //Get a reference to the checkbox id="includepwp"
    var includepwp = theForm.elements["includepwp"];
	var temp = getChoices();
    if(includepwp.checked==true && temp == 0){
        partwpapers=700;
    }
	else if(includepwp.checked==true && temp == 1){
        partwpapers=600;
    }
    //finally we return the sp
    return partwpapers;
}



function calculateTotal()
{
    //Here we get the total price by calling our function
    var totalPrice = cppPrice() + spPrice() + partwpapers();

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Payment RM "+totalPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
