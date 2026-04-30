const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let links = [];

app.get("/", (req, res) => {
  let linkHTML = "";

  links.forEach(link => {
    linkHTML += `<a href="${link.url}" target="_blank">${link.name}</a>`;
  });

  res.send(`
    <html>
    <head>
      <title>Sami Hub</title>
      <style>
        body {
          font-family: Arial;
          background: linear-gradient(135deg, #1e3a8a, #9333ea);
          color: white;
          text-align: center;
        }

        h1 {
          font-size: 32px;
          margin-top: 20px;
        }

        .card {
          background: rgba(0,0,0,0.4);
          padding: 20px;
          margin: 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        input, button {
          padding: 10px;
          margin: 5px;
          border-radius: 8px;
          border: none;
        }

        button {
          background: #22c55e;
          color: white;
          cursor: pointer;
        }

        a {
          display: block;
          margin: 10px;
          color: #38bdf8;
          font-size: 18px;
          text-decoration: none;
        }

        a:hover {
          color: yellow;
        }
      </style>
    </head>

    <body>

      <h1>🔥 Sami Web Hub 🚀</h1>

      <div class="card">
        <h2>Add Link</h2>
        <form method="POST" action="/add">
          <input name="name" placeholder="Site Name" required/><br/>
          <input name="url" placeholder="URL" required/><br/>
          <button type="submit">Add Link</button>
        </form>
      </div>

      <div class="card">
        <h2>🌐 Your Links</h2>
        ${linkHTML}
      </div>

      <div class="card">
        <h2>🔔 Notifications</h2>
        <p>No new notifications</p>
      </div>

    </body>
    </html>
  `);
});

app.post("/add", (req, res) => {
  const { name, url } = req.body;
  links.push({ name, url });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
