document.addEventListener("DOMContentLoaded", function () {
    const lexiconList = document.getElementById("lexicon-list");
    const wiktionaryFrame = document.getElementById("wiktionary-frame");

    fetch("french.json")
        .then(response => response.json())
        .then(data => renderLexicon(data))
        .catch(error => console.error('Error fetching lexicon:', error));

    function renderLexicon(languageLexicon) {
        lexiconList.innerHTML = "";
        languageLexicon.forEach((entry) => {
            const listItem = document.createElement("div");
            listItem.innerHTML = `<a href="#" onclick="showWord('${entry.link}')">${entry.word}</a>`;
            lexiconList.appendChild(listItem);
        });
    }

    window.showWord = function (wiktionaryLink) {
        wiktionaryFrame.src = wiktionaryLink;
    };
});