class Company {
    constructor(id,firstName,LastName){
        this.id = id;
        this.firstName = firstName;
        this.LastName = LastName;

    }
    
   getCompany(){
    return`id:${this.id} firstName:${this.firstName} LastName:${this.LastName}` 
    }
}


