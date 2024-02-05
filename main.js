document.addEventListener("DOMContentLoaded", function () {
    const lexiconList = document.getElementById("lexicon-list");
    const wiktionaryFrame = document.getElementById("wiktionary-frame");
    
    const lexiconData = JSON.parse(document.getElementById("lexicon-data").textContent);

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

    // Initially render English lexicon (replace with your language data)
    const englishLexicon = lexiconData.English;
    renderLexicon(englishLexicon);
});
