
### Что это?
Это сайт, который исчет в фанфике по фандому "трансформеры".
миЛициклы и слова, похожие на неудачные переводы имён канонных персонажей.
**Важно: срабатывание могут быть ложными, поэтому программа не исправляет текст, а только лишь указывает на потенциальные ошибки!**

### Как использовать?
Перейди на страницу /index.html.
Вставь в текстовое поле фанфик, и нажимай <kbd>Дальше  ▶ ▶</kbd>. Каждый раз программа будет находить следущую проблему,
выделяя её и делая прокрутку.
Сначала ищутся миЛициклы, потом имена. Если нужно проверить новый текст,
то после его вставки нужно обязательно нажать <kbd>🔁 Заново 🔁</kbd>,
иначе программа может работать неверно.

### Какой список имён?
Используется следующий строковой массив с именами:
```
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
    "Грива", "Веточка", "Ветер", "Рапира", "Крепыш", "Максимус",  "Победитель", "Огонёк", "Скандалист"
];
```
Важно, что поиск идёт без учёта регистра (даже для имён). Это сделанно например для того,
чтобы движок не пропускал слова капсом/миЛициклы в начале предложения.
