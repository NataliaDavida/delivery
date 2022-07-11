class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Add to shopping list';
        this.labelRemove = 'Delete';
    }

    handlerSetLocatStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                        ${price.toLocaleString()} UAN
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
            <h2>Trending Food</h2>
            
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
