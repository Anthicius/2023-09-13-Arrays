function masyvas() {
  let mass = [
    4,
    5,
    -5556,
    155,
    640,
    "15x",
    6789,
    -5564,
    478,
    654,
    "obuolys",
    789,
    -51,
    55,
    -222,
    0,
    -357,
    -56,
    "trylika",
    444,
    7778,
    4154,
    4751,
  ];
  // 1.1. Pašalinti pirmą masyvo narį.

  mass.shift();

  // 1.2. Pašalinti paskutinį masyvo narį.

  mass.pop();

  // 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.

  let middleIndex = Math.floor(mass.length / 2);
  mass.splice(middleIndex, 1);

  // 1.4. Pašalinti priešpaskutinį masyvo narį.

  mass.splice(-2, 1);

  // 1.5. Pašalinti antrą masyvo narį.

  mass.splice(1, 1);

  // 1.6. Pašalinti 7 ir 8 masyvo narius.

  mass.splice(6, 2);
  // 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.

  mass.splice(-6, 3);

  // 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.

  mass.splice(2, 1, 888);

  // 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.

  mass.splice(9, 1, 33, 789, 6543);

  // 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.

  mass.splice(-1, 1, 321, 654, 987);

  // 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

  mass.splice(1, 0, 11);

  // 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

  mass.splice(13, 0, 1);

  // 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.

  mass.splice(-1, 0, -1);

  // 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.

  mass.unshift(1, 2, 3);

  // 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.

  mass.push(-333, -321, -312);

  // 1.16. Į masyvo vidurį pridėti skaičių 0.

  mass.splice(13, 0, 0);

  // 1.17. Pašalinti pirmą masyvo narį.

  mass.shift();

  // 1.18. Pašalinti paskutinį masyvo narį.

  mass.pop();

  // 1.19. Į masyvo pradžią pridėti žodį "start".

  mass.unshift("start");

  // 1.20. Į masyvo pabaigą pridėti žodį "end".

  mass.push("end");

  console.log(mass);
}

masyvas();
