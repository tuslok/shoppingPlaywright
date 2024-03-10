import { expect, test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { Product } from "../pages/product.page";
import { MyCartPage } from "../pages/mycart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { deliveryDetails } from "../data/deliveryDetails.spec";
import { OrderCompletedPage } from "../pages/orderCompleted.page";

test.use({
  launchOptions: {
    slowMo: 1_000,
  },
});

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User moves to product, adds to cart, fill the form and finalizes payment. ", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const product = new Product(page);
    const myCartPage = new MyCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderCompletedPage = new OrderCompletedPage(page);
    const expectedResult = "Thank you. Your order has been received.";

    await landingPage.moveToProduct(5);
    await product.selectQuantity(3);
    await product.addProductToBasket();
    await landingPage.moveToMyCart();
    await myCartPage.moveToCheckout();
    await checkoutPage.fillCheckoutForm(deliveryDetails);
    await checkoutPage.placeOrder();
    await expect(orderCompletedPage.orderConfirmationMessage).toHaveText(
      expectedResult
    );
  });
});
