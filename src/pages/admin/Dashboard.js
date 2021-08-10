import React, { useState, useEffect } from "react";
import Navbar from "../../components/admin/layout/sidebar/Navbar";
import { getCookie } from "../../cookies";
import { Pie } from "react-chartjs-2";
import "chart.piecelabel.js";

function Dashboard(props) {
  const [average, setAverage] = useState({});
  const [url, setUrl] = useState(`http://localhost:8000/api/customer/range/1`);
  const [labels, setLabels] = useState("Last Day");

  let token = getCookie("token");

  const getAverage = async (id) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    // console.log(result.data)
    setAverage(result);
    console.log(result);
  };

  const timeFrame = (val, label) => {

    let request = `http://localhost:8000/api/customer/range/${val}`
    setUrl(request);
    setLabels(label);
    
  };

  useEffect(() => {
    getAverage();
  }, [url]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ marginLeft: "20%" }}>
            <div style={{ width: "300px", height: "100px" }}>
              <Pie
                data={{
                  labels: ["Total Customers", `percentage ${labels}`],
                  datasets: [
                    {
                      label: labels,
                      data: [100, (average.total/average.all_customers)*100],
                      backgroundColor: [
                        "#060b26",
                        " #1a83ff",
                        "rgb(255, 205, 86)",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
                options ={{
                    tooltips:{
                        callbacks:{
                            label:function(tooltipItem){
                                return ("%"+tooltipItem.value)
                            }
                        }
                    }
                }}
              ></Pie>
            </div>
          </div>
          
          <div
            className="col-3"
            style={{ marginLeft: "50%" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <input value="1" name="timeFrame" type="radio" id="1" onClick={(e) => timeFrame(e.target.value, 'Last Day')} />
              <label for="1">Last 24 hours</label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input value="7" name="timeFrame"  type="radio" id="2" onClick={(e) => timeFrame(e.target.value, 'Last Week')} />{" "}
              <label for="2">Last week</label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input value="30" name="timeFrame" type="radio" id="3" onClick={(e) => timeFrame(e.target.value, 'Last Month')} />
              <label for="3">Last month</label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input value="90" name="timeFrame" type="radio" id="4" onClick={(e) => timeFrame(e.target.value, 'Last 3 Months')} />
              <label for="4">Last 3 months</label>
            </div>
            
          </div>
          <div className="col-4 info-board">
            <label>Customers Overview</label>
            <ul>
              <li>Total customers in all time : <strong>{average.all_customers}</strong></li>
              <li>{labels} registered <strong>{average.total} customers </strong></li>
              <li>Average: <strong>{parseFloat(average.average).toFixed(2)} customer {average.time_frame}</strong></li>
              <li><strong>{parseFloat((average.total/average.all_customers)*100).toFixed(1)}% of your customers registered {labels}</strong></li>
              
            </ul>
              
                
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Dashboard;

