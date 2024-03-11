import { Page } from "@playwright/test";

export class ContactPage {
  constructor(private page: Page) {}

  yourNameTextbox = this.page.locator(".your-name");
  yourEmailTextbox = this.page.locator(".your-email");
  subjectTextbox = this.page.locator(".your-subject");
  messageTextbox = this.page.locator(".your-message");
  submitButton = this.page.locator(".wpcf7-submit");

  fillContactForm = async (contactMessage: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    await this.yourNameTextbox.waitFor();
    await this.yourNameTextbox.fill(contactMessage.name);
    await this.yourEmailTextbox.waitFor();
    await this.yourEmailTextbox.fill(contactMessage.email);
    await this.subjectTextbox.waitFor();
    await this.subjectTextbox.fill(contactMessage.subject);
    await this.messageTextbox.waitFor();
    await this.messageTextbox.fill(contactMessage.message);
  };

  sendMessage = async () => {
    await this.submitButton.waitFor();
    await this.submitButton.click();
  };
}
