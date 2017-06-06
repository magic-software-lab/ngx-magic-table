import { NgxMagicTableDemoPage } from './app.po';

describe('ngx-magic-table-demo App', () => {
  let page: NgxMagicTableDemoPage;

  beforeEach(() => {
    page = new NgxMagicTableDemoPage();
  });

  it('should display ngx-magic-table', () => {
    page.navigateTo();
    expect(element(by.tagName('ngx-magic-table'))).toBeDefined();
  });
});
