db.createCollection("users")
db.users.insertMany([
    {
      user_id: 1,
      name: "Swetha",
      course: "Full Stack Development",
      DOB: "27-12-1995"
    },
    {
      user_id: 2,
      name: "Bharathi",
      course: "Data Science",
      DOB: "10-03-1997"
    },
    {
      user_id: 3,
      name: "Priya",
      course: "Cloud Computing",
      DOB: "12-04-1998"
    },
    {
      user_id: 4,
      name: "Prathee",
      course: "Machine Learning",
      DOB: "01-06-1999"
    },
    {
      user_id: 5,
      name: "Suresh",
      course: "Artificial Intelligence",
      DOB: "15-09-2000"
    },
    {
      user_id: 6,
      name: "Vinitha",
      course: "Big Data",
      DOB: "20-11-2001"
    },
    {
      user_id: 7,
      name: "Dinesh",
      course: "DevOps",
      DOB: "02-01-2003"
    },
    {
      user_id: 8,
      name: "Naveen",
      course: "Full Stack Development",
      DOB: "12-03-2004"
    },
    {
      user_id: 9,
      name: "Ramesh",
      course: "Data Science",
      DOB: "25-05-2005"
    },
    {
      user_id: 10,
      name: "Vijay",
      course: "Cloud Computing",
      DOB: "15-07-1995"
    }
  ]);

db.createCollection("codekata")
db.codekata.insertMany([
    {
      user_id: 1,
      solved_problems: 12,
      attempted_problems: 15
    },
    {
      user_id: 2,
      solved_problems: 8,
      attempted_problems: 10
    },
    {
      user_id: 3,
      solved_problems: 11,
      attempted_problems: 14
    },
    {
      user_id: 4,
      solved_problems: 13,
      attemptedproblems: 18
    },
    {
      user_id: 5,
      solved_problems: 15,
      attempted_problems: 20
    },
    {
      user_id: 6,
      solved_problems: 9,
      attempted_problems: 12
    },
    {
      user_id: 7,
      solved_problems: 14,
      attempted_problems: 16
    },
    {
      user_id: 8,
      solved_problems: 10,
      attempted_problems: 13
    },
    {
      user_id: 9,
      solved_problems: 12,
      attempted_problems: 15
    },
    {
      user_id: 10,
      solved_problems: 8,
      attempted_problems: 10
    }
  ]);

db.createCollection("attendance")
db.attendance.insertMany([
    {
      user_id: 1,
      date: "12-10-2022",
      attendance_percent: "90%"
    },
    {
      user_id: 2,
      date: "13-10-2022",
      attendance_percent: "80%"
    },
    {
      user_id: 3,
      date: "14-10-2022",
      attendance_percent: "85%"
    },
    {
      user_id: 4,
      date: "15-10-2022",
      attendance_percent: "92%"
    },
    {
      user_id: 5,
      date: "16-10-2022",
      attendance_percent: "88%"
    },
    {
      user_id: 6,
      date: "17-10-2022",
      attendance_percent: "95%"
    },
    {
      user_id: 7,
      date: "18-10-2022",
      attendance_percent: "90%"
    },
    {
      user_id: 8,
      date: "19-10-2022",
      attendance_percent: "80%"
    },
    {
      user_id: 9,
      date: "20-10-2022",
      attendance_percent: "85%"
    },
    {
      user_id: 10,
      date: "21-10-2022",
      attendance_percent: "92%"
    }
  ]);

db.createCollection("topics")
db.topics.insertMany([
  {
    topic_id: 1,
    topic_name: "JavaScript",
    date_of_topic: new Date("2020-10-01")
  },
  {
    topic_id: 2,
    topic_name: "NodeJS",
    date_of_topic: new Date("2020-11-02")
  },
  {
    topic_id: 3,
    topic_name: "MongoDB",
    date_of_topic: new Date("2020-10-03")
  },
  {
    topic_id: 4,
    topic_name: "ReactJS",
    date_of_topic: new Date("2020-10-04")
  },
  {
    topic_id: 5,
    topic_name: "ExpressJS",
    date_of_topic: new Date("2020-12-05")
  },
  {
    topic_id: 6,
    topic_name: "GraphQL",
    date_of_topic: new Date("2020-10-06")
  },
  {
    topic_id: 7,
    topic_name: "TypeScript",
    date_of_topic: new Date("2020-01-07")
  }
]);
  

db.createCollection("tasks")
db.tasks.insertMany([
    {
      user_id: 1,
      task_name: "Task 1",
      status: "Submitted",
      submitted_date: new Date("2023-01-12")
    },
    {
      user_id: 2,
      task_name: "Task 2",
      status: "Not Submitted",
      submitted_date: ""
    },
    {
      user_id: 3,
      task_name: "Task 3",
      status: "Submitted",
      submitted_date: new Date("2022-10-30")
    },
    {
      user_id: 4,
      task_name: "Task 4",
      status: "Submitted",
      submitted_date: new Date("2023-01-02")
    },
    {
      user_id: 5,
      task_name: "Task 5",
      status: "Not Submitted",
      submitted_date: ""
    },
    {
      user_id: 6,
      task_name: "Task 6",
      status: "Submitted",
      submitted_date: new Date("2022-10-15")
    },
    {
      user_id: 7,
      task_name: "Task 7",
      status: "Submitted",
      submitted_date: new Date("2022-10-20")
    },
    {
      user_id: 8,
      task_name: "Task 8",
      status: "Not Submitted",
      submitted_date: ""
    },
    {
      user_id: 9,
      task_name: "Task 9",
      status: "Submitted",
      submitted_date: new Date("2022-11-12")
    },
    {
      user_id: 10,
      task_name: "Task 10",
      status: "Not Submitted",
      submitted_date: ""
    }
  ])


db.createCollection("company_drives")
db.company_drives.insertMany([
    {
      company_name: "Google",
      date: "20-10-2022",
      students_appeared: [
        "Swetha",
        "Bharathi",
        "Priya"
      ]
    },
    {
      company_name: "Facebook",
      date: "21-10-2022",
      students_appeared: [
        "Dinesh",
        "Naveen",
        "Ramesh"
      ]
    },
    {
      company_name: "Amazon",
      date: "22-10-2022",
      students_appeared: [
        "Prathee",
        "Suresh",
        "Vinitha"
      ]
    },
    {
      company_name: "Microsoft",
      date: "23-10-2022",
      students_appeared: [
        "Vijay",
        "Swetha",
        "Bharathi"
      ]
    }
  ]);

db.createCollection("mentors")
db.mentors.insertMany([
    {
      mentor_id: 1,
      mentor_name: "Lavish",
      mentee_count: 20,
      batch: "B20"
    },
    {
      mentor_id: 2,
      mentor_name: "Ragav",
      mentee_count: 18,
      batch: "B41"
    },
    {
      mentor_id: 3,
      mentor_name: "Jagan Gopi",
      mentee_count: 10,
      batch: "B44"
    },
    {
      mentor_id: 4,
      mentor_name: "Suresh",
      mentee_count: 5,
      batch: "B20"
    },
    {
      mentor_id: 5,
      mentor_name: "Vinitha",
      mentee_count: 8,
      batch: "B41"
    },
    {
      mentor_id: 6,
      mentor_name: "Dinesh",
      mentee_count: 22,
      batch: "B44"
    },
    {
      mentor_id: 7,
      mentor_name: "Naveen",
      mentee_count: 9,
      batch: "B20"
    }
  ]);

// --------------------------------------------------------------------------------------------------------------------------------

//Queries:

//1.Find all the topics and tasks which are thought in the month of October
//ANSWER:
db.topics.find(
    {date_of_topic:
         { $gte: new Date("2020-10-01"),
          $lt: new Date("2020-11-01") 
        }
    });

    db.tasks.find({
        submitted_date: {
          $gte: new Date("2022-10-01"),
          $lt: new Date("2022-11-01")
        }
      })

//OUTPUT:
//1.
// [
//     {
//       "_id": ObjectId("5a934e000102030405000000"),
//       "date_of_topic": ISODate("2020-10-01T00:00:00Z"),
//       "topic_id": 1,
//       "topic_name": "JavaScript"
//     },
//     {
//       "_id": ObjectId("5a934e000102030405000002"),
//       "date_of_topic": ISODate("2020-10-03T00:00:00Z"),
//       "topic_id": 3,
//       "topic_name": "MongoDB"
//     },
//     {
//       "_id": ObjectId("5a934e000102030405000003"),
//       "date_of_topic": ISODate("2020-10-04T00:00:00Z"),
//       "topic_id": 4,
//       "topic_name": "ReactJS"
//     },
//     {
//       "_id": ObjectId("5a934e000102030405000005"),
//       "date_of_topic": ISODate("2020-10-06T00:00:00Z"),
//       "topic_id": 6,
//       "topic_name": "GraphQL"
//     }
//   ]

//2.
// [
//     {
//       "_id": ObjectId("5a934e000102030405000002"),
//       "status": "Submitted",
//       "submitted_date": ISODate("2022-10-30T00:00:00Z"),
//       "task_name": "Task 3",
//       "user_id": 3
//     },
//     {
//       "_id": ObjectId("5a934e000102030405000005"),
//       "status": "Submitted",
//       "submitted_date": ISODate("2022-10-15T00:00:00Z"),
//       "task_name": "Task 6",
//       "user_id": 6
//     },
//     {
//       "_id": ObjectId("5a934e000102030405000006"),
//       "status": "Submitted",
//       "submitted_date": ISODate("2022-10-20T00:00:00Z"),
//       "task_name": "Task 7",
//       "user_id": 7
//     }
//   ]

// --------------------------------------------------------------------------------------------------------------------------------

//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
//ANSWER:

db.company_drives.find({
    date: {
      $gte: "15-10-2020",
      $lt: "31-10-2020"
    }
  })

  //OUTPUT: 
/*
  [
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "company_name": "Google",
      "date": "20-10-2022",
      "students_appeared": [
        "Swetha",
        "Bharathi",
        "Priya"
      ]
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "company_name": "Facebook",
      "date": "21-10-2022",
      "students_appeared": [
        "Dinesh",
        "Naveen",
        "Ramesh"
      ]
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "company_name": "Amazon",
      "date": "22-10-2022",
      "students_appeared": [
        "Prathee",
        "Suresh",
        "Vinitha"
      ]
    },
    {
      "_id": ObjectId("5a934e000102030405000003"),
      "company_name": "Microsoft",
      "date": "23-10-2022",
      "students_appeared": [
        "Vijay",
        "Swetha",
        "Bharathi"
      ]
    }
  ]*/

  // --------------------------------------------------------------------------------------------------------------------------------


//3.Find all the company drives and students who are appeared for the placement.
//ANSWER:
    db.company_drives.find({
        students_appeared: {
        $exists: true,
        $ne: []
        }
    })

//OUTPUT:

/*[
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "company_name": "Google",
      "date": "20-10-2022",
      "students_appeared": [
        "Swetha",
        "Bharathi",
        "Priya"
      ]
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "company_name": "Facebook",
      "date": "21-10-2022",
      "students_appeared": [
        "Dinesh",
        "Naveen",
        "Ramesh"
      ]
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "company_name": "Amazon",
      "date": "22-10-2022",
      "students_appeared": [
        "Prathee",
        "Suresh",
        "Vinitha"
      ]
    },
    {
      "_id": ObjectId("5a934e000102030405000003"),
      "company_name": "Microsoft",
      "date": "23-10-2022",
      "students_appeared": [
        "Vijay",
        "Swetha",
        "Bharathi"
      ]
    }
  ]*/

// --------------------------------------------------------------------------------------------------------------------------------


//4.Find the number of problems solved by the user in codekata
//ANSWER:

db.codekata.aggregate([
    {
      $group: {
        _id: "$user_id",
        solved_problems_count: {
          $sum: "$solved_problems"
        }
      }
    }
  ])

//OUTPUT:
/*[
  {
    "_id": 1,
    "solved_problems_count": 12
  },
  {
    "_id": 2,
    "solved_problems_count": 8
  },
  {
    "_id": 3,
    "solved_problems_count": 11
  },
  {
    "_id": 7,
    "solved_problems_count": 14
  },
  {
    "_id": 4,
    "solved_problems_count": 13
  },
  {
    "_id": 5,
    "solved_problems_count": 15
  },
  {
    "_id": 10,
    "solved_problems_count": 8
  },
  {
    "_id": 8,
    "solved_problems_count": 10
  },
  {
    "_id": 9,
    "solved_problems_count": 12
  },
  {
    "_id": 6,
    "solved_problems_count": 9
  }
]*/
// --------------------------------------------------------------------------------------------------------------------------------


//5.Find all the mentors with who has the mentee's count more than 15
//ANSWER:

db.mentors.find({mentee_count: { $gt: 15 }})

//OUTPUT:

/*[
  {
    "_id": ObjectId("5a934e000102030405000000"),
    "batch": "B20",
    "mentee_count": 20,
    "mentor_id": 1,
    "mentor_name": "Lavish"
  },
  {
    "_id": ObjectId("5a934e000102030405000001"),
    "batch": "B41",
    "mentee_count": 18,
    "mentor_id": 2,
    "mentor_name": "Ragav"
  },
  {
    "_id": ObjectId("5a934e000102030405000005"),
    "batch": "B44",
    "mentee_count": 22,
    "mentor_id": 6,
    "mentor_name": "Dinesh"
  }
]*/
// --------------------------------------------------------------------------------------------------------------------------------


//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
//ANSWER:

db.attendance.aggregate([
    { $match: { date: {  $gte: "15-10-2020",
    $lt: "31-10-2020" } } },
    { $lookup: { from: "tasks", localField: "user_id", foreignField: "user_id", as: "task" } },
    { $match: { "task.status": "not submitted" } },
    { $group: { _id: null, count: { $sum: 1 } } }
 ])
 



