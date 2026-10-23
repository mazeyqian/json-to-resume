const { expect, test } = require("@playwright/test");

test("renders the sole resume page without browser errors", async ({ page, baseURL }) => {
  const pageErrors = [];
  const failedResources = [];
  page.on("pageerror", error => pageErrors.push(error.message));
  page.on("response", response => {
    if (new URL(response.url()).origin === new URL(baseURL).origin && response.status() >= 400) {
      failedResources.push(response.url());
    }
  });
  page.on("requestfailed", request => {
    if (new URL(request.url()).origin === new URL(baseURL).origin) failedResources.push(request.url());
  });

  await page.goto("./");
  await expect(page).toHaveURL(baseURL);
  await expect(page).toHaveTitle("猫宁-初级喂猫师-2年");
  await expect(page.locator(".resume-title h1")).toHaveText("初级喂猫师");
  await expect(page.locator(".project-badge").first()).toBeVisible();
  await expect(page.locator(".skill-progress .progress-bar").first()).toBeVisible();
  await expect(page.locator(".resume-footer")).toContainText("Made with 💖 by Cheng（End）");
  const progress = page.getByRole("progressbar", { name: "喂猫", exact: true });
  await expect(progress).toHaveAttribute("aria-valuenow", "95");
  await expect(progress).toHaveCSS("width", /px$/);
  await expect(page.locator(".product-badge").first()).toHaveAttribute("href", "https://example.com/");
  await expect(page.locator(".product-badge").first()).toHaveAttribute("target", "_blank");
  await expect(page.locator(".resume-item.hide")).toBeHidden();

  await page.reload();
  await expect(page).toHaveURL(baseURL);
  await expect(page.locator(".resume-title h1")).toHaveText("初级喂猫师");
  await expect(page).toHaveTitle("猫宁-初级喂猫师-2年");
  await page.locator(".resume-experience").first().evaluate(element => element.classList.add("hide-in-print"));
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".resume-experience").first()).toBeHidden();
  await page.emulateMedia({ media: "screen" });
  await expect(page.locator(".resume-experience").first()).toBeVisible();
  if (process.env.E2E_MODE) {
    for (const file of ["robots.txt", "sitemap.xml"]) {
      const response = await page.request.get(new URL(file, baseURL).href);
      expect(response.status()).toBe(200);
      expect(await response.text()).toContain("https://chengchuu.github.io/json-to-resume/");
    }
  }
  expect(pageErrors).toEqual([]);
  expect(failedResources).toEqual([]);
});
