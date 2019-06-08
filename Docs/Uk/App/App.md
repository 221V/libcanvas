# LibCanvas.App

`LibCanvas.App` - це основа фреймворку для побудови інтерактивних додатків на LibCanvas.

#### Global

Після виклику LibCanvas.extract() можна використовувати короткий аліас "App"

### Ініціалізація

```js
var app = new LibCanvas.App( object settings )
```

Settings може містити наступні параметри:

* `appendTo` - елемент, в який необхідно долучити додаток. За замовчуванням `body`
* `size` - розмір вікна додатку, об'єкт LibCanvas.Size
* `simple` - якщо `true`, то згенерує спрощену розмітку - з одного полотна і без можливості створювати і переміщувати шари

#### Приклад

```js
var app = new App({
	appendTo: '#container',
	size: new Size(800, 500)
})
```

#### Звичайна розмітка для 3-х шарів:

```html
<div style="width: 1200px; height: 800px;" class="libcanvas-app">
	<div style="overflow: hidden; position: absolute; width: 1200px; height: 800px;">
		<canvas width="1200" height="800" data-name="bg"  style="position: absolute; z-index: 0;"></canvas>
		<canvas width="1200" height="800" data-name="foo" style="position: absolute; z-index: 1;"></canvas>
		<canvas width="1200" height="800" data-name="bar" style="position: absolute; z-index: 2;"></canvas>
	</div>
</div>
```

#### Спрощена розмітка (максимум 1 шар):

```html
<canvas width="391" height="71" class="libcanvas-app-simple"></canvas>
```

#### Зміна розміру додатку:

Поміняється тільки розмір додатку. Розміри кожного шару залишаться незміненими.

```js
app.container.size = new Size(1500, 1200);
```

### Методи

#### createLayer

```js
LibCanvas.App.Layer createLayer(object settings)
```

Створює і повертає шар LibCanvas.App

```js
var layer = app.createLayer({ name: 'units' });
```

#### destroy

```js
LibCanvas.App destroy( )
```

Знищує додаток

```js
app.destroy();
```

#### zIndexCompare

```js
int zIndexCompare(LibCanvas.App.Element left, LibCanvas.App.Element right)
```

Порівнює позиції двох елементів і повертає:
* `-1`, якщо лівий вище;
* `+1`, якщо правий вище;
* `0`, якщо вони на одному рівні;
