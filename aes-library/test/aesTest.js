class AES {
    constructor(clave) {
      this.clave = clave; // Aquí almacenarás la clave
      this.numeroBloques = 4;    // Bloques de 4 columnas (128 bits)
      this.numeroClaves = clave.length / 4; // Número de palabras en la clave
      this.numeroRondas = this.getNumeroRondas(); // Número de rondas según la clave
    }
  
    getNumeroRondas() {
      if (this.numeroClaves === 4) return 10; // AES-128
      if (this.numeroClaves === 6) return 12; // AES-192
      if (this.numeroClaves === 8) return 14; // AES-256
      throw new Error("Clave inválida");
    }
  
}


const SBOX = [
    // S-Box completa (256 valores) irá aquí
  ];
  
  AES.prototype.subBytes = function(state) {
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[i].length; j++) {
        state[i][j] = SBOX[state[i][j]];
      }
    }
  };
  