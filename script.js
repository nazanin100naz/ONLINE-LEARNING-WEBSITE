const searchInput =
document.getElementById("courseSearch");
const courses =
document.querySelectorAll(".searchable-course");

searchInput.addEventListener("input", function () {

    const searchText =
searchInput.value.toLowerCase();
  
    courses.forEach(function(course) { 
        
    const courseName =
course.querySelector("h3").textContent.toLowerCase();

    if
(courseName.includes(searchText)) {

course.style.display = "block";
    } else {

course.style.display = "none";
    }

   });
});

const buttons =
document.querySelectorAll("enroll-btn");

buttons.forEach(function(button) {

button.addEventListener("click", function () {

      alert("You have selected this course!");
    });

  });

const allButton =
document.getElementById("allCourses");
const webButton =
document.getElementById("webCourses");
const programmingButton =
document.getElementById("programmingCourses");

allButton.addEventListener("click", function () {

    courses.forEach(function (course) {
        course.style.display = "block";
    });

});

webButton.addEventListener("click", function () {

    courses.forEach(function (course) {
        if
(course.classList.contains("web")) {

    course.style.display = "";
        } else {

course.style.display = "none";
        }

    });

});

programmingButton.addEventListener("click", function () {

      courses.forEach(function (course) {
        if
(course.classList.contains("programming")) {

course.style.display = "block";
        } else {

course.style.display = "none";
        }

    });

  });