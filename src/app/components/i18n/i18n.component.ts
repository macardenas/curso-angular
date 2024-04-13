import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-i18n',
  standalone: true,
  imports: [TranslocoModule],
  providers: [TranslocoService],
  templateUrl: './i18n.component.html',
  styleUrl: './i18n.component.css'
})
export class I18nComponent {


  translocoService: TranslocoService = inject(TranslocoService)
  constructor(){ }

  ChangeLanguaje(){
    if(this.translocoService.getActiveLang() === 'en'){
      this.translocoService.setActiveLang('es');
    }else{
      this.translocoService.setActiveLang('en');
    }
    
  }
  

  

}
