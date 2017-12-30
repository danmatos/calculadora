import {inject, TestBed} from '@angular/core/testing';


import {CalculadoraService} from './calculadora.service';
import {CalculadoraComponent} from '../components';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

  it('deve garantir que 1 - 4 = 3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir 1 * 4 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    })
  );

  it('deve retornar 0 para operação invalida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );
});
