const express = require("express");
const app = express();
const usersRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// skapad av Mohammed Yusuf

