import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js'

async function loadPage() {
  try {
      //throw 'error1';
    
      await Promise.all([
        loadProductsFetch(),
        loadCartFetch()
      ]);

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  } 

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => { 
      resolve(); 
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});


new Promise((resolve) => { 
  loadProducts(() => { 
   resolve('value1'); 
  });

}).then((value) => {
  return new Promise((resolve) => {
    loadCart(() => { 
      resolve(); 
    });
  });
  
}).then(() => { 
  renderOrderSummary();
  renderPaymentSummary();
});

 loadProducts(() => {
     renderOrderSummary();
     renderPaymentSummary();
 });
*/