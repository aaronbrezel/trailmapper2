// Basic sequelize tutorial: https://sequelize.org/master/manual/getting-started.html
// Helpful video: https://www.youtube.com/watch?v=bOHysWYMZM0


const { Sequelize } = require('sequelize')

const db = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    
});



//Test the connection
authenticate_sequelize(db)





//We could use .then .catch here, but I feel we want to wait for the database to connect before
// moving forward with the apps
async function authenticate_sequelize(db) {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = db;