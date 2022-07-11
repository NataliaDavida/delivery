class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="menu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                </div>
                
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                     <i class="bi bi-cart-check"></i>${count}
                </div>
             </div>
             <div class="banner">
                <h1>Fresh Food at</br> Your Door</h1>
                <button onclick="headerPage.handlerOpenShoppingPage();">ORDER NOW </button>
             </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();
