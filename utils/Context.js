import { useEffect } from "react";
import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [wishlistItems, setWishlist] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
        console.log(items);
    };

    const handleAddToWishlist = (product) => {
        let items = [...wishlistItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index === -1) {
            items = [...items, product];
        } 
        setWishlist(items);
        // console.log(items);
    };

    const handleRemoveFromWishlist = (product) => {
        let items = [...wishlistItems];
        items = items?.filter((p) => p.id !== product?.id);
        setWishlist(items);
    };
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider
            value={{
                currentUser,
                setCurrentUser,
                auth,
                setAuth,
                handleAddToWishlist,
                handleRemoveFromWishlist,
                wishlistItems,
                setWishlist,
                isLoading,
                setIsLoading,
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;