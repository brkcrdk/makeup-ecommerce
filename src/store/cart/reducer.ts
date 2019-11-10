import { ADD_CART, CartState, CartActions } from "./types";

const initialState: CartState = {
  cart: []
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    //TODO: ürün detayı sayfasında sadece ekleme olacak ekleye basıldıkça ürün eklenecek
    //TODO: ekle butonuna basınca cart sayfasına yönlendirecek
    //TODO: cart sayfasında ürünler listelenecek
    //TODO: Cart sayfasında ekle çıkar butonu eklenerek ürün adedi güncelleme izin verilecek
    //TODO: Ürün sayısı 1den az olursa ürün silinsinmi uyarısı vericek
    //TODO: Evet derse ürün silecek
    //TODO: Ayrı olarak ürün silme butonu eklenecek
    case ADD_CART:
      if (state.cart.length >= 0) {
        const id = state.cart.map((item) => {
          return item.product.id;
        });
        if (id.indexOf(action.payload.product.id) === -1) {
          return { ...state, cart: state.cart.concat(action.payload) };
        } else {
          const selected = id.indexOf(action.payload.product.id);
          const newCount = action.payload.count;
          const oldCount = state.cart[selected].count;
          state.cart.splice(selected, 1);
          const newObj = {
            product: action.payload.product,
            count: newCount + oldCount
          };
          return { ...state, cart: state.cart.concat(newObj) };

          //Update actions here:
          // if (newCount > oldCount) {
          //   state.cart.splice(selected, 1);
          //   const newObj = {
          //     product: action.payload.product,
          //     count: newCount + oldCount
          //   };
          //   return { ...state, cart: state.cart.concat(newObj) };
          // } else if (newCount < oldCount) {
          //   state.cart.splice(selected, 1);
          //   const newObj = {
          //     product: action.payload.product,
          //     count: newCount
          //   };
          //   return { ...state, cart: state.cart.concat(newObj) };
          // }
        }
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
