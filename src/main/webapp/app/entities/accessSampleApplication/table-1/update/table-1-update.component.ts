import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable1 } from '../table-1.model';
import { Table1Service } from '../service/table-1.service';
import { Table1FormService, Table1FormGroup } from './table-1-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-1-update',
  templateUrl: './table-1-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table1UpdateComponent implements OnInit {
  isSaving = false;
  table1: ITable1 | null = null;

  protected table1Service = inject(Table1Service);
  protected table1FormService = inject(Table1FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table1FormGroup = this.table1FormService.createTable1FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table1 }) => {
      this.table1 = table1;
      if (table1) {
        this.updateForm(table1);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table1 = this.table1FormService.getTable1(this.editForm);
    if (table1.id !== null) {
      this.subscribeToSaveResponse(this.table1Service.update(table1));
    } else {
      this.subscribeToSaveResponse(this.table1Service.create(table1));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable1>>): void {
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

  protected updateForm(table1: ITable1): void {
    this.table1 = table1;
    this.table1FormService.resetForm(this.editForm, table1);
  }
}
