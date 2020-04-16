import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tmp;

  constructor() { }

  ngOnInit() {

    const themeMap = {
      dark: "light",
      light: "dark",
      // solar: "dark"
    };
    
    const theme = localStorage.getItem('theme')
      || (this.tmp = Object.keys(themeMap)[1],
          localStorage.setItem('theme', this.tmp),
          this.tmp);
    const bodyClass = document.body.classList;
    bodyClass.add(theme);
    
    
    function toggleTheme() {
      const current = localStorage.getItem('theme');
      const next = themeMap[current];
    
      bodyClass.replace(current, next);
      localStorage.setItem('theme', next);
    }
    document.getElementById('themeButton').onclick = toggleTheme;
  }

}
