const { Pool } = require('pq');
// env = menyimpan data konfigurasi agar tidak langsung di tulis dalam kode
// dapat disebut juga variabel 'global'

const dotenv = require('dotenv');
// aktifkan dotenv
dotenv.config();

// koneksi di postgreSQL
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,

    ssl: {
        rejectUnauthorized: false,
    }
    // port: process.env.PGPORT
});
module.exports = pool;