
function nextProblem() {
    document.getElementById("restartButton").disabled = false;
    if(!nextIncorrectMillicycle() && !nextIncorrectName()) {
        document.getElementById("noteLabel").innerText = "✅ миЛициклов и переводов имён больше не обнаружено ✅";
        document.getElementById("nextButton").disabled = true;
    }
}

let lastIncorrectMillicycle = -1;

function nextIncorrectMillicycle() {
    const position = textPositionInArea("милицикл", lastIncorrectMillicycle);
    if(position < 0) return false;
    
    lastIncorrectMillicycle = position + 1;
    document.getElementById("noteLabel").innerText = "⚠️ Найден миЛицикл! ⚠️";
    const textArea = document.getElementById("textArea");
    focusText(textArea, position, 8);
    return true;
}

function textPositionInArea(str, startPosition) {
    return textArea.value.toLowerCase().indexOf(str.toLowerCase(), startPosition);
}

function focusText(textArea, position, length) {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    //Сначала нужно прокрутить body, чтобы textarea было видно полностью
    document.body.scrollTop = scrollHeight;
    
    const selectionEnd = position + length;
    textArea.focus(); //Эта строка важна, т.к операции сами по себе связаны с фокусом
    textArea.scrollTop = 0;
    const fullText = textArea.value;
    textArea.value = fullText.substring(0, selectionEnd);
    textArea.scrollTop = textArea.scrollHeight;
    textArea.value = fullText;
    textArea.setSelectionRange(position, selectionEnd);
}

let incorrectNames = [
    "Рейт", "Сыщик", " Твердолоб", "Нытик", "Трещотк", "Храповик", "Дымовик", "Брав", "Бархан",
    "Молниекрыл", "Силач", "Шершень", "Охотник", "Броневик", "Апперкот", "Мерцатель", "Следопыт",
    "Плакун", "Разрядник", "Скалолаз", "Истребитель", "Шлак", "Слякоть", "Смельчак", 
    "Взрывало", "Рычун", "Налетало", "Шезлонг", "Гранит", "Тягач", "Томогавк", "Паникер", 
    "Тормоз", "Водомёт", "Крах", "Бодун", "Стальн", "Реверс", "Пистон",
    "Эффект", "Пролаз", "Верстак", "Компот", "Порез", "Рогатк", "Ворчун",
    "Спринтер", "Дикарь", "Гудок", "Крут", "Затвор", "Косинус", "Световик", "Штраф",
    "Долгопупс", "Долгорук", "Длиннорук", "Револьвер", "Астрофакел", "Панч", "Цереброс", "Быстр",
    "Крушитель", "Фантазер", "Хром", "Умник", "Снайпер", "Коготь", "Фугас", "Ливень", 
    "Грив", "Веточк", "Ветер", "Рапир", "Крепыш", "Максимус", "Победител", "Огонёк", "Скандалист"
];
let currentIndex = 0;
let lastCurrentNamePosition = -1;

function nextIncorrectName() {
    while(true) {
		if(currentIndex >= incorrectNames.length) break;
		
        let currentName = incorrectNames[currentIndex];
        const position = textPositionInArea(currentName, lastCurrentNamePosition);
        if(position < 0) {
			lastCurrentNamePosition = -1;
			currentIndex++;
		} else {
		    lastCurrentNamePosition = position + 1;
            document.getElementById("noteLabel").innerText = 
                   "⚠️ Возможно, найденный текст является неудачным переводом имени или неправильным транслитом (срабатывание может быть ложным) ⚠️";
            const textArea = document.getElementById("textArea");
            focusText(textArea, position, currentName.length);
            return true;    	
		}
    }
    return false;
}

function restartCheck() {
    lastIncorrectMillicycle = -1;
    lastCurrentNamePosition = -1;
    currentIndex = 0;
    document.getElementById("nextButton").disabled = false;
    document.getElementById("restartButton").disabled = true;
    document.getElementById("noteLabel").innerText = "Вставь текст и нажми \"Дальше\"...";
}
