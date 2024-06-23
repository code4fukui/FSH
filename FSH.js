export const FSH = {
  toJSON(fsh) {
    const ss = fsh.split("\n"); // 簡易
    const res = {};
    const isarray = ["address", "telecom", "identifier", "profile", "extension", "given", "line", "communication", "contact", "name"];
    let idx = 0;
    for (const s of ss) {
      if (s.length == 0) continue;
      if (s.startsWith("//")) continue;
      if (s.startsWith("* ")) {
        const n = s.indexOf(" = ");
        const name = s.substring(2, n);
        const names = name.split(".");
        const val0 = s.substring(n + 3);
        const val = val0[0] == "#" ? val0.substring(1) : val0.substring(1, val0.length - 1);
        let p = res;
        for (let i = 0; i < names.length; i++) {
          const name = names[i];
          if (i < names.length - 1) {
            const name2 = name.substring(0, name.length - 3);
            if (name.endsWith("[0]")) {
              p[name2] = [{}];
              p = p[name2][0];
              idx = 0;
            } else if (name.endsWith("[1]")) {
              const p2 = {};
              p[name2].push(p2);
              idx = 1;
            } else if (name.endsWith("[=]")) {
              p = p[name2][idx];
            } else if (name.endsWith("[+]")) {
              const p2 = {};
              if (!p[name2]) {
                p[name2] = [];
                idx--;
              }
              p[name2].push(p2);
              p = p2;
              idx++;
            } else {
              if (p[name] == null) {
                if (isarray.includes(name)) {
                  p[name] = [{}];
                  p = p[name][0];
                } else {
                  p[name] = {};
                  p = p[name];
                }
              } else {
                p = p[name];
                if (Array.isArray(p)) {
                  p = p[0];
                }
              }
            }
          } else { // last name
            if (name.endsWith("[0]")) {
              const name2 = name.substring(0, name.length - 3);
              p[name2] = [val];
            } else if (name.endsWith("[1]")) {
              const name2 = name.substring(0, name.length - 3);
              p[name2][1] = val;
            } else if (isarray.includes(name)) {
              p[name] = [val];
            } else {
              if (name == "valueCodeableConcept" || name == "language") {
                const n = val0.indexOf(" ");
                const val2 = [val0.substring(0, n), val0.substring(n + 1)];
                const [system, code] = val2[0].split("#");
                const display = val2[1].substring(1, val2[1].length - 1);
                p[name] = { "coding": [{ code, system, display }] };
              } else {
                p[name] = val;
              }
            }
          }
        }
      } else {
        const namemap = {
          "Instance": "id",
          "InstanceOf": "resourceType",
          "Usage": null,
          "Description": null,
        };

        const n = s.indexOf(": ");
        const name = s.substring(0, n);
        const val = s.substring(n + 2);
        const name2 = namemap[name];
        if (name2 === undefined) {
          throw new Error("unknown name: " + name);
        } else if (name2) {
          res[name2] = val;
        }
      }
    }
    return res;
  }
};
