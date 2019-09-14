import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AdminSerialComponent } from './admin/admin-serial/admin-serial.component';
import { AdminAuthGuardService } from './services/admin-auth-guard/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './home/home.component';
import { AuthRegisterComponent } from './user/auth-register/auth-register.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { PreviewPostComponent } from './admin/admin-post/form-post/preview-post/preview-post.component';
import { TestComponent } from './test/test.component';
import { NgmEditorComponent } from './ngm-editor/ngm-editor.component';
import { AngularEditorComponent } from './angular-editor/angular-editor.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { name: 'Home', icon: 'home', tooltip: 'Home Page', type: 'public' } },
  { path: 'test', component: TestComponent, data: { name: 'Home', icon: 'home', tooltip: 'Home Page', type: 'public' } },
  { path: 'about', component: AboutComponent, data: { name: 'About', icon: 'work', tooltip: 'About', type: 'public' } },
  { path: 'contact', component: ContactFormComponent, data: { name: 'Contact Us', icon: 'alternate_email', tooltip: 'Contact Us', type: 'public' }}, 
  { path: 'posts/tags/tag/:tag', component: TagsComponent, data: { name: 'Tag', icon: 'dashboard', tooltip: 'Tag Page', type: 'user' } }, 
  { path: 'user/login', component: LoginComponent, data: { name: 'Login', icon: 'person', tooltip: 'Login Page', type: 'auth' } },
  { path: 'user/register', component: RegisterComponent, data: { name: 'Register', icon: 'person_add', tooltip: 'Register Page', type: 'auth' } },
  { path: 'user/register/token/:authToken', component: AuthRegisterComponent, data: { name: 'Register', icon: 'person_add', tooltip: 'Authentication Register Page', type: 'auth' } },
  
  // User routes
  { path: 'user/profile', component: UserComponent, canActivate: [AuthGuardService], data: { name: 'Profile', icon: 'person', tooltip: 'Profile Page', type: 'user' } },
  { path: 'test', component: TestComponent, canActivate: [AuthGuardService], data: { name: 'test', icon: 'person', tooltip: 'Test Page', type: 'user' } },
  { path: 'editor', component: NgmEditorComponent, canActivate: [AuthGuardService], data: { name: 'test', icon: 'person', tooltip: 'Test Page', type: 'user' } },
  { path: 'text/editor', component: AngularEditorComponent, canActivate: [AuthGuardService], data: { name: 'test', icon: 'person', tooltip: 'Test Page', type: 'user' } },

  // Admin routes
  { path: 'admin/message', component: AdminMessageComponent, canActivate: [AuthGuardService, AdminAuthGuardService], data: { name: 'Message',icon: 'dashboard', type: 'admin'  } },
  { path: 'admin/posts/post/new', component: AdminPostComponent, canActivate: [AuthGuardService, AdminAuthGuardService], data: { name: 'Post', icon: 'book', type: 'admin'  } },

  // Wildcard routes
  { path: '**', component: HomeComponent, data: { name: 'Back to Home', icon: 'dashboard', type: 'wildcard' } },
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, { anchorScrolling: 'enabled'} )
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
