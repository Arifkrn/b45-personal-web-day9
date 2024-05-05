let isiProject = []

function addProject(event){
    event.preventDefault();

    let projectName = document.getElementById("projectName").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;
    // let mycheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let mycheckbox1 = document.getElementById('mycheckbox1').value;
    let mycheckbox2 = document.getElementById('mycheckbox2').value;
    let mycheckbox3 = document.getElementById('mycheckbox3').value;
    let mycheckbox4 = document.getElementById('mycheckbox4').value;
    let image = document.getElementById("input-image").files[0];
    let imageURL = URL.createObjectURL(image)
    let technology;

    if(projectName === ""){
        return alert("please input your Project Name")
    }else if(startDate === ""){
        return alert("Please input your start Date")
    }else if(endDate === ""){
        return alert("please input your end Date")
    }else if(description === ""){
        return alert("pelase input your description")
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked  && !document.getElementById('mycheckbox4').checked){
        return alert("pelase input your checkbox")
    }
    // 3 kondisi
    else if(!document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox2 = "",
        mycheckbox3 = "",
        mycheckbox4 = ""
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox3').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox1 = "",
        mycheckbox3 = "", 
        mycheckbox4 = ""
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox1 = "", 
        mycheckbox2 = "", 
        mycheckbox4 = ""
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked){
        mycheckbox1 = "", 
        mycheckbox2 = "", 
        mycheckbox3 = ""
    }
    //2 kondisi
    else if(!document.getElementById('mycheckbox3').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox3 = "",
        mycheckbox4 = ""
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox1 = "",
        mycheckbox4 = ""
    }else if(!document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox2 = "",
        mycheckbox4 = ""
    }else if(!document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked){
        mycheckbox2 = "",
        mycheckbox3 = ""
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked){
        mycheckbox1 = "",
        mycheckbox2 = ""
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox3').checked){
        mycheckbox1 = "",
        mycheckbox3 = ""
    }
    //1 kondisi
    else if(!document.getElementById('mycheckbox1').checked){
        mycheckbox1 = ""
    }else if(!document.getElementById('mycheckbox2').checked){
        mycheckbox2 = ""
    }else if(!document.getElementById('mycheckbox3').checked){
        mycheckbox3 = ""
    }else if(!document.getElementById('mycheckbox4').checked){
        mycheckbox4 = ""
    }
    else if (imageURL === "") {
        return alert("Please entered your image!")
    
    // }else if(mycheckbox2.checked == true){
    //     return mycheckbox2.value
    // }else if(mycheckbox2.checked == false){
    //     return false
    // }else if(!mycheckbox1.checked) {
    //     mycheckbox1 = "oi"
    }if (startDate > endDate) {
        return alert("The end date cannot be less than the start date")
    // }if(!document.getElementById('mycheckbox1').checked){
    //     mycheckbox1 = null
    // }else if(!document.getElementById('mycheckbox2').checked){
    //     mycheckbox2 = null
    // }else if(!document.getElementById('mycheckbox3').checked){
    //     mycheckbox3 = null
    // }else if(!document.getElementById('mycheckbox4').checked){
    //     mycheckbox4 = null
    }

    let startDatePart = startDate.split("/")
    let endDatePart = endDate.split("/")

    let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0]
    let formatEndtDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]

    let newStartDate = new Date(formatStartDate)
    let newEndtDate = new Date(formatEndtDate)

    let timeDifference = newEndtDate - newStartDate

    let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    
    let differenceInMonths = Math.floor(differenceInDays / 30.44)
    
    let differenceInYears = Math.floor(differenceInMonths / 12)

    let duration;

    if (differenceInYears > 0) {
        duration = `${differenceInYears} years, ${differenceInMonths} month, ${differenceInDays} days`
    } else if (differenceInMonths > 0) {
        duration = `${differenceInMonths} month, ${differenceInDays} days`
    } else {
        duration = `${differenceInDays} days`
    }

    isiProject.push({
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        description: description,
        technology: `${mycheckbox1} ${mycheckbox2} ${mycheckbox3} ${mycheckbox4}`,
        image: imageURL,
        duration: duration
    })
    console.log(isiProject);

    newData()
}
function newData(){
    document.getElementById("wrap-project").innerHTML = ""


    for (let i = 0; i < isiProject.length; i++) {
        const project = isiProject[i]

        document.getElementById("wrap-project").innerHTML += `
            <div class="col-4" style="margin: 10px">
                <img src="${project.image}" alt="">
                <div>
                    <h4>${project.projectName}</h4>
                    <div class="wrap-date-view">
                        <p class="dateStart" id="dateStart">${project.startDate}</p>
                        <p class="dateEnd" id="dateEnd">${project.endDate}</p>
                    </div>
                    <p>Durasi : ${project.duration}</p>
                </div>
                <div>
                    <p>${project.description}</p>
                </div>
                <div>
                    <p>${project.technology}</p>
                </div>
                <div class="form-button" id="form-button">
                    <button class="detail">
                        <a href="./detailproject.html">Detail</a>
                    </button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        </div>
        <div class="col-6></div>
        `
    }
}