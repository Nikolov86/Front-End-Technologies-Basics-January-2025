import { test, expect } from "@playwright/test";

//Verify if a user can add a task

test("User can add a task", async ({ page }) => {
  // Arrange
  await page.goto("http://localhost:8080/");
  // Act
  await page.fill("#task-input", "Test Task");
  await page.click("#add-task");
  // Assert
  const taskText = await page.textContent(".task");
  expect(taskText).toContain("Test Task");
});
