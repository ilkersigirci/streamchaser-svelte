import type { Page } from "@playwright/test"

export const mockIndex = async (page: Page) => {
  // Regex matches all limits
  await page.route(/http:\/\/api.localhost\/search\/\*\?c=DK&limit=.*/, route =>
    route.fulfill({
      status: 200,
      path: "tests/test_data/no_input_hits.json",
    })
  )
  await page.route("http://api.localhost/providers/DK/", route =>
    route.fulfill({
      status: 200,
      path: "tests/test_data/providers.json",
    })
  )
  await page.route("http://apiv2.localhost/genres/", route =>
    route.fulfill({
      status: 200,
      path: "tests/test_data/genres.json",
    })
  )
}