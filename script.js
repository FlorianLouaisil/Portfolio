document.addEventListener('DOMContentLoaded', function () {
    // Récupérer tous les boutons qui ouvrent des modales
    const openModalButtons = document.querySelectorAll('.openModalBtn');

    // Récupérer toutes les modales
    const modals = document.querySelectorAll('.modal');

    // Fonction pour ouvrir la modale
    openModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    // Fonction pour fermer la modale
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.close-btn');
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });

    // Fermer la modale si l'utilisateur clique en dehors de la fenêtre modale
    window.addEventListener('click', function (e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
