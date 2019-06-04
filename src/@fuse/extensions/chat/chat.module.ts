import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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

import {FuseSharedModule} from '@fuse/core';

import {ChatService} from '@fuse/extensions/chat/chat.service';
import {ChatComponent} from '@fuse/extensions/chat/chat.component';
import {ChatStartComponent} from '@fuse/extensions/chat/chat-start/chat-start.component';
import {ChatViewComponent} from '@fuse/extensions/chat/chat-view/chat-view.component';
import {ChatChatsSidenavComponent} from '@fuse/extensions/chat/sidenavs/left/chats/chats.component';
import {ChatUserSidenavComponent} from '@fuse/extensions/chat/sidenavs/left/user/user.component';
import {ChatLeftSidenavComponent} from '@fuse/extensions/chat/sidenavs/left/left.component';
import {ChatRightSidenavComponent} from '@fuse/extensions/chat/sidenavs/right/right.component';
import {ChatContactSidenavComponent} from '@fuse/extensions/chat/sidenavs/right/contact/contact.component';

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
        RouterModule.forChild(routes),

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

        FuseSharedModule
    ],
    providers: [
        ChatService
    ]
})
export class ChatModule {
}
