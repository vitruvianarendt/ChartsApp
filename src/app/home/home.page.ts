import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

let xAxisData: string[] = [];
xAxisData.push('QRS Beat Types (1963)');
xAxisData.push('Rythm Episodes (29 min)');
let dataset1_1_bar = [];
let dataset1_2_bar = [];
let dataset1_1_pie = [];
let dataset1_2_pie = [];
let usedDataset: any;
let usedDataset1: any;
let dataset1_1 = [
  { value: 10.2, name: 'V' },
  { value: 6.5, name: 'A' },
  { value: 73.3, name: 'N' },
  { value: 10.2, name: 'Other' }
]
let dataset1_2 = [
  { value: 33.5, name: 'AFIB' },
  { value: 21.6, name: 'T' },
  { value: 1.3, name: 'NOD' },
  { value: 0.1, name: 'SVTA' },
  { value: 43.5, name: 'N' }
]
let dataset2_1 = [
  { value: 20, name: 'VTest' },
  { value: 30, name: 'ATest' },
  { value: 10, name: 'NTest' },
  { value: 40, name: 'Test' }
]
let dataset2_2 = [
  { value: 75, name: 'AFIBTest' },
  { value: 5, name: 'Test' },
  { value: 10, name: 'NODTest' },
  { value: 5, name: 'SVTATest' },
  { value: 5, name: 'NTest' }
]
let dataset3_1 = [
  { value: 5, name: 'Data3A' },
  { value: 5, name: 'Data3B' },
  { value: 5, name: 'Data3C' },
  { value: 85, name: 'Data3D' }
]
let dataset3_2 = [
  { value: 10, name: 'Data3A' },
  { value: 65, name: 'Data3A' },
  { value: 10, name: 'NODTest3' },
  { value: 5, name: 'SVTATest3' },
  { value: 15, name: 'NTest3' }
]

usedDataset = dataset1_1;
usedDataset1 = dataset1_2;
dataset1_1_pie = dataset1_1;
dataset1_2_pie = dataset1_2;

Object.keys(usedDataset).forEach(key => {
  {
    dataset1_1_bar.push({
      name: usedDataset[key].name,
      type: 'bar',
      stack: 'one',
      label: {
        show: true
      },
      data: [usedDataset[key].value]
    })
  }
})

Object.keys(usedDataset1).forEach(key => {
  {
    dataset1_2_bar.push({
      name: usedDataset1[key].name,
      type: 'bar',
      stack: 'one',
      label: {
        show: true
      },
      data: [usedDataset1[key].value]
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

  datasets: string[] = ["Dataset 1", "Dataset 2", "Dataset 3"];
  selectedRadioItem: any = "bar";
  selectedDataset: any = "Dataset 1";

  radioSelect(event: any) {
    //localStorage.setItem("type", event.target.value);
    this.selectedRadioItem = event.target.value;
  }

  datasetSelect(event: any) {
    //localStorage.setItem("dataset", event.target.value);
    this.selectedDataset = event.target.value;
    dataset1_1_bar = [];
    dataset1_2_bar = [];
    if (event.target.value === "Dataset 1") {
      usedDataset = dataset1_1;
      usedDataset1 = dataset1_2;
      dataset1_1_pie = dataset1_1;
      dataset1_2_pie = dataset1_2;
      console.log("one")
    } else if (event.target.value === "Dataset 2") {
      usedDataset = dataset2_1;
      usedDataset1 = dataset2_2;
      dataset1_1_pie = dataset2_1;
      dataset1_2_pie = dataset2_2;
      console.log("two")

    } else {
      usedDataset = dataset3_1;
      usedDataset1 = dataset3_2;
      dataset1_1_pie = dataset3_1;
      dataset1_2_pie = dataset3_2;
    }
    Object.keys(usedDataset).forEach(key => {
      {
        dataset1_1_bar.push({
          name: usedDataset[key].name,
          type: 'bar',
          stack: 'one',
          label: {
            show: true
          },
          data: [usedDataset[key].value]
        })
      }
    })
    console.log(dataset1_1_bar)

    Object.keys(usedDataset1).forEach(key => {
      {
        dataset1_2_bar.push({
          name: usedDataset1[key].name,
          type: 'bar',
          stack: 'one',
          label: {
            show: true
          },
          data: [usedDataset1[key].value]
        })
      }
    })

    //Bar Charts
    this.barChart1 = {
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
      series: dataset1_1_bar
    };
    this.barChart2 = {
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
      series: dataset1_2_bar
    };

    // Pie Charts
    this.pieChart1 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: dataset1_1_pie
        }
      ]
    }

    this.pieChart2 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: dataset1_2_pie
        }
      ]
    }
    dataset1_1_bar = [];
    dataset1_2_bar = [];
  }

  labelOptionAxis = {
    show: true,
    fontSize: 15,
    rich: {
      name: {}
    }
  }

  //Bar Charts Init
  barChart1: EChartsOption = {
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
    series: dataset1_1_bar
  };

  barChart2: EChartsOption = {
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
    series: dataset1_2_bar
  };

  // Pie Charts Init
  pieChart1: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: dataset1_1_pie
      }
    ]
  }

  pieChart2: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: dataset1_2_pie
      }
    ]
  }
}