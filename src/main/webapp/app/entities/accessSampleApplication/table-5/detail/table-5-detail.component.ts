import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable5 } from '../table-5.model';

@Component({
  standalone: true,
  selector: 'jhi-table-5-detail',
  templateUrl: './table-5-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table5DetailComponent {
  table5 = input<ITable5 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
