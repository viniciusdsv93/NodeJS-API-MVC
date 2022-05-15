const { Router } = require("express");
const router = Router();

const groceryController = require("../controllers/grocery");

router.get("/", groceryController.getAllGroceries);

router.post("/", groceryController.postGrocery);

router.put("/", groceryController.putGrocery);

router.delete("/:id", groceryController.deleteGrocery);

module.exports = router;
