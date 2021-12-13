import supertest from "supertest";
import server from "../app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const request = supertest(server);

describe("Testing suit #1", () => {
  beforeAll((done) => {
    mongoose.connect(process.env.MONGO_CONNECTION!).then(() => {
      console.log("Connected to Atlas");
      done();
    });
  });
  it("should test the /test api works correctly", async () => {
    const response = await request.get("/api/test");
    expect(response.status).toBe(200);
  });
  it("should test that getting all events from api/event returns 200", async () => {
    const response = await request.get("/api/event");

    expect(response.status).toBe(200);
  });

  //   afterAll((done) => {
  //     mongoose.connection.dropDatabase().then(() => {
  //       mongoose.connection.close().then(done);
  //     });
  //   });

  afterAll((done) => {
    mongoose.connection.close();
    done();
  });
});
