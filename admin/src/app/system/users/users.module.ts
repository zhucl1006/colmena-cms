import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../../app.shared.module'

import { UserFormComponent } from './user-form.component'
import { UserListComponent } from './user-list.component'

import { UsersService } from './users.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
  ],
  providers: [
    UsersService,
  ],
})
export class UsersModule {
  moduleLink = {
    weight: 30, label: 'Users', icon: 'icon-people', link: [ '/', 'system', 'users' ]
  }
  constructor(private store: Store<any>) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: this.moduleLink })
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: this.moduleLink })
  }
}
