/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-self-assign */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { products_url, single_product_url } from "../utils/constants";
import { styled } from '@mui/system';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import { useAuth0 } from "@auth0/auth0-react";


const AppContext = createContext();
const AppProvider = ({ children }) => {

  const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(localStorage.getItem("cart"));
    }
    else {
      return [];
    }
  };
  const pages = ['Home', 'About', 'Products'];
  const routes = ['/', '/about', '/products'];

  const blue = {
    500: '#007FFF',
  };

  const grey = {
    300: '#afb8c1',
    400: '#bdbdbd',
    900: '#24292f',
  };

  const StyledBadge = styled(BadgeUnstyled)(
    ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 25px;
    height: 25px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 25px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${blue[500]};
    box-shadow: 0px 4px 16px ${theme.palette.mode === 'dark' ? grey[900] : grey[300]
      };
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `,

  );

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const [singleProduct, setSingleProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [filterProducts, setFilterProducts] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [filters, setFilters] = useState({
    text: "",
    category: "all",
    company: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  });
  const [cart, setCart] = useState(getLocalStorage);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingFee, setShippingFee] = useState(1000);
  const { isAuthenticated, loginWithRedirect, logout, user ,isLoading  } = useAuth0();
  const [userAccount, setUserAccount] = useState(null);

  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const addToCart = (id, color, amount, product) => {
    const tempItem = cart.find((item) => item.id === id + color);

    if (tempItem) {
      const tempCart = cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
            alert("You have reached the maximum amount of this product");
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      setCart(tempCart);
    }
    else {
      const newItem = {
        id: id + color,
        name: product.name,
        amount,
        color,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
        shipping: product.shipping

      };
      const newCart = [...cart, newItem];
      setCart(newCart);

    }
  }

  const removeItem = (id) => {

    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);

  }

  const clearCart = () => {
    setCart([]);
  }
  const toggleAmount = (id, value) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (value === 'inc') {
      if (product.amount < product.max) {
        product.amount = product.amount + 1;
      }
      else {
        product.amount = product.max;
        alert("You have reached the maximum amount of this product");
      }
      setCart([...tempCart]);
    }
    if (value === 'desc') {
      if (product.amount > 1) {
        product.amount = product.amount - 1;
      }
      else {
        product.amount = 1;
      }
      setCart([...tempCart]);
    }
  }
  const countCartTotal = () => {
    const { totalItems, totalAmount ,shippingStatus } = cart.reduce((
      cartTotal, cartItem) => {
      const { amount, price ,shipping } = cartItem;
      cartTotal.totalItems += amount;
      cartTotal.totalAmount += amount * price;
      cartTotal.shippingStatus= shipping;
      return cartTotal;
    }

      , { totalItems: 0, totalAmount: 0,shippingStatus:false });
    setTotalItems(totalItems);
    setTotalAmount(totalAmount);
    setShippingFee(shippingStatus?0:1000);
  }
  const toggleGridView = () => {
    setGridView(!gridView);
  };
  const clearFilter = () => {
    setFilters({
      ...filters,
      text: "",
      category: "all",
      company: "all",
      color: "all",
      minPrice: Math.min(...products.map((product) => product.price)),
      maxPrice: Math.max(...products.map((product) => product.price)),
      price: Math.max(...products.map((product) => product.price)),
      shipping: false,
    });

    setFilterProducts(products);
  };

  const increase = (
  ) => {

    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > singleProduct.stock) {
        tempAmount = singleProduct.stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const handleError = (show = false, msg = "") => {
    setError({ show, msg });
  };
  const getUniqueValue = (items, value) => {
    if (value === "colors") {
      return ["all", ...new Set(items.map((item) => item[value]).flat())];
    }
    return ["all", ...new Set(items.map((item) => item[value]).flat())];
  };

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFilters({ ...filters, [name]: value });
  };

  const filtersItem = () => {
    let { text, company, price, shipping, category, color } = filters;
    let tempProducts = [...filterProducts]
    // filtering
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }
    // category
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      )
    }

    // company
    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      )
    }
    // colors
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }
    // price
    tempProducts = tempProducts.filter((product) => product.price <= price)
    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }

    setFilterProducts(tempProducts);
  };

  useEffect(() => {
    filtersItem();

  }, [filters]);
  useEffect(() => {
    countCartTotal();
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(products_url);
      setProducts(data);
      setLoading(false);
      setFilterProducts(data);
      handleError();
      setFilters({
        ...filters,
        minPrice: Math.min(...data.map((product) => product.price)),
        maxPrice: Math.max(...data.map((product) => product.price)),
        price: Math.max(...data.map((product) => product.price)),
      })
    } catch (error) {
      setLoading(false);
      handleError(true, error.response.data);
    }
  };
  const fetchSingleProduct = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${single_product_url}${id}`);

      setLoading(false);
      setSingleProduct(data);
      handleError();
    } catch (error) {
      setLoading(false);
      handleError(true, error.response.data);
    }
  };
  const getLocalStorageCheckout = (
   args , type
   ) => {
    let data = localStorage.getItem(type);
    if (data) {
      return JSON.parse(localStorage.getItem(type));
    } else {
      return args
    }
  };
  const [payment, setPayment] = useState(getLocalStorageCheckout(
        {
        name: '',
        cardNumber: '',
        expDate: '',
    
    }
    , 'payment'));

  const [shippingAddress, setShippingAddress] = useState(getLocalStorageCheckout
    ({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  }, 'shippingAddress')
  );

  const clearCheckout = () => {
    setShippingAddress({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    });
    setPayment({
      name: '',
      cardNumber: '',
      expDate: '',
    });
  };
      const handleChangeCheckout =async (e,setFun,fun) => {
          const { name, value } = e.target;
        setFun({ ...fun, [name]: value });
        
  };
  useEffect(() => {
    localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
  }, [shippingAddress]);
 useEffect(() => {
        localStorage.setItem('payment', JSON.stringify(payment));
   
    }, [payment]);
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAuthenticated)
    {
      setUserAccount(user);
    }
    else
    {
      setUserAccount(null);
    }


  }, [isAuthenticated]);


  return (
    <AppContext.Provider
      value={{
        handleChangeCheckout,
        clearCheckout,
        payment,
        setPayment,
        shippingAddress,
        setShippingAddress,
        StyledBadge,
        blue,
        grey,
        pages,
        routes,
        loading,
        products,
        error,
        singleProduct,
        fetchSingleProduct,
        increase,
        decrease,
        amount,
        gridView,
        toggleGridView,
        filterProducts,
        clearFilter,
        filters,
        setFilters,
        updateFilter,
        getUniqueValue,
        filtersItem,
        setFilterProducts,
        addToCart,
        cart,
        totalItems,
        totalAmount,
        removeItem,
        shippingFee,
        clearCart,
        toggleAmount,
        state,
        setState,
        toggleDrawer,
        loginWithRedirect,
        logout,
        userAccount,
        isLoading

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
