
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const CategoryPieChart = () => {
  const categoryData = [
    { name: 'Banarasi', value: 25, color: '#8884d8' },
    { name: 'Kanjeevaram', value: 18, color: '#82ca9d' },
    { name: 'Cotton', value: 32, color: '#ffc658' },
    { name: 'Silk', value: 28, color: '#ff7c7c' },
    { name: 'Partywear', value: 15, color: '#8dd1e1' },
    { name: 'Bridal', value: 12, color: '#d084d0' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CategoryPieChart;
