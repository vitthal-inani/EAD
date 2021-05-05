const { request } = require('express');
const TaskP = require('../models/taskP');

exports.getTasks = [
  function (req, res, next) {
    TaskP.find({
    }).then((tasks) => {
      res.send({
        tasks
      });
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.getUserTasks = [
    function (req, res, next) {
      TaskP.find({
          "userId": req.query.uid
      }).then((tasks) => {
        res.send({
          tasks
        });
      }, e => {
        res.status(400).send(e);
      });
    }
  ];

  exports.getGroupTasks = [
    function (req, res, next) {
      TaskP.find({
          "groupId": req.query.gid
      }).then((tasks) => {
        res.send({
          tasks
        });
      }, e => {
        res.status(400).send(e);
      });
    }
  ];


exports.getTask = [
  function (req, res, next) {
    const id = req.params.id;

    TaskP.findOne({
      _id: id
    }).then((task) => {
      if (!task) {
        return res.status(404).send({
          success: false,
          error: 'Task not found'
        });
      }
      res.send({
        task
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.deleteTask = [
  function (req, res, next) {
    const id = req.params.id;

    TaskP.findOneAndRemove({
      _id: id,
    }).then((task) => {
      if (!task) {
        return res.status(404).send({
          success: false,
          error: 'Task not found'
        });
      }
      res.send({
        task
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.addTask = [
  function (req, res, next) {
    console.log("Hii")
    const task = new TaskP({
      name: req.body.name,
      description: [req.body.description],
      groupId: req.body.groupId,
      userId: [req.body.userId],
      deadline: [req.body.deadline],
      estTime: [req.body.estTime],
      completed: [false],
      creatorId: req.body.creatorId,
      index: [0],
    });
    console.log(req.body.name);
    console.log(req.body.description);
    console.log(req.body.groupId);

    task.save().then((newTask) => {
      res.send(newTask);
    }, e => {
        console.log("Problem in add")
      res.status(400).send(e);
    });
  }
];

exports.forwardTask = [
  function (req, res, next) {
    const id = req.params.id;
    TaskP.findOne({
      _id: id,
    }).then((task) => {
      if(!task) {
        return res.status(404).send({
          success: false,
          error: 'Task not found'
        });
      }
      task.description.push(req.body.description);
      task.deadline.push(req.body.deadline);
      task.estTime.push(req.body.estTime);
      task.userId.push(req.body.userId);
      task.completed.push(false);
      task.index.push(length(task.index))

      task.save().then((updatedTask) => {
        res.send(updatedTask);
      }, e => {
          console.log("Error in forward")
        res.status(400).send(e);
      });
    });
  }
];

exports.markAsCompletedTask = [
    function (req, res, next) {
      const id = req.params.id;
      const index=req.params.index;
      console.log(index);
      console.log(id);
      TaskP.findOneAndUpdate({
        _id: id,
      }).then((task) => {
        if(!task) {
          return res.status(404).send({
            success: false,
            error: 'Task not found'
          });
        }
        console.log(task.completed)
        task.completed.set(index,true)
        task.save().then((updatedTask) => {
          res.send(updatedTask);
        }, e => {
            console.log("Error in forward")
          res.status(400).send(e);
        });
      });
    }
  ];




// exports.updateTask = [
//   function (req, res, next) {
//     const id = req.params.id;

//     Task.findOne({
//       _id: id,
//     }).then((task) => {
//       if(!task) {
//         return res.status(404).send({
//           success: false,
//           error: 'Task not found'
//         });
//       }
//       task.name = req.body.name;
//       task.description = task.description.concat(req.body.description);
//       task.deadline = req.body.deadline;
//       task.estTime = req.body.estTime;
//       task.completed = req.body.completed;
//       task.userId = req.body.userId;

//       task.save().then((updatedTask) => {
//         res.send(updatedTask);
//       }, e => {
//         res.status(400).send(e);
//       });
//     });
//   }
// ];