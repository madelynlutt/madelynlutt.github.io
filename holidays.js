document.addEventListener("DOMContentLoaded", () => {
    const holidayContainer = document.getElementById("holiday-list");

    fetch("https://calendarific.com/api/v2/holidays?api_key=lQAH8BJDAVozKRZS6PPFwiqpQen1SSBk&country=US&year=2025")
        .then(response => response.json())
        .then(data => {
            const seen = new Set();
            const uniqueHolidays = data.response.holidays.filter(holiday => {
                if (seen.has(holiday.name)) return false;
                seen.add(holiday.name);
                return true;
            }).slice(0, 5); // Show only first 5 unique holidays

            uniqueHolidays.forEach(holiday => {
                const div = document.createElement("div");
                const types = holiday.type.join(", "); // Join multiple types with commas
                div.innerHTML = `
                    <strong>${holiday.name}</strong><br>
                    <em>${holiday.date.iso}</em><br>
                    Type: ${types}
                `;
                holidayContainer.appendChild(div);
            });
        })
        .catch(error => {
            holidayContainer.innerHTML = "<p>Could not load holidays. Please try again later.</p>";
            console.error("Error fetching holidays:", error);
        });
});
