import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  checkboxItems = [
    { value: 'item1', label: 'Item 1', checked: false },
    { value: 'item2', label: 'Item 2', checked: false },
    { value: 'item3', label: 'Item 3', checked: false },
    { value: 'item4', label: 'Item 4', checked: false },
  ];

  submitted = false;
  selectedItems = this.checkboxItems
    .filter((item) => item.checked)
    .map((item) => item.value);

  onSubmit() {
    this.submitted = true;
  }

  checkValue(event: any) {
    const item = { value: event.target.name, checked: event.target.checked };
    const currentIndex = this.selectedItems.findIndex(
      (selectedItem) => selectedItem === item.value
    );
    if (item.checked) {
      if (currentIndex < 0) {
        this.selectedItems.push(item.value);
      }
    } else {
      if (currentIndex >= 0) {
        this.selectedItems = this.selectedItems
          .slice(0, currentIndex)
          .concat(
            this.selectedItems.slice(
              currentIndex + 1,
              this.selectedItems.length
            )
          );
      }
    }
  }
}
