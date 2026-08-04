// Simple interaction logic for frontend
document.addEventListener("DOMContentLoaded", () => {
    // Handle Dubbing Form
    const dubbingForm = document.getElementById("dubbing-form");
    if (dubbingForm) {
        dubbingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const url = document.getElementById("video-url").value;
            const lang = document.getElementById("target-language").value;
            
            // In a real app, we would make an API call to our backend (e.g. n8n webhook)
            console.log(`Submitting video: ${url} for translation to ${lang}`);
            
            // Show mock success message
            const statusDiv = document.getElementById("form-status");
            statusDiv.style.display = "block";
            dubbingForm.reset();
            
            setTimeout(() => {
                statusDiv.style.display = "none";
            }, 5000);
        });
    }
});
