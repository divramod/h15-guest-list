import {Component, View} from 'angular2/angular2';
import {GuestService} from './guest-service';

@Component({
selector: 'guest-card',
properties: ['guest']
})
@View({
templateUrl: 'app/guest-card.html',
})
export class GuestCard {
  constructor(public guestService: GuestService) {}

  removeCard(guest){
    this.guestService.remove(guest.key);
  }
}
