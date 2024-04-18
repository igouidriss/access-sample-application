import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable3 } from '../table-3.model';
import { Table3Service } from '../service/table-3.service';
import { Table3FormService, Table3FormGroup } from './table-3-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-3-update',
  templateUrl: './table-3-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table3UpdateComponent implements OnInit {
  isSaving = false;
  table3: ITable3 | null = null;

  protected table3Service = inject(Table3Service);
  protected table3FormService = inject(Table3FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table3FormGroup = this.table3FormService.createTable3FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table3 }) => {
      this.table3 = table3;
      if (table3) {
        this.updateForm(table3);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table3 = this.table3FormService.getTable3(this.editForm);
    if (table3.id !== null) {
      this.subscribeToSaveResponse(this.table3Service.update(table3));
    } else {
      this.subscribeToSaveResponse(this.table3Service.create(table3));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable3>>): void {
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

  protected updateForm(table3: ITable3): void {
    this.table3 = table3;
    this.table3FormService.resetForm(this.editForm, table3);
  }
}
