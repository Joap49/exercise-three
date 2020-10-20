const express = require('express'); // Node doesn't use import for packages, uses require

const app = express();
const port = 4000; // port 3000 is what CRA uses, so we can run these together

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

/*--- Serve Static Files ---*/
app.use('/static', express.static("public"));

/* -- Routing in Express --*/
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log('Exercise Three is running!'));
