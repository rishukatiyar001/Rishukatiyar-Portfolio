import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  effect,
  inject,
  signal,
} from '@angular/core';
import { PlatformCheckService } from '@core/services/platform-check.service';
import profileData from '@data/profile.data';
import { ProfileSchema } from '@data/schema/profile.schema';
import { SocialLinkSchema } from '@data/schema/social-links.schema';
import socialLinkData from '@data/social-link.data';
import { clock } from '@icon/regular.icon';
import { Icon } from '@shared/components/icon/icon';
import { Logo } from '@shared/components/logo/logo';

import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'foot-note',
  templateUrl:'./footer.html',
  imports: [ Logo, Icon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Footer {
  platformCheck = inject(PlatformCheckService)
  currentTime = signal<string>(this.getCurrentTime());
  profile = signal<ProfileSchema>(profileData);
  clockIcon = clock;
  timer!: Subscription;
  public socialLink = signal<SocialLinkSchema[]>(socialLinkData);
  constructor() {
    effect((onCleanup) => {
      if (this.platformCheck.onBrowser) {
        this.timer = interval(1000).subscribe(() => {
          this.currentTime.set(this.getCurrentTime());
        });
      }
      onCleanup(() => {
        if (this.timer) {
          this.timer.unsubscribe();
        }
      });
    });
  }

  getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
}
