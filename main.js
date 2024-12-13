(
  function() {
    function hideDraftPullRequests() {
        const draftLinks = Array.from(document.querySelectorAll('a.Link--muted'))
        .filter(link => link.textContent.trim() === 'Draft');

        draftLinks.forEach(draftLink => {
            // Traverse up the DOM to find the PR's container element.
            // On GitHub, each PR row might be something like '.js-issue-row' or '.Box-row'
            let prRow = draftLink.closest('.js-issue-row, .Box-row, .Box-row--focus-gray');
            if (prRow) {
                prRow.style.display = 'none';
            }
        });
    }
    hideDraftPullRequests();
    const observer = new MutationObserver(hideDraftPullRequests);
    observer.observe(document.body, { childList: true, subtree: true });
  }
)();

