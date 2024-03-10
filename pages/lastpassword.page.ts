import { Page } from "@playwright/test";

export class LastPasswordPage {
  constructor(private page: Page) {}

  userLogin = this.page.locator("#user_login");
  restartPasswordButton = this.page.getByRole("button", {
    name: "Reset password",
  });

  retrievePassword = async (email: string): Promise<void> => {
    await this.userLogin.waitFor();
    await this.userLogin.fill(email);
    await this.restartPasswordButton.waitFor();
    await this.restartPasswordButton.click();
  };
}
