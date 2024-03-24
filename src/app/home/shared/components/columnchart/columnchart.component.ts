import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.scss']
})
export class ColumnchartComponent implements OnInit{
  chartData: any[] = [
    { name: 'Income', data: [15000, 18000, 20000, 22000, 25000, 23000, 22000, 21000, 20000, 19000, 18000, 17000] },
    { name: 'Expenses', data: [10000, 12000, 13000, 14000, 15000, 14000, 13000, 12000, 11000, 10000, 9000, 8000] }
  ];
  chartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  checkedItems: Set<string> = new Set(['Income', 'Expenses']);
  filteredChartData!:any[];
  constructor() { }

  ngOnInit(): void {
    this.updateFilteredChartData();
  }

  toggleItem(item: string): void {
    if (this.checkedItems.has(item)) {
      this.checkedItems.delete(item);
    } else {
      this.checkedItems.add(item);
    }
    this.updateFilteredChartData();
  }

  isItemChecked(item: string): boolean {
    return this.checkedItems.has(item);
  }

  private updateFilteredChartData(): void {
    this.filteredChartData = this.chartData.filter(item => this.checkedItems.has(item.name));
  }
}
