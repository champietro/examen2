let comisionA: number[] = new Array(10);
comisionA[0] = 8;
comisionA[1] = 5;
comisionA[2] = 7;
comisionA[3] = 10;
comisionA[4] = 9;
comisionA[5] = 2;
comisionA[6] = 4;
comisionA[7] = 8;
comisionA[8] = 6;
comisionA[9] = 8; //67

let comisionB: number[] = new Array(10);
comisionB[0] = 3;
comisionB[1] = 6;
comisionB[2] = 8;
comisionB[3] = 5;
comisionB[4] = 4;
comisionB[5] = 7;
comisionB[6] = 7;
comisionB[7] = 4;
comisionB[8] = 6;
comisionB[9] = 8; //58

let comisionC: number[] = new Array(10);
comisionC[0] = 7;
comisionC[1] = 6;
comisionC[2] = 9;
comisionC[3] = 8;
comisionC[4] = 9;
comisionC[5] = 8;
comisionC[6] = 5;
comisionC[7] = 7;
comisionC[8] = 10;
comisionC[9] = 9; //78

let menorNota = function (comision: number[]): number {
  let menor: number = comision[0];
  for (let i = 0; i < 10; i++) {
    if (menor > comision[i]) {
      menor = comision[i];
    }
  }
  return menor;
};

let desaprobados = function (comision: number[]): number {
  let cant: number = 0;
  for (let i = 0; i < 10; i++) {
    if (comision[i] < 6) {
      cant = cant + 1;
    }
  }
  return cant;
};

let getPromedio = function (comision: number[], prom: number): number {
  for (let i = 0; i < 10; i++) {
    prom = prom + comision[i];
  }
  prom = prom / 10;
  return prom;
};

let mayorPromedio = function (
  comisionA: number[],
  comisionB: number[],
  comisionC: number[]
) {
  const promedio: number = 0;
  let promedioA: number;
  let promedioB: number;
  let promedioC: number;

  promedioA = getPromedio(comisionA, promedio);
  promedioB = getPromedio(comisionB, promedio);
  promedioC = getPromedio(comisionC, promedio);

  if (promedioA === promedioB && promedioA === promedioC) {
    console.log(
      "El promedio de las 3 comisiones son iguales. Su promedio es: " +
        promedioA
    );
  } else {
    if (promedioA > promedioB) {
      if (promedioA > promedioC) {
        console.log(
          "El mayor promedio lo tiene la comisión A. Promedio: " + promedioA
        );
      } else {
        console.log(
          "El mayor promedio lo tiene la comisión C. Promedio: " + promedioC
        );
      }
    } else {
      if (promedioA < promedioB) {
        if (promedioB > promedioC) {
          console.log(
            "El mayor promedio lo tiene la comisión B. Promedio: " + promedioB
          );
        } else {
          console.log(
            "El mayor promedio lo tiene la comisión C. Promedio: " + promedioC
          );
        }
      }
    }
  }
};

let menorPromedio = function (
  comisionA: number[],
  comisionB: number[],
  comisionC: number[]
) {
  const promedio: number = 0;
  let promedioA: number;
  let promedioB: number;
  let promedioC: number;

  promedioA = getPromedio(comisionA, promedio);
  promedioB = getPromedio(comisionB, promedio);
  promedioC = getPromedio(comisionC, promedio);

  if (promedioA === promedioB && promedioA === promedioC) {
    console.log(
      "El promedio de las 3 comisiones son iguales. Su promedio es: " +
        promedioA
    );
  } else {
    if (promedioA < promedioB) {
      if (promedioA < promedioC) {
        console.log(
          "El menor promedio lo tiene la comisión A. Promedio: " + promedioA
        );
      } else {
        console.log(
          "El menor promedio lo tiene la comisión C. Promedio: " + promedioC
        );
      }
    } else {
      if (promedioA > promedioB) {
        if (promedioB < promedioC) {
          console.log(
            "El menor promedio lo tiene la comisión B. Promedio: " + promedioB
          );
        } else {
          console.log(
            "El menor promedio lo tiene la comisión C. Promedio: " + promedioC
          );
        }
      }
    }
  }
};

mayorPromedio(comisionA, comisionB, comisionC);
menorPromedio(comisionA, comisionB, comisionC);
console.log(
  "Cantidad de desaprobados en la comisión A: " + desaprobados(comisionA)
);
console.log(
  "Cantidad de desaprobados en la comisión B: " + desaprobados(comisionB)
);
console.log(
  "Cantidad de desaprobados en la comisión C: " + desaprobados(comisionC)
);
console.log("Menor nota comisión A: " + menorNota(comisionA));
console.log("Menor nota comisión B: " + menorNota(comisionB));
console.log("Menor nota comisión C: " + menorNota(comisionC));
