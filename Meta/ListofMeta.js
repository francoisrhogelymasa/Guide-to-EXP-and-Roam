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

toggleBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play();
        toggleBtn.textContent = "🔊";
    } else {
        bgm.pause();
        toggleBtn.textContent = "🔇";
    }
});

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", () => {
    bgm.volume = volumeSlider.value / 100;
});

function createParticle() {
    const particles = document.getElementById("particles");
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 6 + 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.animationDuration = (Math.random() * 3 + 4) + "s";
    particles.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

setInterval(createParticle, 300);
