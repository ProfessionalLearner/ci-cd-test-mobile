const request = require('supertest');
const app = require('../../backend/app');
const config = require('config');
const mongoose = require('mongoose');

describe("Test api/words/add route", () => {
    beforeAll( async () => {
        await mongoose.connect(config.get('testDB'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
    })


    async function removeAllCollections () {
        const collections = Object.keys(mongoose.connection.collections);
        for (const collectionName of collections) {
          const collection = mongoose.connection.collections[collectionName];
          await collection.deleteMany();
        }
    }

    afterAll(async () => {
        await removeAllCollections();
        await mongoose.connection.close();
    })

    test("should be invalid input", async () => {
        const res = await request(app)
                    .post('/api/words/add')
                    .send({
                        description: "@cas"
                    })
        expect(res.status).toBe(400);
    })

    test("should add new word", async() => {
        const res = await request(app)
                    .post('/api/words/add')
                    .send({
                        description: "sample"
                    })
        expect(res.status).toBe(201);

    })

})