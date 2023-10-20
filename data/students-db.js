// data/todo-db.js

const students = [
  { student: "Kiaya", enrolled: true },
  { student: "Simone", enrolled: false },
  { student: "Jose", enrolled: false },
];

module.exports = {
  getAll: function () {
    return students;
  },
};
