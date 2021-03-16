import React, { useState } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./Policy.module.css";

const Policy = props => {
  const location = useLocation();
  const { data } = location.state;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [validationErrors, setValidationErrors] = useState({msg: "", name: ""})

  const history = useHistory();

  const marketPrice = Math.floor(Math.random() * 200);
  const multiple = Math.floor(Math.random() * 10);
  const price = marketPrice * multiple;


  const handleValidate = () => {
    const letters = /^[A-Za-z]+$/;
    // email format: localpart@domain
    // localpart allows only alphanumeric characters as first char after that underscore (_) hyphen (-) and dot (.) are allowed.
    //domainpart allows only alphanumeric characters and hyphen (hyphen may not be first or last char of domain)
    const validEmailPattern =  /^[a-zA-Z0-9][^ !#$%&'*+/=?^`{|}~]+[a-zA-Z0-9]@+[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[a-z]{2,3}$/
   
    if (!firstName.match(letters)){
      setValidationErrors({msg: "First name must consist of letters only!", name: "firstName"})
      return false
    }
    if (!lastName.match(letters)){
      setValidationErrors({msg: "Last name must consist of letters only!", name: "lastName"})
      return false
    }
    if (!email.match(validEmailPattern)){
      console.log(email.match(validEmailPattern))
      setValidationErrors({msg: "Please Enter a valid Email!", name: "email"})
      return false
    }
    if (phone.length !== 8) {
      setValidationErrors({msg: "Your phone number must have exactly 8 digits!", name: "phone"})
      return false
    }
    return true;
  }


  const handleStoreData = () => {
    if (!handleValidate()) return;

    setSaving(true);
    const personalData = {
      firstName,
      lastName,
      email,
      phone
    };

   
  

    axios.post("http://localhost:5000/save", {
      personalData,
      policyData: data
    })
    .then(() => {
      setSaving(false);
      history.push("/");
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className={styles.root}>
      <span className={styles.break}></span>
      <h2>Your vehicle</h2>
      <Card>
        <h3>{`${data.year} ${data.make} ${data.model}`}</h3>
        <h4>{`${data.color} | ${data.type} | ${data.doors} doors | ${data.seats} seats | ${data.cylinders} cyl`}</h4>
      </Card>
      <span className={styles.break}></span>
      <h2>Your policy</h2>
      <p>We worked with Dhofar Insurance (Oman's leading insurance company) to design the highest quality policy in the market at a great price.</p>
      <Card>
        <h3>Tamin Comprehensive</h3>
        <h5>{`OMR ${price}`}</h5>
        <p>Comprehensive policy covering own damange, fire, theft, injury, and property damage.</p>
        <ul>
          <li>Third-party damage</li>
          <li>Own damage</li>
          <li>Property damage</li>
          <li>Damage from fire, theft, injury</li>
          <li>Damage from storm, tempest, and floods</li>
          <li>UAE cover</li>
          <li>Family cover</li>
          <li>AAA roadside assistance</li>
        </ul>
      </Card>
      <span className={styles.break}></span>
      <h2>Personal information</h2>
      <Input 
        placeholder="First name" 
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        errorname={validationErrors.name}
        name="firstName"
      />
      <Input 
        placeholder="Last name" 
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        errorname={validationErrors.name}
        name="lastName"
      />
      <Input 
        placeholder="Email address" 
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        errorname={validationErrors.name}
        name="email"
      />
      <Input 
        placeholder="Phone" 
        type="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        errorname={validationErrors.name}
        name="phone"
      />
        {
          validationErrors && <div className={styles.validationErrors}>{validationErrors.msg}</div>
        }
      <span className={styles.break}></span>
      <p>By continuing, you agree to the <a href="" target="_blank">terms of service</a>.</p>
      <Button label="Review" onClick={handleStoreData} submitting={saving} />
    </div>
  );
}

export default Policy;