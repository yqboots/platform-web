import {YqPage} from './app.po';

describe('YQBoots App', () => {
    let page: YqPage;

    beforeEach(() => {
        page = new YqPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to YQBoots!');
    });
});
