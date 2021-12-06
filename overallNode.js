const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dbPath = path.join(__dirname, "shivapage.db");
let database;

const initializeDBandServer = async () => {
  try {
    database = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(5000, () =>
      console.log("Server running at http://localhost:5000/")
    );
  } catch (error) {
    console.log(`DB error: ${error.message}`);
  }
};

initializeDBandServer();

app.get("/loginpage", (request, response) => {
  response.sendFile("./loginpage.html", { root: __dirname });
});
app.get("/signuppage", (request, response) => {
  response.sendFile("./signuppage.html", { root: __dirname });
});
app.get("/homepage", (request, response) => {
  response.sendFile("./homepage.html", { root: __dirname });
});

app.post("/formdata", async (request, response) => {
  let { firstName, lastName, email, password } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  //date = dateFormat(dueDate);

  const postQuery = `
    INSERT INTO
      user (firstname, last+name, email, password)
    VALUES (
        '${firstName}',
        '${lastName}',
        '${email}',
        '${hashedPassword}'  
    );
    `;
  await database.run(postQuery);
  response.redirect('/loginpage');
  //response.send(result);
});
app.get("/ckeckuserdetails", async (request, response) => {
  const { email, password } = request.body;
  const selectUserQuery = `SELECT * FROM user WHERE email = '${email}'`;
  const dbUser = await database.get(selectUserQuery);
  console.log("shiave");
  response.send(dbUser);

  if (dbUser === undefined) {
    response.status(400);
    response.send("Invalid user");
  } else {
    const isPasswordMatching = await bcrypt.compare(password, dbUser.password);
    if (isPasswordMatching) {
      const payload = {
        email: email,
      };
      const jwtToken = jwt.sign(payload, "OnlyonecanKnow");
      //response.send({ jwtToken });
      response.sendFile("./homepage.html", { root: __dirname });
    } else {
      response.status(400);
      response.send("Invalid password");
    }
  }
});


app.post("/ckeckshedules", async (request, response) => {
  const {fullname,events, starttime,endtime,day } = request.body;
  const selectUserQuery = `SELECT * FROM user WHERE starttime = '${starttime}'`;
  const dbUser = await database.get(selectUserQuery);

  if (dbUser === undefined) {
    const postsheduleQuery = `
    INSERT INTO
      user (fullname, events, starttime, endtime,day)
    VALUES (
        '${fullname}',
        '${events}',
        '${starttime}',
        '${endtime}' ,
        '${day}'  
    );
    `;
    await database.run(postQuery);
    response.send("shedule set successfully");
  } else {
    const shedulequery=`select * from sheduledetails
    where starttime ='${starttime}'`;
    const sheduletimings = await database.get(shedulequery);
    response.send(sheduletimings);
  }
});
