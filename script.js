let title = document.getElementById("titel")
let textArea = document.getElementById("text")
let btn = document.getElementById("buttn")
let rightCon = document.getElementById("right-con")
let color = document.getElementById("color")
let div2 = document.getElementById("div2")
let pDate = document.getElementById("pDate")

btn.addEventListener("click", function () {

    if (title.value == "" || textArea.value == "") {
        alert("Plz fill all the fields")
    }

    else if (title.value != "" || textArea.value != "") {

        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        let time = date.toLocaleTimeString();


        let newDiv = document.createElement('div');
        newDiv.classList.add('remove');

        // newDiv.style.backgroundColor = color.value;

        newDiv.innerHTML = `
        <div id="right" >
        <h1 class="font-bold text-2xl text-white">${title.value}</h1>
            <div id="inner-left" style = "background-color: ${color.value}">
                <textarea
                name=""
                id="txtArea"
                cols="30"
                rows="10"
                class="border-black border-2 bg-transparent"
                >
                ${textArea.value}
                </textarea
                >
            </div>
        </div>
        <div>
            <p id="date" class="text-white italic">${weekDays[day]}, ${months[month]} ${date.getDate()}, ${year}, ${time}</p>
        </div>
        `


        let newBtn = document.createElement('button');
        newBtn.classList.add('newButton');
        newBtn.innerHTML = "x";


        newBtn.addEventListener("click", function () {
            newDiv.style.display = "none";
            newBtn.style.display = "none";
            editBtn.style.display = "none";
        })


        // let editBtn = document.createElement('button')
        // editBtn.classList.add('editButton')
        // editBtn.innerHTML = "Edit";

        // editBtn.addEventListener('click', function () {
        //     textArea.style.width = "300px"; // Set width to 300px (adjust as needed)
        //     textArea.style.height = "200px";
        // })

        // div.style.backgroundColor = color.value;
        rightCon.appendChild(newDiv);
        rightCon.appendChild(newBtn);
        // rightCon.appendChild(editBtn);
        // rightCon.appendChild(pDate);


    }

    title.value = "";
    textArea.value = "";

    // div.addEventListener("click", function () {
    //     newDiv.remove();
    // })

})


color.addEventListener("change", function () {
    textArea.style.backgroundColor = color.value;
})

function computeTodayDate() {
    let date = new Date();
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        minute: "numeric",
        hour: "numeric",
    };
    return date.toLocaleString("en-US", options);
}
