# LibCanvas.App.Layer

`LibCanvas.App.Layer` - клас для створення шарів LibCanvas додатку.

### Ініціалізація

Створюється лише за допомогою методу `LibCanvas.App#createLayer`:

```js
LibCanvas.App.Layer app.createLayer(object settings);
```

`settings` може містити наступні параметри:

* `name` (*string*) - ім'я шару (потрібне тільки для відлагодження)
* `zIndex` (*number*) - `z-index` шару
* `invoke` (*boolean*) - чи потрібно викликати у всіх об'єктів метод `onUpdate` на кожний кадр (за замовчуванням `false`)
* `intersection` - чи потрібно при відрисовці одного з елементів відрисовувати інші елементи. Значення:
	* `auto` (за замовчуванням) - тільки ті, які необхідно для коректної відрисовки
	* `manual` - ні, жодного (наприклад, коли ви хочете особисто керувати відрисовкою)
	* `all` - так, всі (наприклад, якщо це дешевше, ніж прораховувати всі переліки)
	* `full` - стирати все полотно і рисувати все з нуля

#### Приклад

```js
var layer = app.createLayer({
	name: 'units',
	zIndex: 3,
	invoke: true,
	intersection: 'all'
})
```

#### Зміна розмірів шару

Зміниться лише розмір одного шару.
Розмір додатку і інших шарів залишаться попередніми.
Потрібно пам'ятати, що зміна розміру шару знищить всі відрисовані дані, тому необхідно викликати `layer.redrawAll()`.

```js
layer.dom.size = new Size(1500, 1200);
layer.redrawAll()
```

### Властивості

#### `ctx`

`2d-libcanvas` контекст елемента canvas шару

```js
layer.ctx.fillAll('red')
```

### Методи

#### `stop`

```js
LibCanvas.App.Layer stop()
```

Зупинити відрисовку шару

```js
layer.stop()
```

#### `start`

```js
LibCanvas.App.Layer start()
```

Відновити відрисовку шару

```js
layer.start()
```

#### `hide`

```js
LibCanvas.App.Layer hide()
```

Тимчасово приховати шар

```js
layer.hide()
```

#### `show`

```js
LibCanvas.App.Layer show()
```

Знову показати шар

```js
layer.show()
```

#### `redrawAll`

```js
LibCanvas.App.Layer redrawAll()
```

Перерисовує всі елементи шару

```js
layer.redrawAll()
```
