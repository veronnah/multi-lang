let languages = {
    eng: {
        welcome: "Welcome everyone"
    },
    ru: {
        welcome: "Добро пожаловать"
    }
};
let dataReload = document.querySelectorAll(".data-reload");
let currentLanguage = localStorage.getItem('language');
if (currentLanguage == null) {
    localStorage.setItem("language", "ru");
} else {
    phrasesByLanguage(localStorage.getItem("language"));
}

function phrasesByLanguage(language) {
    switch (language) {
        case "ru":
            hi.textContent = languages.ru.welcome;
            break;
        case "eng":
            hi.textContent = languages.eng.welcome;
            break;
    }
}

for (let i = 0; i < dataReload.length; i++) {
    console.log(dataReload);
    dataReload[i].onclick = function () {
        localStorage.setItem("language", dataReload[i].dataset.language);
        window.location.reload();
    }
}