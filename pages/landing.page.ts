import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  accountButton = this.page.getByRole("link", { name: "Account" });
  myCartButton = this.page.locator("li.top-cart");
  addProduct = this.page.locator(".add_to_cart_button.button.button");
  priceProduct = this.page.locator("span.price");

  moveToMyAcount = async () => {
    await this.accountButton.waitFor();
    await this.accountButton.click();
    await this.page.waitForURL(/\/my-account/, { timeout: 3000 });
  };

  moveToMyCart = async () => {
    await this.myCartButton.waitFor();
    await this.myCartButton.click();

    // BUG
    // ACTUAL: /cart is not OK, /my-account is correct
    // EXPECTED: /cart should response OK, /my-account should response that is not correct
    await this.page.waitForURL(/\/cart/, { timeout: 3000 });
  };

  addProductToBasket = async (index: number) => {
    await this.addProduct.last().waitFor();
    await this.addProduct.nth(index).click();
    //await this.addProduct.first().click();

    //await this.addProduct.waitFor();
    //await this.addProduct.click();
  };
}
