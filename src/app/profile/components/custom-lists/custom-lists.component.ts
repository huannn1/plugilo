import { Component, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { CustomList } from '../../models/custom-list.model';

@Component({
  selector: 'app-custom-lists',
  templateUrl: './custom-lists.component.html',
  styleUrls: ['./custom-lists.component.scss']
})
export class CustomListsComponent implements OnInit {
  customLists$: Observable<CustomList[]>;

  constructor(private store: Store<fromStore.IProfileState>) { 

  }

  ngOnInit() {
    // this.store.select<any>(fromStore.getAllCustomLists).subscribe(state => {
    //   debugger;
    //   // this.customLists = state;
    // })

    this.customLists$ = this.store.select(fromStore.getAllCustomLists);
    this.store.dispatch(new fromStore.LoadCustomLists())
  }
}
