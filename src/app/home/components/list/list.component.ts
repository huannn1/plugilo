import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [{
    "name": "Anthera Pharmaceuticals, Inc.",
    "coverUrl": "http://dummyimage.com/256x392.png/cc0000/ffffff",
    "company": "Eimbee",
    "datetime": "5/17/2018",
    "list": "Calypso",
    "isNew": true,
    "hasAuthor": true,
    "author": "Brendon Bollins"
  }, {
    "name": "Genpact Limited",
    "coverUrl": "http://dummyimage.com/256x334.png/dddddd/000000",
    "company": "Trunyx",
    "datetime": "7/3/2017",
    "list": "Meadow Valley",
    "isNew": true,
    "hasAuthor": true,
    "author": "Tate Petrakov"
  }, {
    "name": "Agile Therapeutics, Inc.",
    "coverUrl": "http://dummyimage.com/256x366.png/cc0000/ffffff",
    "company": "Eimbee",
    "datetime": "2/26/2018",
    "list": "Bluestem",
    "isNew": false,
    "hasAuthor": true,
    "author": "Maurits Attryde"
  }, {
    "name": "China Fund, Inc. (The)",
    "coverUrl": "http://dummyimage.com/256x256.png/dddddd/000000",
    "company": "Devify",
    "datetime": "9/11/2017",
    "list": "Spenser",
    "isNew": false,
    "hasAuthor": false,
    "author": "Danica Biss"
  }, {
    "name": "Therapix Biosciences Ltd.",
    "coverUrl": "http://dummyimage.com/256x340.png/dddddd/000000",
    "company": "Yozio",
    "datetime": "3/3/2018",
    "list": "Warner",
    "isNew": true,
    "hasAuthor": true,
    "author": "Suzann Clissett"
  }, {
    "name": "Celsion Corporation",
    "coverUrl": "http://dummyimage.com/256x397.png/ff4444/ffffff",
    "company": "Livetube",
    "datetime": "11/25/2017",
    "list": "American Ash",
    "isNew": true,
    "hasAuthor": false,
    "author": "Rayner Woodson"
  }, {
    "name": "G. Willi-Food International,  Ltd.",
    "coverUrl": "http://dummyimage.com/256x377.png/5fa2dd/ffffff",
    "company": "Meejo",
    "datetime": "5/31/2018",
    "list": "Commercial",
    "isNew": true,
    "hasAuthor": false,
    "author": "Ingaberg Lau"
  }, {
    "name": "ImmuCell Corporation",
    "coverUrl": "http://dummyimage.com/256x271.png/ff4444/ffffff",
    "company": "Youtags",
    "datetime": "3/16/2018",
    "list": "Loeprich",
    "isNew": true,
    "hasAuthor": true,
    "author": "Vladamir MacDiarmid"
  }, {
    "name": "Theravance Biopharma, Inc.",
    "coverUrl": "http://dummyimage.com/256x298.png/cc0000/ffffff",
    "company": "Demivee",
    "datetime": "5/8/2018",
    "list": "Ilene",
    "isNew": true,
    "hasAuthor": false,
    "author": "Lemmie Zarfai"
  }, {
    "name": "Determine, Inc. ",
    "coverUrl": "http://dummyimage.com/256x314.png/ff4444/ffffff",
    "company": "Brightbean",
    "datetime": "9/7/2017",
    "list": "Walton",
    "isNew": false,
    "hasAuthor": false,
    "author": "Ora McPheat"
  }, {
    "name": "Nuveen Preferred Income Opportunites Fund",
    "coverUrl": "http://dummyimage.com/256x269.png/cc0000/ffffff",
    "company": "Youtags",
    "datetime": "12/15/2017",
    "list": "Lotheville",
    "isNew": true,
    "hasAuthor": true,
    "author": "Mart Marvin"
  }, {
    "name": "UNIVERSAL INSURANCE HOLDINGS INC",
    "coverUrl": "http://dummyimage.com/256x397.png/ff4444/ffffff",
    "company": "Skajo",
    "datetime": "1/26/2018",
    "list": "Sachs",
    "isNew": false,
    "hasAuthor": true,
    "author": "Haily Gummory"
  }, {
    "name": "iShares S&P/Citigroup 1-3 Year International Treasury Bond Fun",
    "coverUrl": "http://dummyimage.com/256x278.png/dddddd/000000",
    "company": "Feedfish",
    "datetime": "3/8/2018",
    "list": "Ludington",
    "isNew": false,
    "hasAuthor": false,
    "author": "Jamie Corbie"
  }, {
    "name": "Manulife Financial Corp",
    "coverUrl": "http://dummyimage.com/256x392.png/dddddd/000000",
    "company": "Kwilith",
    "datetime": "3/29/2018",
    "list": "Westerfield",
    "isNew": false,
    "hasAuthor": false,
    "author": "Biddy Ryde"
  }, {
    "name": "Mirna Therapeutics, Inc.",
    "coverUrl": "http://dummyimage.com/256x301.png/5fa2dd/ffffff",
    "company": "Skibox",
    "datetime": "12/14/2017",
    "list": "Karstens",
    "isNew": true,
    "hasAuthor": false,
    "author": "Whittaker Fairham"
  }, {
    "name": "Amaya Inc.",
    "coverUrl": "http://dummyimage.com/256x331.png/5fa2dd/ffffff",
    "company": "Topiclounge",
    "datetime": "5/21/2018",
    "list": "Arizona",
    "isNew": true,
    "hasAuthor": true,
    "author": "Roger Ryves"
  }, {
    "name": "Masonite International Corporation",
    "coverUrl": "http://dummyimage.com/256x270.png/cc0000/ffffff",
    "company": "Reallinks",
    "datetime": "4/28/2018",
    "list": "Emmet",
    "isNew": false,
    "hasAuthor": false,
    "author": "Jeanna Cust"
  }, {
    "name": "First Trust South Korea AlphaDEX Fund",
    "coverUrl": "http://dummyimage.com/256x370.png/ff4444/ffffff",
    "company": "Buzzbean",
    "datetime": "5/6/2018",
    "list": "Hanson",
    "isNew": true,
    "hasAuthor": false,
    "author": "Jozef McGrory"
  }, {
    "name": "WCF Bancorp, Inc.",
    "coverUrl": "http://dummyimage.com/256x389.png/5fa2dd/ffffff",
    "company": "Blogtags",
    "datetime": "2/27/2018",
    "list": "Coolidge",
    "isNew": true,
    "hasAuthor": false,
    "author": "Marcela Roderham"
  }, {
    "name": "Lyon William Homes",
    "coverUrl": "http://dummyimage.com/256x288.png/dddddd/000000",
    "company": "Zoonoodle",
    "datetime": "1/22/2018",
    "list": "Artisan",
    "isNew": true,
    "hasAuthor": false,
    "author": "Iormina Gerhts"
  }, {
    "name": "MACOM Technology Solutions Holdings, Inc.",
    "coverUrl": "http://dummyimage.com/256x266.png/ff4444/ffffff",
    "company": "Twitterlist",
    "datetime": "4/8/2018",
    "list": "Iowa",
    "isNew": false,
    "hasAuthor": true,
    "author": "Stephen Goning"
  }, {
    "name": "Sabine Royalty Trust",
    "coverUrl": "http://dummyimage.com/256x256.png/cc0000/ffffff",
    "company": "JumpXS",
    "datetime": "9/23/2017",
    "list": "Dennis",
    "isNew": false,
    "hasAuthor": false,
    "author": "Auguste Skains"
  }, {
    "name": "Apollo Global Management, LLC",
    "coverUrl": "http://dummyimage.com/256x337.png/5fa2dd/ffffff",
    "company": "Agivu",
    "datetime": "12/30/2017",
    "list": "Anthes",
    "isNew": false,
    "hasAuthor": true,
    "author": "Adrianne Clemendet"
  }, {
    "name": "Old Republic International Corporation",
    "coverUrl": "http://dummyimage.com/256x351.png/ff4444/ffffff",
    "company": "Yodoo",
    "datetime": "1/14/2018",
    "list": "Butterfield",
    "isNew": true,
    "hasAuthor": false,
    "author": "Teddy Tift"
  }, {
    "name": "Dril-Quip, Inc.",
    "coverUrl": "http://dummyimage.com/256x400.png/dddddd/000000",
    "company": "Devbug",
    "datetime": "4/29/2018",
    "list": "Holy Cross",
    "isNew": true,
    "hasAuthor": true,
    "author": "Deanne Rangle"
  }, {
    "name": "American Financial Group, Inc.",
    "coverUrl": "http://dummyimage.com/256x293.png/dddddd/000000",
    "company": "Skyba",
    "datetime": "2/9/2018",
    "list": "Algoma",
    "isNew": false,
    "hasAuthor": true,
    "author": "Kirsti Addionisio"
  }, {
    "name": "Q2 Holdings, Inc.",
    "coverUrl": "http://dummyimage.com/256x383.png/ff4444/ffffff",
    "company": "Jabbertype",
    "datetime": "4/27/2018",
    "list": "6th",
    "isNew": true,
    "hasAuthor": true,
    "author": "Meredithe Whanstall"
  }, {
    "name": "SAP SE",
    "coverUrl": "http://dummyimage.com/256x354.png/cc0000/ffffff",
    "company": "Eadel",
    "datetime": "6/17/2018",
    "list": "Annamark",
    "isNew": false,
    "hasAuthor": true,
    "author": "Vick Surgenor"
  }, {
    "name": "Everest Re Group, Ltd.",
    "coverUrl": "http://dummyimage.com/256x304.png/ff4444/ffffff",
    "company": "Kayveo",
    "datetime": "12/26/2017",
    "list": "Bartelt",
    "isNew": true,
    "hasAuthor": true,
    "author": "Benedikta Yepiskov"
  }, {
    "name": "ENGlobal Corporation",
    "coverUrl": "http://dummyimage.com/256x389.png/ff4444/ffffff",
    "company": "Trilith",
    "datetime": "5/4/2018",
    "list": "Garrison",
    "isNew": false,
    "hasAuthor": true,
    "author": "Dorothea Peevor"
  }, {
    "name": "American National Bankshares, Inc.",
    "coverUrl": "http://dummyimage.com/256x316.png/cc0000/ffffff",
    "company": "Topicblab",
    "datetime": "4/23/2018",
    "list": "North",
    "isNew": false,
    "hasAuthor": true,
    "author": "Sampson Brinson"
  }, {
    "name": "PC Connection, Inc.",
    "coverUrl": "http://dummyimage.com/256x305.png/dddddd/000000",
    "company": "Jaxbean",
    "datetime": "9/11/2017",
    "list": "Fisk",
    "isNew": false,
    "hasAuthor": true,
    "author": "Cathie Czajkowski"
  }, {
    "name": "China Rapid Finance Limited",
    "coverUrl": "http://dummyimage.com/256x387.png/ff4444/ffffff",
    "company": "Agivu",
    "datetime": "9/8/2017",
    "list": "Esker",
    "isNew": false,
    "hasAuthor": false,
    "author": "Cindee Moseley"
  }, {
    "name": "NASDAQ TEST STOCK",
    "coverUrl": "http://dummyimage.com/256x317.png/cc0000/ffffff",
    "company": "Divanoodle",
    "datetime": "1/4/2018",
    "list": "Emmet",
    "isNew": true,
    "hasAuthor": true,
    "author": "Josephina Rysom"
  }, {
    "name": "Capstone Turbine Corporation",
    "coverUrl": "http://dummyimage.com/256x378.png/ff4444/ffffff",
    "company": "Tagpad",
    "datetime": "10/10/2017",
    "list": "Chinook",
    "isNew": true,
    "hasAuthor": true,
    "author": "Vinni Marskell"
  }, {
    "name": "Real Industry, Inc. ",
    "coverUrl": "http://dummyimage.com/256x400.png/5fa2dd/ffffff",
    "company": "Zazio",
    "datetime": "12/10/2017",
    "list": "Vermont",
    "isNew": true,
    "hasAuthor": true,
    "author": "Marlon Keuntje"
  }, {
    "name": "Legg Mason Developed EX-US Diversified Core ETF",
    "coverUrl": "http://dummyimage.com/256x266.png/cc0000/ffffff",
    "company": "Brightbean",
    "datetime": "4/6/2018",
    "list": "Acker",
    "isNew": false,
    "hasAuthor": true,
    "author": "Felecia Fatscher"
  }, {
    "name": "Cerecor Inc.",
    "coverUrl": "http://dummyimage.com/256x373.png/cc0000/ffffff",
    "company": "Zoombeat",
    "datetime": "2/16/2018",
    "list": "Algoma",
    "isNew": false,
    "hasAuthor": false,
    "author": "Shermy Frede"
  }, {
    "name": "DDR Corp.",
    "coverUrl": "http://dummyimage.com/256x369.png/ff4444/ffffff",
    "company": "Devbug",
    "datetime": "12/3/2017",
    "list": "Kipling",
    "isNew": false,
    "hasAuthor": false,
    "author": "Corilla Adamsson"
  }, {
    "name": "Alexandria Real Estate Equities, Inc.",
    "coverUrl": "http://dummyimage.com/256x292.png/5fa2dd/ffffff",
    "company": "Thoughtmix",
    "datetime": "8/30/2017",
    "list": "Banding",
    "isNew": false,
    "hasAuthor": true,
    "author": "Yuma Twaite"
  }, {
    "name": "Brooks Automation, Inc.",
    "coverUrl": "http://dummyimage.com/256x287.png/ff4444/ffffff",
    "company": "Mydeo",
    "datetime": "3/18/2018",
    "list": "Mcguire",
    "isNew": true,
    "hasAuthor": false,
    "author": "Ania Cumberlidge"
  }, {
    "name": "Seattle Genetics, Inc.",
    "coverUrl": "http://dummyimage.com/256x309.png/ff4444/ffffff",
    "company": "Ntags",
    "datetime": "11/14/2017",
    "list": "Esch",
    "isNew": false,
    "hasAuthor": false,
    "author": "Karena Chaloner"
  }, {
    "name": "SilverBow Resorces, Inc.",
    "coverUrl": "http://dummyimage.com/256x359.png/ff4444/ffffff",
    "company": "Tagpad",
    "datetime": "5/26/2018",
    "list": "Badeau",
    "isNew": false,
    "hasAuthor": false,
    "author": "Ali Sancraft"
  }, {
    "name": "Greenlight Reinsurance, Ltd.",
    "coverUrl": "http://dummyimage.com/256x295.png/cc0000/ffffff",
    "company": "Linktype",
    "datetime": "2/19/2018",
    "list": "Daystar",
    "isNew": false,
    "hasAuthor": true,
    "author": "Darice Dendle"
  }, {
    "name": "Evoke Pharma, Inc.",
    "coverUrl": "http://dummyimage.com/256x398.png/5fa2dd/ffffff",
    "company": "Dynabox",
    "datetime": "9/25/2017",
    "list": "Menomonie",
    "isNew": false,
    "hasAuthor": false,
    "author": "Katy Gauntley"
  }, {
    "name": "PNC Financial Services Group, Inc. (The)",
    "coverUrl": "http://dummyimage.com/256x334.png/cc0000/ffffff",
    "company": "Gigaclub",
    "datetime": "8/7/2017",
    "list": "Sullivan",
    "isNew": false,
    "hasAuthor": false,
    "author": "Cyndia Cicchinelli"
  }, {
    "name": "ProShares UltraShort Nasdaq Biotechnology",
    "coverUrl": "http://dummyimage.com/256x280.png/cc0000/ffffff",
    "company": "Tagfeed",
    "datetime": "4/25/2018",
    "list": "Brown",
    "isNew": true,
    "hasAuthor": true,
    "author": "Trstram Circuitt"
  }, {
    "name": "Cognex Corporation",
    "coverUrl": "http://dummyimage.com/256x321.png/dddddd/000000",
    "company": "Linkbridge",
    "datetime": "2/18/2018",
    "list": "Cascade",
    "isNew": true,
    "hasAuthor": false,
    "author": "Alexa Berkery"
  }, {
    "name": "Chemung Financial Corp",
    "coverUrl": "http://dummyimage.com/256x274.png/dddddd/000000",
    "company": "Fadeo",
    "datetime": "8/11/2017",
    "list": "Oriole",
    "isNew": false,
    "hasAuthor": false,
    "author": "Chrissie Stainer"
  }, {
    "name": "Innospec Inc.",
    "coverUrl": "http://dummyimage.com/256x350.png/5fa2dd/ffffff",
    "company": "Lazz",
    "datetime": "10/21/2017",
    "list": "Summer Ridge",
    "isNew": false,
    "hasAuthor": true,
    "author": "Pat Pirrie"
  }, {
    "name": "Acasti Pharma, Inc.",
    "coverUrl": "http://dummyimage.com/256x306.png/dddddd/000000",
    "company": "Zooveo",
    "datetime": "4/21/2018",
    "list": "Chinook",
    "isNew": true,
    "hasAuthor": true,
    "author": "Ewart Tiffin"
  }, {
    "name": "Mobile TeleSystems OJSC",
    "coverUrl": "http://dummyimage.com/256x392.png/5fa2dd/ffffff",
    "company": "Gigabox",
    "datetime": "2/23/2018",
    "list": "Annamark",
    "isNew": true,
    "hasAuthor": true,
    "author": "Bobbe Taylder"
  }, {
    "name": "CBL & Associates Properties, Inc.",
    "coverUrl": "http://dummyimage.com/256x382.png/5fa2dd/ffffff",
    "company": "Buzzster",
    "datetime": "9/19/2017",
    "list": "Anniversary",
    "isNew": false,
    "hasAuthor": false,
    "author": "Teddy Sayes"
  }, {
    "name": "180 Degree Capital Corp.",
    "coverUrl": "http://dummyimage.com/256x286.png/5fa2dd/ffffff",
    "company": "Tagchat",
    "datetime": "2/23/2018",
    "list": "Old Gate",
    "isNew": true,
    "hasAuthor": false,
    "author": "Candida Francesc"
  }, {
    "name": "Managed Duration Investment Grade Municipal Fund",
    "coverUrl": "http://dummyimage.com/256x258.png/dddddd/000000",
    "company": "Voonder",
    "datetime": "3/23/2018",
    "list": "Di Loreto",
    "isNew": true,
    "hasAuthor": true,
    "author": "Tadeo Carlisi"
  }, {
    "name": "Taubman Centers, Inc.",
    "coverUrl": "http://dummyimage.com/256x295.png/cc0000/ffffff",
    "company": "Dabjam",
    "datetime": "11/18/2017",
    "list": "Sunnyside",
    "isNew": true,
    "hasAuthor": true,
    "author": "Hildagard Baszkiewicz"
  }, {
    "name": "Safe Bulkers, Inc",
    "coverUrl": "http://dummyimage.com/256x304.png/dddddd/000000",
    "company": "Pixonyx",
    "datetime": "12/25/2017",
    "list": "Melvin",
    "isNew": false,
    "hasAuthor": true,
    "author": "Gordie Giocannoni"
  }, {
    "name": "Brooks Automation, Inc.",
    "coverUrl": "http://dummyimage.com/256x334.png/dddddd/000000",
    "company": "Kazio",
    "datetime": "7/17/2017",
    "list": "Blackbird",
    "isNew": false,
    "hasAuthor": false,
    "author": "Silvio Nixon"
  }, {
    "name": "Check-Cap Ltd.",
    "coverUrl": "http://dummyimage.com/256x350.png/cc0000/ffffff",
    "company": "Zoombeat",
    "datetime": "6/22/2018",
    "list": "Duke",
    "isNew": true,
    "hasAuthor": true,
    "author": "Reggie Bartot"
  }, {
    "name": "Capstone Turbine Corporation",
    "coverUrl": "http://dummyimage.com/256x399.png/cc0000/ffffff",
    "company": "Blogspan",
    "datetime": "8/15/2017",
    "list": "Division",
    "isNew": false,
    "hasAuthor": true,
    "author": "Ardelle Rolance"
  }, {
    "name": "Cleveland BioLabs, Inc.",
    "coverUrl": "http://dummyimage.com/256x321.png/5fa2dd/ffffff",
    "company": "Leexo",
    "datetime": "12/31/2017",
    "list": "Nova",
    "isNew": true,
    "hasAuthor": true,
    "author": "Dorothee Erickssen"
  }, {
    "name": "AMAG Pharmaceuticals, Inc.",
    "coverUrl": "http://dummyimage.com/256x295.png/cc0000/ffffff",
    "company": "Divavu",
    "datetime": "12/8/2017",
    "list": "Stone Corner",
    "isNew": false,
    "hasAuthor": false,
    "author": "Calla Pettisall"
  }, {
    "name": "EPR Properties",
    "coverUrl": "http://dummyimage.com/256x397.png/cc0000/ffffff",
    "company": "Youspan",
    "datetime": "10/9/2017",
    "list": "Messerschmidt",
    "isNew": false,
    "hasAuthor": false,
    "author": "Cosme Buney"
  }, {
    "name": "Centene Corporation",
    "coverUrl": "http://dummyimage.com/256x315.png/dddddd/000000",
    "company": "Yambee",
    "datetime": "8/15/2017",
    "list": "Mayer",
    "isNew": true,
    "hasAuthor": false,
    "author": "Hersh Tebbs"
  }, {
    "name": "Adamas Pharmaceuticals, Inc.",
    "coverUrl": "http://dummyimage.com/256x334.png/dddddd/000000",
    "company": "Lajo",
    "datetime": "9/3/2017",
    "list": "Reindahl",
    "isNew": true,
    "hasAuthor": false,
    "author": "Elfrida Gamlen"
  }, {
    "name": "Monsanto Company",
    "coverUrl": "http://dummyimage.com/256x273.png/dddddd/000000",
    "company": "Yamia",
    "datetime": "1/30/2018",
    "list": "Meadow Ridge",
    "isNew": false,
    "hasAuthor": false,
    "author": "Analise Snelgrove"
  }, {
    "name": "XL Group Ltd.",
    "coverUrl": "http://dummyimage.com/256x353.png/dddddd/000000",
    "company": "Eimbee",
    "datetime": "12/25/2017",
    "list": "Heath",
    "isNew": false,
    "hasAuthor": true,
    "author": "Nonah Dacres"
  }, {
    "name": "Athenex, Inc.",
    "coverUrl": "http://dummyimage.com/256x359.png/dddddd/000000",
    "company": "Ntag",
    "datetime": "2/24/2018",
    "list": "Green",
    "isNew": false,
    "hasAuthor": false,
    "author": "Caresse Meijer"
  }, {
    "name": "Grupo Financiero Galicia S.A.",
    "coverUrl": "http://dummyimage.com/256x327.png/ff4444/ffffff",
    "company": "Eare",
    "datetime": "8/20/2017",
    "list": "Westend",
    "isNew": true,
    "hasAuthor": false,
    "author": "Perri Tilliards"
  }, {
    "name": "G1 Therapeutics, Inc.",
    "coverUrl": "http://dummyimage.com/256x354.png/cc0000/ffffff",
    "company": "Ooba",
    "datetime": "4/19/2018",
    "list": "Springview",
    "isNew": false,
    "hasAuthor": false,
    "author": "Nana McReath"
  }, {
    "name": "Wabash National Corporation",
    "coverUrl": "http://dummyimage.com/256x287.png/cc0000/ffffff",
    "company": "Minyx",
    "datetime": "5/12/2018",
    "list": "Forster",
    "isNew": false,
    "hasAuthor": true,
    "author": "Edita Height"
  }, {
    "name": "Conduent Incorporated",
    "coverUrl": "http://dummyimage.com/256x362.png/dddddd/000000",
    "company": "Zazio",
    "datetime": "5/7/2018",
    "list": "Melby",
    "isNew": false,
    "hasAuthor": false,
    "author": "Christian Andreas"
  }, {
    "name": "Wynn Resorts, Limited",
    "coverUrl": "http://dummyimage.com/256x366.png/dddddd/000000",
    "company": "Skivee",
    "datetime": "4/15/2018",
    "list": "Almo",
    "isNew": true,
    "hasAuthor": false,
    "author": "Culley Quayle"
  }, {
    "name": "DTE Energy Company",
    "coverUrl": "http://dummyimage.com/256x343.png/cc0000/ffffff",
    "company": "Agimba",
    "datetime": "12/8/2017",
    "list": "Mendota",
    "isNew": false,
    "hasAuthor": true,
    "author": "Cob Pinches"
  }, {
    "name": "First Trust NASDAQ Cybersecurity ETF",
    "coverUrl": "http://dummyimage.com/256x311.png/dddddd/000000",
    "company": "Skiptube",
    "datetime": "8/29/2017",
    "list": "Sage",
    "isNew": false,
    "hasAuthor": true,
    "author": "Horacio Raffles"
  }, {
    "name": "Transcat, Inc.",
    "coverUrl": "http://dummyimage.com/256x393.png/ff4444/ffffff",
    "company": "Gabcube",
    "datetime": "9/25/2017",
    "list": "Dixon",
    "isNew": true,
    "hasAuthor": true,
    "author": "Patrick Kiltie"
  }, {
    "name": "Synchrony Financial",
    "coverUrl": "http://dummyimage.com/256x342.png/dddddd/000000",
    "company": "Eimbee",
    "datetime": "2/18/2018",
    "list": "Forest Run",
    "isNew": false,
    "hasAuthor": true,
    "author": "Lilah Clace"
  }, {
    "name": "Duff & Phelps Utilities Income, Inc.",
    "coverUrl": "http://dummyimage.com/256x272.png/5fa2dd/ffffff",
    "company": "Yambee",
    "datetime": "5/19/2018",
    "list": "Ridgeway",
    "isNew": true,
    "hasAuthor": true,
    "author": "Colan Vasyutichev"
  }, {
    "name": "Quad Graphics, Inc",
    "coverUrl": "http://dummyimage.com/256x373.png/ff4444/ffffff",
    "company": "Bubbletube",
    "datetime": "5/20/2018",
    "list": "Browning",
    "isNew": true,
    "hasAuthor": true,
    "author": "Lucinda Adolfson"
  }, {
    "name": "Carolina Trust BancShares, Inc.",
    "coverUrl": "http://dummyimage.com/256x327.png/5fa2dd/ffffff",
    "company": "Dabvine",
    "datetime": "4/14/2018",
    "list": "Stephen",
    "isNew": false,
    "hasAuthor": false,
    "author": "Cassie Saundercock"
  }, {
    "name": "Kaiser Aluminum Corporation",
    "coverUrl": "http://dummyimage.com/256x300.png/dddddd/000000",
    "company": "Yakidoo",
    "datetime": "1/21/2018",
    "list": "Gina",
    "isNew": true,
    "hasAuthor": true,
    "author": "Nolan Samuels"
  }, {
    "name": "Blackrock New York Municipal Bond Trust",
    "coverUrl": "http://dummyimage.com/256x376.png/cc0000/ffffff",
    "company": "Meedoo",
    "datetime": "3/7/2018",
    "list": "Glendale",
    "isNew": true,
    "hasAuthor": true,
    "author": "Horatius Ciccottini"
  }, {
    "name": "Tortoise MLP Fund, Inc.",
    "coverUrl": "http://dummyimage.com/256x382.png/5fa2dd/ffffff",
    "company": "Jamia",
    "datetime": "3/19/2018",
    "list": "Rigney",
    "isNew": false,
    "hasAuthor": true,
    "author": "Perice Farren"
  }, {
    "name": "American Outdoor Brands Corporation",
    "coverUrl": "http://dummyimage.com/256x381.png/cc0000/ffffff",
    "company": "Jaloo",
    "datetime": "7/18/2017",
    "list": "Tomscot",
    "isNew": false,
    "hasAuthor": false,
    "author": "Lottie Elderfield"
  }, {
    "name": "Dana Incorporated",
    "coverUrl": "http://dummyimage.com/256x370.png/dddddd/000000",
    "company": "Dabvine",
    "datetime": "7/11/2017",
    "list": "New Castle",
    "isNew": false,
    "hasAuthor": false,
    "author": "Thaddus Simone"
  }, {
    "name": "Templeton Emerging Markets Fund",
    "coverUrl": "http://dummyimage.com/256x345.png/5fa2dd/ffffff",
    "company": "Wikibox",
    "datetime": "5/4/2018",
    "list": "Superior",
    "isNew": true,
    "hasAuthor": false,
    "author": "Hulda Ireson"
  }, {
    "name": "Transportadora De Gas Sa Ord B",
    "coverUrl": "http://dummyimage.com/256x292.png/dddddd/000000",
    "company": "Katz",
    "datetime": "4/4/2018",
    "list": "Vermont",
    "isNew": true,
    "hasAuthor": true,
    "author": "Callida Dine-Hart"
  }, {
    "name": "United States Cellular Corporation",
    "coverUrl": "http://dummyimage.com/256x385.png/cc0000/ffffff",
    "company": "Cogidoo",
    "datetime": "5/2/2018",
    "list": "Algoma",
    "isNew": true,
    "hasAuthor": true,
    "author": "Tamarra Sahlstrom"
  }, {
    "name": "Nuveen S&P 500 Buy-Write Income Fund",
    "coverUrl": "http://dummyimage.com/256x352.png/ff4444/ffffff",
    "company": "Yacero",
    "datetime": "4/14/2018",
    "list": "Birchwood",
    "isNew": true,
    "hasAuthor": true,
    "author": "Melvyn Twaite"
  }, {
    "name": "American National Insurance Company",
    "coverUrl": "http://dummyimage.com/256x374.png/ff4444/ffffff",
    "company": "Youtags",
    "datetime": "5/17/2018",
    "list": "Porter",
    "isNew": true,
    "hasAuthor": false,
    "author": "Bryanty Seeley"
  }, {
    "name": "Energous Corporation",
    "coverUrl": "http://dummyimage.com/256x271.png/5fa2dd/ffffff",
    "company": "Oloo",
    "datetime": "5/2/2018",
    "list": "Bay",
    "isNew": false,
    "hasAuthor": true,
    "author": "Thorny Dadley"
  }, {
    "name": "Frank&#39;s International N.V.",
    "coverUrl": "http://dummyimage.com/256x317.png/5fa2dd/ffffff",
    "company": "Devcast",
    "datetime": "1/2/2018",
    "list": "Arkansas",
    "isNew": true,
    "hasAuthor": true,
    "author": "Olivier Docharty"
  }, {
    "name": "DigitalGlobe, Inc",
    "coverUrl": "http://dummyimage.com/256x286.png/ff4444/ffffff",
    "company": "Digitube",
    "datetime": "3/14/2018",
    "list": "Shasta",
    "isNew": false,
    "hasAuthor": true,
    "author": "Estevan Shenley"
  }, {
    "name": "Clearfield, Inc.",
    "coverUrl": "http://dummyimage.com/256x359.png/ff4444/ffffff",
    "company": "Realbridge",
    "datetime": "5/9/2018",
    "list": "Manitowish",
    "isNew": false,
    "hasAuthor": false,
    "author": "Derril Paggitt"
  }, {
    "name": "Zoetis Inc.",
    "coverUrl": "http://dummyimage.com/256x263.png/dddddd/000000",
    "company": "Youspan",
    "datetime": "1/18/2018",
    "list": "Independence",
    "isNew": false,
    "hasAuthor": true,
    "author": "Zonnya Doige"
  }, {
    "name": "Morgan Stanley",
    "coverUrl": "http://dummyimage.com/256x394.png/ff4444/ffffff",
    "company": "Shuffledrive",
    "datetime": "10/14/2017",
    "list": "Main",
    "isNew": false,
    "hasAuthor": false,
    "author": "Fleur Sculpher"
  }, {
    "name": "John Hancock Hedged Equity & Income Fund",
    "coverUrl": "http://dummyimage.com/256x353.png/ff4444/ffffff",
    "company": "Dynava",
    "datetime": "8/19/2017",
    "list": "Grasskamp",
    "isNew": true,
    "hasAuthor": true,
    "author": "Fergus Bartholat"
  }, {
    "name": "Kemper Corporation",
    "coverUrl": "http://dummyimage.com/256x265.png/5fa2dd/ffffff",
    "company": "Mybuzz",
    "datetime": "5/30/2018",
    "list": "Hazelcrest",
    "isNew": true,
    "hasAuthor": true,
    "author": "Ninetta Outridge"
  }, {
    "name": "Duff & Phelps Utilities Tax-Free Income, Inc.",
    "coverUrl": "http://dummyimage.com/256x325.png/cc0000/ffffff",
    "company": "Meeveo",
    "datetime": "7/29/2017",
    "list": "Mayer",
    "isNew": true,
    "hasAuthor": true,
    "author": "Osmund Pizzey"
  }, {
    "name": "India Fund, Inc. (The)",
    "coverUrl": "http://dummyimage.com/256x366.png/dddddd/000000",
    "company": "Topicstorm",
    "datetime": "4/8/2018",
    "list": "Havey",
    "isNew": true,
    "hasAuthor": true,
    "author": "Damian Persey"
  }];
}
