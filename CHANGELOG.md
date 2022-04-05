## [2.7.0] - 2022-04-03
### Updates
- update to Angular 13
- update all dependencies to match Angular 13 version

## [2.6.0] - 2021-07-15
### Updates
- update to Angular 12
- update all dependencies to match Angular 12 version

When you build and serve your app it is possible that some warnings to appear on your terminal. Those will NOT affect your product.

## [2.5.0] - 2020-10-07
### Updates
- update to Angular 10
- update all dependencies to match Angular 10 version


## [2.4.0] - 2020-03-05
### Updates
- update to Angular 9
- update all dependencies to match Angular 9 version

## [2.3.0] - 2019-06-11
### Updates
- update to Angular 8
- update all dependencies to match Angular 8 version
```
@agm/core                           1.0.0-beta.5   →   1.0.0-beta.6
@angular/animations                        7.0.2   →          8.0.0
@angular/cdk                               7.0.2   →          8.0.1
@angular/common                            7.0.2   →          8.0.0
@angular/compiler                          7.0.2   →          8.0.0
@angular/core                              7.0.2   →          8.0.0
@angular/forms                             7.0.2   →          8.0.0
@angular/http                              7.0.2   →         7.2.15
@angular/material                          7.0.2   →          8.0.1
@angular/platform-browser                  7.0.2   →          8.0.0
@angular/platform-browser-dynamic          7.0.2   →          8.0.0
@angular/platform-server                   7.0.2   →          8.0.0
@angular/router                            7.0.2   →          8.0.0
ajv                                        6.4.0   →         6.10.0
bootstrap                                  4.1.0   →          4.3.1
bootstrap-material-design                  4.1.1   →          4.1.2
chartist                                  0.11.0   →         0.11.2
core-js                                    2.4.1   →          3.1.3
express                                   4.16.3   →         4.17.1
googleapis                                28.1.0   →         40.0.0
jquery                                     3.2.1   →          3.4.1
moment                                    2.22.1   →         2.24.0
perfect-scrollbar                          1.1.0   →          1.4.0
popper.js                                 1.14.3   →         1.15.0
rxjs                                       6.3.3   →          6.5.2
rxjs-compat                                6.3.3   →          6.5.2
zone.js                                   0.8.26   →          0.9.1
@angular-devkit/build-angular              0.6.3   →        0.800.2
@angular/cli                               7.0.2   →          8.0.2
@angular/compiler-cli                      7.0.2   →          8.0.0
@angular/language-service                  7.0.2   →          8.0.0
@types/bootstrap                          3.3.32   →          4.3.0
@types/chartist                           0.9.34   →         0.9.46
@types/googlemaps                         3.30.8   →         3.36.4
@types/jasmine                            2.5.38   →         3.3.13
@types/jquery                            1.10.31   →         3.3.29
@types/node                               6.0.73   →         12.0.7
codelyzer                                  4.2.1   →          5.1.0
jasmine-core                               3.3.0   →          3.4.0
karma                                      2.0.0   →          4.1.0
karma-cli                                  1.0.1   →          2.0.0
karma-coverage-istanbul-reporter           1.4.2   →          2.0.5
karma-jasmine                              1.1.1   →          2.0.1
karma-jasmine-html-reporter                1.4.0   →          1.4.2
protractor                                 5.3.1   →          5.4.2
ts-node                                    5.0.1   →          8.2.0
tslint                                     5.9.1   →         5.17.0
typescript                                 3.1.6   →          3.4.5
```
### Bug fixing
- browser console error
```
href="#pablo" -> href="javascript:void(0)"
href="#"      -> href="javascript:void(0)"
```
- form-validation error from the `_forms.scss` file
```
@include form-validation-state("valid", $label-color); -> @include form-validation-state("valid", $label-color, $form-feedback-icon-valid);
```
- added hash for google url validation

## [2.2.0] - 2018-11-14
### Changes
- update to Angular 7
- update all dependencies to match Angular 7 version

## [2.1.1] - 2018-05-23
### Fixes
- changed some links

## [2.1.0] - 2018-04-27
### Fixes
- changed file structure
- moved documentation online

## [2.0.0] - 2018-04-20
### Fixes
- added bootstrap 4
- added angular 5

## [1.4.2] - 2017-10-01
### Fixes
- added Perfect Scrollbar
- added scrollTop on route change
- added closeSidebar on mobile
- autocompile scss files
- fixes for IE
- update package dependencies to 4.4.4

## [1.4.1] - 2017-09-19
### Material
- added material.init()
- fixed input float problem
- fixed checkboxes in tabs

## [1.4.0] - 2017-08-23
### Changes for Angular 4
- added angular-cli
- update to Angular 4

## [v1.3.0] 2017-08-23
### skipped for sync with Angular 4 version convention

## [1.2.0] - 2017-04-05
### Added
- added Upgrade to PRO page
- update package
- made sidebar dynamic

## [1.1.1] - 2017-03-21
### Added
- added "@types/core-js": "0.9.35" in package

## [1.1.0] - 2017-03-20
### small fix

## [1.0.0] - 2017-01-30
### initial Release
