import { Page, expect } from "@playwright/test";
import { log } from "console";

export class SearchPage {
  constructor(private page: Page) {}

  productTitle = this.page.locator(".entry-title");
  searchResult = this.page.locator(".page-title");

  printProductName = async (keyword: string) => {
    //await this.productTitle.waitFor();
    const title = this.productTitle;
    const results = await title.evaluateAll((list) =>
      list.map((element) => element.textContent)
    );
    log(results);
  };
}
