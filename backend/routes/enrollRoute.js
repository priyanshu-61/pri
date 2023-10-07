const express = require("express");
const buy_course_route = express();
// const bodyParser=require("body-parser");

// buy_course_route.use(bodyParser.json());
// buy_course_route.use(bodyParser.urlencoded({extended:true}));

const {
    newEnroll,
    showSingleOrder,
    myOrders,
    deleteOrders,
    getAllOrders
} = require("../controllers/courseEnrollController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/courseEnroll/new").post(isAuthenticatedUser, newEnroll);
//kisi bhi user ki order ki information ke liye
router.route("/enrolData/:id").get(isAuthenticatedUser, showSingleOrder);
//++++++++++++++++++++++++++++++++++Your order find
router.route("/courseEnroll/me").get(isAuthenticatedUser, myOrders);



router.route("/admin/all/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router.route("/admin/order/:id")
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrders);

module.exports = router