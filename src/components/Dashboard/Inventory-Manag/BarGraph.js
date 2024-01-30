"use client"
// Imports Bar Chart From React Chartjs 2 Library
import { Bar } from 'react-chartjs-2';
// Imports Chart From Chartjs Library
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
// Inserting Chartjs Defaults Style (Font Size, Font Family)
Chart.defaults.font.size = 15;
Chart.defaults.font.weight = 'bold'
Chart.defaults.font.family = 'Cairo';

// Start Supplygraph Component
export default function BarGraph() {

    // Data For Bar Chart
    const data = {
        // Labels For Bar Chart
        labels: ['لبن', 'بيض', 'زبادى',
            'جبنة', 'لانشون', 'تركى مدخن',
            'صلصة', 'تونة', 'سمنة', 'كاتشب', "مايونيز", 'خردل'],

        // Datasets For Bar Chart (Data, Background Color, Border Color)
        datasets: [
            {
                label: 'المخزون الكلى',
                data: [300, 360, 260, 320, 280, 340, 300, 380, 200, 280, 320, 320],
                fill: false,
                backgroundColor: 'rgba(207, 146, 90, 1)',
                borderColor: 'rgba(207, 146, 90, 1)',
            },
            {
                label: 'المخزون الحالى',
                data: [240, 280, 320, 200, 350, 250, 200, 300, 340, 200, 360, 240],
                fill: false,
                backgroundColor: 'rgba(124, 173, 110, 1)',
                borderColor: 'rgba(124, 173, 110, 1)',
                fontSize: 124,
            }
        ]
    }

    const options = {
        maintainAspectRatio: false, // Set to false to allow manual control of the chart size
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        responsive: true,
        height: 350, // Set the desired height here
    };



    return (
        <>
            {/* Supplygraph Component */}
            <div className="supply-graph">
                {/* Import cONTAINER From Bootstrap */}
                <div className="container">
                    <section className='wrap-box-graph'>
                        {/* Section Title */}
                        <div className='title-box-graph'>
                            <h3 className='title'>المخزون</h3>
                            <button className='btn btn-primary btn-show'>عرض التقارير</button>
                        </div>
                        <div className='graph-section'>
                            {/*Add Bar Chart with Data*/}
                            <Bar data={data} options={options}/>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}