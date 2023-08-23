function validateForm(){
            var password = document.getElementById("password").value;
            var confirmPassword=document.getElementById("confirmPassword").value;
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;

             //script to check if username field is empty
            if(username==""){
                alert(" Alert!!! Please create your favourite username i.e Tonylvan");
                return false;
            }
             //script to check if email field is empty
            if(email==""){
                alert(" Alert!!! Please fill in a valid email");
                return false;
            }
           
            //script to check if password field is empty
            if(password==""){
                alert(" Alert!!! Please create a strong password");
                return false;
            }
            //script to check if password length is atleast 8 characters
            if(password.length < 7){alert("password must be atleast eight characters long");
           return false;
        }
            //chech if passwords match.
        if(password===confirmPassword){
            alert("Password matched Successfully! Welcome to Software Solutions");
        }else
        {
            alert("The Password you have entered, do not match with the previous one! Try Again"); 
            
        }
            return true;
        }

        