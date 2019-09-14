import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard/admin-auth-guard.service';
import { APP_BASE_HREF } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminComponent } from './admin/admin.component';
import { AdminSerialComponent } from './admin/admin-serial/admin-serial.component';
import { AdminSerialTableComponent, BottomSheetConfirm } from './admin/admin-serial/admin-serial-table/admin-serial-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MAT_CHECKBOX_CLICK_ACTION, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationsComponent } from './navigations/navigations.component';
import { TagsComponent } from './tags/tags.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthRegisterComponent } from './user/auth-register/auth-register.component';
import { AccordionComponent } from './side-bar/accordion/accordion.component';
import { FormPersonalComponent } from './side-bar/accordion/form-personal/form-personal.component';
import { FormAvatarComponent } from './side-bar/accordion/form-avatar/form-avatar.component';
import { FormAddressComponent } from './side-bar/accordion/form-address/form-address.component';
import { FormHandphoneComponent } from './side-bar/accordion/form-handphone/form-handphone.component';
import { VisitorComponent } from './visitor/visitor.component';
import { VisitorFormComponent } from './visitor/visitor-form/visitor-form.component';
import { VisitorAvatarComponent } from './visitor/visitor-form/visitor-avatar/visitor-avatar.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { FormPostComponent } from './admin/admin-post/form-post/form-post.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { Logo4remComponent } from './logo/logo4rem/logo4rem.component';
import { Logo2remComponent } from './logo/logo2rem/logo2rem.component';
import { ChipCategoriesComponent } from './admin/admin-post/form-post/chip-categories/chip-categories.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ChipTagsComponent } from './admin/admin-post/form-post/chip-tags/chip-tags.component';
import { Logo2remLightComponent } from './logo/logo2rem-light/logo2rem-light.component';
import { PreviewPostComponent } from './admin/admin-post/form-post/preview-post/preview-post.component';
import { TestComponent } from './test/test.component';
import { NgxEditorModule } from 'ngx-editor';

export function tokenGetter(){
   return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminSerialComponent,
    AdminSerialTableComponent,
    BottomSheetConfirm,
    ContactFormComponent,
    AdminMessageComponent,
    NavigationsComponent,
    TagsComponent,
    SideBarComponent,
    HomeComponent,
    AuthRegisterComponent,
    AccordionComponent,
    FormPersonalComponent,
    FormAvatarComponent,
    FormAddressComponent,
    FormHandphoneComponent,
    VisitorComponent,
    VisitorFormComponent,
    VisitorAvatarComponent,
    AdminPostComponent,
    FormPostComponent,
    LayoutContentComponent,
    Logo4remComponent,
    Logo2remComponent,
    ChipCategoriesComponent,
    ChipTagsComponent,
    Logo2remLightComponent,
    PreviewPostComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,    
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({config: { tokenGetter: tokenGetter }}),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxEditorModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},
    {provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: {separatorKeyCodes: [ENTER, COMMA]}},
    //{provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    AuthService
  ],
  entryComponents: [
     BottomSheetConfirm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
