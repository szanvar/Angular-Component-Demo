import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infosystem',
  templateUrl: './infosystem.component.html',
  styleUrls: ['./infosystem.component.css']
})
export class InfosystemComponent implements OnInit 
{
  name = "Angular - 12";

  fun() :string
  {
    return "Inside Fun()";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
