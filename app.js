const express = require("express");
const conn = require("./src/db/conn");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const exphbs = require("express-handlebars");
const routesLogin = require("./src/routes/loginRoutes");
const registeredRoutes = require("./src/routes/registeredRoutes");
const Users = require("./src/models/users");
const thoughtsRoutes = require("./src/routes/thoughtsRoutes");
const dashboardRoutes = require("./src/routes/dashboardRoutes");
const req = require("express/lib/request");
const deleteThoughtRoutes = require("./src/routes/deleteThoughtRoutes");
const thoughtsUser = require("./src/models/thoughts");
const app = express();

const port = process.env.PORT || 3000;
app.use(
  session({
    name: "session",
    secret: "nosso_segredo",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: () => {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

app.use((req, res, next) => {
  if (req.session.id) {
    res.locals.session = req.session;
  }

  next();
});

app.use(express.static("src/public"));
app.use(routesLogin);
app.use(registeredRoutes);
app.use(thoughtsRoutes);
app.use(dashboardRoutes);
app.use(deleteThoughtRoutes);
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());
app.set("views", "src//views");

Users.sync();

app.get("/", async (req, res) => {
  const ThoughtAllUsers = await thoughtsUser.findAll({raw: true});
  console.log(ThoughtAllUsers);
  res.render("dashboard", {usersData: ThoughtAllUsers});
});

app.listen(port, () => {
  console.log("APLICATION IS RUN IN PORT:" + port);
});
