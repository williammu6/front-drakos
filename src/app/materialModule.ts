import { NgModule } from "@angular/core";
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

var MATERIAL_IMPORTS = [ 
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule
];

@NgModule({
    imports: MATERIAL_IMPORTS,
    exports: MATERIAL_IMPORTS
})

export class MaterialModule {}