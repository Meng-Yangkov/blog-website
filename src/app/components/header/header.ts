import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './header.html',
})
export class Header {

}
