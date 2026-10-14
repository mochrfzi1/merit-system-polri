require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const personelRoutes = require('./routes/personelRoutes');
const roleRoutes = require('./routes/roleRoutes');
const satkerRoutes = require('./routes/satkerRoutes');
const unitOrganisasiRoutes = require('./routes/unitOrganisasiRoutes');
const jabatanRoutes = require('./routes/jabatanRoutes');
const tingkatOrganisasiRoutes = require('./routes/tingkatOrganisasiRoutes');
const tipeOrganisasiRoutes = require('./routes/tipeOrganisasiRoutes');
const strukturUnitRoutes = require('./routes/strukturUnitRoutes');
const eselonRoutes = require('./routes/eselonRoutes');
const jabatanStrukturRoutes = require('./routes/jabatanStrukturRoutes');
const jabatanPangkatRoutes = require('./routes/jabatanPangkatRoutes');
const golonganPangkatPnsRoutes = require('./routes/golonganPangkatPnsRoutes');
const pangkatPnsRoutes = require('./routes/pangkatPnsRoutes');
const golonganPangkatPolriRoutes = require('./routes/golonganPangkatPolriRoutes');
const pangkatPolriRoutes = require('./routes/pangkatPolriRoutes');
const dspRoutes = require('./routes/dspRoutes');
const dspPangkatRoutes = require('./routes/dspPangkatRoutes');
const mutasiRoutes = require('./routes/mutasiRoutes');
const penempatanRoutes = require('./routes/penempatanRoutes');


const { authenticateToken } = require('./middlewares/auth');
// Import Swagger config
const { swaggerUi, specs } = require('./config/swagger');

const app = express();

app.use(cors());
app.use(express.json());

// Swagger Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/api/auth', authRoutes);

// Protect semua rute
app.use(authenticateToken);

app.use('/api/personel', personelRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/satker', satkerRoutes);
app.use('/api/unit_organisasi', unitOrganisasiRoutes);
app.use('/api/jabatan', jabatanRoutes);
app.use('/api/tingkat_organisasi', tingkatOrganisasiRoutes);
app.use('/api/tipe_organisasi', tipeOrganisasiRoutes);
app.use('/api/struktur_unit', strukturUnitRoutes);
app.use('/api/eselon', eselonRoutes);
app.use('/api/jabatan_struktur', jabatanStrukturRoutes);
app.use('/api/jabatan_pangkat', jabatanPangkatRoutes);
app.use('/api/golongan_pangkat_pns', golonganPangkatPnsRoutes);
app.use('/api/pangkat_pns', pangkatPnsRoutes);
app.use('/api/golongan_pangkat_polri', golonganPangkatPolriRoutes);
app.use('/api/pangkat_polri', pangkatPolriRoutes);
app.use('/api/dsp', dspRoutes);
app.use('/api/dsp_pangkat', dspPangkatRoutes);
app.use('/api/mutasi', mutasiRoutes);
app.use('/api/penempatan', penempatanRoutes);


const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});