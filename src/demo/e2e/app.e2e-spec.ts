import { NgxMagicTableDemoPage } from './app.po';

describe('ngx-magic-table-demo App', () => {
  let page: NgxMagicTableDemoPage;

  beforeEach(() => {
    page = new NgxMagicTableDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
