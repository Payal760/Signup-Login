function signup(userName){
    let registerdUser = ["Payal", "Abogail","Annabelle","Rachel","Sarah"];
     // Check if the username is already in the array
     if(registerdUser.includes(userName)){
        return "User Already Regsistered, Please Login "
        //// Add the new username to the array
     }else{
        registerdUser.push(userName);
        return "Signup Successful, Please Login"
     }
}
console.log(signup("Sarah"));
console.log(signup("Michelle"))


function login(userName, password){
    let registerdUser = ["Payal", "Abogail","Annabelle","Rachel","Sarah"];
     // Check if the username is in the array
     if(registerdUser.includes(userName)){
           // Check if the password is correct
           if(password=="Emp@123"){
            return "Login Successful...";
           }else{
            return "User Not Found, Please Signup";
           }
        }else{
            return "Wrong Password...."
           }
     }


console.log(login("Payal", "Emp@123")); // Login Successful...
console.log(login("Abigail", "wrongpassword")); // Wrong Password....
console.log(login("Rapheal", "Emp@123")); // User Not Found, Please Signup