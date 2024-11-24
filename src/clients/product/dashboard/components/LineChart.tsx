import React from 'react';
import { Line } from '@ant-design/charts';

const LineChart: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond | circule',
    },
    tooltip: {
      formatter: (data: any) => {
        return {
          name: '',
          value: data.value,
        };
      },
      customContent: (name: any, data: any[]) =>
        `<div>${data?.map((item: { name: any; value: any; }) => {
          return `<div class="tooltip-chart" >
              <span class="tooltip-item-name">${item?.name}</span>
              <span class="tooltip-item-value">${item?.value}</span>
            </div>`;
        })}</div>`,
      showMarkers: true,
      showContent: true,
      position: 'right | left',
      showCrosshairs: true,
    },
  };
  return <Line {...config} />;
};

export default LineChart;