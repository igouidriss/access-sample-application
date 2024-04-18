import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable3 } from '../table-3.model';

@Component({
  standalone: true,
  selector: 'jhi-table-3-detail',
  templateUrl: './table-3-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table3DetailComponent {
  table3 = input<ITable3 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
