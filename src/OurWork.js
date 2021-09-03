import React,{useState} from 'react';
import workapi from "./API/workApi";
import './index.css';

const OurWork=()=>{

    const [workData,setWorkData]=useState(workapi);
    console.log(workData);

    return(
        <>
            <section>
            <div className="work-container container">
                <h1 className="main-heading text-center">How we Work?</h1>
                <div className="row">
                {workData.map((ele)=>{
                    return (
                        <>
                        <div className="col-12 col-lg-4 text-center work-container-subdiv">
                        <i class="fas fa-download"></i>
                        <h2>{ele.title}</h2>
                        <p className="main-hero-para w-100">{ele.info}</p>
                    </div>

                        </>
                    )
                })}
                    
                </div>
            </div>
            </section>

        </>
    )
}

export default OurWork;