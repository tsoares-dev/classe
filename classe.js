// *********************** QUESTÃO 01 **************************************

// Crie uma classe que representa uma conta bancaria que possua o número da conta e saldo. Está classe também deve executar os seguintes métodos:
// extrato (Mostra na tela o número e o saldo da conta)
// saque (Recebe como parâmetro um valor e retira este valor do saldo da conta)
// deposito (recebe como parâmetro um valor e adiciona este valor ao saldo da conta)
// Ao final das operações saque e deposito, sua classe deve imprimir o número e o saldo da conta.
// Crie um objeto para testar os métodos da classe conta bancaria.

class Conta {
  constructor(conta, saldo) {
      this.conta = conta
      this.saldo = saldo
  }
  saque(valorSaque) {
      if (valorSaque <= this.saldo) {
          this.saldo -= valorSaque
          return this.saldo
      } else {
          return "A conta N°${this.conta} possui saldo insuficiente no momento."
      }
  }
      deposito(valorDeposito){
          this.saldo += valorDeposito
      }
      extrato(){
          return `A conta N°${this.conta} possui o saldo de R$${this.saldo} reais.`
      }
  }

const conta1 = new Conta (1, 1000)
alert("Inicialmente: " + conta1.extrato())

conta1.deposito(1500)
alert("Após o depósito. " + conta1.extrato())

conta1.saque(500)
alert("Após o saque. " + conta1.extrato())

const conta2 = new Conta (2, 5000)
alert("Inicialmente: " + conta2.extrato())

conta2.deposito(500)
alert("Após o depósito. " + conta2.extrato())

conta2.saque(1500)
alert("Após o saque. " + conta2.extrato())


// *********************** QUESTÃO 02 **************************************

// Crie uma classe que representa uma calculadora, está calculadora deve ter os seguintes métodos:
// soma (recebe dois números e mostra o valor da soma)
// subtração (recebe dois números e mostra o valor da subtração entre eles)
// divisão (recebe dois números e mostra o valor da divisão entre eles)
// multiplicação (recebe dois números e mostra o valor da multiplicação entre eles)
// resto (recebe dois números e mostra o valor do resto da divisão entre esses dois números)
// Crie um objeto para testar os métodos da classe calculadora.

// class Calcular {
//   constructor(num0, num1) {
//       this.num0 = num0
//       this.num1 = num1
//   }
//   somar() {
//       return `O resultado da Soma é: ${this.num0 + this.num1}`
//   }
//   subtrair() {
//       return `O resultado da Subtração é: ${this.num0 - this.num1}`
//   }
//   dividir() {
//       return `O resultado da Divisão é: ${this.num0 / this.num1}`
//   }
//   resto(){
//     return `O Resto da Divisão anterior é: ${this.num0 % this.num1}`
//   }
//   multiplicar() {
//       return `O resultado da Multiplicação é: ${this.num0 * this.num1}`
//   }
// }

// let primeiro = new Calcular(200, 5)
// alert(primeiro.somar())
// alert(primeiro.subtrair())
// alert(primeiro.dividir())
// alert(primeiro.resto())
// alert(primeiro.multiplicar())


// *********************** QUESTÃO 03 **************************************
// Crie uma classe Televisor. Essa classe deve possuir três atributos:
// canal // inicia em 1 e vai até 16
// volume // inicia em 0 e vai até 10
// ligado // inicia em desligado ou false
// e a seguinte lista de métodos:
// aumentarVolume()    // Aumenta em 1 o volume
// reduzirVolume()        // Diminui em 1 o volume
// subirCanal()        // Aumenta em 1 o canal
// descerCanal()        // Diminui em 1 o canal
// ligarTelevisor()    // Liga a televisão
// desligarTelevisor()    // Desliga a televisão
// mostraStatus()        // Dizer qual o canal, o volume e se o televisor está ligado

// Nos métodos informe se é possível realizar a operação, por exemplo, se o volume estiver no 10 e chamar o método aumentarVolume() novamente imprima uma mensagem de aviso, etc.
// Quando desligado, nosso televisor deve voltar o canal e o volume a seus valores iniciais e não deve realizar nenhuma operação.
// Crie um objeto para testar a classe Televisão.

// class Televisor{
//   constructor(){
//   this.canal = 1;
//   this.volume = 0 ;
//   this.ligado = false;
//   }
//   maisVolume(){
//      if(this.volume < 10 && this.ligado === true){
//          return this.volume +=1
//       } else{
//          return "Não é possível aumentar o som do televisor. O volume já está no máximo!"
//       }
//   }
//   menosVolume(){
//      if(this.volume > 0 && this.ligado === true){
//          return this.volume -=1
//       } else{
//          return "Não é possível diminuir o som do televisor. O volume já está no mínimo (mudo)!"
//       }
//   }
//   maisCanal(){
//      if(this.canal < 16 && this.ligado === true){
//          return this.canal +=1
//       } else{
//          return "Não é possivel aumentar o Canal. O Televisor já está no Canal 1!"
//       }
//  }
//   menosCanal(){
//      if(this.canal > 1 && this.ligado === true){
//          return this.canal -=1
//       } else{
//          return "Não é possivel diminuir o Canal. O Televisor já está no Canal 1!"
//       }
//   }
//   ligarTv() {
//      if(this.ligado === false){
//       return `Ligado é: ${this.ligado = true}`
//       } else {
//          return "O televisor já está ligado"
//   } 
//   }
//   desligarTv() {
//      if(this.ligado === true){
//      this.ligado = false;
//       this.canal = 1;
//       this.volume = 0;
//       return `Ligado é: ${this.ligado = false}`
//      }
//   }
//   verStatus(){
//      return `O televisor está no canal: ${this.canal} \n O volume do televisor é: ${this.volume} \n O televisor está ligado: ${this.ligado}`
//   }
// }
// const teste1 = new Televisor ()

// alert("Televisor ligado. O status de " + teste1.ligarTv())
// alert(teste1.verStatus())
// alert("Volume: " + teste1.menosVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Canal: O televisor está no canal " + teste1.maisCanal())
// alert("Televisor desligado. O status de " + teste1.desligarTv())
// alert("Televisor ligado. O status de " + teste1.ligarTv())
// alert(teste1.verStatus())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Canal: " + teste1.menosCanal())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.maisVolume())
// alert("Volume: " + teste1.maisVolume())
// alert("Volume: O televisor está no volume " + teste1.menosVolume())
// alert(teste1.verStatus())
// alert("Canal: O televisor está no canal " + teste1.maisCanal())
// alert("Televisor desligado. O status de " + teste1.desligarTv())