import React, { Component } from 'react'
import UserService from '../service/UserService';
import Footer from './Footer';
import Header from './Header';

class RegisterUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                aadharNumber: '',
                contactNumber: '',
                doorNumber: '',
                buildingName: '',
                streetName: '',
                locality: '',
                city: '',
                state: '',
                country: '',
                zip: '',
                accountNumber: '',
                accountHolderName: '',
                bankName: '',
                branchName: '',
                password: '',
                userType: '',
            },
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                aadharNumber: '',
                contactNumber: '',
                doorNumber: '',
                buildingName: '',
                streetName: '',
                locality: '',
                city: '',
                state: '',
                country: '',
                zip: '',
                accountNumber: '',
                accountHolderName: '',
                bankName: '',
                branchName: '',
                password: '',
                userType: '',
            }
        }

    }

    handleValidation() {
        let user = this.state.user;
        let errors = {};
        let formIsValid = true;



        if (!user["firstName"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["firstName"] = "First Name should contain only letters";
        }
        else {
            errors["firstName"] = "";
        }

        if (!user["lastName"].match(/^[a-zA-Z\s]*$/)) {
            formIsValid = false;
            errors["lastName"] = "Last Name should contain only letters";
        }
        else {
            errors["lastName"] = "";
        }

        if (!user["aadharNumber"].match(/^[0-9]{12}$/)) {
            formIsValid = false;
            errors["aadharNumber"] = "Aadhar Number should contain only 12 digits";
        }
        else {
            errors["aadharNumber"] = "";
        }


        if (!user["contactNumber"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["contactNumber"] = "Contact Number should contain only  10 digits";
        }
        else {
            errors["contactNumber"] = "";
        }
        if (!user["buildingName"].match(/^[a-zA-Z\s]*$/)) {
            formIsValid = false;
            errors["buildingName"] = "Building Name should contain only letters";
        }
        else {
            errors["buildingName"] = "";
        }

        if (!user["streetName"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["streetName"] = "Street Name should contain only letters";
        }
        else {
            errors["streetName"] = "";
        }

        if (!user["locality"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["locality"] = "Locality should contain only letters";
        }
        else {
            errors["locality"] = "";
        }

        if (!user["city"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["city"] = "City should contain only letters";
        }
        else {
            errors["city"] = "";
        }

        if (!user["zip"].match(/^[0-9]{6}$/)) {
            formIsValid = false;
            errors["zip"] = "Zip should contain only 6 digits";
        }
        else {
            errors["zip"] = "";
        }

        if (!user["accountNumber"].match(/^[0-9]{14}$/)) {
            formIsValid = false;
            errors["accountNumber"] = "Account Number should contain only 14 digits";
        }
        else {
            errors["accountNumber"] = "";
        }

        if (!user["accountHolderName"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["accountHolderName"] = "Account Holder Name should contain only letters";
        }
        else {
            errors["accountHolderName"] = "";
        }

        if (!user["bankName"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["bankName"] = "Bank Name should contain only letters";
        }
        else {
            errors["bankName"] = "";
        }

        if (!user["branchName"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["branchName"] = "Branch Name should contain only letters";
        }
        else {
            errors["branchName"] = "";
        }
        this.setState({ errors: errors });
        return formIsValid;


    }

    changeHandler(field, event) {
        let user = this.state.user;
        user[field] = event.target.value;
        this.setState({ user });
    }


    registerUser(event) {
        event.preventDefault();
        let user = {
            firstName: this.state.user.firstName,
            lastName: this.state.user.lastName,
            email: this.state.user.email,
            aadharNumber: this.state.user.aadharNumber,
            contactNumber: this.state.user.contactNumber,
            password: this.state.user.password,
            userType: this.state.user.userType,
            address: {
                doorNumber: this.state.user.doorNumber,
                buildingName: this.state.user.buildingName,
                streetName: this.state.user.streetName,
                locality: this.state.user.locality,
                city: this.state.user.city,
                state: this.state.user.state,
                country: this.state.user.country,
                zip: this.state.user.zip,
            },
            bankDetails: {
                accountNumber: this.state.user.accountNumber,
                accountHolderName: this.state.user.accountHolderName,
                bankName: this.state.user.bankName,
                branchName: this.state.user.branchName,
            }
        }

        if (this.handleValidation()) {
            console.log(user)
            UserService.createAccount(user)
                .then(response => {
                    console.log(response)
                    window.alert("Account created successfully with UserID " + response.data.userId);
                    window.location.reload()
                })
                .catch(error => {
                    console.log(error.response)
                    window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
                })
        } else {
            console.log(this.state.errors)
            alert("Form has errors. Please enter the correct information.");

        }
    }


    goToLogin = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container my-5">
                <Header />
                <br /><br /><br /><br />
                <div class="row">
                    <h2 className="text-center col-10">User Registration</h2>
                    <button className="btn btn-info col-2" style={{ marginRight: '-50px' }} onClick={this.goToLogin}>LOGIN</button>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-10">

                            <form onSubmit={this.registerUser.bind(this)}>
                                <div className="row">
                                    <h4>Personal Details</h4>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>First Name:</label>
                                    <input type="text" name="firstName" className="form-control" value={this.state.user.firstName} onChange={this.changeHandler.bind(this, "firstName")} required />
                                    <span className="errorMessage">{this.state.errors["firstName"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Last Name:</label>
                                    <input type="text" name="lastName" className="form-control" value={this.state.user.lastName} onChange={this.changeHandler.bind(this, "lastName")} />
                                    <span className="error">{this.state.errors["lastName"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Email:</label>
                                    <input type="email" pattern="/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[A-Za-z]{3}+$/" name="email" className="form-control" value={this.state.user.email} onChange={this.changeHandler.bind(this, "email")} required />
                                    <span className="error">{this.state.errors["email"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Aadhar Number:</label>
                                    <input type="text" placeholder="Enter 12 digit aadhar number" name="aadharNumber" className="form-control" value={this.state.user.aadharNumber} onChange={this.changeHandler.bind(this, "aadharNumber")} required />
                                    <span className="error">{this.state.errors["aadharNumber"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Contact Number:</label>
                                    <input type="text" name="contactNumber" placeholder="Enter 10 digit contact number" className="form-control" value={this.state.user.contactNumber} onChange={this.changeHandler.bind(this, "contactNumber")} required />
                                    <span className="error">{this.state.errors["contactNumber"]}</span>
                                </div>
                                <hr />

                                <h4>Address Info</h4>
                                <div className="form-group col-md-8">
                                    <label>Door Number:</label>
                                    <input type="text" name="doorNumber" className="form-control" value={this.state.user.doorNumber} onChange={this.changeHandler.bind(this, "doorNumber")} required />
                                    <span className="error">{this.state.errors["doorNumber"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Street Name:</label>
                                    <input type="text" name="streetName" className="form-control" value={this.state.user.streetName} onChange={this.changeHandler.bind(this, "streetName")} required />
                                    <span className="error">{this.state.errors["streetName"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Building Name:</label>
                                    <input type="text" placeholder="Optional" name="buildingName" className="form-control" value={this.state.user.buildingName} onChange={this.changeHandler.bind(this, "buildingName")} />
                                    <span className="error">{this.state.errors["buildingName"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Locality:</label>
                                    <input type="text" name="locality" className="form-control" value={this.state.user.locality} onChange={this.changeHandler.bind(this, "locality")} required />
                                    <span className="error">{this.state.errors["locality"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>City:</label>
                                    <input type="text" name="city" className="form-control" value={this.state.user.city} onChange={this.changeHandler.bind(this, "city")} required />
                                    <span className="error">{this.state.errors["city"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>State:</label>

                                    <select name="state" class="form-control" value={this.state.user.state} onChange={this.changeHandler.bind(this, "state")} required>
                                        <option value="0">-Select-</option>
                                        <option value="1">Andaman and Nicobar (UT)</option>
                                        <option value="2">Andhra Pradesh</option>
                                        <option value="3">Arunachal Pradesh</option>
                                        <option value="4">Assam</option>
                                        <option value="5">Bihar</option>
                                        <option value="6">Chandigarh (UT)</option>
                                        <option value="7">Chhattishgarh</option>
                                        <option value="8">Dadra and Nagar Haveli (UT)</option>
                                        <option value="9">Daman and Diu (UT)</option>
                                        <option value="10">Delhi</option>
                                        <option value="11">Goa</option>
                                        <option value="12">Gujarat</option>
                                        <option value="13">Haryana</option>
                                        <option value="14">Himachal Pradesh</option>
                                        <option value="15">Jammu and Kashmir</option>
                                        <option value="16">Jharkhand</option>
                                        <option value="17">Karnataka</option>
                                        <option value="18">Kerala</option>
                                        <option value="19">Ladakh (UT)</option>
                                        <option value="20">Lakshadweep (UT)</option>
                                        <option value="21">Madhya Pradesh</option>
                                        <option value="22">Maharashtra</option>
                                        <option value="23">Manipur</option>
                                        <option value="24">Meghalaya</option>
                                        <option value="25">Mizoram</option>
                                        <option value="26">Nagaland</option>
                                        <option value="27">Orissa</option>
                                        <option value="28">Pondicherry (UT)</option>
                                        <option value="29">Punjab</option>
                                        <option value="30">Rajasthan</option>
                                        <option value="31">Sikkim</option>
                                        <option value="32">Tamil Nadu</option>
                                        <option value="33">Telangana</option>
                                        <option value="34">Tripura</option>
                                        <option value="35">Uttaranchal</option>
                                        <option value="36">Uttar Pradesh</option>
                                        <option value="37">West Bengal</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Country:</label>
                                    <select name="country" class="form-control" value={this.state.user.country} onChange={this.changeHandler.bind(this, "country")} required>
                                        <option value="0">-Select-</option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">Andorra</option>
                                        <option value="5">Angola</option>
                                        <option value="6">Antarctica</option>
                                        <option value="7">Argentina</option>
                                        <option value="8">Armenia</option>
                                        <option value="9">Aruba</option>
                                        <option value="10">Australia</option>
                                        <option value="11">Austria</option>
                                        <option value="12">Azerbaijan</option>
                                        <option value="13">Bahrain</option>
                                        <option value="14">Bangladesh</option>
                                        <option value="15">Belarus</option>
                                        <option value="16">Belgium</option>
                                        <option value="17">Belize</option>
                                        <option value="18">Benin</option>
                                        <option value="19">Bhutan</option>
                                        <option value="20">Bolivia</option>
                                        <option value="21">Bosnia and Herzegovina</option>
                                        <option value="22">Botswana</option>
                                        <option value="23">Brazil</option>
                                        <option value="24">British lndian Ocean Territory</option>
                                        <option value="25">Brunei Darussalam</option>
                                        <option value="26">Bulgaria</option>
                                        <option value="27">Burkina Faso</option>
                                        <option value="28">Burundi</option>
                                        <option value="29">Cambodia</option>
                                        <option value="30">Cameroon</option>
                                        <option value="31">Canada</option>
                                        <option value="32">Cape Verde</option>
                                        <option value="33">Central African Republic</option>
                                        <option value="34">Chad</option>
                                        <option value="35">Chile</option>
                                        <option value="36">China</option>
                                        <option value="37">Christmas Island</option>
                                        <option value="38">Cocos (Keeling) Islands</option>
                                        <option value="39">Colombia</option>
                                        <option value="40">Comoros</option>
                                        <option value="41">Congo</option>
                                        <option value="42">Cook Islands</option>
                                        <option value="43">Costa Rica</option>
                                        <option value="44">Croatia (Hrvatska)</option>
                                        <option value="45">Cuba</option>
                                        <option value="46">Cyprus</option>
                                        <option value="47">Czech Republic</option>
                                        <option value="48">Denmark</option>
                                        <option value="49">Djibouti</option>
                                        <option value="50">East Timor</option>
                                        <option value="51">Ecuador</option>
                                        <option value="52">Egypt</option>
                                        <option value="53">El Salvador</option>
                                        <option value="54">Equatorial Guinea</option>
                                        <option value="55">Eritrea</option>
                                        <option value="56">Estonia</option>
                                        <option value="57">Ethiopia</option>
                                        <option value="58">Falkland Islands (Malvinas)</option>
                                        <option value="59">Faroe Islands</option>
                                        <option value="60">Fiji</option>
                                        <option value="61">Finland</option>
                                        <option value="62">France</option>
                                        <option value="63">Gabon</option>
                                        <option value="64">Gambia</option>
                                        <option value="65">Georgia</option>
                                        <option value="66">Germany</option>
                                        <option value="67">Ghana</option>
                                        <option value="68">Gibraltar</option>
                                        <option value="69">Greece</option>
                                        <option value="70">Greenland</option>
                                        <option value="71">Guadeloupe</option>
                                        <option value="72">Guatemala</option>
                                        <option value="73">Guinea</option>
                                        <option value="74">Guinea-Bissau</option>
                                        <option value="75">Guyana</option>
                                        <option value="76">Haiti</option>
                                        <option value="77">Honduras</option>
                                        <option value="78">Hong Kong</option>
                                        <option value="79">Hungary</option>
                                        <option value="80">Iceland</option>
                                        <option value="81">India</option>
                                        <option value="82">Indonesia</option>
                                        <option value="83">Iran (Islamic Republic of)</option>
                                        <option value="84">Iraq</option>
                                        <option value="85">Ireland</option>
                                        <option value="86">Israel</option>
                                        <option value="87">Italy</option>
                                        <option value="88">Ivory Coast</option>
                                        <option value="89">Japan</option>
                                        <option value="90">Jordan</option>
                                        <option value="91">Kazakhstan</option>
                                        <option value="92">Kenya</option>
                                        <option value="93">Kiribati</option>
                                        <option value="94">Korea  Republic of</option>
                                        <option value="95">Kosovo</option>
                                        <option value="96">Kuwait</option>
                                        <option value="97">Kyrgyzstan</option>
                                        <option value="98">Latvia</option>
                                        <option value="99">Lebanon</option>
                                        <option value="100">Lesotho</option>
                                        <option value="101">Liberia</option>
                                        <option value="102">Libyan Arab Jamahiriya</option>
                                        <option value="103">Liechtenstein</option>
                                        <option value="104">Lithuania</option>
                                        <option value="105">Luxembourg</option>
                                        <option value="106">Macau</option>
                                        <option value="107">Macedonia</option>
                                        <option value="108">Madagascar</option>
                                        <option value="109">Malawi</option>
                                        <option value="110">Malaysia</option>
                                        <option value="111">Maldives</option>
                                        <option value="112">Mali</option>
                                        <option value="113">Malta</option>
                                        <option value="114">Marshall Islands</option>
                                        <option value="115">Martinique</option>
                                        <option value="116">Mauritania</option>
                                        <option value="117">Mauritius</option>
                                        <option value="118">Mayotte</option>
                                        <option value="119">Mexico</option>
                                        <option value="120">Monaco</option>
                                        <option value="121">Mongolia</option>
                                        <option value="122">Montenegro</option>
                                        <option value="123">Morocco</option>
                                        <option value="124">Mozambique</option>
                                        <option value="125">Myanmar</option>
                                        <option value="126">Namibia</option>
                                        <option value="127">Nauru</option>
                                        <option value="128">Nepal</option>
                                        <option value="129">Netherlands</option>
                                        <option value="130">Netherlands Antilles</option>
                                        <option value="131">New Caledonia</option>
                                        <option value="132">New Zealand</option>
                                        <option value="133">Nicaragua</option>
                                        <option value="134">Niger</option>
                                        <option value="135">Nigeria</option>
                                        <option value="136">Niue</option>
                                        <option value="137">Norway</option>
                                        <option value="138">Oman</option>
                                        <option value="139">Pakistan</option>
                                        <option value="140">Palau</option>
                                        <option value="141">Panama</option>
                                        <option value="142">Papua New Guinea</option>
                                        <option value="143">Paraguay</option>
                                        <option value="144">Peru</option>
                                        <option value="145">Philippines</option>
                                        <option value="146">Pitcairn</option>
                                        <option value="147">Poland</option>
                                        <option value="148">Portugal</option>
                                        <option value="149">Qatar</option>
                                        <option value="150">Reunion</option>
                                        <option value="151">Romania</option>
                                        <option value="152">Russian Federation</option>
                                        <option value="153">Rwanda</option>
                                        <option value="154">Samoa</option>
                                        <option value="155">San Marino</option>
                                        <option value="156">Sao Tome and Principe</option>
                                        <option value="157">Saudi Arabia</option>
                                        <option value="158">Senegal</option>
                                        <option value="159">Serbia</option>
                                        <option value="160">United States</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Zip:</label>
                                    <input type="text" placeholder="Enter 6-digit postal code" name="zip" className="form-control" value={this.state.user.zip} onChange={this.changeHandler.bind(this, "zip")} required />
                                    <span className="error">{this.state.errors["zip"]}</span>
                                </div>

                                <hr />

                                <h4>Bank Details</h4>

                                <div className="form-group col-md-8">
                                    <label>Account Number:</label>
                                    <input type="text" placeholder="Enter 14-digit account number" name="accountNumber" className="form-control" value={this.state.user.accountNumber} onChange={this.changeHandler.bind(this, "accountNumber")} required />
                                    <span className="error">{this.state.errors["accountNumber"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Account Holder Name:</label>
                                    <input type="text" name="accountHolderName" className="form-control" value={this.state.user.accountHolderName} onChange={this.changeHandler.bind(this, "accountHolderName")} required />
                                    <span className="error">{this.state.errors["accountHolderName"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Bank Name:</label>
                                    <input type="text" name="bankName" className="form-control" value={this.state.user.bankName} onChange={this.changeHandler.bind(this, "bankName")} required />
                                    <span className="error">{this.state.errors["bankName"]}</span>
                                </div>
                                <div className="form-group col-md-8">
                                    <label>Branch Name:</label>
                                    <input type="text" name="branchName" className="form-control" value={this.state.user.branchName} onChange={this.changeHandler.bind(this, "branchName")} required />
                                    <span className="error">{this.state.errors["branchName"]}</span>
                                </div>

                                <hr />

                                <div className="form-group col-md-8">
                                    <label>Password:</label>
                                    <input type="password" name="password" className="form-control" value={this.state.user.password} onChange={this.changeHandler.bind(this, "password")} required />
                                </div>



                                <label>User Type:</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="userType" value="SELLER" onChange={this.changeHandler.bind(this, "userType")} />
                                    <label className="form-check-label">
                                        SELLER
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="userType" value="BUYER" onChange={this.changeHandler.bind(this, "userType")} />
                                    <label className="form-check-label">
                                        BUYER
                            </label>
                                </div>
                                <br />
                                <div class="col-md-6">
                                    <button className="btn btn-success" type="submit">REGISTER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <br/> <br/>
                <Footer />
            </div>
        )
    }
}

export default RegisterUser