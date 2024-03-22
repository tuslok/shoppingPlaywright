import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { MyAccountPage } from "../pages/myaccount.page";
import { uuid } from "uuidv4";
import { userLogin } from "../data/userAccess.spec";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User wants to create account using too short password and user corrects the password till register button is available", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);

    await landingPage.moveToMyAcount();
    await myAccountPage.signIn("test@test.com", "tsf0");
    await expect(myAccountPage.registerButton).toBeDisabled();
    await myAccountPage.passwordForReg.focus();
    await page.keyboard.type("9!f9JK00!_fs00", { delay: 300 });
    await expect(myAccountPage.registerButton).toBeEnabled();
  });

  test("Sucessfull login to shop", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);

    await landingPage.accountButton.click();
    await myAccountPage.signIn(userLogin.login, userLogin.password);
  });
});
