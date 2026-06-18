const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const app = require("../src/app");

let server;
let driver;

beforeAll(async () => {
  server = app.listen(3001);

  const options = new chrome.Options();
  options.addArguments("--headless=new");
  options.addArguments("--no-sandbox");
  options.addArguments("--disable-dev-shm-usage");

  driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
}, 30000);

afterAll(async () => {
  if (driver) await driver.quit();
  if (server) server.close();
});

test("deve abrir a página inicial no navegador", async () => {
  await driver.get("http://localhost:3001");

  const titulo = await driver.findElement(By.css("h1")).getText();

  expect(titulo).toBe("Projeto DevOps N3");
}, 30000);
