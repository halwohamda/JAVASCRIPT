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

const Hospital1 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital2 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital3 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital4 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital5 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital6 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital7 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital8 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
const Hospital9 = new Hospital(1, 'HAMDA','adam','10aad',new Date())
console.log(Hospital1,Hospita2,Hospital3,Hospita3,Hospital4,Hospital5,Hospital6,Hospital7,Hospital8)

