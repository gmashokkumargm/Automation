const base = require('../Base/Base')

class CommonPage{

    get moreMenu() {return $('.bm-burger-button')}
    get logoutOption() {return $('#logout_sidebar_link')}
    get cartIcon() {return $('svg[data-icon="shopping-cart"]')}


    clickMoreMenu(){
        base.doClick(this.moreMenu)
    }

    clickLogoutOption(){
        base.doClick(this.logoutOption)
    }

    clickCartIcon(){
        base.doClick(this.cartIcon)
    }
}
module.exports = new CommonPage()