
// Власна функція "Діалог з користувачем"
function userDialog() {
    let userName = prompt("Введіть ваше ім'я:");
    let favoriteCharacter = prompt("Хто ваш улюблений персонаж серіалу: Харві, Майк, Донна чи Луїс?");

    let result = "";

    if (userName && favoriteCharacter) {
        result += "Привіт, " + userName + "! ";
        result += "Ваш вибір — " + favoriteCharacter + ". ";

        if (favoriteCharacter.toLowerCase() === "харві") {
            result += "Харві асоціюється з упевненістю, стилем і перемогою.";
        } else if (favoriteCharacter.toLowerCase() === "майк") {
            result += "Майк асоціюється з розумом, пам’яттю і нестандартним мисленням.";
        } else if (favoriteCharacter.toLowerCase() === "донна") {
            result += "Донна асоціюється з уважністю, харизмою і розумінням людей.";
        } else if (favoriteCharacter.toLowerCase() === "луїс") {
            result += "Луїс асоціюється з емоційністю, працьовитістю і відданістю справі.";
        } else {
            result += "Це цікавий вибір персонажа.";
        }
    } else {
        result += "Ви не ввели всі дані для діалогу.";
    }

    result += " Рівень інтересу до серіалу: ";

    for (let i = 1; i <= 3; i++) {
        result += "★";
    }

    document.getElementById("dialog-output").textContent = result;
}

// Функція виводу інформації про розробника 
function showDeveloperInfo(lastName, firstName, position = "розробник сторінки") {
    let output = document.getElementById("developer-output");

    output.innerHTML =
        "<b>Інформація про розробника:</b><br>" +
        "Прізвище: " + lastName + "<br>" +
        "Ім'я: " + firstName + "<br>" +
        "Посада: " + position;
}

// Функція порівняння двох рядків
function compareStrings() {
    let firstString = prompt("Введіть першу цитату або фразу із серіалу:");
    let secondString = prompt("Введіть другу цитату або фразу із серіалу:");

    if (!firstString || !secondString) {
        alert("Потрібно ввести обидві фрази.");
        return;
    }

    if (firstString.length > secondString.length) {
        alert("Довша фраза: " + firstString);
    } else if (secondString.length > firstString.length) {
        alert("Довша фраза: " + secondString);
    } else {
        alert("Фрази однакової довжини.");
    }
}

// Зміна фону сторінки на 30 секунд
function changeBackgroundFor30Seconds() {
    let oldBackground = document.body.style.backgroundColor;

    document.body.style.backgroundColor = "#2b0000";

    alert("Атмосферу сторінки змінено на темнішу на 30 секунд.");

    setTimeout(function () {
        document.body.style.backgroundColor = oldBackground;
        alert("Колір фону сторінки повернуто назад.");
    }, 30000);
}

// Перенаправлення браузера на іншу сторінку через location
function redirectToCharacters() {
    let answer = confirm("Перейти на сторінку з персонажами серіалу?");

    if (answer) {
        location.href = "characters.html";
    }
}

// Демонстрація DOM-методів і властивостей
function domDemo() {
    // getElementById
    let domText = document.getElementById("dom-text");

    // textContent
    domText.textContent = "Pearson Hardman — фірма, де розгортається значна частина подій серіалу.";

    // innerHTML
    let domArea = document.getElementById("dom-area");
    domArea.innerHTML += "<p><b>Додано через innerHTML:</b> герої серіалу часто мають приймати складні професійні рішення.</p>";

    // querySelectorAll
    let domItems = document.querySelectorAll(".dom-item");

    for (let i = 0; i < domItems.length; i++) {
        domItems[i].style.color = "#ffd6d6";
        domItems[i].textContent = "Оновлений опис героя №" + (i + 1) + " через querySelectorAll.";
    }

    // nodeValue / data
    let textNode = document.createTextNode(" Новий текстовий вузол про атмосферу юридичної фірми.");
    textNode.nodeValue = " Текстовий вузол змінено через nodeValue.";
    textNode.data = " Текстовий вузол остаточно змінено через data: серіал поєднує право, драму і гумор.";

    // document.createElement
    let newParagraph = document.createElement("p");
    newParagraph.append(textNode);

    // append
    domArea.append(newParagraph);

    // prepend
    let firstNote = document.createElement("p");
    firstNote.textContent = "Цей текст додано на початок DOM-блоку: сайт розповідає про серіал «Форс-мажори».";
    domArea.prepend(firstNote);

    // after
    let afterNote = document.createElement("p");
    afterNote.textContent = "Цей текст додано після DOM-блоку: JavaScript може вставляти елементи у різні місця сторінки.";
    domArea.after(afterNote);

    // outerHTML
    let outerExample = document.createElement("p");
    outerExample.textContent = "Цей текст буде замінено через outerHTML.";
    domArea.append(outerExample);
    outerExample.outerHTML = "<p><i>Елемент замінено через outerHTML: тепер це опис ролі юридичної фірми в сюжеті.</i></p>";

    // replaceWith
    let replaceBlock = document.createElement("p");
    replaceBlock.textContent = "Старий опис персонажа для replaceWith.";
    domArea.append(replaceBlock);

    let newReplaceBlock = document.createElement("p");
    newReplaceBlock.textContent = "Цей текст вставлено через replaceWith: персонажі серіалу мають різні характери та цілі.";
    replaceBlock.replaceWith(newReplaceBlock);

    // remove
    let removeBlock = document.createElement("p");
    removeBlock.textContent = "Цей службовий текст буде створено і видалено через remove.";
    domArea.append(removeBlock);
    removeBlock.remove();
}