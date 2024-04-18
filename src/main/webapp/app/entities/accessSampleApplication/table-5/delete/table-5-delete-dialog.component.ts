import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable5 } from '../table-5.model';
import { Table5Service } from '../service/table-5.service';

@Component({
  standalone: true,
  templateUrl: './table-5-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table5DeleteDialogComponent {
  table5?: ITable5;

  protected table5Service = inject(Table5Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table5Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
