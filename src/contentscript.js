import MutationSummary from 'mutation-summary';

const observer = new MutationSummary({
  callback: (summaryObjects) => {
    summaryObjects[0].added.forEach(el => {
      el.scrollTop = 0;
    });
  },
  queries: [
    { element: '#js-detail-nav-content' },
  ],
});