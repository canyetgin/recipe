import View from './View.js';

class resultsView extends View {
  parentElement = document.querySelector('.results');
  errorMessage = 'we couldnt find any recipe';
  message = '';

  generateMarkup() {
    return this.data.map(this.generateMarkupPreview).join('');
  }
  generateMarkupPreview(item) {
    return `
    <li class="preview">
            <a class="preview__link preview__link--active" href="#${item.id}">
              <figure class="preview__fig">
                <img src="${item.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${item.title}</h4>
                <p class="preview__publisher">${item.publisher}</p>
                
              </div>
            </a>
          </li>
    `;
  }
}

export default new resultsView();
