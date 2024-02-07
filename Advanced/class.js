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

const Company1 = new Company (1,'hamda','abdi',)
const Company2 = new Company (1,'hamda','abdi',)
const Company3 = new Company (1,'hamda','abdi',);
const Company4 = new Company (1,'hamda','abdi',)
const Company5 = new Company (1,'hamda','abdi',)
const Company6 = new Company (1,'hamda','abdi',)
const Company7 = new Company (1,'hamda','abdi',)


console.log(Company1,Company2,Company3,Company4,Company5,Company6,Company7)

