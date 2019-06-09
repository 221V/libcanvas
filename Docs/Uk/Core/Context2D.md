# LibCanvas.Context2D

`LibCanvas.Context2D` - значно розширений 2d-контекст, який можна отримати так:

```js
var context = canvas.getContext('2d-libcanvas');
// alternate syntax:
var context = new LibCanvas.Context2D(canvas);
```

Основна його ідея - всі методи (якщо не треба іншого) повертають посилання на контекст для використання в послідовностях викликів, можливість використання іменованих аргументів і використання об'єктів LibCanvas.

Крім того він надає багато нестандартних методів.

#### Global

Після виклику LibCanvas.extract() можна використовувати короткий аліас `Context2D`.

## Властивості

### `canvas` (get)
Посилання на батьківський dom-елемент.

### `width` (get/set)
Повертає/змінює ширину полотна.

### `height` (get/set)
Повертає/змінює висоту полотна.

### `size` (get/set)
Повертає/змінює розмір полотна.

```js
context.size = new Size(400, 250);
```

### `rectangle` (get)
Повертає посилання на прямокутник, відовідно до розміру полотна.
Вкрай не рекомендується працювати безпосередньо з цим об'єктом.
Якщо необхідно - використовуйте клон.

#### Приклад

```js
if (context.rectangle.hasPoint(somePoint)) {
	// Точка знаходиться в межах полотна
	doSmth();
}

// Змінюємо прямокутник
var clone = context.rectangle.clone();

clone.height /= 2;
clone.width  /= 2;

context.fillAll(clone, 'red');
```

### `shadow` (get/set)
Дозволяє отримати/встановити властивості `shadowOffsetX`, `shadowOffsetY`, `shadowBlur` і `shadowColor` лаконічним способом.

#### Приклад

```js
context.shadow = '1 2 3 black';

// Аналог:
context.shadowOffsetX = 1;
context.shadowOffsetY = 2;
context.shadowBlur    = 3;
context.shadowColor   = 'black;
```

## Метод `getClone`

```js
HTMLCanvasElement getClone(int width, int height)
```

Повертає полотно з розмірами зображення, і зі зміненим розміром, якщо вказано `width` і `height`.
Може застосовуватися для створення копії даного шару, маленької іконки, та іншого.

#### Приклад

```js
context.drawImage(context.getClone(64, 48));
```

## Метод `set`

```js
[this] set(object properties)
[this] set(string propertyName, string propertyValue)
```

Вказує властивості полотна.

#### Приклад

```js
context
	.set({
		fillStyle  : 'black',
		strokeStyle: 'blue'
	})
	.set('globalOpacity', 0.5);
```

## Метод `get`

```js
string get(string propertyName)
```

Повертає значення властивості.

#### Приклад

```js
context.get('fillStyle');
```

## Метод `fillAll`

```js
[this] fillAll()
[this] fillAll(string fillStyle)
```

Заливає все полотно кольором `fillStyle`,
або кольором за замовчуванням, якщо аргумент не переданий.

#### Приклад

```js
context.fillAll('red');
```

## Метод `strokeAll`

```js
[this] strokeAll()
[this] strokeAll(string strokeStyle)
```

Обводить все полотно кольором `strokeStyle`,
або кольором за замовчуванням, якщо аргумент не переданий.

#### Приклад

```js
context.strokeAll('rgb(255, 245, 200)');
```

## Метод `clearAll`

```js
[this] clearAll()
```

Очищає полотно.

#### Приклад

```js
context.clearAll();
```

## Метод `fill`

```js
[this] fill()
[this] fill(string fillStyle)
[this] fill(Shape shape)
[this] fill(Shape shape, string fillStyle)
```

Заливає фігуру або даний шлях кольором `fillStyle`,
або кольором за замовчуванням, якщо аргумент не переданий.

#### Приклад

```js
context.fill(new Circle(50, 50, 20), 'red');
```

## Метод `stroke`

```js
[this] stroke()
[this] stroke(string strokeStyle)
[this] stroke(Shape shape)
[this] stroke(Shape shape, string strokeStyle)
```

Обводить фігуру або даний шлях кольором `strokeStyle`,
або кольором за замовчуванням, якщо аргумент не переданий.

#### Приклад

```js
context.stroke(new Circle(50, 50, 20), 'red');
```

## Метод `clear`

```js
[this] clear(Shape shape)
```

Очищає фігуру, передану першим аргуметом. (згладження вимкнено!)

## Метод `fillRect`

```js
[this] fillRect(LibCanvas.Shapes.Rectangle rectangle)
[this] fillRect(int fromX, int fromY, int width, int height)
```

## Метод `strokeRect`

```js
[this] strokeRect(LibCanvas.Shapes.Rectangle rectangle)
[this] strokeRect(int fromX, int fromY, int width, int height)
```

## Метод `clearRect`

```js
[this] clearRect(LibCanvas.Shapes.Rectangle rectangle)
[this] clearRect(int fromX, int fromY, int width, int height)
```

#### Приклад

```js
context.clear(new Circle(50, 50, 20));
```

## Методи `save`/`restore`

```js
[this] save()
```

Зберігає налаштування полотна в стек.

```js
[this] restore()
```

Відновлює останні збережені налаштування полотна.

#### Приклад

```js
context.set({ fillStyle: 'blue' });
context.save();

context.set({ fillStyle: 'red' });
context.fillAll(); // заливаємо все червоним кольором

context.restore();
context.fillAll(); // заливаємо все синім кольором
```

# Створення шляху

## Метод `beginPath`

```js
[this] beginPath()
[this] beginPath(point)
[this] beginPath(int x, int y)
```

Відкриває шлях.
Якщо є аргументи, то викликає метод `moveTo`.

## Метод `closePath`

```js
[this] closePath()
[this] closePath(LibCanvas.Point point)
[this] closePath(int x, int y)
```

Закриває шлях.
Якщо є аргументи, то викликає мтеод `lineTo`.

## Метод `moveTo`

```js
[this] moveTo(LibCanvas.Point point);
[this] moveTo(int x, int y);
```

Переміщує вказівник шляху в точку `point`.

## Метод `lineTo`

```js
[this] lineTo(LibCanvas.Point point);
[this] lineTo(int x, int y);
```

Прокладає лінію в точку `point`.

## Метод `arc`

```js
[this] arc(object params);
```

Прокладає дугу.
