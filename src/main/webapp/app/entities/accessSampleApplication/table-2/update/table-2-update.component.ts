import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable2 } from '../table-2.model';
import { Table2Service } from '../service/table-2.service';
import { Table2FormService, Table2FormGroup } from './table-2-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-2-update',
  templateUrl: './table-2-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table2UpdateComponent implements OnInit {
  isSaving = false;
  table2: ITable2 | null = null;

  protected table2Service = inject(Table2Service);
  protected table2FormService = inject(Table2FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table2FormGroup = this.table2FormService.createTable2FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table2 }) => {
      this.table2 = table2;
      if (table2) {
        this.updateForm(table2);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table2 = this.table2FormService.getTable2(this.editForm);
    if (table2.id !== null) {
      this.subscribeToSaveResponse(this.table2Service.update(table2));
    } else {
      this.subscribeToSaveResponse(this.table2Service.create(table2));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable2>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(table2: ITable2): void {
    this.table2 = table2;
    this.table2FormService.resetForm(this.editForm, table2);
  }
}
