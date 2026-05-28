document.querySelectorAll(".hero").forEach(img => {
    img.addEventListener("click", function() {
        let textBox = this.parentElement.querySelector(".info");

     
        this.classList.add("clicked");
        setTimeout(() => this.classList.remove("clicked"), 150);

     
        if (textBox.classList.contains("show")) {
            textBox.classList.remove("show");
            textBox.textContent = "";
            this.classList.remove("glow");
            return;
        }

     
        textBox.textContent = this.dataset.text;
        textBox.classList.add("show");
        this.classList.add("glow");

      
        let sound = new Audio(this.dataset.audio);
        sound.play();
    });
});

const bgm = document.getElementById("bgm");
const toggleBtn = document.getElementById("musicToggle");


document.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play();
    }
}, { once: true });

// Toggle button
toggleBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play();
        toggleBtn.textContent = "🔊";
    } else {
        bgm.pause();
        toggleBtn.textContent = "🔇";
    }
});

