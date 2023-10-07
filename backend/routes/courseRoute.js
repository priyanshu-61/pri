const express = require('express');
const {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    getCourseDetails,
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
    createLesson,
    getAllLesson,
    deleteLesson,
    updateLesson,
    getAll,
    getAllCoursesByCat_id,
    getLessonDetail,
    getFirstLesson

} = require("../controllers/courseControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


//For add course CRUD operation
router.route("/course/new").post(isAuthenticatedUser, authorizeRoles("admin"), createCourse);
router.route("/courses").get(getAllCourses);
router.route("/course/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateCourse).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCourse).get(getCourseDetails);
router.route("/Showcourse/ByCate_id/:id").get(getAllCoursesByCat_id);


//For add category CRUD operation
router.route("/category").post(isAuthenticatedUser, authorizeRoles("admin"), createCategory);
router.route("/show_category").get(getAllCategory);
router.route("/category/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateCategory).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCategory);

//For add Lesson CRUD operation
router.route("/getAllLessons/:id").get(getAll);
router.route("/add_lesson").post(isAuthenticatedUser, authorizeRoles("admin"), createLesson);
router.route("/show_lesson").get(getAllLesson);
router.route("/lesson/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateLesson).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteLesson).get(getLessonDetail);
router.route("/firstLesson/:id").get(getFirstLesson);


module.exports = router
