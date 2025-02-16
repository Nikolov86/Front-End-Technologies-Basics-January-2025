const {
  test,
  describe,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
  expect,
} = require("@playwright/test");
const { chromium } = require("playwright");

const host = "http://localhost:3000";

let browser;
let context;
let page;

let user = {
  email: "",
  password: "123456",
  confirmPass: "123456",
};

let bookTitle = "";

describe("e2e tests", () => {
  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterEach(async () => {
    await page.close();
    await context.close();
  });

  describe("authentication", () => {
    //1
    test("User should register with valid data", async ({ page }) => {
      // Arrange
      await page.goto(host);
      await page.click('//a[@href="/register"]');
      await page.waitForSelector("//form");
      let random = Math.floor(Math.random() * 1000);
      user.email = `randomEmail${random}@abv.bg`;
      // Act
      await page.locator('//input[@type="email"]').fill(user.email);
      await page.locator('//input[@name="password"]').fill(user.password);
      await page.locator('//input[@name="conf-pass"]').fill(user.confirmPass);
      await page.click('//button[@type="submit"]');
      // Assert
      await expect(page.locator('//a[@href="/logout"]')).toBeVisible();
      expect(page.url()).toBe(`${host}/`);
    });
    //2
    test("User can be login with valid data", async ({ page }) => {
      // Arrange
      await page.goto(host);
      await page.click('//a[@href="/login"]');
      await page.waitForSelector("//form");

      // Act
      await page.locator('//input[@name="email"]').fill(user.email);
      await page.locator('//input[@type="password"]').fill(user.password);
      await page.click('//button[@type="submit"]');
      // Assert
      await expect(page.locator('//a[@href="/logout"]')).toBeVisible();
      expect(page.url()).toBe(`${host}/`);
    });
    //3
    test("User should can logout from the Application", async ({ page }) => {
      // Arrange
      await page.goto(host);
      await page.click('//a[@href="/login"]');
      await page.waitForSelector("//form");
      await page.locator('//input[@name="email"]').fill(user.email);
      await page.locator('//input[@type="password"]').fill(user.password);
      await page.click('//button[@type="submit"]');

      // Act
      await page.click('//a[@href="/logout"]');
      // Assert
      await expect(page.locator('//a[@href="/login"]')).toBeVisible();
      expect(page.url()).toBe(`${host}/`);
    });
  });

  describe("navbar", () => {
    test("Navigation for guest user", async ({ page }) => {
      // Arrange
      await page.goto(host);

      // Assert
      await expect(page.locator('//a[@href="/"]')).toBeVisible();
      await expect(page.locator('//a[@href="/collection"]')).toBeVisible();
      await expect(page.locator('//a[@href="/collection"]')).toBeVisible();
      await expect(page.locator('//a[@href="/search"]')).toBeVisible();
      await expect(page.locator('//a[@href="/login"]')).toBeVisible();
      await expect(page.locator('//a[text()="Register"]')).toBeVisible();
      await expect(page.locator('//a[text()="Create Book"]')).toBeHidden();
      await expect(page.locator('//a[text()="Logout"]')).toBeHidden();
    });

    test("Navigation for login user", async ({ page }) => {
      // Arrange
      await page.goto(host);
      await page.click('//a[@href="/login"]');
      await page.waitForSelector("//form");
      await page.locator('//input[@name="email"]').fill(user.email);
      await page.locator('//input[@type="password"]').fill(user.password);

      // Act
      await page.click('//button[@type="submit"]');
      // Assert
      await expect(page.locator('//a[@href="/"]')).toBeVisible();
      await expect(page.locator('//a[@href="/collection"]')).toBeVisible();
      await expect(page.locator('//a[text()="Create Book"]')).toBeVisible();
      await expect(page.locator('//a[@href="/search"]')).toBeVisible();
      await expect(page.locator('//a[text()="Logout"]')).toBeVisible();
      await expect(page.locator('//a[@href="/login"]')).toBeHidden();
      await expect(page.locator('//a[text()="Register"]')).toBeHidden();
    });
  });

  describe("CRUD", () => {
    
    test("Create a Book", async () => {
      await page.goto(host);
      await page.click('//a[@href="/login"]');
      await page.waitForSelector("//form");
      await page.locator('//input[@name="email"]').fill(user.email);
      await page.locator('//input[@type="password"]').fill(user.password);
      await page.click('//button[@type="submit"]');
            // Navigate to Create Page
      await page.click('//a[text()="Create Book"]');
      await page.waitForSelector("//form");

      // Generate random book title
      let random = Math.floor(Math.random() * 1000);
      bookTitle = `TestBook${random}`;

      // Fill the form
      await page.locator("//input[@name='title']").fill(bookTitle);
      await page
        .locator("//input[@name='coverImage']")
        .fill("/images/toKillAMockingbird.jpg");
      await page.locator("//input[@name='year']").fill("2025");
      await page.locator("//input[@name='author']").fill("Test Author");
      await page.locator("//input[@name='genre']").fill("Classics");
      await page.locator("//textarea[@name='description']").fill("This is a test book.");

      // Submit the form
      await page.click('//button[@type="submit"]');
      //await page.waitForSelector("//form");

      // Assert
      await expect(
        page.locator(
          `//div[@class="book"]//div[@class="book-details"]//h2[text()="${bookTitle}"]`
        )).toBeVisible();
        expect(page.url()).toBe(`${host}/collection`)
    });
    test('Edit a Book ', async () => {
      await page.goto(host);
      await page.click('//a[@href="/login"]');
      await page.waitForSelector("//form");
      await page.locator('//input[@name="email"]').fill(user.email);
      await page.locator('//input[@type="password"]').fill(user.password);
      await page.click('//button[@type="submit"]');
      // Arrange
      await page.click('//a[@href="/search"]');
      await page.locator('//input[@name="search"]').fill(bookTitle);
      await page.click('//button[@type="submit"]');
      // Act
      await page.click('//div[@id="searchPage"]//section[@class="search-results"]//ul//li//a');
      await page.click('//div[@class="actions"]//a[@class="edit-btn"]');
      await page.waitForSelector('//form');
      await page.locator("//input[@name='title']").fill("MyBooks");
      await page.click('//button[@type="submit"]');
      // Assert
      await expect(page.locator('//div[@class="book-info"]/h2[text()="MyBooks"]')).toHaveCount(1);

    });
    test('Delete a Book', async ({ page }) => {
      // Arrange
      await page.goto(host);
      await page.click('//a[@href="/login"]');
      await page.waitForSelector("//form");
      await page.locator('//input[@name="email"]').fill(user.email);
      await page.locator('//input[@type="password"]').fill(user.password);
      await page.click('//button[@type="submit"]');
      // Act
      await page.click('//a[@href="/search"]');
      await page.locator('//input[@name="search"]').fill("MyBooks");
      await page.click('//button[@type="submit"]');
      await page.click('//div[@id="searchPage"]//section[@class="search-results"]//ul//li//a');
      await page.click('//div[@class="actions"]//a[text()="Delete"]');
      //await page.waitForSelector("//form");
      // Assert
      await expect(page.locator('//div[@class="book-info"]/h2[text()="MyBooks"]')).toHaveCount(0);
    });
  });
});
