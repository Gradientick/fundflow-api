import app from "./app.js";

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("FundFlow API");
});

app.listen(PORT, () => {
  console.log(`server is now running on http://localhost:${PORT}/`);
});
