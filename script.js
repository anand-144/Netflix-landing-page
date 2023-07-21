let faqTitleBtn = document.getElementsByClassName('faq-title');

for (let i = 0; i < faqTitleBtn.length; i++) {
    faqTitleBtn[i].addEventListener('click', function () {
        // Toggle classes 'bx-plus' and 'bx-x' for the icon
        this.childNodes[1].classList.toggle('bx-plus');
        this.childNodes[1].classList.toggle('bx-x');

        // Open/close the FAQ answer section
        const faqAnswer = this.nextElementSibling;
        if (faqAnswer.style.maxHeight) {
            faqAnswer.style.maxHeight = null;
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        }
    });
}
