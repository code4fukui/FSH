// from https://github.com/jami-fhir-jp-wg/jp-core-v1x/blob/develop/input/fsh/examples/JP_Patient_Example.fsh

Instance: jp-patient-example-1
InstanceOf: Patient
Usage: #example
* meta.profile = "http://jpfhir.jp/fhir/core/StructureDefinition/JP_Patient"
* identifier.system = "urn:oid:1.2.392.100495.20.3.51.11311234567"
* identifier.value = "00000010"
* name[0].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation"
* name[=].extension.valueCode = #IDE
* name[=].use = #usual
* name[=].text = "山田 太郎"
* name[=].family = "山田"
* name[=].given = "太郎"
* name[+].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation"
* name[=].extension.valueCode = #SYL
* name[=].use = #usual
* name[=].text = "ヤマダ タロウ"
* name[=].family = "ヤマダ"
* name[=].given = "タロウ"
* telecom.system = #phone
* telecom.value = "0312345678"
* telecom.use = #home
* gender = #male
* birthDate = "1970-01-01"
* address.postalCode = "1600023"
* address.text = "東京都新宿区"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/patient-religion"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation#1046 "Shinto"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[=].valueAddress.state = "東京"
* extension[+].url = "http://jpfhir.jp/fhir/core/Extension/StructureDefinition/JP_Patient_Race"
* extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-Race#2039-6 "Japanese"