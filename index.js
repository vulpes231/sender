const express = require("express");

const cors = require("cors");

const PORT = 3000;

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/sendmessage", require("./routes/send"));

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
