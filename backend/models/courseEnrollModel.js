const mongoose = require("mongoose");

const courseEnrollSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    paymentInfo: {
      transactionId: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
    },
    courseData:[
      {
        courseName: {
          type: String,
          require: true,
        },
        coursePrice: {
          type: String,
          require: true,
        },
        courseID: {
          type: mongoose.Schema.ObjectId,
          ref: "Courses",
          type: String,
          required: true,
        },
      },
    ]
  },
  { timestamps: true }
);

const CourseEnrollModel = mongoose.model("EnrollCourses", courseEnrollSchema);

module.exports = CourseEnrollModel;
