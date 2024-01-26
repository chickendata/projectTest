const connection = require("../config/database");
const getAllProduct = async () => {
  let [results, fields] = await connection.query("select * from Product");
  return results;
};

const getProductById = async (userId) => {
  let [results, fields] = await connection.query(
    "select * from Product where id = ?",
    [userId]
  );
  let product = results && results.length > 0 ? results[0] : {};
  return product;
};

const updateUserById = async (
  nameProduct,
  image,
  price,
  description,
  dayCreate,
  dayDeal,
  productId
) => {
  let [results, fields] = await connection.query(
    `UPDATE Product SET nameProduct = ?,
    image = ?, price = ?, description = ?,
    dayCreate = ? , dayDeal = ? WHERE id = ?`,
    [nameProduct, image, price, description, dayCreate, dayDeal, productId]
  );
};

const deleteUserById = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Product WHERE id = ?`,
    [id]
  );
};

module.exports = {
  getAllProduct,
  getProductById,
  updateUserById,
  deleteUserById,
};
