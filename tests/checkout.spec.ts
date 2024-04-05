import { expect, test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { MyCartPage } from "../pages/mycart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { deliveryDetails } from "../data/deliveryDetails.spec";
import { OrderCompletedPage } from "../pages/orderCompleted.page";
import { MethodPayment } from "../pages/methodPayment.page";

test.use({
  launchOptions: {
    slowMo: 1_000,
  },
});

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("User completes order without created account using cash on delivery method payment.", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myCartPage = new MyCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderCompletedPage = new OrderCompletedPage(page);
    const methodPayment = new MethodPayment(page);
    const expectedResult = "Thank you. Your order has been received.";

    await landingPage.addProductToBasket(4);
    await landingPage.addProductToBasket(5);
    await landingPage.moveToMyCart();
    await myCartPage.moveToCheckout();
    await checkoutPage.fillCheckoutForm(deliveryDetails);
    await methodPayment.selectCashOnDelivery();
    await checkoutPage.placeOrder();
    await expect(orderCompletedPage.orderConfirmationMessage).toHaveText(
      expectedResult,
      { timeout: 5000 }
    );
  });

  test("User completes order without created account using check payment method.", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myCartPage = new MyCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderCompletedPage = new OrderCompletedPage(page);
    const methodPayment = new MethodPayment(page);
    const expectedResult = "Thank you. Your order has been received.";

    await landingPage.addProductToBasket(1);
    await landingPage.addProductToBasket(7);
    await landingPage.addProductToBasket(11);
    await landingPage.moveToMyCart();
    await myCartPage.moveToCheckout();
    await checkoutPage.fillCheckoutForm(deliveryDetails);
    await methodPayment.selectCheckPayment();
    await checkoutPage.placeOrder();
    await expect(orderCompletedPage.orderConfirmationMessage).toHaveText(
      expectedResult,
      { timeout: 5000 }
    );
  });

  test("User completes order without created account using transfer to bank account method payment.", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myCartPage = new MyCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderCompletedPage = new OrderCompletedPage(page);
    const methodPayment = new MethodPayment(page);
    const expectedResult = "Thank you. Your order has been received.";

    await landingPage.addProductToBasket(2);
    await landingPage.addProductToBasket(3);
    await landingPage.addProductToBasket(6);
    await landingPage.addProductToBasket(16);
    await landingPage.moveToMyCart();
    await myCartPage.moveToCheckout();
    await checkoutPage.fillCheckoutForm(deliveryDetails);
    await methodPayment.selectBankAccount();
    await checkoutPage.placeOrder();
    await expect(orderCompletedPage.orderConfirmationMessage).toHaveText(
      expectedResult,
      { timeout: 5000 }
    );
  });

  test("User completes order without created account using PayPal payment method.", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myCartPage = new MyCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderCompletedPage = new OrderCompletedPage(page);
    const methodPayment = new MethodPayment(page);
    const expectedResult =
      "Things don't appear to be working at the moment. Please try again later.";

    await landingPage.addProductToBasket(7);
    await landingPage.addProductToBasket(15);
    await landingPage.moveToMyCart();
    await myCartPage.moveToCheckout();
    await checkoutPage.fillCheckoutForm(deliveryDetails);
    await methodPayment.selectPaypalPayment();
    await checkoutPage.placeOrder();
    await expect(orderCompletedPage.paypalUnavailableMessage).toHaveText(
      expectedResult,
      { timeout: 5000 }
    );
  });
});
