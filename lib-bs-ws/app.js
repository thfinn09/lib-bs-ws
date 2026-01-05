const express = require('express');
const path = require('path');

const adminRoutes =require('./routes/admin.routes');
const userRoutes =require('./routes/user.routes');
const PORT = 3000; // port để chạy sever
const app = express();

// body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('ok');
});

// chạy sever theo port đã gọi ở trên
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
