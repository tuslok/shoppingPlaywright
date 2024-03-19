import { Page } from "@playwright/test";

export class BlogPage {
  constructor(private page: Page) {}

  searchTextfield = this.page.locator(".search-field");
  searchButton = this.page.locator(".search-submit");

  fillSearch = async (keyword: string) => {
    await this.searchTextfield.first().waitFor();
    await this.searchTextfield.first().fill(keyword);
  };

  searchTag = async () => {
    await this.searchButton.first().waitFor();
    await this.searchButton.first().click();
  };
}
