const App = new Vue({
    el: '#app',
    data: {
        products: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        cards:[],
        bascetCards:[],
        bascetCardView:[],
        totallPrice: 0,
        menu: false
    },
    methods:{
        async addCardToBascetBack(data){
            const res = await fetch('/api/user-product',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const productInBascet = await res.json()
            console.log('back',productInBascet)
        },
        addCardToBascet(card){
            console.log(card)
            card.amount = 0
            this.bascetCards.push(card)
            if (this.bascetCards.length == 1) {
                this.bascetCards[0].amount = 1;
            }
            if (this.bascetCards.length > 1) {
                for (let i = 0; i < this.bascetCards.length; i++) {
                    if (card.product_name == this.bascetCards[i].product_name) {
                        this.bascetCards[i].amount = this.bascetCards[i].amount + 1;
                    }
                }
            }
            this.bascetCardView = [...new Set(this.bascetCards)];
            for(let key in this.bascetCards){
                this.totallPrice += this.bascetCards[key].price 
            }
            this.addCardToBascetBack(card)
            console.log('front total',this.bascetCards)
            console.log('front view',this.bascetCardView)
        },
       async removeCard(id){
            await fetch(`/api/user-product/${id}`, {method: 'DELETE'})
            this.bascetCards = this.bascetCards.filter(c => c.id_product != id)
            this.bascetCardView = [...new Set(this.bascetCards)];
            if(this.bascetCards.length == 0){
                this.totallPrice = 0
            }
            else{
                this.totallPrice = 0
                for(let key in this.bascetCards){
                    this.totallPrice += this.bascetCards[key].price
                }
            }
            
            console.log('front total',this.bascetCards)
            console.log('front view',this.bascetCardView)
        }
    },
    async mounted(){
        const res = await fetch('/api/product')
        this.cards = await res.json()
        const resUsCard = await fetch('/api/user-product')
        if(resUsCard.length != 0){
            this.bascetCards = await resUsCard.json()
            this.bascetCardView = [...new Set(this.bascetCards)];
        }
    },

    components:{
        'show-case-card': ShowCaseCard,
        'nav-header': NavHeader,
        'basket-in-nav': BasketInNav,
        'bascet-in-nav-card': BascetInNavCard,
        'nav-aside': NavAside,
        'header-main': HeaderMain,
        'button-primary': ButtonPrimary,
        'preview-catalog': PreviewCatalog,
        'product-slider': ProductSlider,
        'showcase-footer': ShowcaseFooter,
        'showcase-filter': ShowcaseFilter,
        'v-footer': Vfooter,
        'advantage': Advantage
    }
   
})

import ShowCaseCardApp from './AppShowCaseCard.js'
import NavHeaderApp from './Nav.js'
import BasketInNavApp from './BascetInNav.js'
import BascetInNavCardApp from './BascetInNavCard.js'
import NavAsideApp from './NavAside.js'
import HeaderMainApp from './HeaderMain.js'
import ButtonPrimaryApp from './ButtonPrimary.js'
import ProductSliderApp from'./ProductSlider.js'
import ShowcaseFooterApp from './ShowcaseFooter.js'
import ShowcaseFilterApp from './ShowcaseFilter.js'
import VfooterApp from './Footer.js'
import AdvantageApp from './Advantage.js'

export default{
    module: App
}
