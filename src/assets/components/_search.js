import artWork from './ArtWork.js';
const cards = document.querySelector('.cards');

function searchArtWorks(inputValue) {
    fetch('https://api.artic.edu/api/v1/artworks/search?q=' + inputValue + '&limit=9&fields=image_id,title,artist_title,date_display,description,term_titles,material_titles')
              
        .then(response => response.json())
        .then(result => {
            
        cards.innerHTML = '';
        result.data.forEach(artObj => {
            let pieceOfArt =
            new artWork(
                result.config.iiif_url + '/' + artObj.image_id + '/full/full/0/default.jpg',
                artObj.title,
                artObj.artist_title,
                artObj.date_display,
                artObj.short_description,
                artObj.term_titles,
                artObj.material_titles,
                )
        cards.appendChild(pieceOfArt.tocardHtml());
        });
    });
}

const btnEnter = document.querySelector('.btnEnter');
const input = document.querySelector('.input_search');

btnEnter.addEventListener('click', () => {
    searchArtWorks(input.value);
})
