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
                backgroundColor: 'rgba(206, 194, 176, 1)',
            },
            {
                label: 'المخزون الكلى',
                data:  secondData,
                backgroundColor: 'rgba(207, 90, 90, 1)',
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
                        size: 15,
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


    // Data Array For Table (Random Data For Test)
    // Create State For Data Array
    // The Data Array Is The Main Array That Will Be Used To Render The Items
    // Render The Items By Mapping The Data Array
    const [data, setData] = useState([
        {
            id: 1,
            name: "لبن",
            status: "150",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 2,
            name: "بيض",
            status: "200",
            allArr: [51, 60, 80, 200, 90, 110, 130, 232, 290, 85, 123, 71],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 3,
            name: "لانشون",
            status: "400",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 4,
            name: "جبنة",
            status: "754",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 5,
            name: "جبنة رومى",
            status: "600",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [80, 70, 240, 50, 300, 151, 56, 10, 40, 50, 60, 70]
        },
        {
            id: 6,
            name: "زبادى",
            status: "380",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 7,
            name: "بيض",
            status: "190",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 8,
            name: "لبن",
            status: "260",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
        {
            id: 9,
            name: "لانشون",
            status: "300",
            allArr: [10, 30, 50, 70, 90, 110, 130, 232, 123, 123, 123, 123],
            partArr: [10, 30, 50, 70, 90, 110, 130, 10, 40, 50, 60, 70]
        },
    ])


    //! -----------Search Section------------------

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
                        {/* Handle Search Query If Change The Value Of Input Update The State 
                         */}
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
                                    {/* Map The Data Array To Render The Items */}
                                    {data.map((item) =>
                                    (
                                        <div className={`item ${active == item.id ? "active" : null}`}
                                            key={item.id}
                                            style={{display: 
                                                // If The Search Query Is Empty Show All Items
                                                // If The Search Query Is Not Empty Show The Items That Include The Search Query
                                                item.id.toString().includes(searchQuery.toString()) 
                                                || item.name.includes(searchQuery.toString())
                                                || item.status.includes(searchQuery.toString())
                                                ? "flex" : "none"}}
                                                // Handle Active Class
                                            onClick={() => setActive(item.id)}
                                            // Send Data To Chart (Fisrt Data , Second Data) => (All Data , Part Data)
                                            allArr={item.allArr}
                                            partArr={item.partArr}
                                        >
                                            <div className="item-name">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="item-status">
                                                <p>{item.status} كيلو</p>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="left-section">
                                    {/* Render The Chart */}
                                    <Bar options={options} data={dataChart} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}