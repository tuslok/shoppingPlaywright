import { test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { MyAccountPage } from "../pages/myaccount.page";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Test", async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.moveToMyCart();
  });
});
