const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      "--start-maximized", // you can also use '--start-fullscreen'
    ],
  });
  const page = await browser.newPage();
  await page.goto("https://api.regulaforensics.com/?utm_source=docs");

 
  const elementHandle = await page.waitForSelector("input[type=file]");
  await elementHandle.uploadFile("./images/dni.jpeg");


 /*
  await page.waitForSelector("tbody>tr");

  const dniInformation = await page.evaluate(() => {
    let rowElements = document.querySelectorAll("tbody>tr");
    rowElements = [...rowElements];

    const dniInformation = rowElements.map((el) => {
      const [
        { innerText: attribute },
        { innerText: MRZ },
        { innerText: visualZone },
      ] = el.children;
      return { attribute, MRZ, visualZone };
    });

    return dniInformation;
  });

  console.log(dniInformation);
  */
})();
