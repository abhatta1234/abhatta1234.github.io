const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const source = readFileSync(require.resolve('../assets/js/custom.js'), 'utf8');

test('timeline controls start at the current role and respect boundaries and reduced motion', () => {
  const events = {};
  const buttons = [-1, 1].map(step => ({
    dataset: { timelineStep: String(step) },
    addEventListener: (_, callback) => { events[step] = callback; }
  }));
  const timeline = {
    clientWidth: 400,
    scrollWidth: 1200,
    get scrollLeft() { return this.position; },
    set scrollLeft(value) { this.position = Math.max(0, Math.min(value, this.scrollWidth - this.clientWidth)); },
    querySelector: selector => selector === '.exp-item' ? { offsetWidth: 240 } : {},
    addEventListener: (event, callback) => { events[event] = callback; },
    scrollBy(options) { this.lastScroll = options; this.scrollLeft += options.left; events.scroll(); }
  };
  const controls = { hidden: true, querySelectorAll: () => buttons };
  runInNewContext(source, {
    console: { log() {} },
    getComputedStyle: () => ({ columnGap: '24px' }),
    document: {
      addEventListener: (_, callback) => callback(),
      getElementById: id => id === 'career-timeline' ? timeline : null,
      querySelector: () => controls
    },
    window: { matchMedia: () => ({ matches: true }), addEventListener: (event, callback) => { events[event] = callback; } }
  });
  assert.equal(controls.hidden, false);
  assert.equal(timeline.scrollLeft, 800);
  assert.equal(buttons[1].disabled, true);
  events[-1]();
  assert.equal(timeline.scrollLeft, 536);
  assert.equal(timeline.lastScroll.behavior, 'instant');
  assert.equal(buttons[1].disabled, false);
  events[1]();
  assert.equal(timeline.scrollLeft, 800);
  for (let i = 0; i < 4; i++) events[-1]();
  assert.equal(timeline.scrollLeft, 0);
  assert.equal(buttons[0].disabled, true);
  timeline.clientWidth = timeline.scrollWidth;
  events.resize();
  assert.equal(buttons[1].disabled, true);
});

test('pages without a timeline continue to initialize', () => {
  runInNewContext(source, {
    document: { addEventListener: (_, callback) => callback(), getElementById: () => null },
    console: { log() {} }
  });
});
