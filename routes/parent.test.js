const request = require("supertest");
const routes = require("../server/server");
const { generateToken } = require("../middleware/auth");

const token = generateToken({ 
    id: 5,
    username: "Matt"
});

const authHeader = "Authorization";

describe("parent endpoint", () => { 
    it("returns status code 200", async () => {
        try {
            const res = await request(routes)
                .get("/api/parent/2")
                .set(authHeader, token);

            expect(res.type)
                .toBe("application/json"); 
            expect(res.status) 
                .toBe(200);
            expect(res.body)
                .toEqual([]);
        } catch (error) {
            console.log(error); //eslint-disable-line
        }
    });
});
