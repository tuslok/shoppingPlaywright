import { Page, expect } from "@playwright/test";

export class RegisterLoginPanel {
  constructor(private page: Page) {}

  registerButton = this.page.getByRole("button", { name: "Register" });
  emailForReg = this.page.locator("#reg_email");
  passwordForReg = this.page.locator("#reg_password");

  emailForLogin = this.page.locator("#username");
  passwordForLogin = this.page.locator("#password");
  rememberMeCheckbox = this.page.locator("#rememberme");
  lostPasswordLink = this.page.getByRole("link", {
    name: "Lost your password?",
  });

  loginButton = this.page.locator("#login");

  loginError = this.page.locator(".woocommerce-error");

  passwordError = this.page.locator("*.woocommerce-password-strength");

  fillLoginAndPassword = async (
    login: string,
    password: string
  ): Promise<void> => {
    await this.emailForReg.waitFor();
    await this.emailForReg.fill(login);
    await this.passwordForReg.waitFor();
    await this.passwordForReg.fill(password);
  };

  rememberUser = async () => {
    await this.rememberMeCheckbox.waitFor();
    expect(!this.rememberMeCheckbox.isChecked);
    await this.rememberMeCheckbox.click();
    await expect(this.rememberMeCheckbox).toBeChecked();
  };

  moveToLostPassword = async () => {
    //await this.lostPasswordLink.waitFor();
    await this.lostPasswordLink.click();
    await this.page.waitForURL(/\/lost-password/, { timeout: 3000 });
  };

  clickRegisterButton = async () => {
    await this.registerButton.waitFor();
    await this.registerButton.click();
  };
}
