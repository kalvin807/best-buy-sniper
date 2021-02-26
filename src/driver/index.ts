import { chromium, Browser } from 'playwright';

let browser: Browser;

export const createBrowser = async (): Promise<Browser> => {
  const options = {
    headless: true,
    ignoreHTTPSErrors: true,
    defaultViewport: { width: 1920, height: 1080 }
  };

  browser = await chromium.launch(options);

  return browser;
};

export const getBrowser = (): Browser => {
  return browser;
};
