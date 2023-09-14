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

  // 3.1. Gauti tik teigiamus skaičius.

  let values = "";

  values = mass.filter((value) => value > 0);

  console.log(values);

  // 3.2. Gauti tik neigiamus skaičius.

  values = mass.filter((value) => value < 0);

  console.log(values);

  // 3.3. Gauti tik skaičius, kurie dalinasi iš 2.

  values = mass.filter((value) => value % 2 === 0);

  console.log(values);

  // 3.4. Gauti tik skaičius, kurie dalinasi iš 3.

  values = mass.filter((value) => value % 3 === 0);

  console.log(values);

  // 3.5. Gauti tik skaičius, kurie dalinasi iš 5.

  values = mass.filter((value) => value % 5 === 0);

  console.log(values);

  // 3.6. Gauti tik skaičius, kurie dalinasi iš 11.

  values = mass.filter((value) => value % 11 === 0);

  console.log(values);

  // 3.7. Gauti tik skaičius, kurie dalinasi iš 31.

  values = mass.filter((value) => value % 31 === 0);

  console.log(values);

  // 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.

  values = mass.filter((value) => value % 2 === 0 && value % 3 === 0);

  console.log(values);

  // 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.

  values = mass.filter((value) => value % 3 === 0 && value % 7 === 0);

  console.log(values);
  // 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.

  values = mass.filter((value) => value % 5 === 0 && value % 9 === 0);

  console.log(values);
  // 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.

  values = mass.filter((value) => value % 5 === 0 && value % 11 === 0);

  console.log(values);
  // 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.

  values = mass.filter(
    (value) => value % 2 === 0 && value % 8 === 0 && value % 12 === 0
  );

  console.log(values);

  // 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.

  values = mass.filter((value) => value % 5 === 0 || value % 11 === 0);

  console.log(values);

  // 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.

  values = mass.filter((value) => value % 5 === 0 || value % 3 === 0);

  console.log(values);

  // 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.

  values = mass.filter((value) => value % 5 === 0 || value % 11 === 0);

  console.log(values);

  // 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.

  values = mass.filter((value) => value % 7 === 0 || value % 8 === 0);

  console.log(values);

  // 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.

  values = mass.filter((value) => value % 9 === 0 || value % 13 === 0);

  console.log(values);

  // 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.

  values = mass.filter(
    (value) => (value % 2 === 0 && value % 3 === 0) || value % 5 === 0
  );

  console.log(values);

  // 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.

  values = mass.filter(
    (value) => (value % 5 === 0 && value % 7 === 0) || value % 9 === 0
  );

  console.log(values);

  // 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.

  values = mass.filter(
    (value) => (value % 7 === 0 && value % 8 === 0) || value % 11 === 0
  );

  console.log(values);

  // 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.

  values = mass.filter(
    (value) => (value % 9 === 0 && value % 12 === 0) || value % 13 === 0
  );

  console.log(values);

  // 3.22. Gauti tik skaičius, kurie yra didesni už 100.

  values = mass.filter((value) => value > 100);

  console.log(values);

  // 3.23. Gauti tik skaičius, kurie yra didesni už 555.

  values = mass.filter((value) => value > 555);

  console.log(values);

  // 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
  values = mass.filter((value) => value >= 888);

  console.log(values);

  // 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.

  values = mass.filter((value) => value >= 6789);

  console.log(values);

  // 3.26. Gauti tik skaičius, kurie yra mažesni už 50.

  values = mass.filter((value) => value < 50);

  console.log(values);

  // 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.

  values = mass.filter((value) => value < 1000);

  console.log(values);

  // 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.

  values = mass.filter((value) => value <= -1);

  console.log(values);

  // 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.

  values = mass.filter((value) => value <= -5564);

  console.log(values);

  // 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.

  values = mass.filter((value) => value < 1000 && value > 500);

  console.log(values);

  // 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.

  values = mass.filter((value) => value < 100 && value > 0);

  console.log(values);

  // 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.

  values = mass.filter((value) => value < 0 && value > -50);

  console.log(values);

  // 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.

  values = mass.filter((value) => value <= 0 && value > -100);

  console.log(values);

  // 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.

  values = mass.filter((value) => value <= 55 && value >= 0);

  console.log(values);

  // 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.

  values = mass.filter((value) => value <= 55 && value >= 0);

  console.log(values);

  // 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
  values = mass.filter((value) => value > 0 && value % 2 === 0);

  console.log(values);

  // 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
  values = mass.filter((value) => value > 0 && value % 3 === 0);

  console.log(values);

  // 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
  values = mass.filter((value) => value < 0 && value % 4 === 0);

  console.log(values);

  // 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
  values = mass.filter((value) => value < 0 && value % 111 === 0);

  console.log(values);

  // 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
  values = mass.filter((value) => value > 500 && value % 2 === 0);

  console.log(values);

  // 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
  values = mass.filter((value) => value > 1000 && value % 3 === 0);

  console.log(values);

  // 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
  values = mass.filter((value) => value < 1000 && value % 9 === 0);

  console.log(values);

  // 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
  values = mass.filter((value) => value < 500 && value % 2 === 0);

  console.log(values);

  // 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
  values = mass.filter((value) => value >= 33 && value % 3 === 0);

  console.log(values);

  // 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
  values = mass.filter((value) => value >= 444 && value % 12 === 0);

  console.log(values);

  // 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
  values = mass.filter((value) => value <= 155 && value % 5 === 0);

  console.log(values);

  // 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
  values = mass.filter((value) => value <= -333 && value % 9 === 0);

  console.log(values);

  // 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
  values = mass.filter(
    (value) => value > 100 && value < 500 && value % 5 === 0
  );

  console.log(values);

  // 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
  values = mass.filter(
    (value) => value >= 888 && value < 1000 && value % 2 === 0
  );

  console.log(values);

  // 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
  values = mass.filter(
    (value) => value <= 888 && value >= -333 && value % 3 === 0 && value !== 0
  );

  console.log(values);

  // 3.51. Gauti tik skaičius.
  values = mass.filter((value) => typeof value === "number");

  console.log(values);

  // 3.52. Gauti tik tekstus (string).
  values = mass.filter((value) => typeof value === "string");

  console.log(values);

  // 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
  values = mass.filter(
    (value) => typeof value === "string" && value.length > 5
  );

  console.log(values);

  // 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
  values = mass.filter(
    (value) => typeof value === "string" && value.length <= 5
  );

  console.log(values);

  // 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
  values = mass.filter(
    (value) => typeof value === "string" && value.length < 7
  );

  console.log(values);

  // 3.56. Gauti tik tekstus (string), kurie turi raidę t.
  values = mass.filter(
    (value) => typeof value === "string" && value.includes("t")
  );

  console.log(values);

  // 3.57. Gauti tik tekstus (string), kurie turi raidę y.
  values = mass.filter(
    (value) => typeof value === "string" && value.includes("y")
  );

  console.log(values);

  // 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
  values = mass.filter(
    (value) =>
      typeof value === "string" && (value.includes("e") || value.includes("a"))
  );

  console.log(values);

  // 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.includes("t") && value.includes("i")
  );

  console.log(values);

  // 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.includes("t") && !value.includes("k")
  );

  console.log(values);

  // 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.includes("a") && !value.includes("s")
  );

  console.log(values);

  // 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
  values = mass.filter(
    (value) => typeof value === "string" && value.split("t").length > 2
  );

  console.log(values);

  // 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
  values = mass.filter(
    (value) => typeof value === "string" && value.includes("st")
  );

  console.log(values);

  // 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
  values = mass.filter(
    (value) => typeof value === "string" && value.includes("nd")
  );
  
  console.log(values);

  // 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
  values = mass.filter(
    (value) => typeof value === "string" && !value.includes("s")
  );
  console.log(values);

  // 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
  values = mass.filter(
    (value) => typeof value === "string" && !value.includes("t")
  );
  console.log(values);

  // 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
  values = mass.filter(
    (value) =>
      typeof value === "string" && !value.includes("r") && !value.includes("l")
  );
  console.log(values);

  // 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
  values = mass.filter(
    (value) => typeof value === "string" && !isNaN(value.charAt(0))
  );
  console.log(values);

  // 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
  values = mass.filter(
    (value) => typeof value === "string" && value.startsWith("s")
  );
  console.log(values);

  // 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
  values = mass.filter(
    (value) => typeof value === "string" && value.startsWith("o")
  );
  console.log(values);

  // 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.
  values = mass.filter(
    (value) => typeof value === "string" && value.endsWith("d")
  );
  console.log(values);

  // 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.
  values = mass.filter(
    (value) => typeof value === "string" && value.endsWith("s")
  );
  console.log(values);

  // 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.length > 4 && value.includes("o")
  );
  console.log(values);

  // 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.length >= 5 && value.includes("a")
  );
  console.log(values);

  // 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
  values = mass.filter(
    (value) => typeof value === "string" && value.length % 2 === 0
  );
  console.log(values);

  // 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.length % 2 !== 0 && value.includes("s")
  );
  console.log(values);

  // 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.length >= 3 && value.charAt(2) === "a"
  );
  console.log(values);

  // 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.length >= 4 && value.charAt(3) === "l"
  );
  console.log(values);

  // 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
  values = mass.filter(
    (value) =>
      typeof value === "string" && value.length >= 5 && value.charAt(4) !== "t"
  );
  console.log(values);

  // 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
  values = mass.filter(
    (value) =>
      typeof value === "string" &&
      value.length < 6 &&
      isNaN(value.charAt(0)) &&
      value.charAt(0) !== "e"
  );
  console.log(values);
}

masyvas();
