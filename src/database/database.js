import mongoose from 'mongoose';
import 'dotenv/config';

const connectDatabase = () => {
  new Promise((resolve, reject) => {
    mongoose.connection
      // connection error
      .on('error', error => {
        console.log(`Failed to connect`);
        reject(error);
      })
      // Connection timeOut
      .on('close', () => {
        console.log('ERROR: Connection to MongoDB lost');
        process.exit(1);
      })
      .once('open', () => {
        const infos = mongoose.connections;
        infos.map(info =>
          console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
        );
        resolve();
      });

    console.log('config.MONGO_URI', process.env.MONGO_URI);

    mongoose.connect(process.env.MONGO_URI);
  });
};
export default connectDatabase;
