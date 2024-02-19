import { test, expect } from "@playwright/test";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User wants to create account using empty login and password textbox", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Account" }).click();
    // check if url is correct
    await page.getByRole("button", { name: "Register" }).click();
    await expect(page.getByText("Error: Please provide a valid ")).toHaveText(
      "Error: Please provide a valid email address."
    );
  });

  test("User wants to create account using missing @ in address e-mail", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Account" }).click();
    await page.locator("#reg_email").fill("wrongaddress");
    await page.getByRole("button", { name: "Register" }).click();
    // add assertion for pop-up
  });

  test.skip("User wants to create account using incorrect password data", async ({
    page,
  }) => {
    await page.getByRole("link", { name: " Account" }).click();
    await page.getByLabel("Email address *", { exact: true }).click();
    await page.locator("#reg_password").click();
    await page.getByRole("button", { name: "Register" }).click();
    await page.getByText("Error: Please provide a valid").click();
  });
});
