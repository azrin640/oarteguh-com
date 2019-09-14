(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-message/admin-message.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-message/admin-message.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-message works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"table\">\n\n   <div class=\"title__start\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n      Serial Number List \n   </div>\n\n   <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n         \n      <div class=\"table__actions-menu\" fxLayout fxLayoutAlign=\"center center\">\n         <button type=\"button\" mat-icon-button [color]=\"deleteColor\" (click)=\"selectAction()\" \n            matTooltip=\"Open check box to select all serial nos or select serial no to delete\">\n               <mat-icon>delete</mat-icon>\n         </button>\n         <button type=\"button\" mat-icon-button [color]=\"filterColor\" (click)=\"filterAction()\" \n            matTooltip=\"Filter all serial no information.\">\n               <mat-icon>find_in_page</mat-icon>\n         </button>\n      </div>\n      \n      <div class=\"table__actions-submit\" fxLayout fxLayoutAlign=\"start\"*ngIf=\"editMode\">\n         <button type=\"button\" mat-icon-button [color]=\"selectAllColor\" (click)=\"selectAll()\"\n            matTooltip=\"Select all serial nos to delete\">\n               <mat-icon>select_all</mat-icon>\n         </button>\n         <button mat-icon-button color=\"primary\"  type=\"submit\" [disabled]=\"!f.form.valid\"\n            matTooltip=\"Delete serial nos, deletion is permanent.\">\n               <mat-icon>delete_forever</mat-icon>\n         </button>\n      </div>\n\n      <div class=\"table__filter-input\" *ngIf=\"filter\">\n         <mat-form-field>\n            <input class=\"table__filter\" \n               type=\"text\" \n               matInput \n               (keyup)=\"filterTable($event.target.value)\"\n               placeholder=\"Filter Table\"\n            >\n         </mat-form-field>\n      </div>\n\n      <div class=\"table__table\">\n         <div class=\"mat-elevation-z8\">\n            <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" [dataSource]=\"dataSource\">\n\n               <div class=\"table__check\" *ngIf=\"editMode\">\n                     <ng-container matColumnDef=\"check\">\n                        <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>Select</th>\n                        <td class=\"table__td\" mat-cell *matCellDef=\"let row\">\n                           <mat-checkbox #serial color=\"primary\" [(indeterminate)]=\"indeterminate\" [labelPosition]=\"labelPosition\" \n                              [(checked)]=\"checked\" [(ngModel)]=\"serial.checked\" name=\"{{row.id}}\">\n                           </mat-checkbox>\n                     </ng-container>           \n               </div>\n\n               <ng-container matColumnDef=\"serial\">\n                  <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>Serial No</th>\n                  <td class=\"table__td\" mat-cell *matCellDef=\"let row\">{{row.serial | uppercase}}</td>\n               </ng-container>\n\n               <ng-container matColumnDef=\"market\">\n                  <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>For Market</th>\n                  <td class=\"table__td\" mat-cell *matCellDef=\"let row\">{{row.market | titlecase}}</td>\n               </ng-container>\n\n               <ng-container matColumnDef=\"delete\">\n                  <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>Delete</th>\n                  <td class=\"table__td\" mat-cell *matCellDef=\"let row\">\n                     <button mat-icon-button type=\"button\" color=\"warn\" (click)=\"deleteASerialNo(row)\">\n                        <mat-icon>clear</mat-icon>\n                     </button>\n                  </td>\n               </ng-container>\n\n               <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n               <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n\n            <div *ngIf=\"dataSource\">\n            <mat-paginator #paginator \n                  [length]=\"dataSource?.data.length\"\n                  [pageIndex]=\"0\"\n                  [pageSize]=\"25\"\n                  [pageSizeOptions]=\"[25, 50, 100, 250]\">\n            </mat-paginator>\n            </div>\n         </div>\n      </div>\n\n      <div class=\"table__actions-submit\" fxLayout fxLayoutAlign=\"start\"*ngIf=\"editMode\">\n         <button mat-icon-button (click)=\"selectAll()\"><mat-icon>select_all</mat-icon></button>\n         <button mat-icon-button type=\"submit\" ><mat-icon>delete_forever</mat-icon></button>\n      </div>\n\n   </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-serial/admin-serial.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-serial/admin-serial.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"top\">\n\n   <div class=\"content__100vh\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div class=\"card\">\n         <mat-card>\n            <mat-card-title>\n               Serial Form \n            </mat-card-title>\n            <mat-card-content>\n\n               <div class=\"serial__form\">\n\n                  <form [formGroup]=\"serialForm\" (ngSubmit)=\"submitSerialForm()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <mat-label>Serial 1</mat-label>\n                           <input matInput placeholder=\"Serial 1\" #serial1 formControlName=\"serial1\" minlength=\"2\" maxlength=\"2\" required>\n                           <mat-icon matSuffix color=\"primary\">input</mat-icon>\n                           <mat-hint>Ex: AZ</mat-hint>\n                           <mat-error *ngIf=\"serialForm.get('serial1').hasError('required')\">\n                              Serial 1 is <strong>required</strong>\n                           </mat-error>     \n                           <mat-error *ngIf=\"serialForm.get('serial1').hasError('minlength')\">\n                              Please enter only <strong>2 digits</strong> alphabet\n                           </mat-error>   \n                           <mat-error *ngIf=\"serialForm.get('serial1').hasError('maxlength')\">\n                              Please enter max <strong>2 digits</strong> alphabet\n                           </mat-error>                   \n                        </mat-form-field>\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <span matPrefix class=\"serial__form-prefix\" *ngIf=\"serial1.value\">{{ serial1.value }} - </span>\n                           <mat-label>Serial 2</mat-label>\n                           <input matInput type=\"number\" placeholder=\"Serial 2\" formControlName=\"serial2\" min=\"6\" max=\"6\" required>\n                           <mat-icon matSuffix color=\"primary\">input</mat-icon>\n                           <mat-hint>Ex: 300200</mat-hint>\n                           <mat-error *ngIf=\"serialForm.get('serial2').hasError('required')\">\n                              Serial 2 is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"serialForm.get('serial2').hasError('minlength')\">\n                              Please enter only <strong>6 digits</strong> alphabet\n                           </mat-error>   \n                           <mat-error *ngIf=\"serialForm.get('serial2').hasError('maxlength')\">\n                              Please enter max <strong>6 digits</strong> alphabet\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <mat-label>Volume</mat-label>\n                           <input matInput type=\"number\" placeholder=\"Volume\" formControlName=\"volume\" required>\n                           <mat-icon matSuffix color=\"primary\">ballot</mat-icon>\n                           <mat-hint>Ex: 100 (Will register AZ300200 - AZ300300)</mat-hint>\n                           <mat-error *ngIf=\"serialForm.get('volume').hasError('required')\">\n                              Volume is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <mat-label>Market</mat-label>\n                           <mat-select formControlName=\"market\">\n                             <mat-option *ngFor=\"let market of markets\" [value]=\"market.area\">\n                                 {{ market.area }}\n                             </mat-option>\n                           </mat-select>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"serial__form-button\" type=\"submit\" [disabled]=\"serialForm.invalid\" color=\"primary\">\n                           <mat-icon>check_circle</mat-icon>\n                           Generate Serial No\n                        </button>\n\n                     </div>\n\n                  </form>\n               </div>\n            \n            </mat-card-content>\n         </mat-card>\n      </div>\n\n   </div>\n\n   <div class=\"content_100pct\" *ngIf=\"serials\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"card\">\n\n         <mat-card>\n            <mat-card-title>SERIAL NUMBER GENERATED</mat-card-title>\n            <mat-card-content>\n               <div class=\"serial__save-result\" >\n                  <mat-list>\n                     <mat-list-item *ngFor=\"let result of newSerials\">\n                        <mat-icon mat-list-icon>view_list</mat-icon>\n                        <h4 mat-line>{{ result.serial | titlecase }}</h4>\n                        <p mat-line> {{ result.market | titlecase }} </p>\n                     </mat-list-item>\n                  </mat-list>\n               </div>\n            </mat-card-content>\n         </mat-card>\n      \n      </div>               \n   </div>\n\n   <mat-divider></mat-divider>\n\n   <div class=\"content_100pct\">\n      <app-admin-serial-table></app-admin-serial-table>\n   </div>\n   \n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"!init\">\n   <div class=\"spinner__container\" fxFlex=\"100vh\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n      <mat-spinner color=\"primary\"></mat-spinner>\n   </div>\n</div>\n\n<app-navigations *ngIf=\"init\"></app-navigations>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authenticate/authenticate-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"top\">\n\n   <div mat-card class=\"card__image\">\n      <img mat-card-image src=\"assets/images/logo.png\">         \n   </div>\n\n   <mat-card-content>\n\n      <div class=\"card__content\" *ngIf=\"data && data.id && !toReview && !savedReviewSucces\">\n         <h1 class=\"card__content-header\">Congratulation!</h1>\n         <p>\n            You have purchase an <strong>Original <span class=\"brand\">STRONG ARROW®️</span></strong>  product as below listed detail;\n         </p>\n         <mat-chip-list class=\"mat-chip-list-stacked\"  aria-label=\"Color selection\">\n               <mat-chip color=\"primary\" selected>Serial no : {{ data.serial }} </mat-chip>\n               <mat-chip color=\"primary\" selected>Market    : {{ data.market | titlecase}} </mat-chip>\n               <mat-chip color=\"primary\" selected>No of try : {{ data.authNo }} </mat-chip>\n         </mat-chip-list>\n      </div>\n\n      <div class=\"card__content\" *ngIf=\"data.status == 404\">\n         <p>You have entered an <strong><span class=\"brand\">IMITATION (NOT ORIGINAL) </span></strong> product as below listed details;</p>\n         <mat-chip-list class=\"mat-chip-list-stacked\"  aria-label=\"Color selection\">\n               <mat-chip color=\"warn\" selected>Serial no : {{ data.serial }} </mat-chip>\n               <mat-chip color=\"warn\" selected>Market : {{ data.market || 'Malaysia' | titlecase}} </mat-chip>\n         </mat-chip-list>\n         \n         <p>Would you like to report it to our <span class=\"brand\">STRONG ARROW®️</span> {{ data.market || 'Malaysia' | titlecase}} representative?</p>\n      </div>\n      \n      <div class=\"card__actions\" fxLayout fxLayoutAlign=\"center center\">\n         <div class=\"card__actions-report\" *ngIf=\"data && data.id && !toReview && !savedReviewSucces\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <p>\n               <i class=\"fas fa-exclamation-circle\" color=\"primary\"></i>\n               If number of try is more than \"0\" and it is not you who checked, please report it to our {{ data.market || 'Malaysia' | titlecase}} \n               <a href=\"\"  target=\"0\">\n                  <i class=\"fab fa-whatsapp\"></i>\n                  representative.         \n               </a>\n               Would you like to leave a review?\n            </p>\n            <button mat-raised-button color=\"primary\" (click)=\"reviewForm()\">\n               <mat-icon>rate_review</mat-icon>\n               Leave a review\n            </button>\n         </div>\n         <div class=\"card__actions-report\" *ngIf=\"data.status == 404\">\n            <button mat-raised-button color=\"primary\" >\n               <i class=\"fab fa-whatsapp\"></i>\n               {{ data.market || 'Malaysia' | titlecase}} Representative\n            </button>\n         </div>\n      </div>\n\n      <div class=\"review\" *ngIf=\"toReview\">\n         <h2>Product Review</h2>\n\n         <form name=\"reviewForm\">\n\n            <mat-form-field appearance=\"fill\">\n               <mat-label>Name</mat-label>\n               <input matInput placeholder=\"Enter Name\" [formControl]=\"name\" required>\n               <mat-icon matSuffix color=\"primary\">contacts</mat-icon>\n               <mat-hint>Ex: Severus Snape</mat-hint>\n               <mat-error *ngIf=\"name.invalid\">\n                  Name is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"fill\">\n               <mat-label>Phone No</mat-label>\n               <input matInput placeholder=\"Enter Phone No\" [formControl]=\"phone\" type=\"number\" required>\n               <mat-icon matSuffix color=\"primary\">contact_phone</mat-icon>\n               <mat-hint>Ex: 111111111</mat-hint>\n               <mat-error *ngIf=\"phone.invalid\">\n                  Phone no is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"fill\">\n               <mat-label>Email</mat-label>\n               <input matInput type=\"email\" placeholder=\"Enter email\" [formControl]=\"email\" required>\n               <mat-icon matSuffix color=\"primary\">contact_mail</mat-icon>\n               <mat-hint>Ex: snape@hogwarts.com</mat-hint>\n               <mat-error *ngIf=\"email.invalid\">\n                  Email is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"fill\">\n                <textarea matInput [formControl]=\"review\" placeholder=\"Leave a comment\" required></textarea>\n                <mat-icon matSuffix color=\"primary\">contact_mail</mat-icon>\n                <mat-error *ngIf=\"review.invalid\">\n                  Review is <strong>required</strong>\n               </mat-error>\n            </mat-form-field>\n\n            <div class=\"card__review-button\" fxLayout fxLayoutAlign=\"center center\">\n               <button mat-raised-button color=\"primary\" (click)=\"submitReview()\">Submit Review</button>\n            </div>\n\n         </form> \n      </div>\n\n      <div class=\"review__saved\" *ngIf=\"savedReviewSucces\">\n         <h2>Review Saved</h2>\n         <p>Thank you for your review.</p>\n         <div class=\"reviewForm__end\" fxLayout fxLayoutAlign=\"center center\">\n            <button mat-raised-button color=\"primary\" (click)=\"reviewSaved()\">Back to Home Page</button>\n         </div>\n      </div>\n\n   </mat-card-content>  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authenticate/authenticate.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"top\" >\n\n   <div class=\"content__100vh\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"card\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n         <mat-card>\n            <mat-card-title>AUTHENTICATE PRODUCT</mat-card-title>\n            <mat-card-content>\n               <div class=\"auth__input\">\n\n                  <form>\n\n                     <div class=\"form__component\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field appearance=\"fill\">\n                           <mat-label>Serial Number</mat-label>\n                           <input matInput placeholder=\"DFXXXXXXX\" [formControl]=\"serial\" required autocomplete=\"serial\">\n                           <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                           <mat-hint>Enter serial number here</mat-hint>\n                           <mat-error *ngIf=\"serial.invalid\">\n                              Serial number is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"form__button-submit\" color=\"primary\" [disabled]=\"serial.invalid\" (click)=\"authenticate()\">\n                           <i class=\"fas fa-skull-crossbones fa-icon__skull\"></i>\n                           Check Authenticity\n                        </button>\n\n                     </div>\n\n                  </form>\n\n               </div>\n            </mat-card-content>\n         </mat-card>\n      \n      </div>\n   \n   </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-form/contact-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-form/contact-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lm__page-100vh\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   <div class=\"contact\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"container\"*ngIf=\"useForm\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n         <mat-card class=\"instruction__card\" *ngIf=\"!contact\">\n\n            <mat-card-title>\n               Contact Form\n            </mat-card-title>\n\n            <mat-card-content>            \n               <form [formGroup]=\"contactForm\">\n                  <div class=\"cotactForm\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                     <mat-form-field appearance=\"fill\">\n                        <mat-label>Name</mat-label>\n                        <input matInput placeholder=\"Enter Name\" formControlName=\"name\" required>\n                        <mat-icon matSuffix color=\"primary\">contacts</mat-icon>\n                        <mat-hint>Ex: Severus Snape</mat-hint>\n                        <mat-error *ngIf=\"name.invalid\">\n                           Name is <strong>required</strong>\n                        </mat-error>\n                     </mat-form-field>\n\n                     <mat-form-field appearance=\"fill\">\n                        <mat-label>Phone No</mat-label>\n                        <input matInput placeholder=\"Enter Phone No\" formControlName=\"phone\" type=\"number\" required>\n                        <mat-icon matSuffix color=\"primary\">contact_phone</mat-icon>\n                        <mat-hint>Ex: 111111111</mat-hint>\n                        <mat-error *ngIf=\"phone.invalid\">\n                           Phone no is <strong>required</strong>\n                        </mat-error>\n                     </mat-form-field>\n\n                     <mat-form-field appearance=\"fill\">\n                        <mat-label>Email</mat-label>\n                        <input matInput type=\"email\" placeholder=\"Enter email\" formControlName=\"email\" required>\n                        <mat-icon matSuffix color=\"primary\">contact_mail</mat-icon>\n                        <mat-hint>Ex: snape@hogwarts.com</mat-hint>\n                        <mat-error *ngIf=\"email.invalid\">\n                           Email is <strong>required</strong>\n                        </mat-error>\n                     </mat-form-field>\n\n                     <mat-form-field appearance=\"fill\">\n                        <textarea matInput formControlName=\"comment\" placeholder=\"Leave a comment\" required></textarea>\n                        <mat-icon matSuffix color=\"primary\">contact_mail</mat-icon>\n                        <mat-error *ngIf=\"comment.invalid\">\n                           Comment is <strong>required</strong>\n                        </mat-error>\n                     </mat-form-field>\n\n                     <div class=\"card__review-button\" fxLayout fxLayoutAlign=\"center center\">\n                        <button mat-raised-button color=\"primary\" (click)=\"submitContact()\">Submit Contact</button>\n                     </div>\n\n                  </div>\n               </form>             \n            </mat-card-content>\n\n         </mat-card>\n\n         <mat-card class=\"gold-theme\" *ngIf=\"contact\">\n            <mat-card-title>\n               Thank You\n            </mat-card-title>\n            <mat-card-content >\n               Your request has been submitted, our local representative will contact you back as soon as possible.\n            </mat-card-content>\n         </mat-card>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <mat-toolbar class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <span class=\"footer__text\">\n         Copyright \n      </span>\n      <span>\n         <mat-icon color=\"primary\" class=\"footer__icon\">copyright</mat-icon>\n      </span>\n      <span class=\"footer__text\">\n         2017,  www.azrin.dev\n      </span>\n   </mat-toolbar>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lm__page-100p\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   \n   <div>\n      <img class=\"lm__img\" src=\"../../assets/images/banner.jpg\" alt=\"\">\n   </div>\n   \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigations/navigations.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigations/navigations.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lm__container-100vh\">\n\n   <div class=\"nav\">\n\n      <div class=\"nav__toolbar\">\n         <mat-toolbar color=\"primary\">  \n            <span class=\"lm__menu-span-logo\" [ngClass]=\"{ 'shadow__text-left': !(isHandset$|async), 'shadow__text-center': (isHandset$|async) }\" routerLink=\"/\" matTooltip=\"Back to Home Page\">\n               {{ 'azrin.dev { top: sometime }' }}\n            </span>\n            <span class=\"lm__menu-span-filler\" fxHide.xs></span>\n            <span class=\"lm__menu-span-buttons\" fxHide.xs>\n               <button mat-icon-button  class=\"lm__menu-span-button shadow__text-right\" *ngFor=\"let link of links.public\" routerLink=\"{{ link.path }}\" matTooltip=\"{{ link.data.tooltip }}\">\n                  <mat-icon class=\"lm__menu-span-button-icon\">\n                     {{ link.data.icon }}\n                  </mat-icon>\n               </button>\n            </span>\n         </mat-toolbar> \n      </div> \n\n      <div class=\"nav__sidenav\">\n         <mat-sidenav-container hasBackdrop=\"false\"> \n\n            <mat-sidenav #drawer class=\"nav__drawer\"    \n               [ngClass]=\"{ 'nav__drawer-open': !sideNavIcon }\"          \n               fixedInViewport\n               attr.role=\"navigation\" \n               [@fadeOut]=\"sideNavIcon\"                 \n               mode=\"over\"\n               [opened]=\"opened\"\n            >       \n               <div class=\"nav__drawer-menu\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                     <div *ngIf=\"sideNavIcon\">\n                        <button mat-icon-button color=\"primary\" (click)=\"toggleSidenav()\">\n                           <mat-icon>chevron_right</mat-icon>\n                        </button>\n                     </div>\n                     <div class=\"nav__sidenav-drawer-menu-item\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <div fxFlex=\"80\" *ngIf=\"!sideNavIcon\"><h2>Menu</h2></div>\n                        <div fxFlex=\"20\" *ngIf=\"!sideNavIcon\">\n                           <button mat-icon-button (click)=\"toggleSidenav()\">\n                              <mat-icon  color=\"primary\">close</mat-icon>\n                           </button>\n                        </div>\n                     </div>\n               </div>  \n\n               <!-- Public menu -->\n               <mat-nav-list class=\"nav__drawer-links\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n\n                  <div class=\"nav__drawer-link\" *ngFor=\"let link of links.public\">\n                     <a mat-list-item class=\"list\" routerLink=\"{{link.path}}\" matTooltip=\"{{ link.data.tooltip }}\" (click)=\"itemClicked()\">\n                        <mat-icon class=\"nav__drawer-link-icon\" color=\"primary\">\n                           {{ link.data.icon }}\n                        </mat-icon>\n                        <div class=\"nav__drawer-link-text\" *ngIf=\"!sideNavIcon\">\n                           {{ link.data.name }}\n                        </div>                        \n                     </a> \n                  </div>\n                  <div *ngIf=\"!profile\">\n                     <div class=\"nav__drawer-link\" *ngFor=\"let link of links.auth\" >\n                        <a mat-list-item class=\"list\" routerLink=\"{{link.path}}\" matTooltip=\"{{ link.data.tooltip }}\" (click)=\"itemClicked()\">\n                           <mat-icon class=\"nav__drawer-link-icon\" color=\"primary\">\n                              {{ link.data.icon }}\n                           </mat-icon>\n                           <div class=\"nav__drawer-link-text\" *ngIf=\"!sideNavIcon\">\n                              {{ link.data.name }}\n                           </div>                        \n                        </a> \n                     </div>\n                  </div>\n                  <mat-divider *ngIf=\"sideNavIcon\"></mat-divider>\n                  <div class=\"nav__drawer-link\" *ngIf=\"sideNavIcon\">\n                     <button class=\"nav__drawer-link-menu-button\" mat-icon-button [matMenuTriggerFor]=\"menuSettings\" color=\"primary\">\n                        <mat-icon class=\"nav__drawer-menu-link-icon\" >\n                           account_circle\n                        </mat-icon>\n                     </button>\n                     <mat-menu #menuSettings=\"matMenu\" >\n                           <button mat-menu-item *ngFor=\"let link of links.user\" routerLink=\"{{ link.path }}\">\n                              <mat-icon color=\"primary\">\n                                 {{ link.data.icon }}\n                              </mat-icon>\n                              {{ link.data.name }}\n                           </button>\n                     </mat-menu>\n                  </div>\n                  <mat-divider *ngIf=\"sideNavIcon\"></mat-divider>\n                  <div *ngIf=\"profile && profile.admin\">\n                     <div class=\"nav__drawer-link\" *ngIf=\"sideNavIcon\">\n                        <button class=\"nav__drawer-link-menu-button\" mat-icon-button [matMenuTriggerFor]=\"menuSettings\" color=\"primary\" >\n                           <mat-icon class=\"nav__drawer-menu-link-icon\" >\n                              settings\n                           </mat-icon>\n                        </button>\n                        <mat-menu #menuSettings=\"matMenu\" >\n                              <button mat-menu-item *ngFor=\"let link of links.admin\"   routerLink=\"{{ link.path }}\">\n                                 <mat-icon color=\"primary\">\n                                    {{ link.data.icon }}\n                                 </mat-icon>\n                                 {{ link.data.name }}\n                              </button>\n                        </mat-menu>\n                     </div>\n                  </div>\n               </mat-nav-list>\n               <mat-divider></mat-divider>\n               <!-- User menu -->\n               <mat-expansion-panel *ngIf=\"!sideNavIcon\">\n                  <mat-expansion-panel-header >\n                     <mat-panel-title>\n                        <mat-icon class=\"lm__icon\" color=\"primary\">settings</mat-icon>\n                        <span>Settings</span>\n                     </mat-panel-title>\n                  </mat-expansion-panel-header>                  \n                  <mat-nav-list >\n                     <div class=\"links\" *ngFor=\"let link of links.user\">\n                        <a mat-list-item routerLink=\"{{link.path}}\" >\n                           <mat-icon class=\"lm__icon\" color=\"primary\">{{ link.data.icon }}</mat-icon>\n                           <div class=\"text\" *ngIf=\"!sideNavIcon\">{{ link.data.name }}</div>                        \n                        </a> \n                     </div>\n                     <div class=\"links\" *ngIf=\"sideNavIcon\">\n                        <a mat-list-item >\n                           <mat-icon class=\"lm__icon\" color=\"primary\">settings</mat-icon>                       \n                        </a> \n                     </div>\n                  </mat-nav-list>             \n               </mat-expansion-panel>\n            </mat-sidenav>\n\n            <mat-sidenav-content role=\"main\" class=\"nav__sidenav-content\" [@fadeOut]=\"!sideNavIcon\">\n               <!-- Add Content Here -->\n               <router-outlet></router-outlet> \n               \n            </mat-sidenav-content>\n\n         </mat-sidenav-container>\n      </div>  \n\n   </div>\n   \n   <app-footer></app-footer>\n   \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-bar/side-bar.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-bar/side-bar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"sidebar__card\">\n   <mat-card-title class=\"lm__card-title\">\n      You might like\n   </mat-card-title>\n   <mat-card-content>\n\n      <div class=\"lm__card-tab\">\n         <mat-tab-group *ngFor=\"let category of categoriesPosts\">\n            <mat-tab label=\"{{ category | titlecase }}\">\n               <div class=\"posts\" fxLayout=\"column\">\n                  <mat-list role=\"list\">\n                     <mat-list-item role=\"listitem\" *ngFor=\"let row of posts\">\n                        <a class=\"lm__a-small\" matTooltip=\"Go to this post\"\n                           routerLink=\"/post/{{ row.post.slug }}\"\n                        >\n                           {{ row.post.title | titlecase }}\n                        </a>\n                     </mat-list-item>\n                  </mat-list> \n               </div> \n            </mat-tab>\n            <mat-tab label=\"Second\"> Content 2 </mat-tab>\n            <mat-tab label=\"Third\"> Content 3 </mat-tab>\n         </mat-tab-group>\n      </div>\n               \n   </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tags/tags.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tags/tags.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lm__page-100p profile\" fxLayout=\"row\" fxLayout.xs=\"column\">\n\n   <div fxFlex=\"60\" fxFlex.xs=\"100\" class=\"timeline\">\n\n      <div class=\"posts\" *ngFor=\"let row of posts\" >\n         <div [@xEnter]=\"postsExist\">\n            <mat-card  fxLayout=\"column\" class=\"lm__card timeline__card x-enter\">   \n               \n               <!-- Card Image  -->\n               <div  id=\"{{ row.post.image }}\"\n                     @imageEnter\n                     *ngIf=\"row.post.image == imagePost; else elseBlock\"                        \n               >\n                  <img mat-card-image                                      \n                     class=\"image-enter lm__card-image\" \n                     src=\"{{ row.post.image }}\" \n                     alt=\"{{ row.poster.name | titlecase }}\" \n                     (mouseout)=\"mouseLeaveImage($event)\"                    \n                  >                                      \n               </div> \n               <ng-template #elseBlock>\n                  <div id=\"{{ row.post.image }}\"\n                     (mouseenter)=\"mouseEnterImage($event)\" \n                  >\n                     <img mat-card-image  \n                        src=\"{{ row.post.image }}\" \n                        alt=\"{{ row.poster.name | titlecase }}\"                     \n                     > \n                  </div>\n               </ng-template> \n\n               <div id=\"{{ row.post.id }}\" (mouseenter)=\"mouseEnterCard($event)\" >\n                  <mat-card-header>\n                     <img mat-card-avatar id=\"{{ row.post.image }}\" class=\"lm__avatar\" src=\"{{ row.poster.avatar || 'assets/images/man.png'}}\" >\n                     <mat-card-title class=\"lm__profile-title\">\n                        <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                           routerLink=\"{{ row.poster.slug }}\"\n                        >                  \n                           {{ row.poster.name | titlecase }}\n                        </a>\n                     </mat-card-title>\n                     <mat-card-subtitle>\n                        \"{{ row.poster.about | titlecase | slice:0:50 }}\"\n                     </mat-card-subtitle>\n                     <mat-card-subtitle>Posted on: {{ row.post.date | date:'d/M/y, h:mm:ss a' }} </mat-card-subtitle>\n                  </mat-card-header>\n                  <mat-card-title color=\"primary\" class=\"lm__a-primary\">\n                     <a [@xEnter]=\"postsExist\" class=\"lm__a\" matTooltip=\"Go to this post\"\n                        routerLink=\"/post/{{ row.post.slug }}\"\n                     >\n                        {{ row.post.title | titlecase }}\n                     </a>\n                  </mat-card-title>\n                  <mat-card-content>\n                     <div class=\"lm__icons\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.liked.length }}\" matBadgeColor=\"accent\">\n                              thumbs_up_down\n                           </mat-icon>\n                        </div>\n                        <div class=\"lm__icon-badge\"></div>\n                           <mat-icon matBadge=\"{{ row.post.comment.length }}\" matBadgeColor=\"accent\">\n                              comment\n                           </mat-icon>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-subtitle>{{ row.post.subtitle | titlecase }}</mat-card-subtitle>\n                  <mat-card-content>                \n                     {{ row.post.content | slice:0:200 }} ...\n                     <button class=\"lm__a\" mat-button color=\"accent\" routerLink=\"{{ row.post.slug }}\">Read More</button>\n                  </mat-card-content>\n                  <mat-card-content>\n                     <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"center center\">\n                        <mat-chip-list aria-label=\"Fish selection\">\n                           <mat-chip class=\"lm__mat-chip-list\" \n                              *ngFor=\"let tag of row.post.tags\" \n                              color=\"accent\" \n                              selected\n                              routerLink=\"/posts/tags/tag/{{ tag.tag | lowercase }}\"\n                              matTooltip=\"Go to this tag\"\n                           >\n                              {{ tag.tag | titlecase }}\n                           </mat-chip>\n                        </mat-chip-list>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                     <div class=\"lm__card-actions\" fxLayout=\"row\" fxLayoutAlign=\"center center\" @iconButtonEnter *ngIf=\"postId === row.post.id\">\n                        <button class=\"lm__card-button x-button-enter\" routerLink=\"{{ row.post.slug }}\" mat-raised-button color=\"primary\">\n                           <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                           Read More\n                        </button>\n                     </div>\n                  </mat-card-actions>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n\n   <div fxFlex=\"40\" fxFlex.xs=\"100\" class=\"sidebar\">\n      <div>   \n         <app-side-bar></app-side-bar>\n      </div> \n   </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n   <div fxFlex=\"100vh\" class=\"test__wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div @yEnter *ngIf=\"show\" class=\"test__icon-wrapper\">\n         <mat-icon class=\"y-enter\" color=\"primary\">android</mat-icon>\n      </div>\n\n      <div>\n         <button @pulseGo mat-raised-button color=\"primary\" (click)=\"showAndroid()\">\n            Show Android\n         </button>\n      </div>\n   \n   </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lm__page-100vh\" id=\"top\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n   <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div class=\"card\">\n         <mat-card>\n            <mat-card-title>\n               Login Form \n            </mat-card-title>\n            <mat-card-content>\n\n               <div class=\"login__form\">\n\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"login__input\" appearance=\"fill\">\n                           <mat-label>Email</mat-label>\n                           <input matInput placeholder=\"Email\" #email formControlName=\"email\" required autocomplete=\"email\">\n                           <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                           <mat-hint>Enter email here</mat-hint>\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                              Email is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('email')\">\n                              Please enter a valid <strong>email</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"login__input\" appearance=\"fill\">\n                           <mat-label>Password</mat-label>\n                           <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required autocomplete=\"password\">\n                           <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                           <mat-hint>Enter password here</mat-hint>\n                           <mat-error *ngIf=\"loginForm.get('password').hasError('required')\">\n                              Password is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"login__form-button\" type=\"submit\" [disabled]=\"loginForm.invalid\" color=\"primary\" >\n                           <mat-icon>check_circle</mat-icon>\n                           Login\n                        </button>\n\n                     </div>\n\n                     {{ loginForm.errors }}\n\n                  </form>\n\n               </div>\n\n            </mat-card-content>\n         </mat-card>\n      </div>\n   </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lm__page-100vh\" id=\"top\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n   <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div class=\"card\">\n         <mat-card>\n            <mat-card-title>\n               Register Form \n            </mat-card-title>\n            <mat-card-content>\n\n               <div>\n\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"register__input\" appearance=\"fill\">\n                           <mat-label>Email</mat-label>\n                           <input matInput placeholder=\"Email\" #email formControlName=\"email\" required autocomplete=\"email\">\n                           <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                           <mat-hint>Enter email here</mat-hint>\n                           <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\n                              Email is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\n                              Please enter a valid <strong>email</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"register__input\" appearance=\"fill\">\n                           <mat-label>Password</mat-label>\n                           <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required autocomplete=\"password\">\n                           <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                           <mat-hint>Enter password here</mat-hint>\n                           <mat-error *ngIf=\"registerForm.get('password').hasError('required')\">\n                              Password is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"register__form-button\" type=\"submit\" [disabled]=\"registerForm.invalid\" color=\"primary\" >\n                           <mat-icon>check_circle</mat-icon>\n                           Register\n                        </button>\n\n                     </div>\n\n                     {{ registerForm.errors }}\n\n                  </form>\n\n               </div>\n\n            </mat-card-content>\n         </mat-card>\n      </div>\n   </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lm__page-100p profile\" fxLayout=\"row\" fxLayout.xs=\"column\">\n\n   <div fxFlex=\"60\" fxFlex.xs=\"100\" class=\"timeline\">\n\n      <div class=\"posts\" *ngFor=\"let row of posts\" >\n         <div [@xEnter]=\"postsExist\">\n            <mat-card  fxLayout=\"column\" class=\"lm__card timeline__card x-enter\">   \n               \n               <!-- Card Image  -->\n               <div  id=\"{{ row.post.image }}\"\n                     @imageEnter\n                     *ngIf=\"row.post.image == imagePost; else elseBlock\"                        \n               >\n                  <img mat-card-image                                      \n                     class=\"image-enter lm__card-image\" \n                     src=\"{{ row.post.image }}\" \n                     alt=\"{{ row.poster.name | titlecase }}\" \n                     (mouseout)=\"mouseLeaveImage($event)\"                    \n                  >                                      \n               </div> \n               <ng-template #elseBlock >\n                  <div id=\"{{ row.post.image }}\" \n                     *ngIf=\"row.post.image\"\n                     (mouseenter)=\"mouseEnterImage($event)\" \n                  >\n                     <img mat-card-image  \n                        src=\"{{ row.post.image }}\" \n                        alt=\"{{ row.poster.name | titlecase }}\"                     \n                     > \n                  </div>\n               </ng-template> \n\n               <div id=\"{{ row.post.id }}\" (mouseenter)=\"mouseEnterCard($event)\" >\n                  <mat-card-header>\n                     <img mat-card-avatar id=\"{{ row.post.image }}\" class=\"lm__avatar\" src=\"{{ row.poster.avatar || 'assets/images/man.png'}}\" >\n                     <mat-card-title class=\"lm__profile-title\">\n                        <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                           routerLink=\"{{ row.poster.slug }}\"\n                        >                  \n                           {{ row.poster.name | titlecase }}\n                        </a>\n                     </mat-card-title>\n                     <mat-card-subtitle>\n                        \"{{ row.poster.about | titlecase | slice:0:50 }}\"\n                     </mat-card-subtitle>\n                     <mat-card-subtitle>Posted on: {{ row.post.date | date:'d/M/y, h:mm:ss a' }} </mat-card-subtitle>\n                  </mat-card-header>\n                  <mat-card-title color=\"primary\" class=\"lm__a-primary\">\n                     <a [@xEnter]=\"postsExist\" class=\"lm__a\" matTooltip=\"Go to this post\"\n                        routerLink=\"/post/{{ row.post.slug }}\"\n                     >\n                        {{ row.post.title | titlecase }}\n                     </a>\n                  </mat-card-title>\n                  <mat-card-content>\n                     <div class=\"lm__icons\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.liked.length }}\"             matBadgeColor=\"accent\"\n                              matTooltip=\"Like and Dislike\"\n                           >\n                              thumbs_up_down\n                           </mat-icon>\n                        </div>\n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.comments.length }}\"             matBadgeColor=\"accent\"\n                              matTooltip=\"Like and Dislike\"\n                           >\n                              share\n                           </mat-icon>\n                        </div>\n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.shared.length }}\" matBadgeColor=\"accent\">\n                              comment\n                           </mat-icon>\n                        </div>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-subtitle>{{ row.post.subtitle | titlecase }}</mat-card-subtitle>\n                  <mat-card-content>                \n                     {{ row.post.content | slice:0:200 }} ...\n                     <button class=\"lm__a-button\" mat-button color=\"accent\" routerLink=\"{{ row.post.slug }}\">Read More</button>\n                  </mat-card-content>\n                  <mat-card-content>\n                     <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"center center\">\n                        <mat-chip-list aria-label=\"Fish selection\">\n                           <mat-chip class=\"lm__mat-chip-list\" \n                              *ngFor=\"let tag of row.post.tags\" \n                              color=\"accent\" \n                              selected\n                              routerLink=\"/posts/tags/tag/{{ tag.tag | lowercase }}\"\n                              matTooltip=\"Go to this tag\"\n                           >\n                              {{ tag.tag | titlecase }}\n                           </mat-chip>\n                        </mat-chip-list>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                     <div class=\"lm__card-actions\" \n                        fxLayout=\"row\"                    \n                        fxLayoutAlign=\"center center\" \n                        @iconButtonEnter \n                        *ngIf=\"postId === row.post.id\"     \n                     >\n                        <button                            \n                           class=\"lm__card-button x-button-enter\" \n                           mat-raised-button color=\"primary\"\n                           matTooltip=\"Go to this post\"\n                           routerLink=\"{{ row.post.slug }}\"\n                        >\n                           <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                           Read More\n                        </button>\n                     </div>\n                  </mat-card-actions>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n\n   <div fxFlex=\"40\" fxFlex.xs=\"100\" class=\"sidebar\">\n      <div>   \n         <mat-card class=\"sidebar__card\">\n            <mat-card-title class=\"lm__card-title\">\n               You might like\n            </mat-card-title>\n            <mat-card-content>\n\n               <div class=\"lm__card-tab\">\n                  <mat-tab-group *ngFor=\"let category of categoriesPosts\">\n                     <mat-tab label=\"{{ category | titlecase }}\">\n                        <div class=\"posts\" fxLayout=\"column\">\n                           <mat-list role=\"list\">\n                              <mat-list-item role=\"listitem\" *ngFor=\"let row of posts\">\n                                 <a class=\"lm__a-small\" matTooltip=\"Go to this post\"\n                                    routerLink=\"/post/{{ row.post.slug }}\"\n                                 >\n                                    {{ row.post.title | titlecase }}\n                                 </a>\n                              </mat-list-item>\n                           </mat-list> \n                        </div> \n                     </mat-tab>\n                     <mat-tab label=\"Second\"> Content 2 </mat-tab>\n                     <mat-tab label=\"Third\"> Content 3 </mat-tab>\n                  </mat-tab-group>\n               </div>\n                        \n            </mat-card-content>\n         </mat-card>\n      </div> \n   </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-message/admin-message.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-message/admin-message.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW1lc3NhZ2UvYWRtaW4tbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-message/admin-message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-message/admin-message.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessageComponent", function() { return AdminMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminMessageComponent = /** @class */ (function () {
    function AdminMessageComponent() {
    }
    AdminMessageComponent.prototype.ngOnInit = function () {
    };
    AdminMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-message',
            template: __webpack_require__(/*! raw-loader!./admin-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-message/admin-message.component.html"),
            styles: [__webpack_require__(/*! ./admin-message.component.scss */ "./src/app/admin/admin-message/admin-message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminMessageComponent);
    return AdminMessageComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 10vh;\n}\n.table__actions-submit {\n  margin: 0;\n  padding: 0;\n}\n.full-width-table {\n  width: 100%;\n}\n.bottom-sheet {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: #f44336;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC10YWJsZS9hZG1pbi1zZXJpYWwtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLXNlcmlhbC9hZG1pbi1zZXJpYWwtdGFibGUvYWRtaW4tc2VyaWFsLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZ0JBQUE7QUNDSDtBRENHO0VBQ0csU0FBQTtFQUNBLFVBQUE7QUNDTjtBREdBO0VBQ0UsV0FBQTtBQ0FGO0FER0E7RUFDRyxxSEFBQTtFQUNGLG1CQUFBO0VBQ0EsV0FBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC10YWJsZS9hZG1pbi1zZXJpYWwtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XG4gICBtYXJnaW4tdG9wOiAxMHZoO1xuXG4gICAmX19hY3Rpb25zLXN1Ym1pdHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICB9XG59XG5cbi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20tc2hlZXR7XG4gICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGJhY2tncm91bmQ6ICNmNDQzMzY7XG5cdGNvbG9yOiAjZmZmXG59XG4iLCIudGFibGUge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xufVxuLnRhYmxlX19hY3Rpb25zLXN1Ym1pdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbS1zaGVldCB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AdminSerialTableComponent, BottomSheetConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSerialTableComponent", function() { return AdminSerialTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetConfirm", function() { return BottomSheetConfirm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/serial-no/serial-auth.service */ "./src/app/services/serial-no/serial-auth.service.ts");




;
;
;
;
var AdminSerialTableComponent = /** @class */ (function () {
    function AdminSerialTableComponent(serialService, snackBar, bottomSheet) {
        this.serialService = serialService;
        this.snackBar = snackBar;
        this.bottomSheet = bottomSheet;
        this.deleteColor = 'primary';
        this.filterColor = 'primary';
        this.selectAllColor = 'primary';
        // Checkbox settings
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.editMode = false;
        this.filter = false;
        this.displayedColumns = ['serial', 'market', 'delete'];
        this.serials = [];
        this.toDeleteData = {};
        this.toDeleteList = [];
        this.datasToDelete = [];
        this.length = 0;
        this.index = [];
        this.dataTableUpdate();
    }
    AdminSerialTableComponent.prototype.ngOnInit = function () { };
    AdminSerialTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }; //
    AdminSerialTableComponent.prototype.dataTableUpdate = function () {
        var _this = this;
        this.serialService.serials.subscribe(function (response) { return _this.dataSource.data = response; }, function (error) { return _this.snackBar.open("There is a problem getting data from the server. Error: " + error, 'X', { duration: 10000, panelClass: 'red-theme' }); });
    }; //   
    AdminSerialTableComponent.prototype.selectAction = function () {
        this.editMode ?
            (this.editMode = false, this.displayedColumns = ['serial', 'market', 'delete'], this.deleteColor = 'primary') :
            (this.editMode = true, this.displayedColumns = ['check', 'serial', 'market', 'delete'], this.deleteColor = 'accent');
    };
    AdminSerialTableComponent.prototype.filterAction = function () {
        this.filter ? (this.filter = false, this.filterColor = 'primary') : (this.filter = true, this.filterColor = 'accent');
    };
    AdminSerialTableComponent.prototype.filterTable = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminSerialTableComponent.prototype.deleteASerialNo = function (serial) {
        this.length = 1;
        this.toDeleteData = serial;
        // Open bottom sheet for user confirmation
        this.openBottomSheet();
    };
    AdminSerialTableComponent.prototype.selectAll = function () {
        this.checked ? (this.checked = false, this.selectAllColor = 'primary') : (this.checked = true, this.selectAllColor = 'accent');
    };
    AdminSerialTableComponent.prototype.onSubmit = function (datas) {
        if (datas) {
            /* Convert objects from ngFor checkbox to array, objects example: { {"abc100": true}, {"abc101" false}, {"abc102": false}, ...}, to {{"abc100": true}, undefined, undefined, ...} then convert it with map to [{id: "abc100"}, undefined, undefined, ...] */
            var datasToDelete = Object.keys(datas).map(function (key) {
                if (datas[key])
                    return { id: key };
                else
                    return;
            })
                // Further chain it to reduce method with array initializer to rebuild the array and exclude undefined data  
                .reduce(function (acc, val) {
                if (val)
                    acc.push(val);
                return acc;
            }, []);
            this.datasToDelete = datasToDelete;
            this.length = datasToDelete.length;
            this.openBottomSheet();
        }
        else
            return;
    };
    AdminSerialTableComponent.prototype.openBottomSheet = function () {
        var _this = this;
        var bottomSheetRef;
        var length = this.length;
        // Test and open bottomSheet and send data
        var data = { length: length, delete: false };
        if (length >= 1) {
            var openBottomSheet = this.bottomSheet.open(BottomSheetConfirm, { data: data, panelClass: 'red-theme' });
            bottomSheetRef = openBottomSheet;
        }
        // If the user confirm deletion, deleteManyReq function to delete from db
        bottomSheetRef.afterDismissed().subscribe(function (confirm) {
            if (confirm && confirm.delete && length == 1) {
                // delete in db
                _this.deleteASerialNoInDb();
            }
            else if (confirm && confirm.delete && length > 1) {
                // delete in db
                _this.deleteManyReqInDb();
            }
        });
    };
    AdminSerialTableComponent.prototype.deleteASerialNoInDb = function () {
        var _this = this;
        var serial = this.toDeleteData;
        this.serialService.deleteASerialNo(serial).subscribe(function (response) {
            if (response && response.id) {
                var currDatas = _this.dataSource.data;
                var index = currDatas.findIndex(function (serial) { return serial.id == response.id; });
                currDatas.splice(index, 1);
                _this.dataSource.data = currDatas;
                _this.snackBar.open('Serial number is successfully deleted from database.', 'X', { duration: 10000, panelClass: 'gold-theme' });
            } // 
            else
                _this.snackBar.open('Error deleting serial number from database. Please reload page and try again', 'X', { duration: 10000, panelClass: 'red-theme' });
        }, //
        function (//
        error) { return _this.snackBar.open('Error deleting serial number from database. Error: ' + error, 'X', { duration: 10000, panelClass: 'red-theme' }); });
    }; //  
    AdminSerialTableComponent.prototype.deleteManyReqInDb = function () {
        var _this = this;
        this.serialService.deleteSerialNos(this.datasToDelete).subscribe(function (response) {
            if (response.ok == 1)
                _this.deleteFromDataSource();
            else
                _this.snackBar.open("Error deleting file from the server. Please try again", 'X', { duration: 10000, panelClass: 'red-theme' });
        }, function (error) {
            _this.snackBar.open("Error deleting file from the server. Error: " + error, 'X', { duration: 10000, panelClass: 'red-theme' });
            _this.deletedInDb = false;
        });
    }; //
    AdminSerialTableComponent.prototype.deleteFromDataSource = function () {
        var currData = this.dataSource.data;
        var datasToDelete = this.datasToDelete;
        var dataSource = datasToDelete.reduce(function (acc, val) {
            if (val) {
                var index = currData.findIndex(function (serial) { return serial.id === val.id; });
                currData.splice(index, 1);
            }
            acc = currData;
            return acc;
        }, []);
        this.dataSource.data = dataSource;
        this.selectAction;
        this.checked = false;
        this.snackBar.open('Serial numbers are successfully deleted from database.', 'X', { duration: 10000, panelClass: 'gold-theme' });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AdminSerialTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AdminSerialTableComponent.prototype, "sort", void 0);
    AdminSerialTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-serial-table',
            template: __webpack_require__(/*! raw-loader!./admin-serial-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.html"),
            styles: [__webpack_require__(/*! ./admin-serial-table.component.scss */ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]])
    ], AdminSerialTableComponent);
    return AdminSerialTableComponent;
}()); //

var BottomSheetConfirm = /** @class */ (function () {
    function BottomSheetConfirm(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.dataLength = 0;
    }
    BottomSheetConfirm.prototype.ngOnInit = function () {
        this.dataLength = this.data.length;
    };
    BottomSheetConfirm.prototype.delete = function (action) {
        this.data.delete = action;
        this.bottomSheetRef.dismiss(this.data);
    };
    BottomSheetConfirm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bottom-sheet-confirm',
            template: "\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n                        <mat-card-title class=\"card__title\">Confirm Delete</mat-card-title>\n                        <mat-card-content>\n\n                           <div class=\"mb__warning\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                              Are you sure you want to delete these serial numbers?\n\n                              <h2>{{ dataLength }} serial numbers</h2>\n                           </div>\n                           \n                        </mat-card-content>\n                        <mat-card-actions>\n                           <div class=\"bsheet__button-cancel\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n                              <button mat-raised-button (click)=\"delete(false)\" color=\"accent\" >Cancel</button>\n                              <button mat-raised-button (click)=\"delete(true)\" color=\"primary\" >Delete</button>\n                           </div>\n                        </mat-card-actions>\n                  </div>   \n   ",
            styles: [__webpack_require__(/*! ./admin-serial-table.component.scss */ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"], Object])
    ], BottomSheetConfirm);
    return BottomSheetConfirm;
}());



/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".serial__input {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.serial__form-button {\n  width: 100%;\n}\n.serial__form-prefix {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRE47QURJRztFQUNHLFdBQUE7QUNGTjtBREtHO0VBQ0csbUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNlcmlhbC9hZG1pbi1zZXJpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VyaWFse1xuXG4gICAmX19pbnB1dHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICB9XG5cbiAgICZfX2Zvcm0tYnV0dG9ue1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgICZfX2Zvcm0tcHJlZml4e1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgIH1cbn0iLCIuc2VyaWFsX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlcmlhbF9fZm9ybS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZXJpYWxfX2Zvcm0tcHJlZml4IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminSerialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSerialComponent", function() { return AdminSerialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/serial-no/serial-auth.service */ "./src/app/services/serial-no/serial-auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AdminSerialComponent = /** @class */ (function () {
    function AdminSerialComponent(serialService, snackBar) {
        this.serialService = serialService;
        this.snackBar = snackBar;
        this.serialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            serial1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]),
            serial2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
            volume: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            market: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.markets = [
            { area: 'Malaysia' },
            { area: 'Singapore' }
        ];
    }
    AdminSerialComponent.prototype.ngOnInit = function () {
    };
    AdminSerialComponent.prototype.submitSerialForm = function () {
        var _this = this;
        this.serialService.generateSerialNo(this.serialForm.value).subscribe(function (response) {
            if (response.code) {
                _this.snackBar.open("Bulk serial number generation error: " + response.name, 'X', { duration: 10000, panelClass: 'primary' });
            }
            else {
                _this.serialService.updateSerials();
                _this.snackBar.open('Bulk serial number generation is successfull', 'X', { duration: 10000, panelClass: 'primary' });
            }
        });
    };
    AdminSerialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-serial',
            template: __webpack_require__(/*! raw-loader!./admin-serial.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-serial/admin-serial.component.html"),
            styles: [__webpack_require__(/*! ./admin-serial.component.scss */ "./src/app/admin/admin-serial/admin-serial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AdminSerialComponent);
    return AdminSerialComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/animations/anim-fn.ts":
/*!***************************************!*\
  !*** ./src/app/animations/anim-fn.ts ***!
  \***************************************/
/*! exports provided: xEnter, yEnter, imageEnter, imageLeave, iconButtonEnter, primaryButtonClick, xMouseEnter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xEnter", function() { return xEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yEnter", function() { return yEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageEnter", function() { return imageEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageLeave", function() { return imageLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconButtonEnter", function() { return iconButtonEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryButtonClick", function() { return primaryButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xMouseEnter", function() { return xMouseEnter; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var xEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.3,
            transform: 'translateX(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('xEnter', [
         transition(':enter', [
            useAnimation(xEnter)
   ]) ]) ]
*/
var yEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.y-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.3,
            transform: 'translateY(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('yEnter', [
         transition(':enter', [
            useAnimation(yEnter)
   ]) ]) ]
*/
var imageEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.image-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.3
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'scaleX(1.2)'
            }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   trigger('imageEnter', [
         transition(':enter', [
            useAnimation(imageEnter)
      ]) ]) ]
*/
var imageLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.image-enter-leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.3
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   trigger('imageEnter', [
         transition(':enter', [
            useAnimation(imageEnter)
      ]) ]) ]
*/
var iconButtonEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.y-icon-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.3,
            transform: 'translateY(50px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-button-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.9,
            transform: 'scale(0.9, 0.9)',
            'background-color': '#fb002d'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ])
]); //
/*   Usage  *
   animations: [
      trigger('y-mouse-enter', [
         transition(':enter', [
            useAnimation(yMouseEnter)
   ]) ]) ]
*/
var primaryButtonClick = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-button-click', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.9,
            transform: 'scale(0.9, 0.9)',
            'background-color': '#fb002d'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ])
]); //
/*   Usage  *
   animations: [
      trigger('y-mouse-enter', [
         transition(':enter', [
            useAnimation(yMouseEnter)
   ]) ]) ]
*/
var xMouseEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.x-mouse-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.3,
            transform: 'translateX(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('iconButtonEnter', [
         transition(':enter', [
            useAnimation(iconButtonEnter)
   ]) ]) ]
*/ 


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticate/authenticate.component */ "./src/app/authenticate/authenticate.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _admin_admin_serial_admin_serial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-serial/admin-serial.component */ "./src/app/admin/admin-serial/admin-serial.component.ts");
/* harmony import */ var _services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/admin-auth-guard/admin-auth-guard.service */ "./src/app/services/admin-auth-guard/admin-auth-guard.service.ts");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _admin_admin_message_admin_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-message/admin-message.component */ "./src/app/admin/admin-message/admin-message.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");















var routes = [
    { path: '', component: _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"], data: { name: 'Home', icon: 'home', tooltip: 'Home Page', type: 'public' } },
    { path: 'contact', component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"], data: { name: 'Contact Us', icon: 'alternate_email', tooltip: 'Contact Us', type: 'public' } },
    { path: 'authenticate', component: _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticateComponent"], data: { name: 'Tag', icon: 'dashboard', tooltip: 'Authenticate Product', type: 'public' } },
    { path: 'posts/tags/tag/:tag', component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_14__["TagsComponent"], data: { name: 'Tag', icon: 'dashboard', tooltip: 'Tag Page', type: 'user' } },
    { path: 'user/login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], data: { name: 'Login', icon: 'person', tooltip: 'Login Page', type: 'auth' } },
    { path: 'user/register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], data: { name: 'Register', icon: 'person_add', tooltip: 'Register Page', type: 'auth' } },
    // User routes
    { path: 'user/profile', component: _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"], canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]], data: { name: 'Profile', icon: 'person', tooltip: 'Profile Page', type: 'user' } },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_13__["TestComponent"], canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]], data: { name: 'test', icon: 'person', tooltip: 'Test Page', type: 'user' } },
    // Admin routes
    { path: 'admin/serial', component: _admin_admin_serial_admin_serial_component__WEBPACK_IMPORTED_MODULE_5__["AdminSerialComponent"], canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"], _services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuardService"]], data: { name: 'Serial', icon: 'dashboard', type: 'admin' } },
    { path: 'admin/message', component: _admin_admin_message_admin_message_component__WEBPACK_IMPORTED_MODULE_9__["AdminMessageComponent"], canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"], _services_admin_auth_guard_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuardService"]], data: { name: 'Message', icon: 'dashboard', type: 'admin' } },
    // Wildcard routes
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], data: { name: 'Back to Home', icon: 'dashboard', type: 'wildcard' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDUSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5sYXlvdXR7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG59IiwiLmxheW91dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'strong-arrow';
        this.init = false;
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        this.init = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authenticate/authenticate.component */ "./src/app/authenticate/authenticate.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_serial_admin_serial_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-serial/admin-serial.component */ "./src/app/admin/admin-serial/admin-serial.component.ts");
/* harmony import */ var _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-serial/admin-serial-table/admin-serial-table.component */ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _admin_admin_message_admin_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin-message/admin-message.component */ "./src/app/admin/admin-message/admin-message.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _navigations_navigations_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./navigations/navigations.component */ "./src/app/navigations/navigations.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");






























function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticateComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_7__["SerialCheckDialog"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _admin_admin_serial_admin_serial_component__WEBPACK_IMPORTED_MODULE_19__["AdminSerialComponent"],
                _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_20__["AdminSerialTableComponent"],
                _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_20__["BottomSheetConfirm"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_22__["ContactFormComponent"],
                _admin_admin_message_admin_message_component__WEBPACK_IMPORTED_MODULE_23__["AdminMessageComponent"],
                _navigations_navigations_component__WEBPACK_IMPORTED_MODULE_25__["NavigationsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_27__["TestComponent"],
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_28__["TagsComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_29__["SideBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"].forRoot({ config: { tokenGetter: tokenGetter } }),
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatListModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_21__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'check' },
                //{provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
            ],
            entryComponents: [
                _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_7__["SerialCheckDialog"],
                _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_20__["BottomSheetConfirm"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticate/authenticate.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/authenticate/authenticate.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  font-size: 2.8rem;\n}\n\n.form__button-submit {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.card__review-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvYXV0aGVudGljYXRlL2F1dGhlbnRpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRlL2F1dGhlbnRpY2F0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLGlCQUFBO0FDQ1I7O0FESUc7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7QUNETjs7QURPRztFQUNHLFdBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZS9hdXRoZW50aWNhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aHtcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG59XG5cbi5mb3Jte1xuXG4gICAmX19idXR0b24tc3VibWl0e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgfVxufVxuXG4uY2FyZHtcblxuICAgJl9fcmV2aWV3LWJ1dHRvbntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgfVxufVxuXG5cbiIsIi5hdXRoIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG59XG5cbi5mb3JtX19idXR0b24tc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jYXJkX19yZXZpZXctYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/authenticate/authenticate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/authenticate/authenticate.component.ts ***!
  \********************************************************/
/*! exports provided: AuthenticateComponent, SerialCheckDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateComponent", function() { return AuthenticateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialCheckDialog", function() { return SerialCheckDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/serial-no/serial-auth.service */ "./src/app/services/serial-no/serial-auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthenticateComponent = /** @class */ (function () {
    function AuthenticateComponent(auth, dialog) {
        this.auth = auth;
        this.dialog = dialog;
        this.serial = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    AuthenticateComponent.prototype.ngOnInit = function () {
    };
    AuthenticateComponent.prototype.authenticate = function () {
        var _this = this;
        this.auth.authenticateSerial(this.serial.value).subscribe(function (response) {
            console.log(response);
            var dialogRef = _this.dialog.open(SerialCheckDialog, {
                width: '320px',
                data: response
            });
        });
    };
    AuthenticateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authenticate',
            template: __webpack_require__(/*! raw-loader!./authenticate.component.html */ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate.component.html"),
            styles: [__webpack_require__(/*! ./authenticate.component.scss */ "./src/app/authenticate/authenticate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AuthenticateComponent);
    return AuthenticateComponent;
}());

// Dialog for the result of checking serial number
var SerialCheckDialog = /** @class */ (function () {
    function SerialCheckDialog(dialogRef, data, auth, snackBar, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.toReview = false;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.review = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.savedReviewSucces = false;
    }
    SerialCheckDialog.prototype.ngOnInit = function () {
    };
    SerialCheckDialog.prototype.reviewForm = function () {
        this.toReview = true;
    };
    SerialCheckDialog.prototype.submitReview = function () {
        var _this = this;
        this.toReview = true;
        var contact = {
            name: this.name.value,
            phone: this.phone.value,
            email: this.email.value,
            review: this.review.value
        };
        this.auth.saveReview(contact).subscribe(function (response) {
            if (response) {
                _this.toReview = false;
                _this.savedReview = response;
                _this.savedReviewSucces = true;
            }
            else
                _this.snackBar.open(response.statusText, 'X', { duration: 1000, panelClass: 'warn' });
        }, function (error) { return _this.snackBar.open(error, 'X', { duration: 1000, panelClass: 'warn' }); });
    };
    SerialCheckDialog.prototype.reviewSaved = function () {
        this.dialogRef.close();
        this.router.navigate(['']);
    };
    SerialCheckDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
        this.router.navigate(['']);
    };
    SerialCheckDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'serial-check-dialog',
            template: __webpack_require__(/*! raw-loader!./authenticate-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/authenticate/authenticate-dialog.component.html"),
            styles: [__webpack_require__(/*! ./authenticate.component.scss */ "./src/app/authenticate/authenticate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SerialCheckDialog);
    return SerialCheckDialog;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contact/contact.service */ "./src/app/services/contact/contact.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(contactService, snackBar) {
        this.contactService = contactService;
        this.snackBar = snackBar;
        this.useForm = true;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ContactFormComponent.prototype, "name", {
        get: function () { return this.contactForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactFormComponent.prototype, "phone", {
        get: function () { return this.contactForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactFormComponent.prototype, "email", {
        get: function () { return this.contactForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactFormComponent.prototype, "comment", {
        get: function () { return this.contactForm.get('comment'); },
        enumerable: true,
        configurable: true
    });
    ContactFormComponent.prototype.submitContact = function () {
        var _this = this;
        this.contactService.saveContact(this.contactForm.value).subscribe(function (response) {
            _this.contact = response;
        }, //
        function (//
        error) { return _this.snackBar.open('Form submission error, please try again', 'X', { duration: 10000, panelClass: 'warn' }); });
    };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/contact-form/contact-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  bottom: 0;\n  z-index: 10;\n  position: fixed;\n  font-size: 1rem;\n  height: 40px;\n  color: #fe4365;\n  border-top-color: #fe4365;\n  border-top-width: 2px;\n  border-top-style: solid;\n}\n.footer__text {\n  padding: 0 10px 0 10px;\n}\n.footer__icon {\n  padding-top: 10px;\n  color: #ffffff;\n}\n.footer:hover {\n  -webkit-transform: scale(1.2, 1.2);\n          transform: scale(1.2, 1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNHLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FUTztFQVVQLHlCQVZPO0VBV1AscUJBQUE7RUFDQSx1QkFBQTtBQ0hIO0FETUc7RUFDRyxzQkFBQTtBQ0pOO0FET0c7RUFDRyxpQkFBQTtFQUNBLGNBdEJFO0FDaUJSO0FEV0E7RUFDRyxrQ0FBQTtVQUFBLDBCQUFBO0FDUkgiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmZmZmO1xuJHByaW1hcnk6ICNmZTQzNjU7XG5cblxuLmZvb3RlcntcbiAgIGJvdHRvbTogMDtcbiAgIHotaW5kZXg6IDEwO1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgZm9udC1zaXplOiAxcmVtO1xuICAgaGVpZ2h0OiA0MHB4O1xuICAgY29sb3I6ICRwcmltYXJ5O1xuICAgYm9yZGVyLXRvcC1jb2xvcjogJHByaW1hcnk7XG4gICBib3JkZXItdG9wLXdpZHRoOiAycHg7XG4gICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgIFxuXG4gICAmX190ZXh0e1xuICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgIH1cblxuICAgJl9faWNvbntcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgIH0gXG4gICBcbiAgIFxufVxuXG4uZm9vdGVyOmhvdmVye1xuICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG59IiwiLmZvb3RlciB7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmU0MzY1O1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmU0MzY1O1xuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xufVxuLmZvb3Rlcl9fdGV4dCB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG59XG4uZm9vdGVyX19pY29uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9vdGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile-service/profile-service.service */ "./src/app/services/profile-service/profile-service.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(profileService) {
        this.profileService = profileService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.profile.subscribe(function (response) {
            if (response && response._id)
                _this.profile = response;
            else
                _this.profile = null;
        }); //
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");


// Angular Material Modules

































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigations/navigations.component.scss":
/*!********************************************************!*\
  !*** ./src/app/navigations/navigations.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  position: relative;\n}\n.nav__toolbar {\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  height: 64px;\n  border-bottom: 3px solid #303030;\n}\n.nav__sidenav-content {\n  padding-top: 69px;\n  padding-right: 5px;\n  padding-left: 49px;\n}\n.nav__drawer {\n  padding-top: 64px;\n}\n.nav__drawer-open {\n  width: 250px;\n}\n.nav__drawer-menu {\n  background-color: #303030;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.nav__drawer-link-icon {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .nav__toolbar {\n    height: 56px;\n  }\n  .nav__sidenav-content {\n    padding-top: 61px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvbmF2aWdhdGlvbnMvbmF2aWdhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb25zL25hdmlnYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUcsa0JBQUE7QUNKSDtBRE1HO0VBQ0csV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDSk47QURTTTtFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1BUO0FEV0c7RUFFRyxpQkFBQTtBQ1ZOO0FEWU07RUFDRyxZQUFBO0FDVlQ7QURhTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1hSO0FEY007RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0FDWlQ7QURpQkE7RUFHTTtJQUNHLFlBQUE7RUNoQlA7RURvQk87SUFDRyxpQkFBQTtFQ2xCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbnMvbmF2aWdhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmZmZmY7XG4kcHJpbWFyeTogI2ZlNDM2NTtcbiRkYXJrOiAjMzAzMDMwO1xuXG4ubmF2e1xuXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICZfX3Rvb2xiYXJ7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6IDY0cHg7IFxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRkYXJrO1xuICAgfVxuXG4gICAmX19zaWRlbmF2e1xuXG4gICAgICAmLWNvbnRlbnR7XG4gICAgICAgICBwYWRkaW5nLXRvcDogNjlweDtcbiAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgIHBhZGRpbmctbGVmdDogNDlweDtcbiAgICAgIH1cbiAgIH1cblxuICAgJl9fZHJhd2Vye1xuXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcblxuICAgICAgJi1vcGVue1xuICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgfVxuXG4gICAgICAmLW1lbnV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgJi1saW5rLWljb257XG4gICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXsgICBcblxuICAgLm5hdntcbiAgICAgICZfX3Rvb2xiYXJ7XG4gICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICB9XG5cbiAgICAgICZfX3NpZGVuYXZ7XG4gICAgICAgICAmLWNvbnRlbnR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjFweDtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxufSIsIi5uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmF2X190b29sYmFyIHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzMDMwMzA7XG59XG4ubmF2X19zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNjlweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ5cHg7XG59XG4ubmF2X19kcmF3ZXIge1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cbi5uYXZfX2RyYXdlci1vcGVuIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLm5hdl9fZHJhd2VyLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubmF2X19kcmF3ZXItbGluay1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZfX3Rvb2xiYXIge1xuICAgIGhlaWdodDogNTZweDtcbiAgfVxuICAubmF2X19zaWRlbmF2LWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA2MXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/navigations/navigations.component.ts":
/*!******************************************************!*\
  !*** ./src/app/navigations/navigations.component.ts ***!
  \******************************************************/
/*! exports provided: NavigationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationsComponent", function() { return NavigationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/profile-service/profile-service.service */ "./src/app/services/profile-service/profile-service.service.ts");








var NavigationsComponent = /** @class */ (function () {
    function NavigationsComponent(breakpointObserver, router, profileService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.profileService = profileService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.sideNavIcon = true;
        this.opened = true;
    }
    NavigationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.profile.subscribe(function (response) {
            if (response && response._id)
                _this.profile = response;
            else
                _this.profile = null;
        });
        var pages = _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routes"].reduce(function (acc, value) {
            if (value.data.type === 'public')
                acc.public.push(value);
            else if (value.data.type === 'auth')
                acc.auth.push(value);
            else if (value.data.type === 'user')
                acc.user.push(value);
            else if (value.data.type === 'admin')
                acc.admin.push(value);
            return acc;
        }, { public: [], auth: [], user: [], admin: [] });
        this.links = pages;
    };
    NavigationsComponent.prototype.toggleSidenav = function () {
        this.sideNavIcon ? this.sideNavIcon = false : this.sideNavIcon = true;
    };
    NavigationsComponent.prototype.itemClicked = function () {
        this.sideNavIcon = true;
    };
    NavigationsComponent.prototype.backToHome = function () {
        this.router.navigate([''], { fragment: 'top' });
    };
    NavigationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigations',
            template: __webpack_require__(/*! raw-loader!./navigations.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigations/navigations.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0.5 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(2000))
                ]) //end trigger
            ],
            styles: [__webpack_require__(/*! ./navigations.component.scss */ "./src/app/navigations/navigations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])
    ], NavigationsComponent);
    return NavigationsComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-auth-guard/admin-auth-guard.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/admin-auth-guard/admin-auth-guard.service.ts ***!
  \***********************************************************************/
/*! exports provided: AdminAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function() { return AdminAuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-service/profile-service.service */ "./src/app/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService(profileService, router, snackBar) {
        this.profileService = profileService;
        this.router = router;
        this.snackBar = snackBar;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        var status = this.profileService.getLoggedStatus();
        if (status.user.admin)
            return true;
        else {
            this.snackBar.open('You are not authorized to acces this page, please Login', 'X', { duration: 10000, panelClass: 'red-theme' });
            this.router.navigate(['']);
            return false;
        }
    }; //
    AdminAuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard/auth-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/auth-guard/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-service/profile-service.service */ "./src/app/services/profile-service/profile-service.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, profileService) {
        this.router = router;
        this.profileService = profileService;
    }
    AuthGuardService.prototype.canActivate = function (routes, state) {
        var user = this.profileService.getLoggedStatus();
        if (!user.expired)
            return true;
        else
            return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.login = function (credentials) {
        console.log(credentials);
        return this.http.post("/api/user/login", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var token = localStorage.getItem('token');
            if (!token) {
                return null;
            }
            if (token) {
                return this.jwtHelper.decodeToken(token);
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        var tokenExpired = this.jwtHelper.isTokenExpired(token);
        if (!tokenExpired) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/contact/contact.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/contact/contact.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.saveContact = function (form) {
        return this.http.post('/api/contact/form/save', form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    }; //
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/httpOptions.ts":
/*!*****************************************!*\
  !*** ./src/app/services/httpOptions.ts ***!
  \*****************************************/
/*! exports provided: httpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var jwtToken = localStorage.getItem('token');
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'jwtoken': jwtToken
    })
};


/***/ }),

/***/ "./src/app/services/profile-service/profile-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/profile-service/profile-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _httpOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../httpOptions */ "./src/app/services/httpOptions.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ProfileService = /** @class */ (function () {
    function ProfileService(http, router, snackBar) {
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.decodedToken = false;
        this.loggedIn = false;
        this.locSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.country);
        this.location = this.locSource;
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.user);
        this.profile = this.userSource;
        this.getUserSource();
    }
    ProfileService.prototype.getLocation = function () {
        var _this = this;
        this.http.post('/api/user/location', { location: '' }).subscribe(function (response) { return _this.locSource.next(response.country); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    ProfileService.prototype.getUserSource = function () {
        var _this = this;
        this.http.get('/api/user/profile', _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).subscribe(function (response) {
            var user = response[0];
            if (user && user.id) {
                _this.userSource.next(user);
            }
            else
                _this.userSource = null;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    }; //
    ProfileService.prototype.register = function (formValue) {
        var _this = this;
        return this.http.post('/api/user/register', formValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            console.log(user);
            _this.userSource.next(user);
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    }; //
    ProfileService.prototype.getLoggedStatus = function () {
        var token = localStorage.getItem('token');
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]();
        var expired = helper.isTokenExpired(token);
        var user = helper.decodeToken(token);
        if (!expired && user)
            return { expired: expired, user: user };
        else {
            this.snackBar.open('You are not authorized to acces this page, please Login', 'X', { duration: 10000, panelClass: 'red-theme' });
            this.router.navigate(['']);
        }
    }; //
    ProfileService.prototype.logout = function () {
        localStorage.removeItem('token');
        window.location.reload();
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/serial-no/serial-auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/serial-no/serial-auth.service.ts ***!
  \***********************************************************/
/*! exports provided: SerialAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialAuthService", function() { return SerialAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SerialAuthService = /** @class */ (function () {
    function SerialAuthService(http) {
        this.http = http;
        // Serial Table Datasource Behaviour Subject
        this.serialSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.newSerials);
        this.serials = this.serialSource;
        this.getExistingSerialNos();
    } //
    SerialAuthService.prototype.updateSerials = function () { this.getExistingSerialNos(); }; //
    SerialAuthService.prototype.getExistingSerialNos = function () {
        var _this = this;
        this.http.get('/api/products/serials')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }))
            .subscribe(function (response) { return _this.serialSource.next(response); });
    }; //
    SerialAuthService.prototype.authenticateSerial = function (serial) {
        return this.http.post('/api/product/authentication', { serial: serial }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    }; //
    SerialAuthService.prototype.saveReview = function (review) {
        return this.http.post('/api/product/review', review).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    }; //
    SerialAuthService.prototype.generateSerialNo = function (serials) {
        return this.http.post('/api/product/serial/generate', serials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    }; //
    SerialAuthService.prototype.getSerialNos = function () {
        return this.http.get('/api/products/serials').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    }; //
    SerialAuthService.prototype.deleteASerialNo = function (serial) {
        return this.http.post('/api/product/serial/rm', serial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    }; //
    SerialAuthService.prototype.deleteSerialNos = function (serials) {
        return this.http.post('/api/product/serials/rm', serials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    }; //
    SerialAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SerialAuthService);
    return SerialAuthService;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  overflow: hidden;\n  top: 3px;\n  position: sticky;\n  position: -webkit-sticky;\n  padding: 5px 7px 5px 5px;\n}\n.sidebar__card {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0csZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDQUg7QURFRztFQUNHLFlBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2lkZWJhcntcbiAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgdG9wOiAzcHg7XG4gICBwb3NpdGlvbjogc3RpY2t5O1xuICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyBcbiAgIHBhZGRpbmc6IDVweCA3cHggNXB4IDVweDsgICBcblxuICAgJl9fY2FyZHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgIH1cbn0iLCIuc2lkZWJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogM3B4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4IDVweDtcbn1cbi5zaWRlYmFyX19jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! raw-loader!./side-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/side-bar/side-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/tags/tags.component.scss":
/*!******************************************!*\
  !*** ./src/app/tags/tags.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  overflow: auto;\n  margin-bottom: 10px;\n}\n\n.timeline {\n  min-height: 400px;\n  height: 85vh;\n  padding: 7px 5px 20px 5px;\n}\n\n.timeline__card {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWdzL3RhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURFQTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0g7O0FEQ0c7RUFDRyxtQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGV7XG4gICBvdmVyZmxvdzogYXV0bzsgICBcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lbGluZXtcbiAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgaGVpZ2h0OiA4NXZoOyAgXG4gICBwYWRkaW5nOiA3cHggNXB4IDIwcHggNXB4OyBcblxuICAgJl9fY2FyZHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICB9XG59XG5cbiIsIi5wcm9maWxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lbGluZSB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBoZWlnaHQ6IDg1dmg7XG4gIHBhZGRpbmc6IDdweCA1cHggMjBweCA1cHg7XG59XG4udGltZWxpbmVfX2NhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tags/tags.component.ts":
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TagsComponent = /** @class */ (function () {
    function TagsComponent() {
        this.posts = [
            {
                poster: {
                    name: 'Azrin Amin',
                    slug: '/user/profile/azrin-amin',
                    avatar: 'assets/images/man.png',
                    about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
                },
                post: {
                    id: '1234',
                    date: Date.now(),
                    category: 'rutrum',
                    slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
                    image: 'assets/images/banner.jpg',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comment: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ]
                }
            },
            {
                poster: {
                    name: 'Azrin Amin',
                    slug: '/user/profile/azrin-amin',
                    avatar: '',
                    about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
                },
                post: {
                    id: '1235',
                    date: Date.now(),
                    category: 'iaculis',
                    slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
                    image: 'assets/images/banner_2.jpg',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comment: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ]
                }
            },
            {
                poster: {
                    name: 'Azrin Amin',
                    slug: '/user/profile/azrin-amin',
                    avatar: '',
                    about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
                },
                post: {
                    id: '1236',
                    date: Date.now(),
                    category: 'iaculis',
                    slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
                    image: null,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comment: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ]
                }
            }
        ];
        this.postsExist = true;
        this.imageEntered = false;
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent.prototype.mouseEnterCard = function (event) {
        this.postId = event.target.id;
    };
    TagsComponent.prototype.mouseEnterImage = function (event) {
        this.imagePost = event.target.id;
        this.imageEntered = true;
    };
    TagsComponent.prototype.mouseLeaveImage = function () {
        this.imageEntered = false;
    };
    TagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! raw-loader!./tags.component.html */ "./node_modules/raw-loader/index.js!./src/app/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.scss */ "./src/app/tags/tags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test__icon-wrapper {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXN0L3Rlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUc7RUFDRyxtQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3R7XG5cbiAgICZfX2ljb24td3JhcHBlcntcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICB9XG59IiwiLnRlc3RfX2ljb24td3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/anim-fn */ "./src/app/animations/anim-fn.ts");




var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.show = false;
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.showAndroid = function () {
        this.show ? this.show = false : this.show = true;
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('xEnter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["xEnter"])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('yEnter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["yEnter"])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }) //    
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login__input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login__form-button {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREtHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XG5cbiAgICZfX2lucHV0e1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgIH1cblxuICAgJl9fZm9ybS1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufSIsIi5sb2dpbl9faW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luX19mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile-service/profile-service.service */ "./src/app/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, profileService, snackBar, router) {
        this.authService = authService;
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.isLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe(function (response) {
            console.log(response);
            if (response && response.id) {
                localStorage.setItem('token', response.token);
                _this.router.navigate(['/user/profile']);
                _this.snackBar.open('Login successful, You are currently logged in', 'X', { duration: 10000, panelClass: 'gold-theme' });
            }
        }, function (error) { return _this.snackBar.open(error, 'X', { duration: 10000 }); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "isLoggedIn", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0.5 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(7000))
                ]) //end trigger
            ],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register__input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.register__form-button {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREtHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG5cbiAgICZfX2lucHV0e1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgIH1cblxuICAgJl9fZm9ybS1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufSIsIi5yZWdpc3Rlcl9faW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJlZ2lzdGVyX19mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile-service/profile-service.service */ "./src/app/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(profileService, snackBar, router) {
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.profileService.register(this.registerForm.value).subscribe(function (response) {
            if (response && response.id) {
                _this.router.navigate(['/user/profile']);
                _this.snackBar.open('Login successful, You are currently logged in', 'X', { duration: 10000 });
            }
        }, function (error) { return _this.snackBar.open(error, 'X', { duration: 10000 }); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  overflow: auto;\n  margin-bottom: 10px;\n}\n\n.timeline {\n  min-height: 400px;\n  height: 85vh;\n  padding: 7px 5px 20px 5px;\n}\n\n.timeline__card {\n  margin-bottom: 10px;\n}\n\n.sidebar {\n  overflow: hidden;\n  top: 3px;\n  position: sticky;\n  position: -webkit-sticky;\n  padding: 5px 7px 5px 5px;\n}\n\n.sidebar__card {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvYXpyaW5fZGV2L3NyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURFQTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0g7O0FEQ0c7RUFDRyxtQkFBQTtBQ0NOOztBREdBO0VBQ0csZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDQUg7O0FERUc7RUFDRyxZQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcbiAgIG92ZXJmbG93OiBhdXRvOyAgIFxuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpbWVsaW5le1xuICAgbWluLWhlaWdodDogNDAwcHg7XG4gICBoZWlnaHQ6IDg1dmg7ICBcbiAgIHBhZGRpbmc6IDdweCA1cHggMjBweCA1cHg7IFxuXG4gICAmX19jYXJke1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIH1cbn1cblxuLnNpZGViYXJ7XG4gICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgIHRvcDogM3B4O1xuICAgcG9zaXRpb246IHN0aWNreTtcbiAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgXG4gICBwYWRkaW5nOiA1cHggN3B4IDVweCA1cHg7ICAgXG5cbiAgICZfX2NhcmR7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICB9XG59XG5cbiIsIi5wcm9maWxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lbGluZSB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBoZWlnaHQ6IDg1dmg7XG4gIHBhZGRpbmc6IDdweCA1cHggMjBweCA1cHg7XG59XG4udGltZWxpbmVfX2NhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2lkZWJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogM3B4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4IDVweDtcbn1cbi5zaWRlYmFyX19jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/anim-fn */ "./src/app/animations/anim-fn.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(router) {
        this.router = router;
        this.posts = [
            {
                poster: {
                    name: 'Azrin Amin',
                    slug: '/user/profile/azrin-amin',
                    avatar: 'assets/images/man.png',
                    about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
                },
                post: {
                    id: '1234',
                    date: Date.now(),
                    category: 'rutrum',
                    slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
                    image: 'assets/images/banner.jpg',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comments: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ],
                    shared: [
                        {
                            user: 'user_id',
                            date: Date.now()
                        },
                        {
                            user: 'user_id',
                            date: Date.now()
                        }
                    ]
                }
            },
            {
                poster: {
                    name: 'Azrin Amin',
                    slug: '/user/profile/azrin-amin',
                    avatar: '',
                    about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
                },
                post: {
                    id: '1235',
                    date: Date.now(),
                    category: 'iaculis',
                    slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
                    image: 'assets/images/banner_2.jpg',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comments: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ],
                    shared: [
                        {
                            user: 'user_id',
                            date: Date.now()
                        },
                        {
                            user: 'user_id',
                            date: Date.now()
                        }
                    ]
                }
            },
            {
                poster: {
                    name: 'Azrin Amin',
                    slug: '/user/profile/azrin-amin',
                    avatar: '',
                    about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
                },
                post: {
                    id: '1236',
                    date: Date.now(),
                    category: 'iaculis',
                    slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
                    image: null,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comments: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ],
                    shared: [
                        {
                            user: 'user_id',
                            date: Date.now()
                        },
                        {
                            user: 'user_id',
                            date: Date.now()
                        }
                    ]
                }
            }
        ];
        this.postsExist = true;
        this.imageEntered = false;
        this.readMoreClick = false;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.mouseEnterCard = function (event) {
        this.postId = event.target.id;
    };
    UserComponent.prototype.mouseEnterImage = function (event) {
        this.imagePost = event.target.id;
        this.imageEntered = true;
    };
    UserComponent.prototype.mouseLeaveImage = function () {
        this.imageEntered = false;
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('xEnter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["xEnter"])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('iconButtonEnter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["iconButtonEnter"])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('imageEnter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["imageEnter"])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/azrin/project/azrin_dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map