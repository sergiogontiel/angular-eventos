import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
<<<<<<< HEAD
    expect(await page.getTitleText()).toEqual('angular-productos app is running!');
=======
    expect(await page.getTitleText()).toEqual('angular-eventos app is running!');
>>>>>>> 9174318350ccacaa77f3a9132d3df51fec9a1afa
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
