module.exports.get = async (req, res) => {
  res.send(`get`);
};

module.exports.getById = async (req, res) => {
  res.send(`getById: ${req.params.id}`);
};

module.exports.post = async (req, res) => {
  res.send("post");
};

module.exports.put = async (req, res) => {
  res.send("put");
};

module.exports.delete = async (req, res) => {
  res.send("delete");
};
