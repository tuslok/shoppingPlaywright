import { Page } from "@playwright/test";

export class MyAccountPage {
  constructor(private page: Page) {}

  registerButton = this.page.getByRole("button", { name: "Register" });
  loginTextbox = this.page.locator("#reg_email");
  passwordTextbox = this.page.locator("#reg_password");

  async corectSignIn(login: string, password: string): Promise<void> {
    await this.loginTextbox.fill(login);
    await this.passwordTextbox.fill(password);
    this.registerButton.click();
  }
}
