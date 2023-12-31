import { Component, Input, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SettingService } from '../../../service/setting/setting.service';
import { CompanysettingComponent } from '../companysetting.component';

@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css']
})
export class ChangeinfoComponent {

  constructor(private settingservice: SettingService, private toast: NgToastService,
    private parent: CompanysettingComponent) { }

  @Input() selectedid: any;
  @Input() infouser = {
    email: '',
    name: ''
  }

  changeinfo() {
    this.settingservice.changeinfo(this.infouser, this.selectedid).subscribe(
      res => {
        this.toast.success({
          detail: 'Info Changed',
          summary: '...',
          duration: 3000,
        })
        this.parent.loadlist();
      },
      err => {
        this.toast.error({
          detail: '',
          summary: err.message,
          duration: 3000,
        })
        console.log(err);
      }
    )
    console.log(this.infouser);
  }

}
