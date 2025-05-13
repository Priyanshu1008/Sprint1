document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      alert(`Logging in with Email: ${email}`);
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("registerName").value;
      alert(`Welcome ${name}, your account has been created.`);
    });
  }

  const trackForm = document.getElementById("trackForm");
  const trackResult = document.getElementById("trackResult");

  if (trackForm && trackResult) {
    trackForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const id = document.getElementById("trackId").value;
      trackResult.classList.remove("alert-secondary");
      trackResult.classList.add("alert-success");
      trackResult.innerText = `Booking ID ${id} is currently "Out for Delivery".`;
    });
  }

  const history = document.getElementById("customerHistory") || document.getElementById("officerHistory");
  if (history) {
    const dummy = [
      { id: "124", name: "Jane", date: "12 May 2025", status: "Out for Delivery", amount: "₹1500" }
    ];

    dummy.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.id}</td>
        ${item.name ? `<td>${item.name}</td>` : ""}
        <td>${item.date}</td>
        <td>${item.status}</td>
        ${item.amount ? `<td>${item.amount}</td>` : ""}
      `;
      history.appendChild(row);
    });
  }
});
