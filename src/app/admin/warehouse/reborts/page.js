'use client'

// Import usaState And useEffect From React
import { useState, useEffect } from "react"

// Import Chart.js From Chart.js Library
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Import Bar From React-Chartjs-2 Library
import { Bar } from 'react-chartjs-2';

// Create The Chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);





export default function Reborts() {

    // Create State For Handle Active Class
    const [active, setActive] = useState(1)

    // Create State For Handle Data To Send To Chart (Fisrt Data , Second Data)
    // First Data Is All Data => المخزون الكلى
    // Second Data Is Part Data => المخزون الحالى
    const [firstData, setFirstData] = useState([])
    const [secondData, setSecondData] = useState([])

    // Create UseEffect For Get Data From Data Array And Set It To First Data And Second Data
    // When Active Change (When Click On Item)
    useEffect(() => {
        const getActive = data.filter((item) => item.id == active)
        setFirstData(getActive[0].allArr)
        setSecondData(getActive[0].partArr)
    }, [active])

    // Create labels For Chart
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

    // Create Data For Chart
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'المخزون الحالى',
                data: firstData,
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'المخزون الكلى',
                data:  secondData,
                backgroundColor: 'rgb(75, 192, 192)',
            },
        ],
    };


    // Create Options For Chart
    const options = {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 19,
                        weight : "bold",
                    },
                    // fontWight: bold,
                }
            }
        },
        labels: {
            font: {
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


    // Create Data For Table (Random Data)
    const [data, setData] = useState([
        {
            id: 1,
            name: "مجهز 1",
            status: "150",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 2,
            name: "مجهز 2",
            status: "340",
            allArr: [51, 60, 80, 200, 90, 110, 130, 232, 290, 85, 123, 71],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 3,
            name: "مجهز 3",
            status: "400",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 4,
            name: "مجهز 4",
            status: "754",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 5,
            name: "مجهز 5",
            status: "754",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [80, 70, 240, 50, 300, 151, 56, 10, 40, 50, 60, 70]
        },
        {
            id: 6,
            name: "مجهز 6",
            status: "754",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 7,
            name: "مجهز 7",
            status: "754",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 8,
            name: "مجهز 8",
            status: "754",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 9,
            name: "مجهز 9",
            status: "754",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
    ])


    // Create State For Handle Search Query
    const [searchQuery, setSearchQuery] = useState("")

    // Create Function For Handle Search Query
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="container">
            <div className="reborts-page" dir="rtl">
                <div className="title">
                    <h3>تقارير المخزون</h3>
                </div>
                <div className="search-section">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="ابحث هنا" onChange={(e) => handleChange(e)}/>
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
                                        <div className={`item ${active == item.id ? "active" : null}`}
                                            key={item.id}
                                            style={{display: 
                                                item.id.toString().includes(searchQuery.toString()) 
                                                || item.name.includes(searchQuery.toString())
                                                || item.status.includes(searchQuery.toString())
                                                ? "flex" : "none"}}
                                            onClick={() => setActive(item.id)}
                                            allArr={item.allArr}
                                            partArr={item.partArr}
                                        >
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