const showFunction = () => {
    var x = document.getElementById("myForm");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const button = document.getElementById("jumbobutton");
const formButton = document.getElementById("myForm");

const formPrinter = () => {
    const stringDom = `<div class="container d-flex justify-content-center">
                            <form>
                                <div class="form-group">
                                    <label for="InputName1">Name:</label>
                                    <input type="form-control" class="form-control" id="InputName1"> 
                                </div>
                                <button type="submit" id="sort_btn" class="btn btn-primary">Sort</button>
                            </form>
                        </div> `
                        printToDom(stringDom, "myForm");
                        document.getElementById("jumbotron").className = "d-none";
                        showFunction();
}

button.addEventListener("click", function() {
    formPrinter();
} )

//card maker below

let studentArr = [];
const house = ["Griffendor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const randomNumber = () => {
    return house[Math.floor((Math.random() * 4))];
}

const cardPrinter = (studentArr) => {
    let x = ""; 
    for (let i = 0; i < studentArr.length; i++) {
            x += `
                    <div id="${studentArr[i].studentName}" class="card container" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${studentArr[i].studentName}</h5>
                            <p class="card-text">They are of house ${studentArr[i].studentHouse}</p>
                            <button type="button" class="btn btn-danger expel">Expel</button>
                        </div>
                    </div> ` 
    }
    printToDom(x, "myCards");
    attachExpelEvents();

}

document.getElementById("myForm").addEventListener("click", function(event) {
    const id = event.target.id;
    if (id === "sort_btn") {
        if(document.querySelector(`input`).value) {
            let inputName = document.getElementById("InputName1").value;
            const newStudent = {
                studentName: inputName ,
                studentHouse: randomNumber()
                } 
            studentArr.push(newStudent);
            cardPrinter(studentArr);
        }
    }
} )

const attachExpelEvents = () => {
    const expelbuttons = document.getElementsByClassName("expel");
    for(i = 0; i < expelbuttons.length; i++){
        expelbuttons[i].addEventListener("click", function(event) {
            const expelStudentName = event.target.parentNode.parentNode.id;
            for (let i = 0; i < studentArr.length; i++) {
                if (expelStudentName === studentArr[i].studentName) {
                    studentArr.splice(i, 1);
                    cardPrinter(studentArr);
                }
            }
        })
    }
}