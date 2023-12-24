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
