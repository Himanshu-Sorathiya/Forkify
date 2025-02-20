import View from './view.js';

import icons from '../../img/icons.svg';

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn--inline');
			if (!btn) return;

			const gotoPage = +btn.dataset.goto;
			handler(gotoPage);
		});
	}

	_generateMarkup() {
		const numPages = Math.ceil(
			this._data.results.length / this._data.resultsPerPage
		);
		const currPage = this._data.page;

		if (currPage === 1 && numPages > 1) {
			return `
                <button data-goto="${
									currPage + 1
								}" class="btn--inline pagination__btn--next">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                    <span>Page ${currPage + 1}</span>
                </button>
            `;
		}

		if (currPage === numPages && numPages > 1) {
			return `
                <button data-goto="${
									currPage - 1
								}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${currPage - 1}</span>
                </button>
            `;
		}

		if (currPage < numPages) {
			return `
                <button data-goto="${
									currPage - 1
								}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${currPage - 1}</span>
                </button>
                <button data-goto="${
									currPage + 1
								}" class="btn--inline pagination__btn--next">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                    <span>Page ${currPage + 1}</span>
                </button>
            `;
		}

		return ``;
	}
}

export default new PaginationView();
