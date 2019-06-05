import {NgModule} from '@angular/core';

import {LoginModule} from '@showcase/pages/authentication/login/login.module';
import {Login2Module} from '@showcase/pages/authentication/login-2/login-2.module';
import {RegisterModule} from '@showcase/pages/authentication/register/register.module';
import {Register2Module} from '@showcase/pages/authentication/register-2/register-2.module';
import {ForgotPasswordModule} from '@showcase/pages/authentication/forgot-password/forgot-password.module';
import {ForgotPassword2Module} from '@showcase/pages/authentication/forgot-password-2/forgot-password-2.module';
import {ResetPasswordModule} from '@showcase/pages/authentication/reset-password/reset-password.module';
import {ResetPassword2Module} from '@showcase/pages/authentication/reset-password-2/reset-password-2.module';
import {LockModule} from '@showcase/pages/authentication/lock/lock.module';
import {MailConfirmModule} from '@showcase/pages/authentication/mail-confirm/mail-confirm.module';
import {ComingSoonModule} from '@showcase/pages/coming-soon/coming-soon.module';
import {Error404Module} from '@showcase/pages/errors/404/error-404.module';
import {Error500Module} from '@showcase/pages/errors/500/error-500.module';
import {InvoiceModernModule} from '@showcase/pages/invoices/modern/modern.module';
import {InvoiceCompactModule} from '@showcase/pages/invoices/compact/compact.module';
import {MaintenanceModule} from '@showcase/pages/maintenance/maintenence.module';
import {PricingModule} from '@showcase/pages/pricing/pricing.module';
import {ProfileModule} from '@showcase/pages/profile/profile.module';
import {SearchClassicModule} from '@showcase/pages/search/classic/search-classic.module';
import {SearchModernModule} from '@showcase/pages/search/modern/search-modern.module';
import {FaqModule} from '@showcase/pages/faq/faq.module';
import {KnowledgeBaseModule} from '@showcase/pages/knowledge-base/knowledge-base.module';

@NgModule({
  imports: [
    // Authentication
    LoginModule,
    Login2Module,
    RegisterModule,
    Register2Module,
    ForgotPasswordModule,
    ForgotPassword2Module,
    ResetPasswordModule,
    ResetPassword2Module,
    LockModule,
    MailConfirmModule,

    // Coming-soon
    ComingSoonModule,

    // Errors
    Error404Module,
    Error500Module,

    // Invoices
    InvoiceModernModule,
    InvoiceCompactModule,

    // Maintenance
    MaintenanceModule,

    // Pricing
    PricingModule,

    // Profile
    ProfileModule,

    // Search
    SearchClassicModule,
    SearchModernModule,

    // Faq
    FaqModule,

    // Knowledge base
    KnowledgeBaseModule
  ]
})
export class PagesModule {

}
