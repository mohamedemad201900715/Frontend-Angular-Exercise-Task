import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.scss'],
})
export class areachartComponent implements OnInit {
  chartData: number[] = [10, 20, 30, 40,50,55,10,12,188,28,50,52]; // Only include the y-values
  chartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]; // Replace with your months
  selectedYear!: number;
  years: number[] = [2022, 2023, 2024]; // Adjust to your range

  chartOptions: any = {
    series: [
      {
        name: 'Number of Users ',
        data: this.chartData,
      },
    ],
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      },
    },
    xaxis: {
      categories: this.chartLabels,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['rgba(239, 180, 56, 1)'], // Set the same color for both area and line
    },
    dataLabels: {
      enabled: false,
      colors: ['rgba(239, 180, 56, 1)'],
    },
    yaxis: {
      show: false,
    },
    labels: {
      show: false,
      rotate: 0

    },
    legend: {
      show: true,
      position: 'top',
    },
    title: {
      text: 'Number of Users',
      align: 'left',
    },
  };

  constructor() {}

  ngOnInit(): void {
    // Set default selected year
    this.selectedYear = new Date().getFullYear();
  }

  // Method to handle year change
  onYearChange(): void {
    // Fetch data for the selected year and update the chart
    // You'll need to implement this logic to fetch data for the selected year
    // and update the chartData accordingly
    console.log('Selected Year:', this.selectedYear);
  }
}
