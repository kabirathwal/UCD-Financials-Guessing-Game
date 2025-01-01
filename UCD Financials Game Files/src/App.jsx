import React, { useRef, useEffect, useState } from 'react';
import PieChartFunctional from "./PieChartFunctional.jsx";
import PieChartClass from "./PieChartClass.jsx";
import './App.css';
import EntryBox from './EntryBox.jsx';
//import ProgressBar from './ProgressBar.jsx';
import Expenditures from './expenditures.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactTooltip from 'react-tooltip';


const useStyles = makeStyles((theme) => ({

  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

let userRev = [{ name: "Medical Center", value: 0, color: '#f0bf00' }, { name: "Student Fees", value: 0, color: '#f6e50e' }, { name: "State of California", value: 0, color: '#fff688' }, { name: "Tuition", value: 0, color: '#5f63ec' }, { name: "Research Grants and Contracts", value: 0, color: '#71a8ff' }, { name: "Pell Grants", value: 0, color: 'pink' }, { name: "Non-educational Services", value: 0, color: '#0f7ab4' }, { name: "Gifts, Endowments, Interest, Etc.", value: 0, color: 'white' }];

let userExp = [{ name: "Medical Center", value: 0, color: '#f0bf00' }, { name: "Teaching and Teaching Support", value: 0, color: '#f6e50e' }, { name: "Research", value: 0, color: '#fff688' }, { name: "Student Services and Financial Aid", value: 0, color: '#5f63ec' }, { name: "Operations and Maintenance (Buildings, etc)", value: 0, color: '#718ff' }, { name: "Administration", value: 0, color: '#0f7ab4' }, { name: "Non-Educational Services", value: 0, color: 'pink' }, { name: "Public Service", value: 0 }, { name: "Depreciation, Interest, etc.", value: 0, color: 'white' }]

/* App */
function App() {

  // initialization
  let revenueData = [{ name: "Medical Center", value: 45, color: '#f0bf00' }, { name: "Student Fees", value: 4, color: '#f6e50e' }, { name: "State of California", value: 8, color: '#fff688' }, { name: "Tuition", value: 11, color: '#5f63ec' }, { name: "Research Grants and Contracts", value: 13, color: '#71a8ff' }, { name: "Pell Grants", value: 1, color: 'pink' }, { name: "Non-educational Services", value: 11, color: '#0f7ab4' }, { name: "Gifts, Endowments, Interest, Etc.", value: 7, color: 'white' }];


  let expenditureData = [{ name: "Medical Center", value: 43, color: '#f0bf00' }, { name: "Teaching and Teaching Support", value: 23, color: '#f6e50e' }, { name: "Research", value: 11, color: '#fff688' }, { name: "Student Services and Financial Aid", value: 8, color: '#5f63ec' }, { name: "Operations and Maintenance (Buildings, etc)", value: 2, color: '#718ff' }, { name: "Administration", value: 3, color: '#0f7ab4' }, { name: "Non-Educational Services", value: 2, color: 'pink' }, { name: "Public Service", value: 2 }, { name: "Depreciation, Interest, etc.", value: 6, color: 'white' }]

  
  function getSteps() {
  return ['Revenues', 'Expenditures', 'Compare'];
}



  const [pieData1, setPieData1] = useState(userRev);


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  


  const [pieData2, setPieData2] = useState(revenueData);


  function revChange(val, id, key) {

    let newVal = parseInt(val);
    let newPie = pieData1.slice();

    console.log("old value", newPie[key]['value']);
    newPie[key]['value'] = newVal;
    console.log("new value", newPie[key]['value']);

    setPieData1(newPie);
    userRev = newPie;
    console.log("new user rev...", pieData1);
        console.log("new user rev...", userRev);


  }
  console.log(pieData1);

  function expChange(val, id, key) {

    let newVal = parseInt(val);
    let newPie = pieData1.slice();

    console.log("old value", newPie[key]['value']);
    newPie[key]['value'] = newVal;
    console.log("new value", newPie[key]['value']);

    setPieData1(newPie);
    userExp = newPie;
    console.log("new user exp...", pieData1);

  }


  const handleNext = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if(activeStep == 0){
      
      setPieData1([...userExp]);
    } 

    if(activeStep == 1){
      
      setPieData1([...userRev]);
    } 

    if(activeStep == 2){
      
      setPieData1([...userExp]);
      setPieData2([...expenditureData]);
    }     

  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if(activeStep == 1){
      
      setPieData1([...userRev]);
    }  

    if(activeStep == 2){
      setPieData1([...userExp]);
    }
  };

  const handleReset = () => {
    setActiveStep(0);

    setPieData1([...userRev]);
    setPieData2([...revenueData])
  }


  if (activeStep == 0){

    console.log("here2");
    console.log(activeStep);

  
  return (
    <div>

      <div className="header">
        <h1>Slice The Pie </h1>

        <h2>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</h2>

        <h3>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost makes.</h3>
      </div>

     
        <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>

      <div className="revenue">
        <div className="pieChartRevenue">
          <h4>UC Davis Revenues</h4>
          <div className="pieCharts">
            <PieChartClass name={"pie1"} data={pieData1} />
          </div>
        </div>

        <div className="userEntries">
          <div className="titles">
            <div className="titleNames">Function</div>
            <div className="titleNames">Percentage (%)</div>
          </div>

          <div className="entryBoxes">
            <div className="leftSide">
              <ul className="revenueBoxes">
                <li>Medical Center 
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare.</span>
                  </div>
                </li>
                <li>Student Fees
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc.</span>
                  </div>
                </li>
                <li>State of California
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services.</span>
                  </div>
                </li>
                <li>Tuition
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.</span>
                  </div>
                </li>
                <li>Research Grants and Contracts
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research.</span>
                  </div>
                </li>
                <li>Pell Grants
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%.</span>
                  </div>
                </li>
                <li>Non-educational Services
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.</span>
                  </div>
                </li>
                <li>Gifts, Endowments, Interest, Etc.
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="userInputs">
              <EntryBox onInputChange={revChange} />
            </div>
          </div>
        </div>
      </div>

       <div>
        {activeStep === steps.length + 1 ? (
          <div>
            <Typography className={classes.instructions}>Results</Typography>
            <Button onClick={handleReset}>restart</Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
  }

  if(activeStep == 1){


    return (
    <div>

      <div className="header">
        <h1>Slice The Pie </h1>

        <h2>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</h2>

        <h3>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost makes.</h3>
      </div>

     
        <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>

       <div className="expenditures">
        <div className="pieChartExpenses">
          <h4>UC Davis Expenditures</h4>
          <div className="pieCharts">
            <PieChartClass name={"pie1"} data={pieData1} />
          </div>
        </div>

        <div className="userEntriesExp">
          <div className="titles">
            <div className="titleNames">Function</div>
            <div className="titleNames">Percentage (%)</div>
          </div>

          <div className="entryBoxes">
            <ul className="revenueBoxes">
              <li>Medical Center
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">The cost of providing care at the Medical Center is roughly what we get paid to provide it.</span>
                  </div>
              </li>
              <li>Teaching and Teaching Support
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.</span>
                  </div>
              </li>
              <li>Research
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">The costs of doing the research, mostly researcher salaries.</span>
                  </div>
              </li>
              <li>Student Services and Financial Aid
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%.</span>
                  </div>
              </li>
              <li>Operations and Maintenance (Buildings, etc)
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Upkeep of the grounds and building, and utilities, which are less than 1%.</span>
                  </div>
              </li>
              <li>Administration
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets.</span>
                  </div>
              </li>
              <li>Non-Educational Services
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">The costs of providing dorms, dining,parking, etc.</span>
                  </div>
              </li>
              <li>Public Service
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university.</span>
                  </div>
              </li>
              <li>Depreciation, Interest, etc.
                  <div class="tooltip">&#9432;
                    <span class="tooltiptext">Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses.</span>
                  </div>
              </li>
            </ul>

            <div className="userInputs">
              <Expenditures onInputChange={expChange} />
            </div>
          </div>
        </div>
      </div>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Results</Typography>
            <Button onClick={handleReset}>restart</Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      </div>
     )



  }

  if(activeStep == 2){


    return (
    <div>

      <div className="header">
        <h1>Slice The Pie </h1>

        <h2>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</h2>

        <h3>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost makes.</h3>
      </div>

     
        <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>

      <div id="results">
        <h2>Results</h2>
        </div>

       <div className="revenue">
        <div className="pieChartRevenue">
          <h4>Your Revenue Guess</h4>
          <div className="pieCharts">
            <PieChartClass name={"pie1"} data={pieData1} />
          </div>
        </div>
        </div>

        <div className="revenue">
        <div className="pieChartRevenue">
          <h4>Actual Revenue</h4>
          <div className="pieCharts">
            <PieChartClass name={"pie2"} data={pieData2} />
          </div>
        </div>
        </div>
         <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
        </div>


    )
}
if(activeStep == 3){


    return (
    <div>

      <div className="header">
        <h1>Slice The Pie </h1>

        <h2>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</h2>

        <h3>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost makes.</h3>
      </div>

     
        <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>

      <div id="results">
        <h2>Results</h2>
        </div>

       <div className="revenue">
        <div className="pieChartRevenue">
          <h4>Your Expenditure Guess</h4>
          <div className="pieCharts">
            <PieChartClass name={"pie1"} data={pieData1} />
          </div>
        </div>
        </div>

        <div className="revenue">
        <div className="pieChartRevenue">
          <h4>Actual Expenditure</h4>
          <div className="pieCharts">
            <PieChartClass name={"pie2"} data={pieData2} />
          </div>
        </div>
        </div>
         <Button onClick={handleReset}>restart</Button>
        </div>


    )
}


}

export default App;