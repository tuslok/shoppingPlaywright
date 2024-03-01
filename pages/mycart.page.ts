import { Page, expect } from "@playwright/test";

export class MyCartPage {
  constructor(private page: Page) {}

  totalPriceForProduct = this.page.locator("td.product-subtotal");
  totalPriceForAllProduct = this.page.locator("tr.cart-subtotal td");
  totalFinalPrice = this.page.locator("tr.order-total td");
  proceedToCheckouButton = this.page.locator(".wc-proceed-to-checkout");

  moveToCheckout = async () => {
    await this.proceedToCheckouButton.waitFor();
    await this.proceedToCheckouButton.click();
    expect(this.page.waitForURL(/\/checkout/, { timeout: 3000 }));
  };
}
