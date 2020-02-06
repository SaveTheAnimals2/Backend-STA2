const db = require("../database/dbConfig.js");
const Users = require("./usersModel.js");

describe("users model", () => {
    afterEach(async () => {
      await db("users").truncate();
    });
  
    describe(".find()", () => {
      it("should find all users in the db", async () => {
        const user = await Users.add({
          username: "admin",
          password: "password",
          organizationName: "admin",
          email: "email@gmail.com"
        });
        const users = await Users.find();
        expect(users.length).toBe(4);
      });
    });

})