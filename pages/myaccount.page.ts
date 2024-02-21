import { Page } from "@playwright/test";

export class MyAccountPage {
  constructor(private page: Page) {}

  registerButton = this.page.getByRole("button", { name: "Register" });
  emailForReg = this.page.locator("#reg_email");
  passwordForReg = this.page.locator("#reg_password");

  emailForLogin = this.page.locator("#username");
  passwordForLogin = this.page.locator("#password");
  rememberMeCheckbox = this.page.locator("#rememberme");
  //lostPasswordLink = this.page.locator("");
  loginButton = this.page.locator("#login");

  errorMessage = this.page.locator(".woocommerce-error");

  async correctSignIn(login: string, password: string): Promise<void> {
    await this.emailForReg.fill(login);
    await this.passwordForReg.fill(password);
    await this.registerButton.click();
  }
}
