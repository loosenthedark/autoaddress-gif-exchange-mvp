import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'autoaddress-gif-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss'],
})
export class GifSearchComponent {
  searchString: string = '';
  searchForm: FormGroup = this._formBuilder.nonNullable.group({
    searchString: '',
  });

  constructor(private _formBuilder: FormBuilder) {}

  onFormSubmit(): void {
    this.searchString = this.searchForm.value.searchString ?? '';
  }
}
