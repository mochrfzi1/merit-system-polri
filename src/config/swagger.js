const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Merit System Polri API',
      version: '1.0.0',
      description: 'Dokumentasi API untuk Merit System Polri',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    tags: [
      { name: 'Auth', description: 'Otentikasi User' },
      { name: 'Role' },
      { name: 'Jabatan' },
      { name: 'Eselon' },
      { name: 'Personel'},
      { name: 'GolonganPangkatPolri' },
      { name: 'GolonganPangkatPns' },
      { name: 'TingkatOrganisasi' },
      { name: 'TipeOrganisasi' },
      { name: 'UnitOrganisasi' },
      { name: 'Satker' },
      { name: 'StrukturUnit' },
      { name: 'JabatanStruktur' },
      { name: 'JabatanPangkat' },
      { name: 'PangkatPns' },
      { name: 'PangkatPolri' },
      { name: 'Dsp' },
      { name: 'DspPangkat' },
      { name: 'Mutasi' },
      { name: 'Penempatan' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
