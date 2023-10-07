const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Course = require("../models/courseModel");
const user = require("../models/userModel");
const CourseEnroll = require("../models/courseEnrollModel");
// const Category = require("../models/categoryModel");

//Enroll new course
// exports.newEnroll = catchAsyncErrors(async (req, res, next) => {
//   try {
//     const {
//       courseId,
//       paymentInfo,
//       coursePrice,
      
//     }= req.body;
//     const order = await CourseEnroll.create({
//       courseId,
//       paymentInfo,
//       coursePrice,
//       userId:req.userId.id,
//     });
//     console.warn(order);
//     res.status(200).json({
//       success: true,
//       message: "Enroll course Detail",
//       data: order,
//     });
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// Create and export the newEnroll function
exports.newEnroll = catchAsyncErrors(async (req, res, next) => {
  const { paymentInfo, courseData } = req.body;
  const userId = req.user._id;

  for (const courseId of courseData) {
    const courseName = courseId.courseName;
    console.log(courseName);
    const existingEnrollment = await CourseEnroll.find({
      user: userId,
      "courseData.courseName": courseName,
    }).exec();
    if (existingEnrollment.length > 0) {
      return res.status(400).json({
        success: false,
        message: "You have already enrolled in this course",
      });
    }
  }

  const order = await CourseEnroll.create({
    paymentInfo,
    courseData,
    user: userId,
  });

  res.status(200).json({
    success: true,
    message: "Enroll course detail",
    data: order,
  });
});


//For admin create course
// exports.newEnroll = catchAsyncErrors(async (req, res, next) => {
//   try {
//       const order = await CourseEnroll.find();
//       console.log(order[0].courseData[0].courseName)
//       if (order[0].courseData[0].courseName.length > 0) {
//           let checking = false;
//           for (let i = 0; i < order.courseData.courseName.length; i++) {
//               if (
//                 order.courseData[i]["courseName"].toLowerCase() === req.body.courseName.toLowerCase()) {
//                   checking = true;
//                   break;
//               }
//           }
//           if (checking == false) {
//               const courseName = new CourseEnroll(req.body);
//               const title_data = await courseName.save();
//               res
//                   .status(200)
//                   .send({ success: true, message: "Successfully Added (" + req.body.courseName + ") EnrollCourse", data: title_data });
//           } else {
//               res.status(400).send({
//                   success: false,
//                   message: "this course(" + req.body.title + ") is already exists",
//               });
//           }
//       } else {
//           const order = await CourseEnroll.create(req.body);
//           res.status(201).json({
//               success: true,
//               order,
//           });
//           const title_data = await order.courseData.save();
//           res
//               .status(400)
//               .send({ success: true, message: "enroll Course Data", data: title_data });
//       }

//       //category find end code
//   } catch (error) {
//       res.status(400).send({ success: false, msg: error.message });
//   }
// });

//get single enroll course
exports.showSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await CourseEnroll.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) {
      return next(new ErrorHander("order not found this id", 404));
    }
    res.status(200).send({
      success: true,
      message: "get Course order Detail ",
      order,
    });
});

//get logged in studend all orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await CourseEnroll.find({user:req.user._id}).populate('user', 'name');
    res.status(200).send({
      success: true,
      message: "your all orders",
      your_Orders:orders,
    });
});

//get  all orders for   -----Admin
exports.getAllOrders = catchAsyncErrors(async (req, res) => {
  const orders = await CourseEnroll.find().populate('user', 'name email');
  let totalAmount = 0;

  orders.forEach((order)=>{
    totalAmount +=order.coursePrice

  });
  res.status(200).json({
    success: true,
    message: " All amount .....!",
    totalAmount,
    orders
  });
});

// exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
//   const users = await User.find();

//   res.status(200).json({
//     success: true,
//     users,
//   });
// });
//Update orders Status   -----Admin
// exports.updateOrders = catchAsyncErrors(async (req, res, next) => {
//   const order = await CourseEnroll.find(re.params.id);
//   let totalAmount = 0;

//   if(order.orderStatus==="Enrolled !"){
//     return next(new ErrorHander("you have alreadyenrolled this course",400));
//   }
    
//   res.status(200).send({
//     success: true,
//     message: " All amount .....!",
//     totalAmount,
//     orders
//   });
// });
//Delete orders   -----Admin
exports.deleteOrders = catchAsyncErrors(async (req, res, next) => {
  const order = await CourseEnroll.findById(req.params.id);
  if(!order){
    return next(new ErrorHander("you have alreadyenrolled this course",400));
  }
    await order.deleteOne();
  res.status(200).send({
    success: true,
    message: " delete Successfull .....!",
    order
  });
});