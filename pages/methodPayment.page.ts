import { Page } from "@playwright/test";

export class MethodPayment {
  constructor(private page: Page) {}

  bankTransfer = this.page.locator("#payment_method_bacs");
  checkPayment = this.page.locator("#payment_method_cheque");
  cashOnDelivery = this.page.locator("#payment_method_cod");
  paypalPayment = this.page.locator("#payment_method_paypal");

  selectBankAccount = async () => {
    await this.bankTransfer.waitFor();
    await this.bankTransfer.click();
  };

  selectCheckPayment = async () => {
    await this.checkPayment.waitFor();
    await this.checkPayment.click();
  };

  selectCashOnDelivery = async () => {
    await this.cashOnDelivery.waitFor();
    await this.cashOnDelivery.click();
  };

  selectPaypalPayment = async () => {
    await this.paypalPayment.waitFor();
    await this.paypalPayment.click();
  };
}
