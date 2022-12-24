import icons from '../../img/icons.svg';
export default class View {
  data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this.data = data;
    const markup = this.generateMarkup();
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  clear() {
    this.parentElement.innerHTML = '';
  }
  renderSpinner() {
    const markup = ` <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.parentElement.innerHTML = '';
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message = this.errorMessage) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderSuccess(message = this.message) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  addHandleRender(handler) {
    ['hashchange', 'load'].forEach(e => {
      window.addEventListener(e, handler);
    });
  }
}
