import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  productTitle = this.page.locator(".woocommerce-loop-product__link");
  accountButton = this.page.getByRole("link", { name: "Account" });
  myCartButton = this.page.locator("li.top-cart");
  addProduct = this.page.locator(".add_to_cart_button.button.button");
  priceProduct = this.page.locator("span.price");

  contactButton = this.page.locator(".menu-item-108");

  moveToMyAcount = async () => {
    await this.accountButton.waitFor();
    await this.accountButton.click();
    await this.page.waitForURL(/\/my-account/, { timeout: 3000 });
  };

  moveToMyCart = async () => {
    await this.myCartButton.waitFor();
    await this.myCartButton.click();
    await this.page.waitForURL(/\/cart/, { timeout: 3000 });
  };

  addProductToBasket = async (index: number) => {
    await this.addProduct.last().waitFor();
    await this.addProduct.nth(index).click();
  };

  moveToProduct = async (index: number) => {
    await this.productTitle.last().waitFor();
    await this.productTitle.nth(index).click();
    //const title = this.priceProduct.innerText();
  };

  moveToContact = async () => {
    await this.contactButton.waitFor();
    await this.contactButton.click();
    await this.page.waitForURL(/\/test-contact-blablabla/);
  };
}
