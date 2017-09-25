import { AppPage } from './app.po';

describe('visitkort App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should displayName welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
