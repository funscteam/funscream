function login() {
    // Simulasi proses login (Anda perlu menggantinya dengan logika sesuai kebutuhan)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Contoh: Jika username dan password benar, tampilkan halaman dashboard
    if (username === "ilyas" && password === "fafa") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("dashboardContainer").style.display = "block";
    } else {
        alert("Login failed. Please check your username and password.");
    }
}
