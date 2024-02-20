import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  accountButton = this.page.getByRole("link", { name: "Account" });
}
