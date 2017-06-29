import { Angular2I18nPage } from './app.po';

describe('angular2-i18n App', () => {
  let page: Angular2I18nPage;

  beforeEach(() => {
    page = new Angular2I18nPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
