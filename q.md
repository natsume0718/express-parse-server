# 質問

Content-type に application/x-www-form-urlencoded を指定した時と、application/json を指定した時で、送信されるデータ形式がどのように異なるのか説明してください。どんな時にどちらを選択するべきでしょうか？

- application/x-www-form-urlencoded は`URL 形式でエンコードされたフォームデータ`で送信される。

`key=value`の形でデータを送信する。

```
curl -X POST localhost:8080 -d 'name=あああ' -H "Content-type: application/x-www-form-urlencoded"
{"name":"あああ"}
```

- application/json は`json`フォーマットで送信される。

`{key: value}`の形でデータを送信する。

```
curl -X POST localhost:8080 -d '{"name": "hoge"}' -H "Content-type: application/json"
{"name":"hoge"}
```

https://medium.com/@rajajawahar77/content-type-x-www-form-urlencoded-form-data-and-json-e17c15926c69
