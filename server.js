const express = require('express'),
    cors = require('cors'),
    app = express(),
    port = 8000,
    faker = require('faker'),
    server= app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.adress = {
            street : faker.address.streetName(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country(),
        }
    }
}

// var newUser = new User();
// console.log(newUser);

// var newCompany = new Company();
// console.log(newCompany);

app.get("/api/users/new", (request, response) => {
    response.json({"results" : new User()});
})

app.get("/api/companies/new", (request, response) => {
    response.json({"results" : new Company()});
})

app.get("/api/user/company", (request, response) => {
    response.json({"results" : {"user" : new User, "company" : new Company}});
})

// Tested with Postman and also REST client.