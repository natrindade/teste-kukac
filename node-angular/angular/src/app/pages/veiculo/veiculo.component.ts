import { Component, OnInit } from '@angular/core';
import { CarroService } from './services/carro.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  public list: any[] = [];

  constructor(private service: CarroService) { }

  ngOnInit(): void {
    this.service.get().subscribe(resultado=>{
      this.list = resultado.carros;
    })

  }

}
