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

const promedio: number = 0;
let promedioA: number;
let promedioB: number;
let promedioC: number;
let comisionN: string;

let getPromedio = function (comision: number[], prom: number): number {
  for (let i = 0; i < 10; i++) {
    prom = prom + comision[i];
  }
  prom = prom / 10;
  return prom;
};

promedioA = getPromedio(comisionA, promedio);
promedioB = getPromedio(comisionB, promedio);
promedioC = getPromedio(comisionC, promedio);
