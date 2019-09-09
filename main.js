

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const button = document.getElementById("jumbobutton");

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
}   


button.addEventListener("click", function() {
    formPrinter();
} )

let studentArr = [
    {
    studentname: "" ,
    studentHouse: ""
    } ,
]

document.getElementById("myForm").addEventListener("click", function(event) {
    const id = event.target.id;
    if (id === "sort_btn") {
        let inputName = document.getElementById("InputName1").value;
        console.log(`${inputName}`)
    }

} )