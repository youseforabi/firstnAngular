import { Component } from '@angular/core';

interface Products{
  img:string;
  title:string;
  description:string;
  price:number
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})



export class aboutComponent {
  products:Products[] = [
    { title : "PF Camera"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 1500,  img : "../../assets/IMGS/pexels-alex-andrews-821651.jpg" },
    { title : "Adv Camera"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 3000,  img : "../../assets/IMGS/pexels-alex-andrews-821749.jpg" },
    { title : "Nnikon"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 2500,  img : "../../assets/IMGS/pexels-alex-azabache-3907507.jpg" },
    { title : "Apple Lab"  , description : "The photo showcases a sleek and modern laptop with a metallic finish" , price : 20000,  img : "../../assets/IMGS/pexels-daan-stevens-939331.jpg" },
    { title : "Clsc Camera"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 1900,  img : "../../assets/IMGS/pexels-demeter-attila-50924.jpg" },
    { title : "wt Watch"  , description : "This is a white watch" , price : 1000,  img : "../../assets/IMGS/pexels-javon-swaby-2783873.jpg" },
    { title : "Dig Camera"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 8000,  img : "../../assets/IMGS/pexels-kaique-rocha-243757.jpg" },
    { title : "Sale Lab"  , description : "The photo showcases a sleek and modern laptop with a metallic finish" , price : 15000,  img : "../../assets/IMGS/pexels-karolina-grabowska-5632381.jpg" },
    { title : "Iphone"  , description : "The photo features a stylish and cutting-edge smartphone with a borderless display" , price : 20000,  img : "../../assets/IMGS/pexels-jess-bailey-designs-788946.jpg" },
    { title : "awe Lab"  , description : "The photo showcases a sleek and modern laptop with a metallic finish" , price : 25000,  img : "../../assets/IMGS/pexels-karolina-grabowska-5632388.jpg" },
    { title : "Coffe Machine"  , description : "it is a nice coffee machine" , price : 24000,  img : "../../assets/IMGS/pexels-lina-kivaka-1879318.jpg" },
    { title : "Android Phone"  , description : "The photo features a stylish and cutting-edge smartphone with a borderless display" , price : 30000,  img : "../../assets/IMGS/pexels-tyler-lastovich-699122.jpg" },
    { title : "Magic Phone"  , description : "The photo features a stylish and cutting-edge smartphone with a borderless display" , price : 9000,  img : "../../assets/IMGS/pexels-noah-erickson-404280.jpg" },
    { title : "Nice Lab"  , description : "The photo showcases a sleek and modern laptop with a metallic finish" , price : 14000,  img : "../../assets/IMGS/pexels-lisa-fotios-1006293.jpg" },
    { title : "Blc Camera"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 1200,  img : "../../assets/IMGS/pexels-math-90946.jpg" },
    { title : "Watching Camera"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 2800,  img : "../../assets/IMGS/pexels-milo-young-3602258.jpg" },
    { title : "HeadSet"  , description : "it is a nice HeadSet" , price : 2200,  img : "../../assets/IMGS/pexels-pavel-danilyuk-8038323.jpg" },
    { title : "Sensor"  , description : "it is a nice Sensor" , price : 1200,  img : "../../assets/IMGS/pexels-pixabay-279906.jpg" },
    { title : "wht Lab"  , description : "The photo showcases a sleek and modern laptop with a metallic finish" , price : 1000,  img : "../../assets/IMGS/pexels-pixabay-459653.jpg" },
    { title : "Power Camera"  , description : "The photo captures a professional-grade camera with interchangeable lenses" , price : 3500,  img : "../../assets/IMGS/pexels-sameer-kalani-3802602.jpg" },
  ]
}
