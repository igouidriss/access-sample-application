import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable4 } from '../table-4.model';
import { Table4Service } from '../service/table-4.service';

@Component({
  standalone: true,
  templateUrl: './table-4-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table4DeleteDialogComponent {
  table4?: ITable4;

  protected table4Service = inject(Table4Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table4Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
