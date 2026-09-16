

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }

        // Temporary login
        // Later we will connect this to MySQL + Spring Boot.

        alert("Login successful!");

        window.location.href = "dashboard.html";
    });
}


const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value;
        const email = document.getElementById("registerEmail").value;
        const phone = document.getElementById("phone").value;
        const course = document.getElementById("course").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            course === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill all the fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Account created successfully!");

        window.location.href = "login.html";
    });
}

function generateResume() {

    const name = document.getElementById("resumeName").value;
    const email = document.getElementById("resumeEmail").value;
    const phone = document.getElementById("resumePhone").value;

    const objective =
        document.getElementById("resumeObjective").value;

    const education =
        document.getElementById("resumeEducation").value;

    const skills =
        document.getElementById("resumeSkills").value;

    const projects =
        document.getElementById("resumeProjects").value;

    const certifications =
        document.getElementById("resumeCertifications").value;


    document.getElementById("previewName").textContent =
        name || "Your Name";


    document.getElementById("previewContact").textContent =
        `${email || "email@example.com"} | ${phone || "+91 XXXXX XXXXX"}`;


    document.getElementById("previewObjective").textContent =
        objective || "Your career objective will appear here.";


    document.getElementById("previewEducation").textContent =
        education || "Your education details will appear here.";


    document.getElementById("previewSkills").textContent =
        skills || "Your skills will appear here.";


    document.getElementById("previewProjects").textContent =
        projects || "Your projects will appear here.";


    document.getElementById("previewCertifications").textContent =
        certifications || "Your certifications will appear here.";
}

function getCareerRecommendation() {

    const interest = document.getElementById("interest").value;
    const skill = document.getElementById("skill").value;
    const work = document.getElementById("work").value;

    const title = document.getElementById("careerTitle");
    const description = document.getElementById("careerDescription");

    if (interest === "" || skill === "" || work === "") {
        alert("Please answer all the questions.");
        return;
    }

    if (interest === "ai" || skill === "python" || work === "research") {

        title.textContent = "AI Engineer 🤖";

        description.textContent =
            "You may enjoy building intelligent applications using AI, machine learning and Python.";

    } 
    else if (interest === "data" || skill === "sql" || work === "analysis") {

        title.textContent = "Data Scientist 📊";

        description.textContent =
            "Your interests suggest that data analysis, statistics and machine learning could be a good career path.";

    } 
    else if (interest === "web" || skill === "javascript" || work === "design") {

        title.textContent = "Web Developer 🌐";

        description.textContent =
            "You may enjoy creating websites and modern web applications using frontend technologies.";

    } 
    else {

        title.textContent = "Java Full Stack Developer ☕";

        description.textContent =
            "Your answers suggest that software development and Java-based application development could be a good fit.";

    }
}