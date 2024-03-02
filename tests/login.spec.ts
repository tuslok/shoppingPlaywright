import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { MyAccountPage } from "../pages/myaccount.page";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User wants to create account using empty login and password textbox", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);
    const expectedMessage = "Error: Please provide a valid email address.";

    await landingPage.moveToMyAcount();
    await myAccountPage.rememberUser();
    await myAccountPage.signIn("", "");
    await expect(myAccountPage.loginError).toHaveText(expectedMessage);
  });

  test("User wants to create account using missing @ in address e-mail", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);

    await landingPage.moveToMyAcount();
    await myAccountPage.signIn("", "");
  });

  test("User wants to create account using only email address", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);
    const expectedMessage = "Error: Please enter an account password.";
    await landingPage.moveToMyAcount();
    await myAccountPage.signIn("test@test.com", "");
    await expect(myAccountPage.loginError).toHaveText(expectedMessage);
  });
});
