import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Award from "./Award";
import SafeIcon from "../icons/safe.svg";
import StarIcon from "../icons/star.svg";
import TrophyIcon from "../icons/trophy.svg";
import styles from "./FeatureHome.module.css";

import { plateCodes } from "../services/constants";

const FeatureHome = () => {
  const [ownerNumber, setOwnerNumber] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [plateCode, setPlateCode] = useState("");
  const [validationErrors, setValidationErrors] = useState({msg: "", name: ""});

  const history = useHistory();

  const handleValidate = () => {
    if (ownerNumber === "") {
      setValidationErrors({msg: "License or CR number is required!", name: "ownerNumber"});
      return false;
    }
    if (ownerNumber.trim().length < 8 || ownerNumber.trim().length > 10) {
      setValidationErrors({msg: "License or CR number must be 8 - 10 characters!", name: "ownerNumber"});
      return false;
    }
    if (plateNumber === "") {
      setValidationErrors({msg: "Vehicle plate number is required!", name: "plateNumber"});
      return false;
    }
    if (plateCode === "") {
      setValidationErrors({msg: "Please select vehicle plate code!", name: "plateCode"});
      return false;
    }
    

    return true;
  }

  const handleFetchPolicy = () => {    
    if (!handleValidate()) return;

    axios.post("http://localhost:5000/createQuote", {
      ownerNumber,
      plateCode,
      plateNumber,
    })
    .then(({data}) => {
      // console.log(data);
      history.push({
        pathname: "/policy",
        state: {
          data
        }
      })
    })
  }



  return (
    <div className={styles.root}>
      <h4>We are Oman's most awarded insurer</h4>
      <h1>Insure you car in 30 seconds</h1>
      <div className={styles.capture}>
        <Input 
          placeholder="License or CR number" 
          value={ownerNumber}
          onChange={e => ownerNumber(e.target.value)}
          errorname={validationErrors.name}
          name="ownerNumber"
          autoFocus
        />
        <div className={styles.flex}>
         
          <Input
              placeholder="Vehicle plate number"
              value={plateNumber}
              onChange={e => setPlateNumber(e.target.value)}
              errorname={validationErrors.name}
              name="plateNumber"
          />
           <Select
            value={plateCode}
            onChange={(e) => setPlateCode(e.target.value)}
            placeholder="stes"
            options={plateCodes}
            errorname={validationErrors.name}
            name="plateCode"
          />
          
          
        </div>
        {
          validationErrors && <div className={styles.validationErrors}>{validationErrors.msg}</div>
        }
        <Button label="See our prices" onClick={handleFetchPolicy} />
      </div>
      <div className={styles.awards}>
        <Award 
          icon={SafeIcon}
          label="CMA-certified Omani insurance broker"
        />
        <Award 
          icon={StarIcon}
          label="Rated 5 stars by 90% of our customers"
        />
        <Award 
          icon={TrophyIcon}
          label="10 global insurance awards since 2010"
        />
      </div>
    </div>
  );
}

export default FeatureHome;