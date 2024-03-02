import { Page, expect } from "@playwright/test";

export class Product {
  constructor(private page: Page) {}

  addProductToBasketButton = this.page.locator(".single_add_to_cart_button");
  productTitle = this.page.locator(".entry-title");

  addProductToBasket = async () => {
    await this.addProductToBasketButton.waitFor();
    await this.addProductToBasketButton.click();
  };
}
