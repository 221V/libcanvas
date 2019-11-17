# LibCanvas.App.Light

`LibCanvas.App.Light` - надбудова над `LibCanvas.App` для легшого і доступнішого інтерфейсу.

### Ініціалізація

```js
var helper = new LibCanvas.App.Light(LibCanvas.Size size, object settings)
```

`size` - розмір додатку

`settings` може містити наступні параметри:

* `mouse` - чи буде використовуватися мишка (за замовчуванням `true`)
* `appendTo` - в який елемент потрібно прикріпити додаток (за замовчуванням `body`)

#### Приклад

```js
var helper = new LibCanvas.App.Light(new Size(800, 500))
```

### Методи

#### `createVector`

```js
App.Light.Vector createVector(LibCanvas.Shape shape, object settings)
```

Створює, додає в додаток і повертає елемент App.Light.Vector, який служить для відрисовки геометричних фігур в додатку.

```js
var vector = helper.createVector(new Circle(100, 100, 20));
```

#### `createText`

```js
App.Light.Text createText(LibCanvas.Shape shape, object style, object settings)
```

