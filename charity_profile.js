// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const volunteerBtn = document.getElementById("volunteer-btn");
    const volunteerForm = document.getElementById("volunteer-form");

    // Toggle form display when button is clicked
    volunteerBtn.addEventListener("click", () => {
        volunteerForm.style.display = volunteerForm.style.display === "none" ? "block" : "none";
    });

    // Hover effect for charity name
    const charityName = document.getElementById("charity-name");
    const extraDetails = document.getElementById("extra-details");

    charityName.addEventListener("mouseover", () => {
        extraDetails.style.display = "block";
    });

    charityName.addEventListener("mouseout", () => {
        extraDetails.style.display = "none";
    });
});
