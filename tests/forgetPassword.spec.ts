import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { MyAccountPage } from "../pages/myaccount.page";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User wants to retrieve password", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);
    await landingPage.moveToMyAcount();
    await myAccountPage.moveToLostPassword();
  });
});
