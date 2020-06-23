module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PACTH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origen,X-Requested-With, Content-Type, Accept"
  );
};
