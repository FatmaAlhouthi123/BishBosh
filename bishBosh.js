
function loopfuction() {
    let result = " ";
    for (i = 0; i < 100; i++) {
    
      
        result += checkNumber(i) + ", ";
    }
    document.getElementById("loop").textContent = result;
   
    
}






function AddEventListner() {
    

    const element2 = document.getElementById("button")
    element2.addEventListener("click", function () {
        
        let input = checkInput();
        result = checkNumber(input);
        console.log(input);
        
        if (input = !null) {
            console.log(result);
        
        }
        else AddEventListner("Error");
        document.getElementById("demo").textContent = result;
    });



}



function checkInput() {

    let input = document.getElementById("inputedNo").value;
    //  console.log(input.value);
    input = Number.parseInt(input);
    return input;
}


function checkNumber(inputNUmber) {
    let arr = [];
    let result;
    if (inputNUmber % 4 == 0 && inputNUmber % 3 == 0) {
        result = "BishBosh";
        arr.push(result);
    }

    else if (inputNUmber % 4 == 0) {
        result = "Bosh";
        arr.push(result);
    }

    else if (inputNUmber % 3 == 0) {
        result = "Bish";
        arr.push(result);

    }
    else {
        result = inputNUmber.toString();
        arr.push(result);
    }
    return result

}


loopfuction();
AddEventListner();
