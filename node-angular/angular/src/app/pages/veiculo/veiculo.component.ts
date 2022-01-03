import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarroService } from './services/carro.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  public list: any[] = [];
  public form: FormGroup = new FormGroup({
    modelo: new FormControl(''),
    anoFabricacao: new FormControl(''),
    quantidadePortas: new FormControl(''),
    marca: new FormControl(''),
    rodas: new FormControl(''),
    passageiros: new FormControl('')

  })

  constructor(private service: CarroService) { }

  ngOnInit(): void {
    this.loadList();

  }

  loadList(){
    this.service.get().subscribe(resultado => {
      this.list = resultado.carros;
    })

  }
  onSubmit(){
    this.service.post({
      carro:{
        modelo:this.form.get('modelo')?.value,
        anoFabricacao:this.form.get('anoFabricacao')?.value,
        quantidadePortas:this.form.get('quantidadePortas')?.value,
        marca:this.form.get('marca')?.value,
        
  
      }
    }).subscribe(()=>{
      this.loadList()
    })

  }
}
