'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Card, CardContent, CardHeader, Typography, Box } from '@mui/material';

const PieChart = ({ skill }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                chartInstance.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        datasets: [{
                            data: skill.levelDistribution,
                            backgroundColor: [
                                '#FF6423', '#DC9328', '#C12B17', '#83251F', '#2A79F3',
                                '#679943', '#872EB3', '#4A828F', '#633CB7'
                            ],
                            borderWidth: 0,
                        }]
                    },
                    options: {
                        responsive: true,
                        cutout: '75%',
                        plugins: {
                            legend: {
                                // display : false,
                                position: 'bottom',
                                labels: {
                                    boxWidth: 12.5,
                                },
                            },
                            tooltip: {
                                callbacks: {
                                    label: (context) => {
                                        const label = context.label || '';
                                        const value = context.raw || 0;
                                        return `${label}: ${value}`;
                                    }
                                }
                            },
                            datalabels: {
                                color: '#000',
                                formatter: (value, context) => {
                                    return ` ${value}`; 
                                }
                            }
                        },
                    },
                    plugins: [ChartDataLabels],
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [skill.levelDistribution]);

    return (
        <Box sx={{  p:2,pb: 6, border : "1px solid #7B7B7B40" }} style={{borderRadius : "10px"}}>
            <Typography variant="h6" color="#25507B" style={{ padding: "5px 10px", backgroundColor: "#3572B01A", width: "max-content", borderRadius: "25px" }}>
                {skill.skillName}
            </Typography>
            <Box sx={{ pt: 2, display: "flex", justifyContent: "space-between", gap : 1 }}>
                <Box sx={{ mb: 2, p: 1, border: "1px solid #25507B", borderRadius: "10px", textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold" color="#25507B">{skill.accuracy}%</Typography>
                    <Typography variant="subtitle2" color="#7B7B7B">Average Accuracy</Typography>
                </Box>
                <Box sx={{ mb: 2, px: 2, py: 1, border: "1px solid #25507B", borderRadius: "10px", textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold" color="#25507B">{skill.totalSolved}</Typography>

                    <Typography variant="subtitle2" color="#7B7B7B">Total Ques. Solved</Typography>
                </Box>

            </Box>
            <Typography variant="subtitle2" style={{ textAlign: "center", marginBottom: "10px" }}>Number of students in each level.</Typography>
            <Box sx={{ position: 'relative', pt: '80%', pb : 2 , display : "flex", flexDirection : "column"}}>
                    <canvas ref={chartRef} style={{ position: 'absolute', top:0, left: 0, width: '200px', height: '200px'}}></canvas>

                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography variant="h5" color="#25507B" fontWeight="bold">{skill.totalStudents}</Typography>
                    <Typography variant="body2" color="#25507B">Total Students</Typography>
                </Box>
            </Box>
            {/* <Box>
                <Typography variant="subtitle2">
                    Skill Levels
                </Typography>

            </Box> */}
        </Box>
    );
};

export default PieChart;
