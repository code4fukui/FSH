# FSH

FHIR Shorthand (FSH) を使ってJSONに変換するJavaScript/Denoのライブラリです。

FHIR Shorthand (FSH)とは、FHIR Resourceの定義や実装ガイド(IG)の内容を簡潔に記述するためのドメイン特化言語です。

## デモ

以下のように、FSHの記述からJSONへの変換が簡単に行えます。

```js
import { FSH } from "https://code4fukui.github.io/FSH/FSH.js";

const fsh = `Instance: jp-patient-example-1
InstanceOf: Patient
* name.text = "山田 太郎"
`;
const json = FSH.toJSON(fsh);
console.log(json);
/*
{
  id: "jp-patient-example-1",
  resourceType: "Patient",
  name: [ { text: "山田 太郎" } ]
}
*/
```

## 機能

- FHIR Shorthand (FSH)からJSONへの変換
- テストコード付き

## 使い方

以下のコマンドでテストを実行できます:

```sh
deno test --allow-read ./
```

## ライセンス

MIT License