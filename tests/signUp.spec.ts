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

    await landingPage.accountButton.click();
    // check if url is correct
    myAccountPage.registerButton.click();
    await expect(myAccountPage.errorMessage).toHaveText(expectedMessage);
  });

  test("User wants to create account using missing @ in address e-mail", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);

    await landingPage.accountButton.click();
    // TO DO CHECK URL
    await myAccountPage.emailForReg.fill("testuser");
    await myAccountPage.registerButton.click();
  });

  test("User wants to create account using only email address", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);
    const expectedMessage = "Error: Please enter an account password.";
    // TO DO CHECK URL
    await landingPage.accountButton.click();
    await myAccountPage.emailForReg.fill("testuser@test.com");
    await myAccountPage.registerButton.click();
    await expect(myAccountPage.errorMessage).toHaveText(expectedMessage);
  });

  test("User wants to create account using too short password and user corrects the password till register button is available", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);

    await landingPage.accountButton.click();
    await myAccountPage.correctSignIn("user@est.com", "pa55w0rd");

    //await page.getByText("Error: Please provide a valid").click();
  });
});
