import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

name1 ='';
name2 ='';
get score(){

    const combine_name=(this.name1 +this.name2).toLowerCase();
	var sum=0;
	for(let i=0; i<combine_name.length;i++)
	{

		sum+=combine_name.charCodeAt(i);

	}
	return sum %101;
}
}
