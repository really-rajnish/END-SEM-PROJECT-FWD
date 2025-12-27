
function handleDashboardClick(role) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    
    if (role === 'student') window.location.href = "student-dashboard.html";
    if (role === 'employer') window.location.href = "employer-panel.html";
    if (role === 'mentor') window.location.href = "mentor-eval.html";
}


function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPass").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful! Please Login.");
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPass").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", user.name);
        alert("Welcome " + user.name);
        window.location.href = "index.html";
    } else {
        alert("Invalid Credentials!");
    }
}

function checkLogin() {
    const user = localStorage.getItem("currentUser");
    if (!user) {
        alert("Access Denied. Please Login.");
        window.location.href = "login.html";
    } else {
        const welcomeMsg = document.getElementById("welcome-msg");
        if (welcomeMsg) welcomeMsg.innerText = "Welcome, " + user;
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}


function submitReport(e) {
    e.preventDefault();
    alert("Report Submitted Successfully!");
    e.target.reset();
}

function postJob(e) {
    e.preventDefault();
    alert("Job Posted Successfully!");
    e.target.reset();
}

function submitFeedback(e) {
    e.preventDefault();
    alert("Feedback Sent Successfully!");
    e.target.reset();
}