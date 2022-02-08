import { Component,OnInit,ViewChildren } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  @ViewChildren('myItem') item;
  selectedIds = [];
 display:any;
 data:any;
 dec:any;

  ngOnInit(){


    // dynamic json 

    this.data = {
  "info": {
    "laptop": {
    },
    "config": {
      "properties": {
        "ram": {
        },
        "processor": {
        },
        "hdd": {

        }
      }
    },
    "link": {
     
    },
    "name": {
    
    },
    "company": {
      "properties": {
        "model": {
         
        },
        "maker": {
          "type": "integer"
        },
        "country": {
          "type": "text"
        },
        "enterprise": {
        
        }

      }
    }
  }
};


  // varible 

    this.display = this.data['info'];
    console.log(this.display);

  }

//   change(data,event){
//  if (event.target.checked === true) {
//       this.selectedIds.push({id: data, checked: event.target.checked});
//       console.log('Selected data ', JSON.stringify(this.selectedIds));
//     }
//     if (event.target.checked === false) {
//       this.selectedIds = this.selectedIds.filter((item) => item.id !== data);
//     }

    
// }
// getData(){
//       const filtered = this.selectedIds.filter(item => item.id)
//  console.log(JSON.stringify(filtered));
//     }

    change(data, children, event) {
    if (event.target.checked === true) {
      this.selectedIds.push({ id: data, checked: event.target.checked });
      for (let child in children) {
        this.selectedIds[this.selectedIds.length-1][child]=event.target.checked;

      }
    }
    if (event.target.checked === false) {
      this.selectedIds = this.selectedIds.filter((item) => item.id !== data);
    }

}
changeChild(parentKey,childKey,event)
{
    let item:any = this.selectedIds.find(x => x.id == parentKey)
    if (event.target.checked)
      item[childKey]=event.target.checked;
    else
      delete item[childKey];

}

isChecked(parentKey,childKey) {
    let item:any = this.selectedIds.find(x => x.id == parentKey)
    return item ? item[childKey] : false
  }
getData(){
  console.log(JSON.stringify(this.selectedIds));
  console.log(this.dec);
}
  
}