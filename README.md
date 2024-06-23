# FSH test

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

## test

```sh
deno test --allow-read ./
```
