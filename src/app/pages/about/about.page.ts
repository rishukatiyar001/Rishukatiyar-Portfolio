import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';

import profileData from '@data/profile.data';

@Component({
  selector: 'about',
  templateUrl:'./about.html',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  standalone: true
})
export class AboutPage{
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
  public aboutDetails =  [

    {
      title: 'Always Learning',
      desc: `I'm always eager to learn new things. Whether
      it's staying updated on the latest technologies or exploring different coding techniques, I enjoy expanding my
      knowledge to grow as a developer.`
    },

    {
      title: 'Why I Code',
      desc: `I code because it allows me to turn ideas into
      reality. It's a creative outlet that lets me build useful and innovative solutions. Coding challenges me to
      solve problems and continuously improve my skills. Ultimately, it's my way of making a positive impact through
      technology.`
    },  
  ];
  public contactInfo = [
    // {
    //   title: 'Address',
    //   desc: `Caloocan City, Metro Manila, Philippines`,
    //   link: 'https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7'
    // },
    {
      title: 'Mobile Number',
      desc: '+91862885044',
      link: 'tel:+91862885044'
    },
    {
      title: 'Email',
      desc: 'rishukatiyar@gmail.com',
      link: 'mailto:rishukatiyar@gmail.com'
    }
  ]
}
