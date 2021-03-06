const NavAside = {
    template:
    `
    <nav class="nav-aside" 
        :class="$root.menu == true ? 'opened-menu' : 'closed-menu'" >
        <header>
            <div class="nav-aside__head">
                <button class="icon-button icon-button_close"
                    @click="$root.menu = !$root.menu">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.4099 11.9992L17.7099 7.70921C17.8982 7.52091 18.004 7.26551 18.004 6.99921C18.004 6.73291 17.8982 6.47751 17.7099 6.28921C17.5216 6.10091 17.2662 5.99512 16.9999 5.99512C16.7336 5.99512 16.4782 6.10091 16.2899 6.28921L11.9999 10.5892L7.70994 6.28921C7.52164 6.10091 7.26624 5.99512 6.99994 5.99512C6.73364 5.99512 6.47824 6.10091 6.28994 6.28921C6.10164 6.47751 5.99585 6.73291 5.99585 6.99921C5.99585 7.26551 6.10164 7.52091 6.28994 7.70921L10.5899 11.9992L6.28994 16.2892C6.19621 16.3822 6.12182 16.4928 6.07105 16.6146C6.02028 16.7365 5.99414 16.8672 5.99414 16.9992C5.99414 17.1312 6.02028 17.2619 6.07105 17.3838C6.12182 17.5056 6.19621 17.6162 6.28994 17.7092C6.3829 17.8029 6.4935 17.8773 6.61536 17.9281C6.73722 17.9789 6.86793 18.005 6.99994 18.005C7.13195 18.005 7.26266 17.9789 7.38452 17.9281C7.50638 17.8773 7.61698 17.8029 7.70994 17.7092L11.9999 13.4092L16.2899 17.7092C16.3829 17.8029 16.4935 17.8773 16.6154 17.9281C16.7372 17.9789 16.8679 18.005 16.9999 18.005C17.132 18.005 17.2627 17.9789 17.3845 17.9281C17.5064 17.8773 17.617 17.8029 17.7099 17.7092C17.8037 17.6162 17.8781 17.5056 17.9288 17.3838C17.9796 17.2619 18.0057 17.1312 18.0057 16.9992C18.0057 16.8672 17.9796 16.7365 17.9288 16.6146C17.8781 16.4928 17.8037 16.3822 17.7099 16.2892L13.4099 11.9992Z" />
                    </svg>
                </button>
            </div>
            <span class="nav-aside__headline">MENU</span>
        </header>
        <ul class="nav-aside__pages">
            <li class="nav-aside__pages__item"><a href="catalog.html">MAN</a></li>
            <li class="nav-aside__pages__item"><a href="catalog.html">Accessories</a></li>
            <li class="nav-aside__pages__item"><a href="catalog.html">Bags</a></li>
            <li class="nav-aside__pages__item"><a href="catalog.html">Denim</a></li>
            <li class="nav-aside__pages__item"><a href="catalog.html">T-Shirts</a></li>
        </ul>
        <ul class="nav-aside__pages">
            <li class="nav-aside__pages__item"><a href="catalog.html">WOMAN</a></li>
            <li class="nav-aside__pages__item"><a href="catalog.html">T-Shirts</a></li>
            <li class="nav-aside__pages__item"><a href="">Jackets &amp;&nbsp;Coats</a></li>
            <li class="nav-aside__pages__item"><a href="">Polos</a></li>
            <li class="nav-aside__pages__item"><a href="">Accessories</a></li>
            <li class="nav-aside__pages__item"><a href="">Shirts</a></li>
        </ul>
        <ul class="nav-aside__pages">
            <li class="nav-aside__pages__item"><a href="">WOMAN</a></li>
            <li class="nav-aside__pages__item"><a href="">Accessories</a></li>
            <li class="nav-aside__pages__item"><a href="">Jackets &amp;&nbsp;Coats</a></li>
            <li class="nav-aside__pages__item"><a href="">Polos</a></li>
            <li class="nav-aside__pages__item"><a href="">T-Shirts</a></li>
            <li class="nav-aside__pages__item"><a href="">Shirts</a></li>
        </ul>
    </nav>
    `,
    data(){
        return{
            menu: false
        }
    },
    methods:{
       
    },
    components:{
        'nav-header': NavHeader
    }
}

export default{
    NavAsideApp: NavAside
}