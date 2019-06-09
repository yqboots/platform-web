import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {ChatService} from '@yq/extensions/chat/chat.service';
import {ChatComponent} from '@yq/extensions/chat/chat.component';
import {ChatStartComponent} from '@yq/extensions/chat/chat-start/chat-start.component';
import {ChatViewComponent} from '@yq/extensions/chat/chat-view/chat-view.component';
import {ChatChatsSidenavComponent} from '@yq/extensions/chat/sidenavs/left/chats/chats.component';
import {ChatUserSidenavComponent} from '@yq/extensions/chat/sidenavs/left/user/user.component';
import {ChatLeftSidenavComponent} from '@yq/extensions/chat/sidenavs/left/left.component';
import {ChatRightSidenavComponent} from '@yq/extensions/chat/sidenavs/right/right.component';
import {ChatContactSidenavComponent} from '@yq/extensions/chat/sidenavs/right/contact/contact.component';
import {ChatFakeDbService} from './chat-fake-db.service';

import {environment} from 'environments/environment';

const routes: Routes = [
  {
    path: '**',
    component: ChatComponent,
    children: [],
    resolve: {
      chat: ChatService
    }
  }
];

@NgModule({
  declarations: [
    ChatComponent,
    ChatViewComponent,
    ChatStartComponent,
    ChatChatsSidenavComponent,
    ChatUserSidenavComponent,
    ChatLeftSidenavComponent,
    ChatRightSidenavComponent,
    ChatContactSidenavComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(ChatFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,

    YqSharedModule
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule {
}
