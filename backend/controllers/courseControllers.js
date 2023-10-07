const Course = require("../models/courseModel");
const Category = require("../models/categoryModel");
const Lesson = require("../models/lessonModel");
const { params } = require("../routes/courseRoute");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");


// const del = require("sample_mflix")

//For admin create course
exports.createCourse = catchAsyncErrors(async (req, res, next) => {
    try {
        const course = await Course.find();
        if (course.length > 0) {
            let checking = false;
            for (let i = 0; i < course.length; i++) {
                if (
                    course[i]["title"].toLowerCase() === req.body.title.toLowerCase()) {
                    checking = true;
                    break;
                }
            }
            if (checking == false) {
                const title = new Course(req.body);
                const title_data = await title.save();
                res
                    .status(200)
                    .send({ success: true, message: "Successfully Added (" + req.body.title + ") Course", data: title_data });
            } else {
                res.status(400).send({
                    success: false,
                    message: "this course(" + req.body.title + ") is already exists",
                });
            }
        } else {
            const course = await Course.create(req.body);
            res.status(201).json({
                success: true,
                course,
            });
            const title_data = await course.save();
            res
                .status(400)
                .send({ success: true, message: "Course Data", data: title_data });
        }

        //category find end code
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});

// Get all data
exports.getAllCourses = catchAsyncErrors(async (req, res) => {
    const courses = await Course.find().populate('categoryId', 'catName');
    res.status(200).json({
        success: true,
        courses
    });
});
// Update Course
exports.updateCourse = catchAsyncErrors(async (req, res) => {
    try {
        const course_data = await Course.find();
        if (course_data.length > 0) {
            let checking = false;
            for (let i = 0; i < course_data.length; i++) {
                if (
                    course_data[i]["title"].toLowerCase() ===
                    req.body.title.toLowerCase()
                ) {
                    checking = true;
                    break;
                }
            }
            if (checking == false) {
                const title = await Course.updateMany(
                    {
                        _id: req.params.id,
                    },
                    {
                        $set: req.body,
                    }
                );
                res.status(200).send({
                    success: true,
                    message: "Successfully updated (" + req.body.title + ") Course",
                    data: title,
                });
            } else {
                res.status(400).send({
                    success: false,
                    message: "this course(" + req.body.title + ") is already exists",
                });
            }
        } else {
            const title_data = await Course.updateMany(
                {
                    _id: req.params.id,
                },
                {
                    $set: req.body,
                }
            );
            res
                .status(400)
                .send({ success: true, message: "Course Data", data: title_data });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});
//delete code
exports.deleteCourse = catchAsyncErrors(async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    if (!course) {
        return next(new ErrorHander("Course not found", 404));
    }

    const result = await Course.deleteOne({
        _id: req.params.id,
    });

    res.status(200).json({
        success: true,
        message: "Course Deleted Successfully",
        result
    });
});

//get All Course Details
exports.getCourseDetails = catchAsyncErrors(async (req, res, next) => {
    const result = await Course.findById({
        _id: req.params.id,
    }).populate('categoryId', 'catName');
    if (!result) {
        return res.status(500).json({
            success: false,
            message: "Course not found"
        })
    }
    res.status(200).json({
        success: true,
        result
    })
    res.send(result)
});

//show all course by category id
exports.getAllCoursesByCat_id = catchAsyncErrors(async (req, res) => {
    const result = await Course.find({ categoryId: req.params.id }).populate('categoryId', 'catName');
    res.status(200).json({
        success: true,
        result
    })
});

//for add category

exports.createCategory = catchAsyncErrors(async (req, res) => {
    try {
        const category_data = await Category.find();
        if (category_data.length > 0) {
            let checking = false;
            for (let i = 0; i < category_data.length; i++) {
                if (
                    category_data[i]["catName"].toLowerCase() === req.body.catName.toLowerCase()) {
                    checking = true;
                    break;
                }
            }
            if (checking == false) {
                const catName = new Category({
                    catName: req.body.catName,
                });
                const cat_data = await catName.save();
                res
                    .status(200)
                    .send({ success: true, message: "Successfully Added (" + req.body.catName + ") Ctegory", data: cat_data });
            } else {
                res.status(400).send({
                    success: false,
                    message: "this category(" + req.body.catName + ") is already exists",
                });
            }
        } else {
            const category = await Category.create(req.body);
            res.status(201).json({
                success: true,
                category,
            });
            const cat_data = await category.save();
            res
                .status(400)
                .send({ success: true, message: "Category Data", data: cat_data });
        }

        //category find end code
    } catch (error) {
        res.status(400).send({ success: false, msg: error.stack });
    }
});
// Gshow all  cetegory name
exports.getAllCategory = catchAsyncErrors(async (req, res) => {
    const category = await Category.find();
    res.status(200).json({
        success: true,
        category,
    });
});

// Update Category

exports.updateCategory = catchAsyncErrors(async (req, res) => {
    try {
        const category_data = await Category.find();
        if (category_data.length > 0) {
            let checking = false;
            for (let i = 0; i < category_data.length; i++) {
                if (
                    category_data[i]["catName"].toLowerCase() ===
                    req.body.catName.toLowerCase()
                ) {
                    checking = true;
                    break;
                }
            }
            if (checking == false) {
                const catName = await Category.updateMany(
                    {
                        _id: req.params.id,
                    },
                    {
                        $set: req.body,
                    }
                );
                res.status(200).send({
                    success: true,
                    message: "Successfully updated (" + req.body.catName + ") Ctegory",
                    data: catName,
                });
            } else {
                res.status(400).send({
                    success: false,
                    message: "this category(" + req.body.catName + ") is already exists",
                });
            }
        } else {
            const catName = await Category.updateMany(
                {
                    _id: req.params.id,
                },
                {
                    $set: req.body,
                }
            );
            res
                .status(400)
                .send({ success: true, message: "Category Data", data: cat_data });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});
//delete  category
exports.deleteCategory = catchAsyncErrors(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        return next(new ErrorHander("category not found", 404));
    }

    const result = await Category.deleteOne({
        _id: req.params.id,
    });

    res.status(200).json({
        success: true,
        message: "Category Deleted Successfully",
        result
    });
});

// Show all Lessons
exports.getAllLesson = catchAsyncErrors(async (req, res) => {
    const lesson = await Lesson.find().populate('courseId', 'title');
    res.status(200).json({
        success: true,
        lesson,
    });
});

// Create Lessons
exports.createLesson = catchAsyncErrors(async (req, res, next) => {
    try {
        const lesson = await Lesson.find();
        if (lesson.length > 0) {
            let checking = false;
            for (let i = 0; i < lesson.length; i++) {
                if (
                    lesson[i]["title"].toLowerCase() === req.body.title.toLowerCase()) {
                    checking = true;
                    break;
                }
            }
            if (checking == false) {
                const title = new Lesson(req.body);
                const lesson_data = await title.save();
                res
                    .status(200)
                    .send({ success: true, message: "Successfully Added (" + req.body.title + ") lesson", data: lesson_data });
            } else {
                res.status(400).send({
                    success: false,
                    message: "this lesson(" + req.body.title + ") is already exists",
                });
            }
        } else {
            const lesson = await Lesson.create({
                title: req.body.title,
                courseId: req.body.courseId,
                discreption: req.body.discreption,
                thumnail_img: req.body.thumnail_img,
                videos: req.body.videos
            });
            res.status(201).json({
                success: true,
                lesson,
            });
            const lesson_dat = await lesson.save();
            res.status(400).send({ success: true, message: "lesson Data", data: lesson_dat });
        }

        //category find end code
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});

// Update Lesson
// exports.updateLesson = catchAsyncErrors(async (req, res) => {
//     let lesson = await Lesson.findById(req.params.id);
//     // res.send(course);
//     if (!lesson) {
//         return next(new ErrorHander("Category not found", 404));
//     }
//     const lesson_data = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//     });

//     res.status(200).json({
//         success: true,
//         lesson_data,
//     });
// });
exports.updateLesson = catchAsyncErrors(async (req, res) => {
    try {
        const lesson_data = await Lesson.find();
        if (lesson_data.length > 0) {
            let checking = false;
            for (let i = 0; i < lesson_data.length; i++) {
                if (
                    lesson_data[i]["title"].toLowerCase() ===
                    req.body.title.toLowerCase()
                ) {
                    checking = true;
                    break;
                }
            }
            if (checking == false) {
                const title = await Lesson.updateMany(
                    {
                        _id: req.params.id,
                    },
                    {
                        $set: req.body,
                    }
                );
                res.status(200).send({
                    success: true,
                    message: "Successfully updated (" + req.body.title + ") lesson",
                    data: title,
                });
            } else {
                res.status(400).send({
                    success: false,
                    message: "this lesson(" + req.body.title + ") is already exists",
                });
            }
        } else {
            const title_data = await Lesson.updateMany(
                {
                    _id: req.params.id,
                },
                {
                    $set: req.body,
                }
            );
            res
                .status(400)
                .send({ success: true, message: "Lesson Data", data: title_data });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
});
//delete  Lesson
exports.deleteLesson = catchAsyncErrors(async (req, res) => {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
        return next(new ErrorHander("lesson not found", 404));
    }

    const result = await Lesson.deleteOne({
        _id: req.params.id,
    });

    res.status(200).json({
        success: true,
        message: "Lesson Deleted Successfully",
        result
    });
});

//show all Lessons by Course id
exports.getAll = catchAsyncErrors(async (req, res) => {
    const result = await Course.findById({ lessonId: req.params.id });
    res.status(200).json({
        success: true,
        result
    });
});

//show all Lessons Detail
exports.getLessonDetail = catchAsyncErrors(async (req, res) => {
    const lessons = await Lesson.find({ courseId: req.params.id });
    res.status(200).json({
        success: true,
        lessons
    });
});

exports.getFirstLesson = catchAsyncErrors(async (req, res) => {
    const firstlesson = await Lesson.find({ courseId: req.params.id }).limit(1);
    res.status(200).json({
        success: true,
        firstlesson
    });
});
// ({$project: { highmarks: { $filter: { input: "$marks", as: "marks", cond: { $gt: [ "$$marks", 10 ] } } } } } )