import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landingPage";
import { MyAccountPage } from "../pages/myAccountPage";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User wants to create account using empty login and password textbox", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    await landingPage.accountButton.click();
    const myAccountPage = new MyAccountPage(page);
    // check if url is correct
    myAccountPage.registerButton.click();
    await expect(page.getByText("Error: Please provide a valid ")).toHaveText(
      "Error: Please provide a valid email address."
    );
  });

  test("User wants to create account using missing @ in address e-mail", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const myAccountPage = new MyAccountPage(page);
    // check url
    await landingPage.accountButton.click();
    await myAccountPage.loginTextbox.fill("das");
    await myAccountPage.registerButton.click();
    //await page.getByRole("button", { name: "Register" }).click();
    // add assertion for pop-up
  });

  test.skip("User wants to create account using incorrect password data", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    await landingPage.accountButton.click();
    //await page.getByRole("link", { name: " Account" }).click();
    await page.getByLabel("Email address *", { exact: true }).click();
    await page.locator("#reg_password").click();
    await page.getByRole("button", { name: "Register" }).click();
    await page.getByText("Error: Please provide a valid").click();
  });
});
