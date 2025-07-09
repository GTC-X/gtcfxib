import React from 'react'

const LeaderBoard = () => {
  return (
    <section className='container py-8'>
        <h4 className='font-[600] md:text-[2rem] text-primary text-center'>Leadership Board</h4>
        <p className='text-center text-primary text-[16px] font-[400] pt-4'>TOP 10 Winners of Live Account Trading Competition 2023</p>
        <table className='w-full my-8 leaderboard_table border-separate'>
            <thead className='text-center'>
                <tr className='px-2 py-2'>
                <th>RANK</th>
                <th>Winning Amount</th>
                <th>Name</th>
                <th>Account Number</th>
                <th>Return Rate</th>
                </tr>
            </thead>
            <tbody className='text-center'>
            <tr>
                <td>1st Prize</td>
                <td>20,000$</td>
                <td>Umair K</td>
                <td>***561</td>
                <td>2672.53%</td>
            </tr>
            <tr>
                <td>2nd Prize</td>
                <td>10,000$</td>
                <td>Jameel C</td>
                <td>***713</td>
                <td>1321.81%</td>
            </tr>
            <tr>
                <td>3rd Prize</td>
                <td>6000$</td>
                <td>Huiqian.G</td>
                <td>***438</td>
                <td>1190.67%</td>
            </tr>
            <tr>
                <td>4th Prize</td>
                <td>3000$</td>
                <td>Zhengwei.L</td>
                <td>***843</td>
                <td>454.48%</td>
            </tr>
            <tr>
                <td>5th Prize</td>
                <td>1000$</td>
                <td>Raj T</td>
                <td>***562</td>
                <td>448.72%</td>
            </tr>
            <tr>
                <td>6th Prize</td>
                <td>1000$</td>
                <td>Balram.R</td>
                <td>***448</td>
                <td>419.96%</td>
            </tr>
            <tr>
                <td>7th Prize</td>
                <td>1000$</td>
                <td>Sachin P</td>
                <td>***047</td>
                <td>119.95%</td>
            </tr>
            <tr>
                <td>8th Prize</td>
                <td>1000$</td>
                <td>Komal D</td>
                <td>***415</td>
                <td>115.51%</td>
            </tr>
            <tr>
                <td>9th Prize</td>
                <td>1000$</td>
                <td>Jing. N</td>
                <td>***480</td>
                <td>98.33%</td>
            </tr>
            <tr>
                <td>10th Prize</td>
                <td>1000$</td>
                <td>Yan.P</td>
                <td>***301</td>
                <td>25.75%</td>
            </tr>
            </tbody>
        </table>
    </section>

  )
}

export default LeaderBoard;