import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

if (app.get('env') !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`server is listening on port ${port}`);
});

// Wildcard route
app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    success: false,
    error: 'The page you are looking for does not exist',
  });
});
