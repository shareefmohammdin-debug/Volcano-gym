// ================================================
//       ====== Volcano Gym project ======
// ================================================

// page change functions  

function goCrts(){
    document.getElementById("home").style.display = "none"
    document.getElementById("memshipCarts").style.display = "block"

}

function goForm(){
    document.getElementById("memshipCarts").style.display = "none"
    document.getElementById("addForm").style.display = "block"
}

function goHome(){
    document.getElementById("home").style.display = "block"
    document.getElementById("addForm").style.display = "none"
    document.getElementById("removeSection").style.display = "none"
    document.getElementById("searchPage").style.display = "none"
}

function goDelForm(){
    document.getElementById("home").style.display = "none"
    document.getElementById("removeSection").style.display = "block"
}

function goSearch(){
    document.getElementById("home").style.display = "none"
    document.getElementById("searchPage").style.display = "flex"

}


// the form and search and other opration
// ========================================

// مثال لكيفية إضافة عنصر داخل resultsArea
function displayResult(member) {
    let resultContainer = document.getElementById("resultsArea");
    
    // القالب المخصص للنتيجة
    let cardHTML = `
        <div class="result-item">
            <div class="result-info">
                <h3>${member.name}</h3>
                <p>${member.email} | ${member.phon}</p>
            </div>
            <div class="result-id">ID: #0${member.id}</div>
        </div>
    `;
    
    // إضافة البطاقة للـ innerHTML
    resultContainer.innerHTML += cardHTML;
}


let result = document.getElementById("resultsArea")

let member = [
    {
        "name" : "sharif",
        "id" : 1,
        "phon" : "090233556",
        "email" : "sharif@gmail.com"
    },
    {
        "name" : "ahmed",
        "id" : 2,
        "phon" : "0985335356",
        "email" : "ahmed@gmail.com"
    },
    {
        "name" : "yarob",
        "id" : 3,
        "phon" : "012377456",
        "email" : "yarob@gmail.com"
    },
]

result.innerHTML = ''
displayResult(member[0])
displayResult(member[1])
displayResult(member[2])


