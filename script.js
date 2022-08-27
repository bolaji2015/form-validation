

let form = document.getElementById('form')
let Title = document.getElementById('title')
let Name = document.getElementById('name')
let Email = document.getElementById('email')
let Phonenumber = document.getElementById('phonenumber')
let Upload = document.getElementById('upload')
// this is for the displayvalues

// let Title = document.getElementById('title').innerHTML
// let Name = document.getElementById('name').innerHTML
// let pnumber =  document.getElementById('pnumber').innerHTML
// let Email = document.getElementById('email') .innerHTML
// let Upload = document.getElementById('file') .innerHTML



    






// const values = []
let errorname = document.getElementById('error_name')
let errortitle = document.getElementById('error_title')
let erroremail = document.getElementById('error_email')
let errorphonenumber = document.getElementById('errorphone_number')
let errorupload = document.getElementById('error_upload')
let showerror = document.getElementById('displayerror')

// let errorsubmit = document.getElementById('error_submit')
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // var errors = []
    // var elements = allerrors
    // errors.push(elements)
    if(Name.value === "" || Name.value === 'null') {
        errorname.innerHTML = "Name is Required";
        errorname.style.color = 'red'
        
    }
    if(Title.value === "" || Title.value === "null"){
        errortitle.innerHTML = "Title Must Be Inclusive"
        errortitle.style.color = 'red'
    }
    if(Email.value === "" || Email.value === "null"){
        erroremail.innerHTML = "Provide Your Email"
        erroremail.style.color = 'red'
    }
    else if(!(Email.value.includes("@" && ".com"))){
    emails.style.display = "none"
    alert('Provide Valid E-Mail')
}



    if(Phonenumber.value === "" || Phonenumber.value === "null"){
        errorphonenumber.innerHTML = "Phone Number is Required"
        errorphonenumber.style.color = 'red'
    }
    else if(!(Phonenumber.value.startsWith("080")) && (!(Phonenumber.value.startsWith("070"))) && (!(Phonenumber.value.startsWith("081"))) && (!(Phonenumber.value.startsWith("090"))) && (!(Phonenumber.value.startsWith("091")))){
    
        alert('Phone_Number Require to Start With 080,070,081 or 090,')
        pnumber.style.display = "none"
    }
    if(Upload.value === "" || Upload.value === "null"){
        errorupload.innerHTML = "Upload File"
        errorupload.style.color = 'red'
    }
    
    
    else if(Upload.files[0].size > (1024*1024*1) ){
            alert('File is Larger Than 1mb')
            file.style.display = 'none'
    }
    
    
    if(!(errorname.value || errortitle.value || erroremail.value|| errorphonenumber.value || errorupload.value)){
        document.getElementById('titles').innerHTML = Title.value
        document.getElementById('names').innerHTML = Name.value
        document.getElementById('pnumber').innerHTML = Phonenumber.value
        document.getElementById('emails').innerHTML = Email.value
        document.getElementById('file').innerHTML = Upload.value
   }
    
   

})
function getfileinfos() {
    let file = form['upload'].files[0];
    let size = (parseInt(file.size) / 1024).toFixed(2);
    let imagename = file.name;
    let lastmodfy = file.lastModifiedDate
    document.querySelector('#files_informations').innerHTML = `Name: ${imagename} <br>
    Size: ${size} MB <br> Modified Date: ${lastmodfy} <br>
    `
}

    

