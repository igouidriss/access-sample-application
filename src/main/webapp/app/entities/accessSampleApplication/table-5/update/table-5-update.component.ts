import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable5 } from '../table-5.model';
import { Table5Service } from '../service/table-5.service';
import { Table5FormService, Table5FormGroup } from './table-5-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-5-update',
  templateUrl: './table-5-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table5UpdateComponent implements OnInit {
  isSaving = false;
  table5: ITable5 | null = null;

  protected table5Service = inject(Table5Service);
  protected table5FormService = inject(Table5FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table5FormGroup = this.table5FormService.createTable5FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table5 }) => {
      this.table5 = table5;
      if (table5) {
        this.updateForm(table5);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table5 = this.table5FormService.getTable5(this.editForm);
    if (table5.id !== null) {
      this.subscribeToSaveResponse(this.table5Service.update(table5));
    } else {
      this.subscribeToSaveResponse(this.table5Service.create(table5));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable5>>): void {
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

  protected updateForm(table5: ITable5): void {
    this.table5 = table5;
    this.table5FormService.resetForm(this.editForm, table5);
  }
}
