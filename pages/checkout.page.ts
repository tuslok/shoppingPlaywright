import { Page } from "@playwright/test";
import { deliveryDetails } from "../data/deliveryDetails.spec";
import { MethodPayment } from "./methodPayment.page";

export class CheckoutPage {
  constructor(private page: Page) {}

  firstName = this.page.locator("#billing_first_name");
  lastName = this.page.locator("#billing_last_name");
  companyName = this.page.locator("#billing_company");
  country = this.page.locator("#select2-billing_country-container");
  streetAddress = this.page.locator("#billing_address_1");
  streetAddressOptional = this.page.locator("#billing_address_2");
  postalCode = this.page.locator("#billing_postcode");
  city = this.page.locator("#billing_city");
  phone = this.page.locator("#billing_phone");
  emailAddress = this.page.locator("#billing_email");

  placeOrderButton = this.page.locator("#place_order");

  fillCheckoutForm = async (deliveryDetails: {
    firstName: any;
    lastName: any;
    country: any;
    streetAddress: any;
    postalCode: any;
    city: any;
    phone: any;
    emailAddress: any;
  }) => {
    await this.firstName.waitFor();
    await this.firstName.fill(deliveryDetails.firstName);

    await this.lastName.waitFor();
    await this.lastName.fill(deliveryDetails.lastName);

    // https://github.com/vuetifyjs/vuetify/issues/12982
    // adding readonly prop makes the v-select readonly and cannot be edited. A value cannot be selected.
    // await this.country.waitFor();
    // await this.country.selectOption(deliveryDetails.country);

    await this.streetAddress.waitFor();
    await this.streetAddress.fill(deliveryDetails.streetAddress);

    await this.postalCode.waitFor();
    await this.postalCode.fill(deliveryDetails.postalCode);

    await this.city.waitFor();
    await this.city.fill(deliveryDetails.city);

    await this.phone.waitFor();
    await this.phone.fill(deliveryDetails.phone);

    await this.emailAddress.waitFor();
    await this.emailAddress.fill(deliveryDetails.emailAddress);
  };

  placeOrder = async () => {
    await this.placeOrderButton.waitFor();
    await this.placeOrderButton.click();
    //await this.page.waitForURL(/\/lost-password/, { timeout: 3000 });
  };
}
