import { FSH } from "./FSH.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

Deno.test("test1", async () => {
  const fsh = await Deno.readTextFile("test/test1.fsh");
  const json = JSON.parse(await Deno.readTextFile("test/test1.json"));
  t.assertEquals(FSH.toJSON(fsh), json);
});
Deno.test("test2", async () => {
  const fsh = await Deno.readTextFile("test/test2.fsh");
  const json = JSON.parse(await Deno.readTextFile("test/test2.json"));
  t.assertEquals(FSH.toJSON(fsh), json);
});
