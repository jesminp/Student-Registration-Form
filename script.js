function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!fullName || !email || !phone || !dob || !gender || !course || !address) {
        alert("Please fill out all fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
