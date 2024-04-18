import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable1 } from '../table-1.model';
import { Table1Service } from '../service/table-1.service';

@Component({
  standalone: true,
  templateUrl: './table-1-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table1DeleteDialogComponent {
  table1?: ITable1;

  protected table1Service = inject(Table1Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table1Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
