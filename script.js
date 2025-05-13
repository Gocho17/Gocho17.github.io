document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingMessage = document.getElementById('ratingMessage');
    const submitRatingBtn = document.getElementById('submitRatingBtn');
    let currentRating = 0;

    const googleMapsReviewLink = "https://www.google.com/maps/place/Trafalgar+Pizza+Club/@41.3890985,2.1393722,14z/data=!3m1!5s0x12a4a2eec15681eb:0x51d2c3f785e3678e!4m12!1m2!2m1!1spizzer%C3%ADa+cerca+de+Barcelona,+Espa%C3%B1a!3m8!1s0x12a4a3342d69700f:0xe5c7761136fd0db9!8m2!3d41.3890985!4d2.1754211!9m1!1b1!15sCiVwaXp6ZXLDrWEgY2VyY2EgZGUgQmFyY2Vsb25hLCBFc3Bhw7FhWiYiJHBpenplcsOtYSBjZXJjYSBkZSBiYXJjZWxvbmEgZXNwYcOxYZIBEHBpenphX3Jlc3RhdXJhbnSqAWYKCC9tLzA2NjN2EAEqDSIJcGl6emVyw61hKA4yHxABIhvbfAi2jXEaTJgidQ6VAKoCirNK3iFOwRhy_h8yKBACIiRwaXp6ZXLDrWEgY2VyY2EgZGUgYmFyY2Vsb25hIGVzcGHDsWHgAQA!16s%2Fg%2F11rmjz4qgr?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D";

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            resetStars();
            const value = parseInt(star.dataset.value);
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('hovered');
            }
        });

        star.addEventListener('mouseout', () => {
            resetStars();
            highlightStars(currentRating); // Vuelve a la calificación seleccionada
        });

        star.addEventListener('click', () => {
            currentRating = parseInt(star.dataset.value);
            highlightStars(currentRating);
            submitRatingBtn.style.display = 'inline-block'; // Mostrar botón

            if (currentRating === 5) {
                ratingMessage.textContent = "¡Gracias por tu excelente calificación!";
                submitRatingBtn.textContent = "Dejar reseña en Google";
            } else if (currentRating > 0) {
                ratingMessage.textContent = `Calificación: ${currentRating} estrella${currentRating > 1 ? 's' : ''}. ¡Queremos saber más!`;
                submitRatingBtn.textContent = "Danos tu feedback";
            } else {
                ratingMessage.textContent = "";
                submitRatingBtn.style.display = 'none';
            }
        });
    });

    function resetStars() {
        stars.forEach(s => {
            s.classList.remove('hovered');
            s.classList.remove('selected');
        });
    }

    function highlightStars(rating) {
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    }

    submitRatingBtn.addEventListener('click', () => {
        if (currentRating === 0) {
            alert("Por favor, selecciona una calificación antes de continuar.");
            return;
        }

        if (currentRating === 5) {
            // Redirigir a Google Maps
            window.location.href = googleMapsReviewLink;
        } else {
            // Redirigir a la página de comentarios
            window.location.href = `comentarios.html?rating=${currentRating}`;
        }
    });
});