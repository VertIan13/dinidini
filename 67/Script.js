function moveButton() {
    const btn = document.getElementById('noButton');
    // Menghitung posisi acak di dalam jendela browser
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function nextStep(step) {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    
    // Memicu efek konfeti saat klik "Yes"
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Membuat efek hujan hati secara otomatis
setInterval(() => {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 3000);
}, 300);



function moveButton() {
    const btn = document.getElementById('noButton');
    // Tombol No menghindar di langkah pertama
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function nextStep(stepNumber) {
    // Sembunyikan semua step
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    // Tampilkan step yang dituju
    document.getElementById('step' + stepNumber).classList.add('active');

    // Jika sampai di step terakhir, munculkan perayaan!
    if (stepNumber === 3) {
        triggerConfetti();
    }
}

function triggerConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 250);
}

// Efek hujan hati (tetap sama)
setInterval(() => {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => { heart.remove(); }, 3000);
}, 300);
