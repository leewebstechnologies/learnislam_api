export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.name], (error, data) => {
    if (error) return res.json(error);
    if (data.length) return res.status(409).json("User already exists!");
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
