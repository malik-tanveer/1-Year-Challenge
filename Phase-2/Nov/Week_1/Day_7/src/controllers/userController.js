export const getUsers = (req, res, next) => {
  try {
    // const users = [{ id: 1, name: "Malik" }, { id: 2, name: "Shahab" }];
    res.json(users);
  } catch (err) {
    next(err);
  }
};