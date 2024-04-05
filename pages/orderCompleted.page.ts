import { Page } from "@playwright/test";

export class OrderCompletedPage {
  constructor(private page: Page) {}

  orderConfirmationMessage = this.page.locator(
    ".woocommerce-thankyou-order-received"
  );

  paypalUnavailableMessage = this.page.locator(".message");
}
