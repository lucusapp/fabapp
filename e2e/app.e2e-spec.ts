import { FabappPage } from './app.po';

describe('fabapp App', () => {
  let page: FabappPage;

  beforeEach(() => {
    page = new FabappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
