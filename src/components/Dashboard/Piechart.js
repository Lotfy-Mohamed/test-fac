'use client'
// Import Chart From Chart Libarary
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import Pie Chart (Circle Chart) from React Chartjs 2 
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

// Strat Piechart Function
export default function Piechart() {

    // Set The Data For Pie Chart
    const data = {
        // Add Labels For Pie Chart
        labels: ['لبن ', 'زبادى', 'جبنة'],
        //Set Datasets For Pie Chart
        // Label will show When Hover On The Chart
        datasets: [
            {
                label: 'من المنتجات%',
                data: [40,30,30],
                // Set Background Color For Each Label
                backgroundColor: [
                    '#0075A4',
                    '#72ADCF',
                    '#BFE8FF',
                ],
                // Set Border Color For Each Label
                // borderColor: [
                //     'rgba(119, 93, 166, 1)',
                //     'rgba(69, 143, 154, 1)',
                //     'rgba(255, 177, 183, 1)',
                // ],
                //Set Border Width For Circle Chart
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
    {/* Pie Chart Component */}
    <div className="pie-graph">
                {/* Import Container From Bootstrap */}
                <div className="container">
                    <section>
                        {/* Section Title */}
                        <h3 className='title'>المنتجات الاكثر مبيعا</h3>
                        {/* Section For Pie Chart */}
                        <div className='graph-section'>
                            {/*Add Pie Chart with Data*/}
                            <Pie data={data} />
                        </div>
                    </section>
                </div>
            </div> 
        </>
    )

}