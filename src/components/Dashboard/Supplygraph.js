"use client"
// Imports Bar Chart From React Chartjs 2 Library
import {Bar} from 'react-chartjs-2';
// Imports Chart From Chartjs Library
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
// Inserting Chartjs Defaults Style (Font Size, Font Family)
Chart.defaults.font.size = 20;
Chart.defaults.font.family = 'Cairo';

// Start Supplygraph Component
export default function Supplygraph() {

    // Data For Bar Chart
    const data = {
        // Labels For Bar Chart
        labels: ['لبن', 'بيض', 'زبادى',
                'جبنة', 'لانشون', 'تركى مدخن',
                'صلصة' ,'تونة' ,'سمنة','كاتشب' , "مايونيز" , 'خردل'],
        
        // Datasets For Bar Chart (Data, Background Color, Border Color)
        datasets:[
            {
                label:'المخزون الكلى',
                data:[400,360,260,320,280,340,400,380,200,280,320,320],
                fill:false,
                backgroundColor:'#1891C3',
                borderColor:'rgba(255, 99, 132, 0.2)',
            },
            {
                label:'المخزون الحالى',
                data:[240,280,320,200,350,250,200,300,340,200,360,240],
                fill:false,
                backgroundColor:'#00589C',
                borderColor:'rgba(54, 162, 235, 0.2)',
                fontSize: 124,
            }
        ]
    }



    return(
        <>  
            {/* Supplygraph Component */}
            <div className="supply-graph">
                {/* Import cONTAINER From Bootstrap */}
                <div className="container">
                    <section>
                        {/* Section Title */}
                        <h3 className='title'>المخزون</h3>
                        <div className='graph-section'>
                            {/*Add Bar Chart with Data*/}
                            <Bar data={data}/>
                        </div>
                    </section>
                </div>
            </div> 
        </>
    )
}