const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

// config .env
const dotenv = require("dotenv");
dotenv.config();

const api = request(process.env.BASE_URL);

// deklarasi file json
const auth = require('./data/auth.json');
const items = require('./data/items.json');


let tokenId;
let itemsId;

let endpointLogin = "/login";
let endpointItems = "/items";

let header = {
    "Content-Type": "application/json",
};

describe("Skenario E2E API Testing", async function() {
    this.timeout(5000);
    it("Login with credential valid data", async function () {
        const response = await api
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
        const response = await api
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
        const response = await api
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
        const response = await api
            .delete(`${endpointItems}/${itemsID}`)
            .set({ ...header, Authorization: `Bearer ${tokenId}` })
            .expect(200);

        expect(response.body).to.have.property("message");
        expect(response.status).to.equal(200);
        console.log(response.body);
    });
});
