class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, img }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name"> ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} UAN</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name"> Total:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} UAN</td>
                    </tr>
                </table>
                <form action="/action_page.php">
                <h1>Delivery data</h1>
                    <fieldset>
                    <legend></legend>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"><br>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"><br>
                    <label for="phone">Phone number:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"><br>
                    <label for="adress">Adress:</label>
                    <input type="text" id="adress" name="adress"><br>
    
                    <button type="submit" class="btn">Submit</button>
                    </fieldset>
                    </form>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
};

const shoppingPage = new Shopping();
