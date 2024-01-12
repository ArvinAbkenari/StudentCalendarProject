
document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the submit button
    document.getElementById('submitBtn').addEventListener('click', function () {
        // Call the validateForm function when the button is clicked
        validateForm();
    });
});

function validateForm() {
    // Get form input values
    var eventTitle = document.getElementById('eventTitleForm').value;
    var eventStartTime = document.getElementById('eventStartTimeForm').value;
    var eventEndTime = document.getElementById('eventEndTimeForm').value;
    var eventDate = document.getElementById('eventDateForm').value;
    var eventDescription = document.getElementById('eventDesForm').value;
    var eventContainer = document.getElementById("eventContainer")

    // Reset previous error messages
    resetErrors();
    let isValid = true;
    // Validate each field
    if (eventTitle.trim() === '') {
        displayError('titleError', 'نام رویداد را وارد کنید.');
        isValid = false
    }

    if (eventStartTime.trim() === '') {
        displayError('startTimeError', 'زمان شروع رویداد را وارد کنید.');
        isValid = false
    }

    if (eventEndTime.trim() === '') {
        displayError('endTimeError', 'زمان پایان رویداد را وارد کنید.');
        isValid = false
    }

    if (eventDate.trim() === '') {
        displayError('dateError', 'تاریخ رویداد را وارد کنید.');
        isValid = false
    }
    if (eventStartTime >= eventEndTime) {
        displayError('startTimeError', 'زمان شروع نمیتواند جلو تر از زمان پایان باشد.');
        isValid = false
    }

    if (isValid) {
        const eventT = document.createElement("div");
        eventT.innerHTML = eventTitle
        eventT.classList.add('event-title')

        const eventD = document.createElement("div");
        eventD.innerHTML = eventDate.slice(0,10)

        const eventTime = document.createElement("div");
        const eventStime = document.createElement("div");
        const eventEtime = document.createElement("div");
        eventStime.innerHTML = eventStartTime
        eventEtime.innerHTML = eventEndTime
        eventTime.classList.add("d-flex")

        eventTime.appendChild(eventEtime)
        eventTime.append('-')
        eventTime.appendChild(eventStime)
        


        const event = document.createElement("div");
        event.classList.add('event-show')
        event.appendChild(eventT)
        event.appendChild(eventTime)
        event.appendChild(eventD)
        eventContainer.appendChild(event)

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
    document.getElementById('dateError').innerText = '';
    // Add more error resets as needed
}
