import { expect, test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { Product } from "../pages/product.page";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User adds first product, moves to cart", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const product = new Product(page);

    await landingPage.moveToProduct(5);
    await product.addProductToBasket();
    await landingPage.moveToMyCart();
  });
});
