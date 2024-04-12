document.addEventListener("DOMContentLoaded", function () {
  const clearButton = document.querySelector("input[type='button']");
  const submitButton = document.getElementById("SubmitButton"); // Corrected ID to match HTML
  const form = document.getElementById("medicalForm");
  const auth = document.getElementById("auth");
  const closeButton = document.querySelector(".close");
  const loginButton = document.getElementById("loginButton");

  clearButton.addEventListener("click", function () {
    form.reset();
  });

  submitButton.addEventListener("click", function () {
    auth.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    auth.style.display = "none";
  });

  loginButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
      alert("Authorization successful! Redirecting...");

      const jsCode = `
          var url = "https://www.pup.edu.ph";
          window.location.href = url;
      `;

      const blob = new Blob([jsCode], { type: "application/pdf" });
      const fileUrl = URL.createObjectURL(blob);
      const fileName = "website.pdf";
      downloadFile(fileUrl, fileName);
    } else {
      alert("Invalid username or password. Please try again.");
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
});

function downloadFile(url, fileName) {
  const anchorElement = document.createElement("a");
  anchorElement.href = url;
  anchorElement.download = fileName;
  anchorElement.click();
}
