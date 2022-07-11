class Footer {

    render() {
        const html = `
            <div class="footer-container">
                <div class="menu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                </div>
                <div class="menu">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-telegram"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                </div>
            </div>
            
        `;

        ROOT_FOOTER.innerHTML = html;
    }
};

const footerPage = new Footer();
footerPage.render()