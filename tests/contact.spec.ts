import { expect, test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { ContactPage } from "../pages/contact.page";
import { contactMessage } from "../data/contactMessage.spec";

test.use({
  launchOptions: {
    slowMo: 1_000,
  },
});

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User completes order without created account", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const contactPage = new ContactPage(page);
    await landingPage.moveToContact();
    await contactPage.fillContactForm(contactMessage);
    await contactPage.sendMessage();
  });
});
