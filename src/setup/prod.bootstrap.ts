import {enableProdMode} from "@angular/core";
import {platformBrowser} from "@angular/platform-browser";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/share";
import "rxjs/add/operator/take";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/debounceTime";
import "rxjs/operator/finally";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/publishReplay";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/startWith";
import "bootstrap";
import {ProdModuleNgFactory} from "../../out_aot_ts/src/setup/prod.module.ngfactory";

enableProdMode();
platformBrowser().bootstrapModuleFactory(ProdModuleNgFactory);
