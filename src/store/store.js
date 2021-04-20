
import { createStore } from 'vuex'


const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

let user = null;
if(getCookie("login")){
    user = {name : 'zoro'};
}

const store = createStore({
    state () {
        return {
            count: 0,
            products : [],
            user,
            cart : []
        }
    },
    getters: {
        products (state) {
            console.log('state',state);
            return state.products;
        }, user(state) {
            return state.user;
        },
        cart(state) {
            return state.cart;
        }
    },
    mutations: {
        cartadd (state, value) {
            let newCart = [];
            newCart = newCart.concat(state.cart);
            newCart.push(value);
            state.cart = newCart;
        },
        cartremove (state, value) {
            let newCart = [];
            newCart = newCart.concat(state.cart);
            newCart.splice(value, 1);
            state.cart = newCart;
        },
        increment (state) {
            state.count++
        },
        products (state, value) {
            state.products = value;
        },
        user (state, value) {
            state.user = value;
        }
    },
    actions: {
        login(context, user) {
            if(user) {
                setCookie("login", "islogged", 1);
            }else {
                document.cookie = 'login=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
            }

            context.commit('user', user);
        },
        loadProducts (context) {
            fetch('/products.json')
                .then(raw => raw.json())
                .then(json => {


                    let apiProducts = json.products;
                    let allProducts = [...apiProducts];

                    let ls = localStorage.getItem('products');
                    if (ls){
                        allProducts = [...JSON.parse(ls), ...allProducts];
                    }


                    context.commit('products', allProducts);
                })

        }
    }
})

export default store;
