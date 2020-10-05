function CreateNewElement() {

    let inputValue = document.getElementById("myInput").value;
    let li = document.createElement("li");
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    console.log(inputValue);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    let n;
    for (n = 0; n < close.length; n++) {
        close[n].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
    createCloseButton();
    AddCheckSymbol();
}

function createCloseButton() {
    let myNodelist = document.getElementById('myUL').getElementsByTagName("LI");
    let i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }


    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var j;
    for (j = 0; j < close.length; j++) {
        close[j].onclick = function () {
            let parentDiv = this.parentElement;
            parentDiv.style.display = "none";
        }
    }
}


function AddCheckSymbol() {



    let list = document.getElementById('myUL');
    console.log(list.length);

    list.addEventListener('click', function () {
        console.log("hellojj");

        var j;
        for (j = 0; j < list.length; j++) {
           
                list[j].classList.toggle('checked');
             
            
        }

                    
                
            
        

    });
}




        



function start() {
    
    document.getElementById("enterButton").addEventListener("click",
        function () {
            CreateNewElement();
            
            
        });
    createCloseButton();
    AddCheckSymbol();
}
start();