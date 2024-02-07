class Hospital {
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

const Hospital1 = new Hospital(1, 'HAMDA','adam','10aad',new Date());
console.log(Hospital);
