import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable2 } from '../table-2.model';

@Component({
  standalone: true,
  selector: 'jhi-table-2-detail',
  templateUrl: './table-2-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table2DetailComponent {
  table2 = input<ITable2 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
