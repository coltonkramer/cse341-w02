const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Documentation',
        description: 'Give a clear description of how these routes work and how they can be used'
    },
    host: 'localhost:8080' | 'https://colton341-w02.onrender.com/',
    schemes: ['http'],
}
const generatedFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(generatedFile, endpointFiles, doc)