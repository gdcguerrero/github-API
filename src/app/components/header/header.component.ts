import { Component } from '@angular/core'
import { AuthService } from '../../services/service/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
    public title: string = 'API Github'

    constructor(private service: AuthService) {}

    closeSession(){
      this.service.closeSession()
    }
}
