const express = require("express");
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");
app.use((req, res, next) => {
  res.render('maintainence.hbs');
});

app.get("/", (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMsg: 'Welcome'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
})

app.listen(3000);
