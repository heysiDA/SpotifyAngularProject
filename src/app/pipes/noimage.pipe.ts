import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  
  transform(images: any[]): string {
    let url;

    if(!images){
      url = 'assets/img/noimage.png';
    }
    if(images.length > 0){
      url= images[0].url;
    }else{
      url = 'assets/img/noimage.png';
    }
    return url;
  }

}
