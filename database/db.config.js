const mongoose = require('mongoose');
const db_conn = process.env.DB_CONN;

const conn = mongoose.connect(db_conn)
.then(connect=>console.log(`Database connected successfully`))
.catch(error=>console.error(error))

module.exports = conn;