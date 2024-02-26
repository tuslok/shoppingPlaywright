import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  accountButton = this.page.getByRole("link", { name: "Account" });
  myCartButton = this.page.locator("li.top-cart");

  moveToMyAcount = async () => {
    await this.accountButton.waitFor();
    await this.accountButton.click();
    await this.page.waitForURL(/\/my-account/, { timeout: 3000 });
  };

  moveToMyCart = async () => {
    await this.accountButton.waitFor();
    await this.accountButton.click();
    // BUG
    // ACTUAL: /cart is not OK, /my-account is correct
    // EXPECTED: /cart should response OK, /my-account should response that is not correct
    await this.page.waitForURL(/\/my-account/, { timeout: 3000 });
  };
}
