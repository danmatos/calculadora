/**
 * Serviço responsável por executar as operações da
 * calculadora.
 *
 * @author Daniel M. Matos <danielmatos.it@gmail.com>
 * @since 1.0.0
 */
import {Injectable} from '@angular/core';

@Injectable()
export class CalculadoraService {

  /* Define as constantes para as operações
     básicas da calculadora. */
  static readonly SOMA: string = '+';
  static readonly DIVISAO: string = '/';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {
  }

  /**
   * Método que calcula uma operação matemática entre dois
   * valores.
   * Suporta as operações de soma, divisão, subtração e
   * multiplicação.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // Armazena o resultado da operação.

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = (num1 + num2);
        break;
      case CalculadoraService.DIVISAO:
        resultado = (num1 / num2);
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = (num1 - num2);
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = (num1 * num2);
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
