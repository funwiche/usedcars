const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const products = require("./resources/products.json");
const routes = [
  { path: "/", name: "Home" },
  { path: "/about-us", name: "About Us" },
  { path: "/vehicles", name: "Available Cars" },
  { path: "/payments-terms", name: "Payments Terms" },
  { path: "/shipping-delivery", name: "Shipping & Delivery" },
  // { path: "/testimonials", name: "Testimonials" },
  { path: "/contact-us", name: "Contact Us" },
];
// Global Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.locals.routes = routes;
  res.locals.phone = "+1 800 789 0000";
  res.locals.email = "info@usedcars-usa.com";
  next();
});
// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "./layouts/layout.ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.use("/submit-form", require("./routes/submit-form"));
app.get("/", (req, res) => {
  const int = Math.floor(Math.random() * 100);
  const featured = products.slice(int, int + 6);
  res.render("index", { title: "Home", featured });
});
app.get("/about-us", (req, res) => {
  res.render("about", { title: "About Us" });
});
app.get("/vehicles", (req, res) => {
  const page = req.query.page || 1;
  const items = products.slice((page - 1) * 24, page * 24);
  res.render("vehicles", { title: "Available Cars", items, page });
});
app.get("/vehicle/:id", (req, res) => {
  const item = products.find((el) => el.id == req.params.id);
  const int = Math.floor(Math.random() * 100);
  const featured = products.slice(int, int + 5);
  if (!item) return res.render("404", { title: "Page not found" });
  res.render("vehicle-detail", { title: item.title, item, featured });
});
app.get("/payments-terms", (req, res) => {
  res.render("payments-terms", { title: "Payments Terms" });
});
app.get("/shipping-delivery", (req, res) => {
  res.render("shipping-delivery", { title: "Shipping & Delivery" });
});
app.get("/testimonials", (req, res) => {
  res.render("testimonials", { title: "Testimonials" });
});
app.get("/contact-us", (req, res) => {
  res.render("contact-us", { title: "Contact Us", subject: req.query.subject });
});
app.get("**", (req, res) => {
  res.render("404", { title: "Page not found" });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
