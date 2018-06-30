import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies = [
    { name: "Microsoft", logoUrl: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082012/msft_logo_print.png?itok=rtI8ap8-" },
    { name: "Lenovo", logoUrl: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082015/branding_lenovo-logo_lenovologoposred_high_res.png?itok=ST2dQazn" },
    { name: "DELL", logoUrl: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102015/dell_logo.png?itok=53-_2Ze9" },
    { name: "HP", logoUrl: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122015/untitled-1_58.png?itok=T2WTgDWb" },
    { name: "TOSHIBA", logoUrl: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0000/3422/brand.gif?itok=fSQ5wTCq" },
    { name: "CDW", logoUrl: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0002/2042/brand.gif?itok=GeaZgOQG" },
    { name: "Insight", logoUrl: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0000/9575/brand.gif?HB1qSGg5RMcQAsACOt27R8YiNniE81Gg&itok=V3-9uA-V" },
    { name: "PC World", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhsLeNbkooDxpKKpJOyfzir21Fwp-j8zgqP8VCsRRD1U4HuTP" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
