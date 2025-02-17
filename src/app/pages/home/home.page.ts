import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ExpertiseArea } from '@pages/home/components/expertise-area/expertise-area';
import { Intro } from '@pages/home/components/intro/intro';
import { LanguageTools } from '@pages/home/components/language-tools/language-tools';
import { InWork } from '@pages/home/components/in-work/in-work';
import { Loader } from '@shared/components/loader/loader';
import { FeatureProject } from "../project/components/feature-project";
import { OtherProject } from "../project/components/other-project";
@Component({
  selector: 'home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExpertiseArea, Intro, LanguageTools, InWork, Loader, FeatureProject, OtherProject],
  template: `
    @defer(on immediate){
      <intro/>
      <expertise-area/>
      <language-tools/>
      <h1
      class="text-brand-primary mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      Projects
    </h1>
    <feature-project/>
    <other-project/>
      <!-- <in-work/> -->
    }@placeholder {
      <loader/>
    }
  `
})
export class HomePage {
  metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags(
      `Home - ${profileData.name}`,
      'A developer, a problem solver, and a tech enthusiast from India. Explore my work, ideas, and the exciting world of software engineering!',
      [
        'Rishu katiyar',
        'software engineer',
        'India',
        'bio',
        'developer',
        'portfolio',
        'development',
        'Api',
        'web',
        'devops',
      ]
    );
  }
}
