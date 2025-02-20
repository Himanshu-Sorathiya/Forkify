import View from './view.js';

import icons from '../../img/icons.svg';

class BookmarksView extends View {
	_parentElement = document.querySelector('.bookmarks__list');
	_errorMessage = 'No bookmarks yet. Find nice recipe and bookmark it ;)';
	_message = '';

	addHandlerRender(handler) {
		window.addEventListener('load', handler);
	}

	_generateMarkup() {
		return this._data.map(this._generateMarkupPreview).join('');
	}

	_generateMarkupPreview(res) {
		const id = window.location.hash.slice(1);

		return `
        <li class="preview">
            <a class="preview__link ${
							res.id === id ? 'preview__link--active' : ''
						}" href="#${res.id}">
              <figure class="preview__fig">
                <img src="${res.image}" alt="${res.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `;
	}
}

export default new BookmarksView();
