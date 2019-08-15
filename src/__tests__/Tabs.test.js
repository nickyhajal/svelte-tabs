require('@testing-library/jest-dom/extend-expect');
const { cleanup, fireEvent, render, prettyDOM } = require('@testing-library/svelte');
const { tick } = require('svelte');

const App = require('./Tabs.test.svelte');

expect.extend({
  toBeSelectedTab(tab) {
    return {
      pass: tab.classList.contains('svelte-tabs__selected') && tab.getAttribute('aria-selected') === 'true',
      message: () => this.isNot ? 'Tab was selected' : 'Tab was not selected'
    };
  }
});

beforeEach(cleanup);

describe('Tabs', () => {
  it('should show the first tab by default', () => {
    const { getByText } = render(App);

    const firstTab = getByText('Tab One');
    expect(firstTab).toHaveClass('svelte-tabs__selected');
    expect(firstTab.getAttribute('aria-selected')).toBe('true');

    const firstTabPanel = getByText('Panel One');
    expect(firstTabPanel).toBeInTheDocument();
  });

  it('should switch tabs by clicking', async () => {
    const { getByText, queryByText } = render(App);

    const firstTab = getByText('Tab One');

    const secondTab = getByText('Tab Two');
    fireEvent.click(secondTab);
    await tick();

    expect(secondTab).toBeSelectedTab();
    expect(getByText('Panel Two')).toBeInTheDocument();
    
    expect(firstTab).not.toBeSelectedTab();
    expect(queryByText('Panel One')).not.toBeInTheDocument();
  });

  it('should have the proper aria-controls and aria-labelledby relationships', async () => {
    const { getByText } = render(App);

    await tick();

    const firstTab = getByText('Tab One');
    const firstTabPanel = getByText('Panel One').parentElement;

    expect(firstTab.getAttribute('aria-controls')).toEqual(firstTabPanel.id);
    expect(firstTabPanel.getAttribute('aria-labelledby')).toEqual(firstTab.id);
  });

  it('should cycle tabs with the right arrow key', async () => {
    const { getByText } = render(App);
    await tick();

    const firstTab = getByText('Tab One');
    fireEvent.keyDown(firstTab, { key: 'ArrowRight' });
    await tick();

    const secondTab = getByText('Tab Two');
    expect(secondTab).toBeSelectedTab();
    expect(firstTab).not.toBeSelectedTab();
    fireEvent.keyDown(secondTab, { key: 'ArrowRight' });
    await tick();

    const thirdTab = getByText('Tab Three');
    expect(thirdTab).toBeSelectedTab();
    expect(secondTab).not.toBeSelectedTab();
    fireEvent.keyDown(thirdTab, { key: 'ArrowRight' });
    await tick();

    expect(firstTab).toBeSelectedTab();
    expect(thirdTab).not.toBeSelectedTab();
  });

  it('should cycle tabs with the left arrow key', async () => {
    const { getByText } = render(App);
    await tick();

    const firstTab = getByText('Tab One');
    fireEvent.keyDown(firstTab, { key: 'ArrowLeft' });
    await tick();

    const thirdTab = getByText('Tab Three');
    expect(thirdTab).toBeSelectedTab();
    expect(firstTab).not.toBeSelectedTab();
    fireEvent.keyDown(thirdTab, { key: 'ArrowLeft' });
    await tick();

    const secondTab = getByText('Tab Two');
    expect(secondTab).toBeSelectedTab();
    expect(thirdTab).not.toBeSelectedTab();
    fireEvent.keyDown(secondTab, { key: 'ArrowLeft' });
    await tick();

    expect(firstTab).toBeSelectedTab();
    expect(secondTab).not.toBeSelectedTab();
  });
});