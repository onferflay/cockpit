import {MatButtonModule, MatCheckboxModule} from '@angular/material'; 
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,DragDropModule],
    exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,DragDropModule],
  })
  export class MaterialModule { }