function validateform(){  
    var fullname=document.reg_form.fullname.value;  
    var email=document.reg_form.email.value;  
    var ph=document.reg_form.ph.value;
    var subject=document.reg_form.subject.value;
      
    if (fullname=="")
    {  
      alert("Enter full name.");  
       return false;  
    }
    else if (email==null || email=="")
    {  
      alert("Enter your email address.");  
      return false;  
    }
    else if(ph.length>9)
    {
    alert("phone number should not be greater than 9")
    }
    else if (ph==null || ph=="")
    {  
        alert("Enter your phone number.");  
        return false;  
      }
    else if (subject=="")
    {
      alert("Enter subject.");
      return false;
    }
    else
    {
        alert("Thankyou for contacting me!")
        return true;
    }
}
  