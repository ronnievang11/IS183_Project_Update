import { BookAppPage } from './app.po';

describe('book-app App', () => {
  let page: BookAppPage;

  beforeEach(() => {
    page = new BookAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
