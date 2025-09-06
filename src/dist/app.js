import express, {} from "express";
import path from "node:path";
const dirname = path.resolve();
const PORT = 3000;
const app = express();
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});
//# sourceMappingURL=app.js.map