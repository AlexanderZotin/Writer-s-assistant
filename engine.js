
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
    scrollToPosition(textArea, position);
    document.getElementById("button").innerText = "Дальше";    
    return true;
}

function textPositionInArea(str, startPosition) {
    return textArea.value.toLowerCase().indexOf(str.toLowerCase(), startPosition);
}

function focusText(textArea, position, length) {
    textArea.selectionStart = position;
    textArea.selectionEnd = textArea.selectionStart + length;
    textArea.focus();
}

function scrollToPosition(textArea, position) {
	//TODO: почти правильно, но немного надо поправить. В целом, надо скроллить чутка поменьше
	console.log("length: " + textArea.value.length);
	console.log("position: " + position);
    const numberOfLines = Math.floor(textArea.scrollHeight / 20);
	console.log("numberOfLines: " + numberOfLines);
    const procent = position / (textArea.value.length / 100);
	console.log("procent: " + procent);
	const lines = numberOfLines / 100 * procent;
	console.log("lines: " + lines);
    const toScroll = 20 * lines;
	console.log("toScroll: " + toScroll);
	console.log("scrollHeight: " + textArea.scrollHeight);
    textArea.scrollTop = toScroll;
}

let incorrectNames = [
    "Сыщик", "Твердолобый", "Нытик", "Трещотка", "Храповик", "Дымовик", "Бравый", "Бархан",
    "Молниекрыл", "Силач", "Шершень", "Охотник", "Броневик", "Апперкот", "Мерцатель", "Следопыт",
    "Плакун", "Разрядник", "Скалолаз", "Истребитель", "Шлак", "Слякоть", "Смельчак", 
    "Взрывало", "Рычун", "Налетало", "Шезлонг", "Гранит", "Тягач", "Томогавк", "Паникер", 
    "Тормоз", "Дымовик", "Водомёт", "Крах", "Бодун", "Стальной", "Реверс", "Пистон",
    "Эффект", "Пролаза", "Друг", "Верстак", "Компот", "Порез", "Рогатка", "Ворчун",
    "Спринтер", "Дикарь", "Гудок", "Крутой", "Затвор", "Косинус", "Световик", "Штраф",
    "Долгопупс", "Долгорукий", "Длиннорукий", "Револьвер", "Астрофакел", "Панч", "Цереброс", "Быстрый",
    "Крушитель", "Фантазер", "Хром", "Умник", "Снайпер", "Коготь", "Фугас", "Ливень", 
    "Грива", "Веточка", "Ветер", "Рапира", "Крепыш Максимус", "Победитель", "Огонёк", "Скандалист"
];
let currentIndex = 0;
let lastIncorrectNamePosition = -1;

function nextIncorrectName() {
    for(; currentIndex < incorrectNames.length; currentIndex++) {
        let currentName = incorrectNames[currentIndex];
        const position = textPositionInArea(currentName, lastIncorrectNamePosition);
        if(position < 0) continue;
        
        lastIncorrectNamePosition = position + 1;
        document.getElementById("noteLabel").innerText = 
               "⚠️ Возможно, найденный текст является неудачным переводом имени (срабатывание может быть ложным) ⚠️";
        const textArea = document.getElementById("textArea");
        focusText(textArea, position, currentName.length);
        scrollToPosition(textArea, position); 
        return true;    
    }
    return false;
}

function restartButton() {
	lastIncorrectMillicycle = -1;
	lastIncorrectNamePosition = -1;
	currentIndex = 0;
	document.getElementById("nextButton").disabled = false;
	document.getElementById("restartButton").disabled = true;
	document.getElementById("noteLabel").innerText = "Вставь текст и нажми \"Дальше\"...";
}
