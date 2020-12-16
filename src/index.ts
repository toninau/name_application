import express from 'express';
import cors from 'cors';

import namesRouter from './routes/names';

const app = express();
app.set('trust proxy', 1);
app.use(cors());


app.use('/api/names', namesRouter);
app.use(express.static('client/build'));

//PORT=4000 npm run dev
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});