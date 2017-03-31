import { CrmTutorwizardPage } from './app.po';

describe('crm-tutorwizard App', () => {
  let page: CrmTutorwizardPage;

  beforeEach(() => {
    page = new CrmTutorwizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
