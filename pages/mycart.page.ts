import { Page, expect } from "@playwright/test";

export class MyCartPage {
  constructor(private page: Page) {}

  totalPriceForProduct = this.page.locator("td.product-subtotal");
  totalPriceForAllProduct = this.page.locator("tr.cart-subtotal td");
  totalFinalPrice = this.page.locator("tr.order-total td");
  proceedToCheckouButton = this.page.locator(".wc-forward");

  // xpath as alternative solution x("//*[contains(@class, 'checkout-button button alt wc-forward')]/text()");
  // ".wc-forward" - first solution - didn't work correctly

  moveToCheckout = async () => {
    await this.proceedToCheckouButton.waitFor();
    await this.proceedToCheckouButton.click();
    await this.page.waitForURL(/\/checkout/, { timeout: 5000 });
  };
}
