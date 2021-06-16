
// Get Stripe publishable key
fetch("/config/")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  const stripe = Stripe(data.publicKey);

    // Event handler
    let submitBtn = document.querySelector("#submitBtn");
    if (submitBtn !== null) {
      submitBtn.addEventListener("click", () => {
      // Get Checkout Session ID
      fetch("/create-checkout-session/")
        .then((result) => { return result.json(); })
        .then((data) => {
          // Redirect to Stripe Checkout
          return stripe.redirectToCheckout({sessionId: data.sessionId})
        })
        .then((res) => {
          console.log(res);
        });
      });
    }

    // let unsubscribeBtn = document.querySelector("#unsubscribeBtn");
    // if (unsubscribeBtn !== null) {
    //     unsubscribeBtn.addEventListener("click", () => {
    //   // Get Checkout Session ID
    //   fetch("/unsubscribe/")
    //     .then((result) => { return result.json(); })
    //     .then((data) => {
    //       // Redirect to Stripe Checkout
    //       return stripe.redirectToCheckout({sessionId: data.sessionId})
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    //   });
    // }
});

