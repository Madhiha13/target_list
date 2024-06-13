import React, { useState, useEffect } from 'react';


import {CircleSvg,UpstreamEmission,Vector1,Vector2,Vector3,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg, AddIcon } from "../assets";
const FinalList= () => {
  
  

    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);



  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDataArray(data);
            setFilteredData(data); // Initially, display all data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


    const yearRanges = [
        '2024-2023',
        '2023-2022',
        '2022-2021',
        '2021-2020',
        '2020-2019'
        

      ];
      const handleYearChange = (event) => {
        const selected = event.target.value;
        setSelectedYear(selected);

        if (selected) {
            // Filter data based on the selected year
            const filtered = dataArray.filter(item => item.reportingYear === selected);
            setFilteredData(filtered);
        } else {
            // If no year is selected, show all data
            setFilteredData(dataArray);
        }
    };

    
    
  return (
    <div className="mobile-combustion-list">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="white-variation-1-wrapper">
          <img
            className="white-variation-1"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper">
          <div className="frame-parent">
            <div className="data-management-3-wrapper">
              <img
                className="data-management-3-icon"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group">
              <div className="data-management-2-wrapper">
                <img
                  className="data-management-2-icon"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input co2"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper">
          <img
            className="data-management-4-icon"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner">
        <section className="frame-container">
          <div className="frame-div">
          <div className="target-page-list-inner" />
          <b className="set-target1">SET TARGET</b>
          <img className="add-4-icon2" alt="" src={AddIcon}/>
          <div className="target-page-list-child5" />
            <div className="target-page-list-child6" />
          <div className="target-page-list-child7" />
          <img className="target-page-list-child2" alt="" src={Vector1} />
          <img className="target-page-list-child3" alt="" src={Vector2} />
          <img className="target-page-list-child4" alt="" src={Vector3}/>
            <div className="left-arrow-in-circular-button-parent">
              <img
                className="left-arrow-in-circular-button-icon"
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1">
                <div className="frame-wrapper1">
                  <div className="frame-parent2">
                    <div className="reporting-year-wrapper">
                      <div className="reporting-year">Reporting Year</div>
                    </div>
                    <div className="dropdown-box">
                      <div className="">
                      
                        <div className="menu-label-wrapper">
                        
                          <div className="menu-label">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select>
                            
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div className="ellipse-parent">
                  <div className="frame-inner" />
                  <img
                    className="user-5-1"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="mobile-combustion-wrapper">
              <h1 className="mobile-combustion">TARGETS</h1>
            </div>
            <div className="mobile-combustion-view-data-child6" />
            <img className="cart-12-icon" alt="" src={UpstreamEmission}/>
           
            
            <footer className="frame-footer">
              <div className="frame-parent4">
                <div className="status-parent">
                
                  <b className="reporting-year1">BASE YEAR</b>
                  <b className="responsibility">TARGET YEAR</b>
                  <b className="facility">COVERAGE</b>
                  <b className="emission-type">TYPE OF TARGET</b>
                  <b className="fuel">% REDUCTION</b>
                  <b className="quantity">BASE EMISSION</b>
                 <b className="units">TARGET EMISSION</b>
                 
                  <div className={`rectangle-group-container }`}>
                  <div>
                  {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group">
                    <div className="rectangle-div" />
                    <div className="frame-wrapper2">
                      <div className="frame-parent5">
                                            
                        <div className="company-owned-vehicles-usage-wrapper">
                          <div className="company-owned-vehicles">
                          {item.TypeOfTarget}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper">
                      <div className="facility-1">{item.Coverage}</div>
                    </div>
                    <div className="manoj-wrapper">
                      <div className="manoj">{item.TargetYear}</div>
                    </div>
                    <div className="wrapper">
                      <div className="div">{item.baseYear}</div>
                    </div>

                    <div className="frame-wrapper3">
                      <div className="rectangle-container">
                        <div className="frame-child1" >

                            {item.reductionpercentage}
                            
                        </div>
                       <div className="frame-child2" > {item.baseEmission}
                            </div>
                        <div className="frame-child3" >{item.TargetEmission}</div>
                      </div>
                    </div>
                    <div className='emission-container'>
                       <div className='emission-quantity'>{item.emission}</div>
                       <div className="vehicle">{item.typeofvehicle}</div>
                       
                   
                     
                    </div>
                  </div>
                ))}

                  </div>
                  
                  </div>
                </div>
                
              </div>

            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FinalList;
