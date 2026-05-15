
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


// =====================================================
// ЛР  7 
// =====================================================


// 1. Подія через HTML-атрибут onclick
function showMouseMessage() {
    document.getElementById("event-output").textContent =
        "Pearson Hardman вітає вас. Натискання кнопки оброблено через HTML-атрибут onclick.";
}


// Подія через властивість onclick
let propertyButton = document.getElementById("property-event-btn");

propertyButton.onclick = function () {
    document.getElementById("event-output").textContent =
        "Порада від Харві: завжди контролюй ситуацію. Цей обробник призначено через властивість onclick.";
};


// 3. addEventListener: одна подія має кілька обробників
let multiHandlerButton = document.getElementById("multi-handler-btn");

function firstHandler() {
    document.getElementById("event-output").textContent =
        "Перший обробник: юридична фірма отримала новий кейс.";
}

function secondHandler() {
    alert("Другий обробник: Донна вже знає, кому передати цю справу.");
}

multiHandlerButton.addEventListener("click", firstHandler);
multiHandlerButton.addEventListener("click", secondHandler);


// 4. Обробник-об’єкт через handleEvent
let eventObject = {
    handleEvent(event) {
        document.getElementById("event-output").textContent =
            "Обробник-об’єкт спрацював. Натиснута кнопка: " + event.currentTarget.textContent;
    }
};

let objectHandlerButton = document.getElementById("object-handler-btn");

objectHandlerButton.addEventListener("click", eventObject);


// 5. Видалення обробника-об’єкта
let removeObjectHandlerButton = document.getElementById("remove-object-handler-btn");

removeObjectHandlerButton.addEventListener("click", function () {
    objectHandlerButton.removeEventListener("click", eventObject);

    document.getElementById("event-output").textContent =
        "Юридичний кейс закрито. Обробник-об’єкт видалено, тому кнопка «Обрати юридичний кейс» більше не реагує.";
});


// 6. Делегування подій для списку персонажів
let characterList = document.getElementById("character-event-list");

characterList.onclick = function (event) {
    if (event.target.tagName !== "LI") {
        return;
    }

    let allItems = characterList.querySelectorAll("li");

    for (let i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove("selected-character");
    }

    event.target.classList.add("selected-character");

    document.getElementById("event-output").textContent =
        "Обраний персонаж: " + event.target.textContent;
};


// 7. Меню з data-* і прийомом “Поведінка”
let suitsMenu = document.getElementById("suits-menu");

let menuActions = {
    showHarvey() {
        document.getElementById("behavior-output").textContent =
            "Харві Спектер — один із найсильніших адвокатів фірми. Він упевнений, стильний і завжди шукає спосіб перемогти.";
    },

    showMike() {
        document.getElementById("behavior-output").textContent =
            "Майк Росс має феноменальну пам’ять і нестандартне мислення. Його талант допомагає розв’язувати складні юридичні справи.";
    },

    showDonna() {
        document.getElementById("behavior-output").textContent =
            "Донна Полсен добре розуміє людей, швидко оцінює ситуацію і часто допомагає героям приймати правильні рішення.";
    },

    showLouis() {
        document.getElementById("behavior-output").textContent =
            "Луїс Літт — емоційний, амбітний і дуже працьовитий юрист. Він прагне визнання і дуже відданий фірмі.";
    },

    clearInfo() {
        document.getElementById("behavior-output").textContent =
            "Інформацію про персонажа очищено. Оберіть іншого героя.";
    }
};

suitsMenu.addEventListener("click", function (event) {
    let action = event.target.dataset.action;

    if (action && menuActions[action]) {
        menuActions[action]();
    }
});



// =====================================================
// ЛР 8
// =====================================================

let lawyerCards = document.querySelectorAll(".lawyer-card");
let mouseInfo = document.getElementById("mouse-info");
let caseZone = document.getElementById("case-zone");
let selectedLawyer = document.getElementById("selected-lawyer");

let draggedElement = null;
let shiftX = 0;
let shiftY = 0;

// mouseover і mouseout для кожної картки персонажа
for (let i = 0; i < lawyerCards.length; i++) {
    lawyerCards[i].addEventListener("mouseover", function (event) {
        event.target.classList.add("hovered-lawyer");

        mouseInfo.textContent =
            "Курсор наведено на юриста: " + event.target.dataset.lawyer;
    });

    lawyerCards[i].addEventListener("mouseout", function (event) {
        event.target.classList.remove("hovered-lawyer");

        if (event.relatedTarget) {
            mouseInfo.textContent =
                "Курсор перейшов на інший елемент сторінки.";
        } else {
            mouseInfo.textContent =
                "Курсор вийшов за межі сторінки.";
        }
    });

    lawyerCards[i].addEventListener("mousedown", startDrag);
}

// Початок перетягування
function startDrag(event) {
    draggedElement = event.target;

    shiftX = event.clientX - draggedElement.getBoundingClientRect().left;
    shiftY = event.clientY - draggedElement.getBoundingClientRect().top;

    draggedElement.classList.add("dragging-lawyer");

    document.body.append(draggedElement);

    moveAt(event.pageX, event.pageY);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDrag);
}

// Рух елемента за курсором
function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    if (isOverCaseZone(event.clientX, event.clientY)) {
        caseZone.classList.add("active-case-zone");
    } else {
        caseZone.classList.remove("active-case-zone");
    }
}

// Зміна координат елемента
function moveAt(pageX, pageY) {
    draggedElement.style.left = pageX - shiftX + "px";
    draggedElement.style.top = pageY - shiftY + "px";
}

// Завершення перетягування
function stopDrag(event) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", stopDrag);

    if (isOverCaseZone(event.clientX, event.clientY)) {
        let lawyerName = draggedElement.dataset.lawyer;

        selectedLawyer.textContent =
            "Справу передано персонажу: " + lawyerName + ".";

        caseZone.classList.remove("active-case-zone");

        draggedElement.remove();

        mouseInfo.textContent =
            lawyerName + " тепер відповідає за юридичну справу.";
    } else {
        returnLawyerBack(draggedElement);
        mouseInfo.textContent =
            "Персонажа не було перенесено до справи.";
    }

    draggedElement.classList.remove("dragging-lawyer");
    draggedElement = null;
}

// Перевірка, чи курсор над зоною справи
function isOverCaseZone(clientX, clientY) {
    let zoneRect = caseZone.getBoundingClientRect();

    return (
        clientX >= zoneRect.left &&
        clientX <= zoneRect.right &&
        clientY >= zoneRect.top &&
        clientY <= zoneRect.bottom
    );
}

// Якщо не донесли персонажа до справи — повертаємо назад у список
function returnLawyerBack(element) {
    element.style.left = "";
    element.style.top = "";
    element.classList.remove("dragging-lawyer");

    document.querySelector(".lawyers-panel").append(element);
}