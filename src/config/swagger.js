const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shop App API",
      version: "1.0.0",
      description:
        "REST API untuk mobile app (React Native) & admin dashboard (React).",
    },
    servers: [{ url: "http://localhost:5050/api", description: "Local server" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Product: {
          type: "object",
          properties: {
            id: { type: "string", example: "p1" },
            name: { type: "string", example: "Light Brown Coat" },
            price: { type: "number", example: 120 },
            rating: { type: "number", example: 4.5 },
            category: { type: "string", example: "Clothes" },
            isFlashSale: { type: "boolean", example: true },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsdoc(options);
