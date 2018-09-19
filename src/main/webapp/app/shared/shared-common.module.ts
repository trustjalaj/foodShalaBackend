import { NgModule } from '@angular/core';

import { FoodShalaBackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FoodShalaBackendSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FoodShalaBackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FoodShalaBackendSharedCommonModule {}
