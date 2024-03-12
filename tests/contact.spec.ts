import { expect, test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { ContactPage } from "../pages/contact.page";
import { contactMessage } from "../data/contactMessage.spec";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User completes order without created account", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const contactPage = new ContactPage(page);
    const expectedResult =
      "There was an error trying to send your message. Please try again later.";
    await landingPage.moveToContact();
    await contactPage.fillContactForm(contactMessage);
    await contactPage.sendMessage();
    await expect(contactPage.errorMessage).toHaveText(expectedResult);
  });
});
