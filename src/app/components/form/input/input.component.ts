import { Component, Input, OnInit } from '@angular/core';

interface InputConfig {
  label?: string;
  type: 'text' | 'number' | 'email' | 'password' | 'date' | 'tel' | 'url' | 'color' | 'file' | 'range' | 'time' | 'week' | 'month' | 'datetime-local' | 'select' | 'checkbox' | 'radio' | 'textarea';
  placeholder?: string;
  value?: string;
  options?: string[];
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputConfig: InputConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
