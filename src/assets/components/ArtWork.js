export default class artWork {
    constructor(imgArtWork, titleArtWork, artistName, dateOfCreation, description, termTitles, materialArtWork) {
        this.imgArtWork = imgArtWork;
        this.titleArtWork = titleArtWork;
        this.artistName = artistName;
        this.dateOfCreation = dateOfCreation;
        this.description = description;
        this.termTitles = termTitles;
        this.materialArtWork = materialArtWork;
    }

    tocardHtml() {
        const card = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardTitle = document.createElement('span');
        const btnMoreInfo = document.createElement('button');

        card.className = 'flex flex-col bg-summer-ligth shadow-lg p-5 cursor-pointer justify-center items-center rounded-lg border border-2 border-theme-primary w-72';
        cardImg.className = 'h-48';
        cardImg.src = this.imgArtWork;
        cardTitle.className = 'text-xs text-theme-primary items-center p-5';
        cardTitle.textContent = this.titleArtWork;
        btnMoreInfo.className = 'btn-buy text-xs text-theme-light bg-theme-primary p-3 px-auto rounded-md';
        btnMoreInfo.textContent = 'More info';
        btnMoreInfo.addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            const overlay = document.querySelector('.overlay');

            modal.innerHTML = '';
            overlay.classList.remove('invisible');
            modal.appendChild(this.toModalHtml());

            const closeButton = document.querySelector('.btnClose');

            closeButton.addEventListener('click', () => {
                overlay.classList.add('invisible');
            })

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.add('invisible');
                }
            })

        })

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(btnMoreInfo);

        return card;
    }

    toModalHtml() {
        const modalDiv = document.createElement('div');
        const modalImg = document.createElement('img');
        const modalTitle = document.createElement('span');
        const artistName = document.createElement('span');
        const date = document.createElement('span');
        const description = document.createElement('span');
        const termTitles = document.createElement('span');
        const materialArtWork = document.createElement('span');
        const btnClose = document.createElement('button');

        modalDiv.className = 'flex flex-col relative bg-theme-light shadow-lg p-8 justify-center rounded-lg border border-2 border-theme-primary w-96 gap-4';
        modalImg.className = 'h-48';
        modalImg.src = this.imgArtWork;
        modalTitle.className = 'text-lg text-theme-primary items-start';
        modalTitle.textContent = 'Title: ' + this.titleArtWork;
        artistName.className = 'text-md text-theme-primary items-start';
        artistName.textContent = 'Artist: ' + this.artistName;
        date.className = 'text-xs text-theme-primary items-start';
        date.textContent = 'Production date: ' + this.dateOfCreation;
        description.className = 'text-xs text-theme-primary items-start';
        description.textContent = 'Description: ' + this.description;
        termTitles.className = 'text-xs text-theme-primary items-start';
        termTitles.textContent = 'Term titles: ' + this.termTitles;
        materialArtWork.className = 'text-xs text-theme-primary items-start';
        materialArtWork.textContent = 'Material: ' + this.materialArtWork;
        btnClose.className = 'btnClose material-symbols-outlined absolute top-2 right-2 text-2xl text-theme-primary cursor-pointer';
        btnClose.textContent = 'close';

        modalDiv.appendChild(btnClose);
        modalDiv.appendChild(modalImg);
        modalDiv.appendChild(modalTitle);
        modalDiv.appendChild(artistName);
        modalDiv.appendChild(date);
        modalDiv.appendChild(description);
        modalDiv.appendChild(termTitles);
        modalDiv.appendChild(materialArtWork);

        return modalDiv;
    }
}