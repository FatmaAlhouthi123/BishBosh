
loopLength = 100;



function loopFunction(loopLength = 100, bish = 3, bosh = 4, bishBosh = 0 ) {
    
    

    let result = " ";
    for (i = 1; i <= loopLength; i++) {

        result += checkNumber(i, bish, bosh, bishBosh) + ", ";
    }
    
    return result;
}





function checkNumber(inputNUmber, bish = 3, bosh = 4, bishBosh = 0) {
    console.log(bishBosh);
    
    let result = "";
    if (bishBosh !== 0) {
        if (inputNUmber % bishBosh == 0) {
            console.log(" im inside bishBoshInput");
            return result = "BishBosh";

        

        }
    } else {

        if (inputNUmber % bish == 0 && inputNUmber % bosh == 0) 
           return result = "BishBosh";
         
    }

       if (inputNUmber % bosh == 0) 
            result = "Bosh";
           
        

        else if (inputNUmber % bish == 0) 
            result = "Bish";
            

        
        else 
            result = inputNUmber.toString();
           
        
        return result

    }




function userBishBoshInput() {

    let bishInput = document.getElementById("bish").value;
    bishInput = Number.parseInt(bishInput);
    console.log(bishInput);
    
    let boshInput = document.getElementById("bosh").value;
    boshInput = Number.parseInt(boshInput);
    console.log(boshInput);


    let bishBoshInput = document.getElementById("bishBosh").value;
    bishBoshInput = Number.parseInt(bishBoshInput);
    console.log(bishBoshInput);
    let arrayLength1 = document.getElementById("ArrayLength").value;
    arrayLength1 = Number.parseInt(arrayLength1);
    loopLength = arrayLength1;
    console.log(arrayLength1);

    
    let resultshow = loopFunction(arrayLength1, bishInput, boshInput, bishBoshInput);
    console.log(resultshow);
    return resultshow;
}
 

function addEventListener2() {
    const element3 = document.getElementById("button2");

    element3.addEventListener("click", function () {

        if  (userBishBoshInput()!== null)
            document.getElementById("show").textContent = userBishBoshInput();
      else  document.getElementById("show").textContent = "Erorr"
        
      
      let disapear = document.getElementById("disapear")
      disapear.classList.remove("d-none");

        disapear.textContent = "Loop numbers 1-";
        var text = document.createTextNode(loopLength.toString());
        disapear.appendChild(text);
        







    });
}


document.getElementById("loop").textContent = result = loopFunction();
addEventListener2();





