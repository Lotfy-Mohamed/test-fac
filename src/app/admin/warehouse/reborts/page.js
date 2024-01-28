'use client'

import { useState } from "react"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: true,
        },
    },
    labels:{
        font:{
            size: '30px',
        }
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = [
    'يناير',
    'فبراير',
    'مارس',
    'إبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];
export const dataChart = {
    labels,
    datasets: [
        {
            label: 'المخزون الحالى',
            data: [10, 30, 50, 70, 90, 110, 130 , 232 , 123 , 123 , 123 , 123],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'المخزون الكلى',
            data: [10, 30, 50, 70, 90, 110, 130 , 10 , 40 , 50 , 60 , 70],
            backgroundColor: 'rgb(75, 192, 192)',
        },
    ],
};


export default function Reborts() {

    const [data, setData] = useState([
        {
            id: 1,
            name: "مجهز 1",
            status: "150",
        },
        {
            id: 2,
            name: "مجهز 2",
            status: "340",
        },
        {
            id: 3,
            name: "مجهز 3",
            status: "400",
        },
        {
            id: 4,
            name: "مجهز 4",
            status: "754",
        },
        {
            id: 5,
            name: "مجهز 4",
            status: "754",
        },
        {
            id: 6,
            name: "مجهز 4",
            status: "754",
        },
        {
            id: 7,
            name: "مجهز 4",
            status: "754",
        },
    ])

    console.log(data)

    return (
        <div className="container">
            <div className="reborts-page" dir="rtl">
                <div className="title">
                    <h3>تقارير المخزون</h3>
                </div>
                <div className="search-section">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="ابحث هنا" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <label for="floatingInput">ابحث هنا</label>
                    </div>
                </div>
                <div className="table-rebort-data">
                    <div className="head-box">
                        <div className="row">
                            <div className="col-4">
                                <div className="data-title">
                                    <p className="text">المخزون</p>
                                    <p className="text">الحالة</p>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="chart-title">
                                    <p>التغيرات على مر الزمن</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-box">
                        <div className="row">
                            <div className="col-4">
                                <div className="right-section">
                                    {data.map((item) =>
                                    // console.log(item)
                                    (
                                        <div className={`item active`} key={item.id}>
                                            <div className="item-name">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="item-status">
                                                <p>{item.status}</p>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="left-section">
                                    <Bar options={options} data={dataChart} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                {/* <td>Otto</td> */}
                    {/* </tr>
                            <tr>
                                <th scope="row">2</th>
                                <th scope="row">2</th>
                                <td colSpan={3} rowSpan={3}>Jacob</td>
                            </tr>
                        </tbody> */}
                    {/* </table>  */}
                </div>
            </div>
        </div>
    )
}