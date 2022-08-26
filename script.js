

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
    
        alert('Phonenumber Requires 080,070,081,090,')
        // errorphonenumber.innerHTML = "required to start with 080,070,081,090"
        errorphonenumber.style.color = "red"
        pnumber.style.display = "none"
    }
    if(Upload.value === "" || Upload.value === "null"){
        errorupload.innerHTML = "Upload File"
        errorupload.style.color = 'red'
    }
    if else(upload.file == )
    
    if(!(errorname.value || errortitle.value || erroremail.value|| errorphonenumber.value || errorupload.value)){
        document.getElementById('titles').innerHTML = Title.value
        document.getElementById('names').innerHTML = Name.value
        document.getElementById('pnumber').innerHTML = Phonenumber.value
        document.getElementById('emails').innerHTML = Email.value
        document.getElementById('file').innerHTML = Upload.value
   }










































    
    // let errs = "";
    //     for (let i in errors) {
    //         // console.log(errors[i]);
    //         errs += errors[i] + "<br>";
    //     }








// if (name.value == '' || name.value == 'null'){
//     showerror.innerHTML += "Please Provide Your Name" + "<br>"   
// }
// if (email.value == '' || email.value == 'null'){
//     showerror.innerHTML += 'Please Provide Your Email' +"<br>"
// }
// if (phonenumber.value == '' || phonenumber.value == 'null'){
//     showerror.innerHTML += "Please Provide Your Phone_Number"  +"<br>"
// }
// if (title.value == '' || title.value == 'null'){
//     showerror.innerHTML += "Title Required"  +"<br>"
// }
// if (upload.value == '' || upload.value == 'null'){
//     showerror.innerHTML += 'Upload Image'  +"<br>"
// }
})
