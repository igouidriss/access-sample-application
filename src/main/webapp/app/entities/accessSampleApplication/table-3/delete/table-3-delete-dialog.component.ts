import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable3 } from '../table-3.model';
import { Table3Service } from '../service/table-3.service';

@Component({
  standalone: true,
  templateUrl: './table-3-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table3DeleteDialogComponent {
  table3?: ITable3;

  protected table3Service = inject(Table3Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table3Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
