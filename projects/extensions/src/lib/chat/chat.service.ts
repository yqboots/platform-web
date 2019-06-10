import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

import {YqUtils} from '@yq/core';

@Injectable()
export class ChatService implements Resolve<any> {
  contacts: any[];
  chats: any[];
  user: any;
  onChatSelected: BehaviorSubject<any>;
  onContactSelected: BehaviorSubject<any>;
  onChatsUpdated: Subject<any>;
  onUserUpdated: Subject<any>;
  onLeftSidenavViewChanged: Subject<any>;
  onRightSidenavViewChanged: Subject<any>;

  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onChatSelected = new BehaviorSubject(null);
    this.onContactSelected = new BehaviorSubject(null);
    this.onChatsUpdated = new Subject();
    this.onUserUpdated = new Subject();
    this.onLeftSidenavViewChanged = new Subject();
    this.onRightSidenavViewChanged = new Subject();
  }

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getContacts(),
        this.getChats(),
        this.getUser()
      ]).then(
        ([contacts, chats, user]) => {
          this.contacts = contacts;
          this.chats = chats;
          this.user = user;
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get chat
   */
  getChat(contactId): Promise<any> {
    const chatItem = this.user.chatList.find((item) => {
      return item.contactId === contactId;
    });

    // Create new chat, if it's not created yet.
    if (!chatItem) {
      this.createNewChat(contactId).then((newChats) => {
        this.getChat(contactId);
      });
      return;
    }

    return new Promise((resolve, reject) => {
      this._httpClient.get('api/chat-chats/' + chatItem.id)
        .subscribe((response: any) => {
          const chat = response;

          const chatContact = this.contacts.find((contact) => {
            return contact.id === contactId;
          });

          const chatData = {
            chatId: chat.id,
            dialog: chat.dialog,
            contact: chatContact
          };

          this.onChatSelected.next({...chatData});

        }, reject);

    });

  }

  /**
   * Create new chat
   */
  createNewChat(contactId): Promise<any> {
    return new Promise((resolve, reject) => {

      const contact = this.contacts.find((item) => {
        return item.id === contactId;
      });

      const chatId = YqUtils.generateGUID();

      const chat = {
        id: chatId,
        dialog: []
      };

      const chatListItem = {
        contactId: contactId,
        id: chatId,
        lastMessageTime: '2017-02-18T10:30:18.931Z',
        name: contact.name,
        unread: null
      };

      // Add new chat list item to the user's chat list
      this.user.chatList.push(chatListItem);

      // Post the created chat
      this._httpClient.post('api/chat-chats', {...chat})
        .subscribe((response: any) => {

          // Post the new the user data
          this._httpClient.post('api/chat-user/' + this.user.id, this.user)
            .subscribe(newUserData => {

              // Update the user data from server
              this.getUser().then(updatedUser => {
                this.onUserUpdated.next(updatedUser);
                resolve(updatedUser);
              });
            });
        }, reject);
    });
  }

  /**
   * Select contact
   */
  selectContact(contact): void {
    this.onContactSelected.next(contact);
  }

  /**
   * Set user status
   */
  setUserStatus(status): void {
    this.user.status = status;
  }

  /**
   * Update user data
   */
  updateUserData(userData): void {
    this._httpClient.post('api/chat-user/' + this.user.id, userData)
      .subscribe((response: any) => {
          this.user = userData;
        }
      );
  }

  /**
   * Update the chat dialog
   */
  updateDialog(chatId, dialog): Promise<any> {
    return new Promise((resolve, reject) => {

      const newData = {
        id: chatId,
        dialog: dialog
      };

      this._httpClient.post('api/chat-chats/' + chatId, newData)
        .subscribe(updatedChat => {
          resolve(updatedChat);
        }, reject);
    });
  }

  /**
   * Get contacts
   */
  getContacts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/chat-contacts')
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  /**
   * Get chats
   */
  getChats(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/chat-chats')
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  /**
   * Get user
   */
  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/chat-user')
        .subscribe((response: any) => {
          resolve(response[0]);
        }, reject);
    });
  }
}
