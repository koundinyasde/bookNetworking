import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import router from './src/routes/v1';
// import router from 'src/routes/v1';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.send('Working!!');
})
app.use('/api/v1', router);

app.listen(process.env.PORT || 3000, async () => {
  try {
      console.log(`The application is listening on port ${process.env.PORT || 3000}`);
  } catch (error) {
      console.log(error)
      process.exit(0);
  }
});
