(() => {
    console.log('MODAL');

    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        // console.log('CLICK OPEN!');
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
})();