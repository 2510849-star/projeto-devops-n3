const request = require("supertest");
const app = require("../src/app");

describe("Testes da aplicação", () => {

    test("GET /health", async () => {

        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("ok");

    });

    test("GET /api/produtos", async () => {

        const response = await request(app).get("/api/produtos");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);

    });

});
