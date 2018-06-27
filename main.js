var arr = {
    employees: [],
    departments: [],
    computers: []
}

let a = 0;
let b = 0;
let c = 0;
let d = 0;
for(let i = 0; i < 25; i++){
    firstArray = ["John", "Jay", "Jenny", "Jason", "Harold", "Matt", "Christine", "Will", "Natalie"];
    lastArray = ["Smith", "Johnson", "Wright", "Black", "White", "Large", "O'Neil"]
    arr.employees.push({
        id: i,
        name: firstArray[a] + " " + lastArray[b],
        departmentId: c,
        computerId: d,
    })
    a++;
    b++;
    c++;
    d++;
    if(a === 9){
        a = 0
    }
    if(b === 7){
        b = 0
    }
    if(c === 4){
        c = 0
    }
    if(d === 15){
        d = 0;
    }
}

let departmentArr = ["Human resources", "Marketing", "Sales", "Custodial", "Management"]

for(let i = 0; i < 5; i++){
    arr.departments[i] = {
        id: i,
        department: departmentArr[i]
    }
}

for(let i = 0; i < 15; i++){
    arr.computers[i] = {
        id: i,
        computer: `Workstation type ${i+5}`
    }
}


console.log(arr)

for(let i = 0; i < arr.employees.length; i++){
    let emp = document.createElement("article")
    emp.className = "employee";
    emp.style.border = "2px solid black"
    emp.style.margin = "10px"

    let header = document.createElement("header");
    header.className = "employee_name";
    let h1 = document.createElement("h1")
    h1.textContent = arr.employees[i].name;
    header.appendChild(h1)
    emp.appendChild(header)

    let departmentSec = document.createElement("section")
    departmentSec.className = "employee_department"

    let a = arr.employees[i].departmentId;
    let b = "";

    for(let j = 0; j < arr.departments.length; j++){
        if(arr.departments[j].id === a){
            b = arr.departments[j].department;
        }
    }

    departmentSec.textContent = `This employee works in the ${b} department`;
    emp.appendChild(departmentSec);

    let compSection = document.createElement("section")
    compSection.className = "employee_computer"

    a = arr.employees[i].computerId

    for(let j = 0; j < arr.computers.length; j ++){
        if(arr.computers[j].id === a){
            b = arr.computers[j].computer;
        }
    }

    compSection.textContent = `This employee uses a ${b}`
    emp.appendChild(compSection)

    document.querySelector("body").appendChild(emp);
}
