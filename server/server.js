const { dotenv } = require('dotenv/config');
const { clerkMiddleware, clerkClient, requireAuth } = require('@clerk/express');
app.use(clerkMiddleware());
const app = express();
const cors = require('cors');
const port = 3000;

const appRoute = 'localhost:4200';

const corsOptions = {
    origin: appRoute,
    optionsSuccessStatus: 200,
}

app.get('/', cors(corsOptions), (req, res) => {
    res.send('Server running.');
  });

app.get('/auth', cors(corsOptions), requireAuth({ signInUrl: '/sign-in' }), async (req, res) => {
    const { userId } = req.auth;
    const user = await clerkClient.users.getUser(userId);
    return res.json({ user });
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});