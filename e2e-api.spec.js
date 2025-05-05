const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

let tokenId;
let itemsId;
let url = "https://testapi.kelasotomesyen.com";
let endpointLogin = "/login";
let endpointItems = "/items";

let header = {
    "Content-Type": "application/json",
};

let auth = {
    username: "admin",
    password: "uHuY12#$",
};

let items = {
    name: "Mahira Shafanah Al-azis",
    description: "QA Engineer Ismitech",
    quantity: 1,
};

describe("Skenario E2E API Testing", async function() {
    this.timeout(5000);
    it("Login with credential valid data", async function () {
        const response = await request(url)
            .post(endpointLogin)
            .set(header)
            .send(auth)
            .expect(200);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("token");
        expect(response.body.token).to.be.a("string").that.is.not.empty;
        tokenId = await response.body.token;
        console.log(response.body);
    });

    it("Add Item ", async function () {
        //this.timeout(5000);
        const response = await request(url)
            .post(endpointItems)
            .set({ ...header, Authorization: `Bearer ${tokenId}` })
            .send(items)
            .expect(201);

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property("name", items.name);
        expect(response.body).to.have.property(
            "description",
            items.description
        );
        itemsId = await response.body.id;

        console.log(response.body);
    });

    it("Get Id Items", async function () {
        const response = await request(url)
            .get(`${endpointItems}/${itemsId}`) // pastikan ID valid
            .set({
                ...header,
                Authorization: `Bearer ${tokenId}`,
            })
            .expect(200);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("id", itemsId);
        console.log(response.body);
    });

    it("Delete ID create with token", async function () {
        const response = await request(url)
            .delete(`${endpointItems}/${itemsID}`)
            .set({ ...header, Authorization: `Bearer ${tokenId}` })
            .expect(200);

        expect(response.body).to.have.property("message");
        expect(response.status).to.equal(200);
        console.log(response.body);
    });
});
