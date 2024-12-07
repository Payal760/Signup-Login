function signup(userName){
    let registerdUser = ["Payal", "Abogail","Annabelle","Rachel","Sarah"];
     // Check if the username is already in the array
     if(registerdUser.includes(userName)){
        return "User Already Regsistered, Please Login "
     }else{
        registerdUser.push(userName);
        return "Signup Successful, Please Login"
     }
}
console.log(signup("Sarah"));
console.log(signup("Michelle"))
