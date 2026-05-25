const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Stoppa omladdning av sidan

        const data = new FormData(event.target);
        const messageEl = document.getElementById("message");
        
        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                messageEl.innerText = "Tack! Ditt meddelande har skickats.";
                messageEl.style.color = "#0ea5e9";
                form.reset();
            } else {
                messageEl.innerText = "Ett fel uppstod, försök igen senare.";
                messageEl.style.color = "red";
            }
        } catch (error) {
            messageEl.innerText = "Kunde inte skicka meddelandet.";
            messageEl.style.color = "red";
        }
    });
}