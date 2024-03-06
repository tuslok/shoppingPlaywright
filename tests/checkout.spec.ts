import { expect, test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { MyCartPage } from "../pages/mycart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { deliveryDetails } from "../data/deliveryDetails.spec";

test.use({
  launchOptions: {
    slowMo: 1_000,
  },
});

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("User adds first product, moves to cart", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const myCartPage = new MyCartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await landingPage.addProductToBasket(7);
    await landingPage.addProductToBasket(15);
    await landingPage.moveToMyCart();
    await myCartPage.moveToCheckout();
    await checkoutPage.fillCheckoutForm(deliveryDetails);
  });
});
