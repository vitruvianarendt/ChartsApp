import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

let xAxisData: string[] = [];
xAxisData.push('QRS Beat Types (1963)');
xAxisData.push('Rythm Episodes (29 min)');
let dataset1 = [];
let dataset2 = [];
let jsonvar1 = {
  "values": {
    V: [10.2],
    A: [6.5],
    N: [73.3],
    Other: [10.2]
  }
}
let jsonvar2 = {
  "values": {
    AFIB: [33.5],
    T: [21.6],
    NOD: [1.3],
    SVTA: [0.1],
    N: [43.5]
  }
}

Object.keys(jsonvar1.values).forEach(key => {
  {
    dataset1.push({
      name: key,
      type: 'bar',
      stack: 'one',
      label: {
        show: true
      },
      data: jsonvar1.values[key]
    })
  }
})

Object.keys(jsonvar2.values).forEach(key => {
  {
    dataset2.push({
      name: key,
      type: 'bar',
      stack: 'one',
      label: {
        show: true
      },
      data: jsonvar2.values[key]
    })
  }
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor() { }

  labelOptionAxis = {
    show: true,
    fontSize: 15,
    rich: {
      name: {}
    }
  }
  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {},
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      position: 'left',
      axisLabel: {
        formatter: '{value} %'
      }
    },
    xAxis: {
      type: 'category',
      data: [xAxisData[0]],
      axisLabel: this.labelOptionAxis,
    },
    series: dataset1
  };

  options1: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {},
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      position: 'left',
      axisLabel: {
        formatter: '{value} %'
      }
    },
    xAxis: {
      type: 'category',
      data: [xAxisData[1]],
      axisLabel: this.labelOptionAxis,
    },
    series: dataset2
  };

  datasets: string[] = ["Dataset 1", "Dataset 2", "Dataset 3"];

}