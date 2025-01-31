import dotenv from 'dotenv';
import connectToDB from './db/db.js';
import { app } from './app.js';

dotenv.config({
    path: "./.env"
});

// Connect to the database and start the server
connectToDB()
.then(() => {
    app.on('error', (error) => {
        console.log('Error while starting the server:', error);
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log('MONGO DB CONNECTION FAILED E:', error);
});