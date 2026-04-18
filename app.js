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
    }
]


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

function displayFor(){
    result.innerHTML = '';
    member.forEach(item => {
        displayResult(item);
    });
}

// add member in arr from the new and renew form 
// أضف 'e' هنا لاستقبال حدث الضغط
function formToHome(e) {
    // هذا السطر هو الأهم: يمنع إعادة تحميل الصفحة
    if (e) e.preventDefault(); 

    let fullName = document.getElementById("full");
    let phonNumber = document.getElementById("phone");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    // التحقق من أن الحقول ليست فارغة
    if (fullName.value === "" || phonNumber.value === "") {
        alert("Please fill all fields");
        return;
    }

    member.push({
        "name" : fullName.value,
        "id" : member.length + 1,
        "phon" : phonNumber.value,
        "email" : email.value
    });
    
    // مسح الحقول بعد الإضافة
    fullName.value = "";
    phonNumber.value = "";
    email.value = "";
    age.value = "";

    // العودة للرئيسية وتحديث العرض
    goHome();
}


// Delete members by remove function


function removeToHome(e) {
    // 1. منع إعادة تحميل الصفحة فوراً
    if (e) e.preventDefault(); 

    // 2. جلب العناصر بالـ IDs الصحيحة
    let delNameInput = document.getElementById("delName");
    let delIdInput = document.getElementById("idd");

    // 3. التحقق من الحقول
    if (delNameInput.value === "" || delIdInput.value === "") {
        alert("Please fill all fields to delete");
        return;
    }

    let foundIndex = -1;

    // 4. البحث عن العضو (تحويل الـ ID لرقم للمقارنة)
    for (let i = 0; i < member.length; i++) {
        if (member[i].name === delNameInput.value && member[i].id === Number(delIdInput.value)) {
            foundIndex = i;
            break;
        }
    }

    // 5. اتخاذ القرار بناءً على نتيجة البحث
    if (foundIndex !== -1) {
        member.splice(foundIndex, 1); // حذف العضو
        
        alert("Membership deleted successfully!");
        
        // مسح الحقول والعودة للرئيسية
        delNameInput.value = "";
        delIdInput.value = "";
        goHome();
    } else {
        alert("Member not found! Check Name and ID carefully.");
    }
}



// find member in search box 

// دالة البحث (ترتبط بـ oninput في حقل البحث)
function searchMember() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let resultContainer = document.getElementById("resultsArea");
    
    resultContainer.innerHTML = ""; // مسح النتائج الحالية

    let filteredMembers = member.filter(m => 
        m.name.toLowerCase().includes(searchValue) || 
        m.id.toString().includes(searchValue)
    );

    if (filteredMembers.length > 0) {
        filteredMembers.forEach(m => displayResult(m));
    } else {
        resultContainer.innerHTML = "<p class='placeholder-text'>No results found</p>";
    }
}