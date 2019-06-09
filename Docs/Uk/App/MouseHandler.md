# LibCanvas.App.MouseHandler

`LibCanvas.App.MouseHandler` - клас, який відповідає за взаємодію подій `LibCanvas.Mouse` і об'єктів `LibCanvas.App.Element`.

### Ініціалізація

```js
LibCanvas.App.MouseHandler(object settings);
```

`settings` може містити наступні параметри:

* `app` (*LibCanvas.App*) - додаток, який потрібно слухати
* `mouse` (*LibCanvas.Mouse*) - об'єкт LibCanvas.Mouse, який буде повідомляти про зміни мишки
* `search` (*LibCanvas.App.ElementsMouseSearch*) - об'єкт, який відповідає за пошук елемента. Може використовуватися для оптимізації.

#### Приклад

```js
var app, mouse, mouseHandler;

app = new LibCanvas.App({ size: new Size(300,200) });
mouse = new LibCanvas.Mouse(app.container.bounds);
mouseHandler = new LibCanvas.App.MouseHandler({ app: app, mouse: mouse });
```

Пошуковик за замовчуванням (LibCanvas.App.ElementsMouseSearch) перевіряє елементи на спрацювання викликаючи `isTriggerPoint(Point)`.

### Події

Після підписки всі елементи отримують наступні події:

* `click`
* `dblclick`
* `contextmenu`
* `wheel`
* `mousedown`
* `mouseup`
* `mouseout`
* `mouseover`
* `mousemove`

### Методи

#### `stop`

```js
LibCanvas.App.MouseHandler stop()
```

Зупиняє обробку подій мишки.

```js
mouseHandler.stop()
```

#### `start`

```js
LibCanvas.App.MouseHandler start()
```

Відновлює обробку подій мишки.

```js
mouseHandler.start()
```

#### `subscribe`

```js
LibCanvas.App.MouseHandler subscribe(LibCanvas.App.Element element)
```

Підписує елемент на подію мишки.

```js
mouseHandler.subscribe( element );

element.events.add('click', function (e) {
	console.log('element зловив клік мишки', e);
})
```

#### `unsubscribe`

```js
LibCanvas.App.MouseHandler unsubscribe(LibCanvas.App.Element element)
```

Відписує елемент від подій мишки.
Якщо елемент був видалений з додатку за допомогою методу `destroy`, то відписка від подій мишки буде активована автоматично при першому спрацюванні події (але не зразу після знищення).
Елементи приховані через `hidden: true` дальше слухають події мишки.

```js
mouseHandler.unsubscribe(element);
// Елемент більше не слухає події мишки.
```

#### `getOverElements`

```js
LibCanvas.App.Element[] getOverElements()
```

Отримати список елементів, над якими знаходиться мишка в даний момент (в порядку зменшення `z-index`).

```js
var overElements = mouseHandler.getOverElements();
overElements.invoke('destroy');
```

#### `fall`

```js
LibCanvas.App.MouseHandler fall()
```

Повідомляє про необхідність провалити подію мишки.
Важливо пам'ятати, що якщо елемент підписаний на подію мишки, то він "блокує" всі елементи нижче.
Тобто при кліку на ньому події не спрацюють на елементах під ним, навіть якщо вони теж попадають в радіус дії мишки.
Якщо з якоїсь причини така поведінка не влаштовує (елемент повинен ловити події сам, і не блокувати їх для елементів, які ним покриті) можна використовувати `fall`.

```js
mouseHandler.subscribe(element);

element.events.add('mousedown', function (e) {
	console.log('Мишка натиснута над цим елементом', e);
	// Але елемент під ним теж отримає цю подію
	mouseHandler.fall();
});
```
