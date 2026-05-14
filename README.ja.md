# FSH

JavaScript/Deno向けのFHIR Shorthand (FSH) からJSONへの変換ライブラリです。

[FHIR Shorthand (FSH)](https://hl7.org/fhir/uv/shorthand/) は、FHIR リソースおよび実装ガイド (IG) の内容を定義するためのドメイン固有言語です。

## デモ

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

## テスト

```sh
deno test --allow-read ./
```

## 参考

- [HL7.FHIR.UV.SHORTHAND\FHIR Shorthand - FHIR v4.0.1](https://hl7.org/fhir/uv/shorthand/)
- [FHIR Shorthand (FSH)](https://fshschool.org/)

## ライセンス

MIT License
