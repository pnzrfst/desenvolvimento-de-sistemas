export const swaggerConfig = {
    openapi:{
        info: {
            title: "API da TODO LIST",
            description: "Essa API é baseada no todoList da nossa aula.",
            version: "1.0.0"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },

    exposeRoute: true

}