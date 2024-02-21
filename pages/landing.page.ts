import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  accountButton = this.page.getByRole("link", { name: "Account" });

  moveToMyAcount = async () => {
    await this.accountButton.waitFor();
    await this.accountButton.click();
    await this.page.waitForURL(/\/my-account/, { timeout: 3000 });
  };
}
