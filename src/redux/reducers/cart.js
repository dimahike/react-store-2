const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalCount = (obj) => Object.values(obj).reduce((sum, obj) => obj.totalCount + sum, 0);
const getTotalPrice = (obj) => Object.values(obj).reduce((sum, obj) => obj.totalPrice + sum, 0);

const parseAndFixed = (number) => {
  return parseFloat(number.toFixed(2));
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      let currentProductItems;
      let currentTotalPrice;
      let currentTotalCount;

      if (!state.items[action.payload.id]) {
        currentProductItems = action.payload;
        currentTotalPrice = action.payload.price;
        currentTotalCount = 1;
      }
      if (state.items[action.payload.id]) {
        currentProductItems = state.items[action.payload.id].item;
        currentTotalPrice = state.items[action.payload.id].totalPrice + action.payload.price;
        currentTotalCount = state.items[action.payload.id].totalCount + 1;
      }

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          item: currentProductItems,
          totalCount: currentTotalCount,
          totalPrice: parseAndFixed(currentTotalPrice),
        },
      };

      // const objectsToArrays = Object.values(newItems).map((obj) => obj.item);
      // const arrayAllPizzas = [].concat.apply([], objectsToArrays);
      // let totalPriceProducts
      // newItems.map((item) => totalPriceProducts += item.totalPrice)
      console.log('initialState from cart:', state);
      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: parseAndFixed(getTotalPrice(newItems)),
      };
    }
    case 'REMOVE_CART_ITEM': {
      const currentPizzaItems = state.items[action.payload.id];
      const removedPizzasItems = currentPizzaItems.items.splice(1);

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            items: removedPizzasItems,
            totalPrice: currentPizzaItems.totalPrice - action.payload.price,
          },
        },
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    }
    case 'ADD_CART_ITEM': {
      const currentPizzaItems = [
        ...state.items[action.payload.id].items,
        state.items[action.payload.id].items[0],
      ];

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: state.items[action.payload.id].totalPrice + action.payload.price,
          },
        },
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case 'DELETE_CART_ITEM': {
      const totalPriceCartItem = state.items[action.payload].totalPrice;
      const totalAmountCartItem = state.items[action.payload].items.length;

      delete state.items[action.payload];

      return {
        ...state,
        items: {
          ...state.items,
        },
        totalCount: state.totalCount - totalAmountCartItem,
        totalPrice: state.totalPrice - totalPriceCartItem,
      };
    }
    case 'CLEAR_CART': {
      return initialState;
    }

    default:
      return state;
  }
};

export default cart;
