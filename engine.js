
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
    "Сыщик", " Твердолобый", "Нытик", "Трещотка", "Храповик", "Дымовик", "Бравый", "Бархан",
    "Молниекрыл", "Силач", "Шершень", "Охотник", "Броневик", "Апперкот", "Мерцатель", "Следопыт",
    "Плакун", "Разрядник", "Скалолаз", "Истребитель", "Шлак", "Слякоть", "Смельчак", 
    "Взрывало", "Рычун", "Налетало", "Шезлонг", "Гранит", "Тягач", "Томогавк", "Паникер", 
    "Тормоз", "Дымовик", "Водомёт", "Крах", "Бодун", "Стальной", "Реверс", "Пистон",
    "Эффект", "Пролаза", "Верстак", "Компот", "Порез", "Рогатка", "Ворчун",
    "Спринтер", "Дикарь", "Гудок", "Крутой", "Затвор", "Косинус", "Световик", "Штраф",
    "Долгопупс", "Долгорукий", "Длиннорукий", "Револьвер", "Астрофакел", "Панч", "Цереброс", "Быстрый",
    "Крушитель", "Фантазер", "Хром", "Умник", "Снайпер", "Коготь", "Фугас", "Ливень", 
    "Грива", "Веточка", "Ветер", "Рапира", "Крепыш", "Максимус", "Победитель", "Огонёк", "Скандалист"
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
        return true;    
    }
    return false;
}

function restartCheck() {
    lastIncorrectMillicycle = -1;
    lastIncorrectNamePosition = -1;
    currentIndex = 0;
    document.getElementById("nextButton").disabled = false;
    document.getElementById("restartButton").disabled = true;
    document.getElementById("noteLabel").innerText = "Вставь текст и нажми \"Дальше\"...";
}
