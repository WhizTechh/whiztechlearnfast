document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab[data-tab-target]');
    var tabContents = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var targetId = tab.getAttribute('data-tab-target');
            var target = document.querySelector(targetId);

            tabs.forEach(function (t) {
                t.classList.toggle('active', t === tab);
            });

            tabContents.forEach(function (content) {
                content.classList.toggle('active', content === target);
            });
        });
    });

    document.querySelector('.tab[data-tab-target="#home"]').click();
});

document.getElementById("copyemailaddressBtn").addEventListener('click', ()=>{
    var text = document.getElementById('emailaddress').innerHTML;
    navigator.clipboard.writeText(text);
});
document.getElementById("copydiscordusernameBtn").addEventListener('click', ()=>{
    var text = document.getElementById('discordusername').innerHTML;
    navigator.clipboard.writeText(text);
});

function search() {
    const searchTerm = document.getElementById('searchingBar').value.toLowerCase();
    const details = document.querySelectorAll('details');
    const anchors = document.querySelectorAll('a');

    // Reset all details
    details.forEach(detail => {
      detail.open = false;
    });

    // Highlight and expand matching items
    anchors.forEach(anchor => {
      const text = anchor.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        let element = anchor;
        while (element && element.tagName !== 'DETAILS') {
          element = element.parentElement;
        }
        if (element) {
          element.open = true;
          // Open all parent <details> elements
          let parent = element.parentElement;
          while (parent && parent.tagName === 'DETAILS') {
            parent.open = true;
            parent = parent.parentElement;
          }
        }
      }
    });
  }
