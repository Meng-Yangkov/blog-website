import { Component } from '@angular/core';

interface User{
  id: number,
  name: string,
  email?: string,
  role?: string
};

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  user: User = {
    id: 1,
    name: "Pheng Mengheak",
    email: "heakmeng42@gmail.com",
    role: "Student"
  }
}
