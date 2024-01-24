
const switchWeekly = document.getElementById('flexSwitchCheckDefault')
const courseAllWeek = document.getElementById('courseAllWeek')
const courseEachWeek = document.getElementById('courseEachWeek')
switchWeekly.addEventListener("click", switchy)

function switchy(){
    if (courseAllWeek.style.display == 'none') {
        courseAllWeek.style.display = 'block'
        courseEachWeek.style.display = 'none'
    }
    else {
        courseAllWeek.style.display = 'none'
        courseEachWeek.style.display = 'block'
    }
    
    
}






document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the submit button
    document.getElementById('submitBtn').addEventListener('click', function () {
        // Call the validateForm function when the button is clicked
        validateForm();
    });
});

function validateForm() {
    // Get form input values
    var courseTitle = document.getElementById('courseTitleForm').value;
    var courseStartTime = document.getElementById('courseStartTimeForm').value;
    var courseEndTime = document.getElementById('courseEndTimeForm').value;
    // Reset previous error messages
    resetErrors();
    let isValid = true;
    // Validate each field
    if (courseTitle.trim() === '') {
        displayError('titleError', 'نام درس را وارد کنید.');
        isValid = false
    }

    if (courseStartTime.trim() === '') {
        displayError('startTimeError', 'زمان شروع درس را وارد کنید.');
        isValid = false
    }

    if (courseEndTime.trim() === '') {
        displayError('endTimeError', 'زمان پایان درس را وارد کنید.');
        isValid = false
    }

    else if (courseStartTime >= courseEndTime) {
        displayError('startTimeError', 'زمان شروع نمیتواند جلو تر از زمان پایان باشد.');
        isValid = false
    }

    if (isValid) {
        const courseT = document.createElement("div");
        courseT.innerHTML = courseTitle
        courseT.classList.add('course-title')


        const courseTime = document.createElement("div");
        const courseStime = document.createElement("div");
        const courseEtime = document.createElement("div");
        courseStime.innerHTML = courseStartTime
        courseEtime.innerHTML = courseEndTime
        courseTime.classList.add("d-flex")

        courseTime.appendChild(courseEtime)
        courseTime.append('-')
        courseTime.appendChild(courseStime)
        


        const course = document.createElement("div");
        course.classList.add('course-show')
        course.appendChild(courseT)
        course.appendChild(courseTime)
        eventContainer.appendChild(course)

        const toastLive = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)
        toastBootstrap.show()

    }

    return isValid;
    // Example: document.getElementById('yourFormId').submit();
}

function displayError(elementId, message) {
    // Display error message for the specified element
    document.getElementById(elementId).innerText = message;
}

function resetErrors() {
    // Reset all error messages
    document.getElementById('titleError').innerText = '';
    document.getElementById('startTimeError').innerText = '';
    document.getElementById('endTimeError').innerText = '';
    // Add more error resets as needed
}
