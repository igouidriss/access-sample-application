import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable2 } from '../table-2.model';
import { Table2Service } from '../service/table-2.service';

@Component({
  standalone: true,
  templateUrl: './table-2-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table2DeleteDialogComponent {
  table2?: ITable2;

  protected table2Service = inject(Table2Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table2Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
