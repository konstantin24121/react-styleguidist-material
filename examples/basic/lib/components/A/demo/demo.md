Declaration

* Компонент должен реагировать на клик

Для использования компонента достаточно обернуть им любой узел или текст.

    <A name="zad" onClick={() => {console.log('You click on Link, genius')}}>Link</A>

Пример с правильно форматированным кодом. Работает как надо

    <A
      name="zad"
      onClick={() => {console.log('Wow you click on link! Click one more time if your are moron')}}
    >
      Link
    </A>

Пример с неочень форматированным кодом. Но все еще работает

    <A name="zad"
      onClick={() => {console.log('Well done, you start atomic war, congratulation')}}>Link</A>

Примем с весьма отвратительным кодом, но все таки работает

    <A name="zad"
      onClick={() => {console.log('Just a click. Achievement unlocked')}}>Link
      </A>
