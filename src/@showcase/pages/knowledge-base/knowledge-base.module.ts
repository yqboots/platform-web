import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {KnowledgeBaseService} from '@showcase/pages/knowledge-base/knowledge-base.service';
import {KnowledgeBaseComponent} from '@showcase/pages/knowledge-base/knowledge-base.component';
import {KnowledgeBaseArticleComponent} from '@showcase/pages/knowledge-base/dialogs/article/article.component';
import {KnowledgeBaseFakeDbService} from './knowledge-base-fake-db.service';

import {environment} from 'environments/environment';

const routes = [
  {
    path: 'knowledge-base',
    component: KnowledgeBaseComponent,
    resolve: {
      knowledgeBase: KnowledgeBaseService
    }
  }
];

@NgModule({
  declarations: [
    KnowledgeBaseComponent,
    KnowledgeBaseArticleComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(KnowledgeBaseFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,

    YqSharedModule
  ],
  providers: [
    KnowledgeBaseService
  ],
  entryComponents: [
    KnowledgeBaseArticleComponent
  ]
})
export class KnowledgeBaseModule {
}
