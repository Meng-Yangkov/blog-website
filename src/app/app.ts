import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ControlFlow } from "./components/control-flow/control-flow";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ControlFlow],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('blog-website');
}
