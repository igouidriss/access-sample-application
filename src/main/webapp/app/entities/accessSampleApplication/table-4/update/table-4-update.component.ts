import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable4 } from '../table-4.model';
import { Table4Service } from '../service/table-4.service';
import { Table4FormService, Table4FormGroup } from './table-4-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-4-update',
  templateUrl: './table-4-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table4UpdateComponent implements OnInit {
  isSaving = false;
  table4: ITable4 | null = null;

  protected table4Service = inject(Table4Service);
  protected table4FormService = inject(Table4FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table4FormGroup = this.table4FormService.createTable4FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table4 }) => {
      this.table4 = table4;
      if (table4) {
        this.updateForm(table4);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table4 = this.table4FormService.getTable4(this.editForm);
    if (table4.id !== null) {
      this.subscribeToSaveResponse(this.table4Service.update(table4));
    } else {
      this.subscribeToSaveResponse(this.table4Service.create(table4));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable4>>): void {
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

  protected updateForm(table4: ITable4): void {
    this.table4 = table4;
    this.table4FormService.resetForm(this.editForm, table4);
  }
}
