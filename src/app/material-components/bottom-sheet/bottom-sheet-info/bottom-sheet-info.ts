import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'bottom-sheet-info',
  templateUrl: './bottom-sheet-info.html',
  styleUrls: ['./bottom-sheet-info.scss']
})
export class BottomSheetInfo implements OnInit {

  constructor(
      private bottomSheetRef: MatBottomSheetRef<BottomSheetInfo>,
      @Inject (MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
