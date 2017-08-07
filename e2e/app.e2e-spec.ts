import { Angular4BasicsPage } from './app.po';

describe('angular4-basics App', () => {
  let page: Angular4BasicsPage;

  beforeEach(() => {
    page = new Angular4BasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
