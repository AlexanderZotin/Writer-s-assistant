
function nextProblem() {
	const buttonText = document.getElementById("button").innerText;
	if(buttonText === "Проверить ещё раз!") {
		lastIncorrectMillicycle = 0;
	}
	if(!nextIncorrectMillicycle() && !nextIncorrectName()) {
		onNoProblems();
	}
}

let lastIncorrectMillicycle = 0;

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
	return textArea.value.toLowerCase().indexOf(str, startPosition);
}


function focusText(textArea, position, length) {
	textArea.selectionStart = position;
    textArea.selectionEnd = textArea.selectionStart + length;
    textArea.focus();
}

function scrollToPosition(textArea, position) {
	const procent = position / (textArea.value.length / 100);
	const toScroll = Math.round(textArea.scrollHeight / 100 * procent);
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
let lastIncorrectNamePosition;

function nextIncorrectName() {
	for(currentIndex = 0; i < currentIndex.length; currentIndex++) {
		//TODO
	}
	return false; //TODO
}

function onNoProblems() {
	document.getElementById("button").innerText = "Проверить ещё раз!";	
	document.getElementById("noteLabel").innerText = "✅ миЛициклов и переводов имён больше не обнаружено ✅";
}
