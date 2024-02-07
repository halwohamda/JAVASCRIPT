 export class Hospital {
    constructor(id,firstName,LastName,Address,DateTime){
        this.id = id;
        this.firstName = firstName;
        this.LastName = LastName;
        this.Address = Address;
        this.DateTime =DateTime;
    }

    getHostipal(){
        return `id:${this.id} first:${this.firstName} LastName:${this.LastName} Address:${this.Address} DateTime:${this.DateTime}`
    }
}


