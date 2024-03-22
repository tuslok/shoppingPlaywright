import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { MyAccountPage } from "../pages/myaccount.page";
import { userLogin } from "../data/userAccess.spec";

test.use({
  launchOptions: {
    slowMo: 1_000,
  },
});

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);

    await landingPage.accountButton.click();
    await myAccountPage.signIn(userLogin.login, userLogin.password);
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

  test("User wants to create log in the shop", async ({ page }) => {
    const landingPage = new LandingPage(page);

    const myAccountPage = new MyAccountPage(page);
    await myAccountPage.signIn(userLogin.login, userLogin.password);
  });
});
