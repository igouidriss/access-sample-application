import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable1 } from '../table-1.model';

@Component({
  standalone: true,
  selector: 'jhi-table-1-detail',
  templateUrl: './table-1-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table1DetailComponent {
  table1 = input<ITable1 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
