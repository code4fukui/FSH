# FSH test

- FSH to JSON in JavaScript/Deno.

[FHIR Shorthand (FSH)](https://hl7.org/fhir/uv/shorthand/) is a domain-specific language for defining the contents of FHIR Resources and Implementation Guides (IG).

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

## reference

- [HL7.FHIR.UV.SHORTHAND\FHIR Shorthand - FHIR v4.0.1](https://hl7.org/fhir/uv/shorthand/)
- [FHIR Shorthand (FSH)](https://fshschool.org/)
