import { PORT } from './config/env.js';
import  express from 'express';
import  cors from 'cors';
 
import  articleRouter  from './routes/article.routes.js';
import  userRouter  from './routes/user.routes.js';
import  subscriptionRouter  from './routes/subscription.routes.js';
import  authRouter  from './routes/auth.routes.js';


const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/articles', articleRouter);




app.use(cors());
app.use(express.json());



app.use('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//error handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});