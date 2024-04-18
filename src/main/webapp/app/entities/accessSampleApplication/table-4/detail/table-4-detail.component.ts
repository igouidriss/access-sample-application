import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable4 } from '../table-4.model';

@Component({
  standalone: true,
  selector: 'jhi-table-4-detail',
  templateUrl: './table-4-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table4DetailComponent {
  table4 = input<ITable4 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
