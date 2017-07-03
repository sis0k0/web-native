import { WebnativePage } from './app.po';

describe('webnative App', () => {
  let page: WebnativePage;

  beforeEach(() => {
    page = new WebnativePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
