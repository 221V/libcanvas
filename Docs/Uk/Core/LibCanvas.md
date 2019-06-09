# LibCanvas

`LibCanvas` - це глобальний об'єкт, який є коренем простору імен бібліотеки.
Він містить кілька статичних методів.

## Статичний метод `extract`

```js
object LibCanvas.extract(object to = window)
```

Дозволяє витягти деякі класи LibCanvas в глобальний простір імен (або в локальний об'єкт) для коротшого запису.
	
#### Приклад

```js
// Стандартний підхід:
var circle = new LibCanvas.Shapes.Circle(100, 100, 20);

// Витягуємо в локальну змінну:
var LC = LibCanvas.extract({});
var circle = new LC.Circle(100, 100, 20);

// Витягуємо в глобальний простір імен:
LibCanvas.extract();
var circle = new Circle(100, 100, 20);
```

## Статичний метод `buffer`

```js
canvasElement LibCanvas.buffer(int width, int height, bool withCtx)
canvasElement LibCanvas.buffer(LibCanvas.Size size, bool withCtx)
```

Створює і повертає елемент Canvas з розміром `width * height`.
Якщо `withCtx == true`, то властивість `ctx` елемента буде рівна контексту `'2d-libcanvas'`.

#### Приклад

```js
var buffer = LibCanvas.buffer(100, 100, true);
buffer.ctx.fillAll('black');

libcanvas.ctx.drawImage(buffer, 10, 10);
```
