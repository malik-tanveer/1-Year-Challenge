import { Component } from '@angular/core';
import { Faq } from "../../components/faq/faq"

@Component({
  selector: 'app-home',
  imports: [
    Faq
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
