//callback
/*
function submitForm(submit,isValid){
    var[dbname,comment]
    console.log(db());
    console.log("submit");
}
function validations(){
    dbName="SECE"
    return[dbName,"Data STored Successfully"]
}
submitForm("Form Submitted Successfully",validations)

*/

function submitForm(submit,isFormValid){
    if(isFormValid){
        console.log("form validation successfull")
        console.log(submit)
    }
    else{
        console.log("form validation is failed")
        console.log("form submitted unsuccessfull")
    }
}
function formValidation() {
  email="email@sece.ac.in"
  password="1234567"
  if(email=="email@sece.ac.in"&&password==""){
     return true
  }
}
submitForm("form Submitted Successfully",formValidation);