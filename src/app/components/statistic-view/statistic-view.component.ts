import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HighscoreService } from '../../services/highscore.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistic-view',
  templateUrl: './statistic-view.component.html',
  styleUrls: ['./statistic-view.component.css']
})
export class StatisticViewComponent implements OnInit {
  ctx: HTMLElement;
  myChart;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.ctx = document.getElementById("myChart");
    console.log(this.ctx);
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["won", "draw", "lost"],
        datasets: [{
          label: null,
          data: [60, 10, 30],
          backgroundColor: [
            '#0096888c',
            '#ff9800a8',
            '#8b0000a6'
          ],
          borderColor: [
            '#009688',
            'orange',
            'darkred'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function (value, index, values) {
                return value + '%';
              },
              fontSize: 20,
              fontColor: 'whitesmoke'
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 20,
              fontColor: 'whitesmoke'
            }
          }]
        }
      }
    });
    console.log(this.myChart);
  }
}
