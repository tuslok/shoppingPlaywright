import { expect, test } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { BlogPage } from "../pages/blog.page";
import { SearchPage } from "../pages/search.page";

test.describe("User sign in Generic shop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User searches article with given keyword", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const blogPage = new BlogPage(page);
    const searchPage = new SearchPage(page);
    const productName = "dress";
    await landingPage.moveToBlog();
    await blogPage.fillSearch(productName);
    await blogPage.searchTag();
    await searchPage.printProductName(productName);
    await expect(searchPage.searchResult).toHaveText(
      "Search Results for: " + productName
    );
  });
});
