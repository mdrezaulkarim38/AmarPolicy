import { SetStateAction, useState } from 'react';
import Breadcrumb from "../../components/users/Breadcrumb";
import FaqButton from "../../components/users/FaqButton";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

import DImage from "../../assets/users/assets/img/doctors/doctor-08.jpg"

const TravelInsurance = () => {
    const [coverageRange, setCoverageRange] = useState('500000-1000000'); // Default coverage range
        const [childRange, setChildRange] = useState(1);
        const [InSuranceFor, setInSuranceFor] = useState('Both');
        const handleInSuranceForClick = (forPerson: SetStateAction<string>) => {
            setInSuranceFor(forPerson);
        }
        const handleChildRangeClick = (child: SetStateAction<number>) => {
            setChildRange(child);
        }
        const handlePriceRangeClick = (range: SetStateAction<string>) => {
            setCoverageRange(range); // Update the selected coverage range
        };

    const faqData = [
        {
            question: "Travel Insurance in Bangladesh",
            answer: "Buy travel insurance policies in Bangladesh online at Bimafy. Get your customized price quote and order online quickly using the Bimafy website or mobile app. Secure yourself and your loved ones while travelling abroad with travel health insurance which provides coverage against unexpected events and medical emergencies such as accidents, illness, death, etc. Travel Insurance (also known as Travel Health Insurance) provides coverage for Bangladeshi nationals visiting abroad; for multiple purposes, including business, holidays, study, employment, or temporary residency in foreign lands outside of Bangladesh. Select your travel insurance from various insurance companies and get your digital policy certificate within a few hours, with free delivery of the original policy certificate anywhere in Bangladesh. A lot of countries around the world require travel insurance to enter. Countries which require travel insurance include the United Kingdom, Turkey, Egypt, Oman, Qatar, Indonesia, Nepal, Philippines, Russia, Singapore, United Arab Emirates, Vietnam, Thailand, etc., and all 29 Schengen Countries. Notable Schengen countries taht require travel health insurance for visa application include Austria, Belgium, Czech Republic, Finland, France, Germany, Italy, Malta, Poland, Portugal, Spain, and Sweden."
        },
        {
            question: "Travel Insurance Purchasing Guide - Which policy suits me best?",
            answer: "There are different types of travel insurance policies available at Bimafy and you can select the best-suited plan for you from the available plans. Usually, travel insurance plans are categorized based on the purpose of travel such as holiday, business, study, employment, etc. You should also check your visa/travel requirements so that you can get the right insurance policy before your visa application/departure. If you are going to a Schengen country then your travel insurance policy must provide at least â¬30,000 in coverage against illnesses and accidents and there must not be any deductible in the insurance policy. Some countries require travel insurance to enter but do not specify any minimum coverage amount. However, all of the travel insurance plans available at Bimafy provide at least US$50,000 (â¬30,000 for Schengen Countries) coverage and are accepted almost everywhere in the world including 29 Schengen countries. Travel insurance for USA and Canada shall provide coverage of $100,000 as the medical costs are significantly higher in these countries. If you are a casual traveller, then a Business & Holiday plan would be the most suitable one for you. But, if you are a frequent traveller and go abroad multiple times in a calendar year then a Frequent Traveling plan can be the best option as it provides coverage for multiple trips (up to 30 days per trip) within the policy validity period of one year. For study purposes, you may need to get a travel insurance policy before your visa application or departure. Travel insurance for Study is the right choice for you if you are going abroad with a student visa. This plan provides coverage for up to one year in a single policy and provides coverage up to US$75,000 (â¬30,000 for Schengen countries). If you are going abroad for employment purposes then the Employment plan would be the most suited one as this policy provides coverage of up to US$75,000 (â¬30,000 for Schengen countries) for up to one year in a single policy. For your better understanding, a summary of the travel health insurance plans are listed below:Travel Insurance for Business & Holiday: For periods up to 180 days; with a coverage of up to US$50,000 (â¬30,000 for Schengen Countries, $100,000 for USA and Canada) Travel Insurance for Frequent Traveling: For 365 days, but a maximum of 30 days per trip; with a coverage of up to $100,000 (or Euro equivalent for Schengen Countries) Travel Insurance for Employment: For periods exceeding 180 days but not exceeding 12 months, with a coverage of up to US$75,000 (â¬30,000 for Schengen countries) Travel Insurance for Study: For periods exceeding 180 days but not exceeding 12 months, with a coverage of up to US$75,000 (â¬30,000 for Schengen countries) Bimafy also offer Travel Insurance for Study and Employment purposes with $125,000 coverage. If you require a travel health insurance with a greater coverage (more than $50,000) then contact us directly. For more details, please call Bimafy Customer Support at +88 09606991991 or write an email to: cs@bimafy.com"
        },
        {
            question: "Travel Insurance Coverage - Business and Holiday Plans",
            answer: "Coverage for Medical Expenses (refer to the List of Covered Medical Expenses below) For Schengen Countries: Insurance will pay up to the insured person's total coverage limit as per the plan (i.e., $50,000/$75,000/$100,000). No deductible applies per accident or illness in respect of the following medical-related expenses, reasonably and necessarily incurred outside the Peopleâs Republic of Bangladesh by the Insured Person as a direct result of the Insured Person suffering bodily injury, sickness, disease, or death during the Period of Insurance. For Non-Schengen Countries: Insurance will pay up to the insured person's total coverage limit as per the plan (i.e., $50,000/$75,000/$100,000), subject to the deductible stated on the policy schedule (typically $100), which deductible applies per accident or illness, in respect of the following medical related expenses, reasonably and necessarily incurred outside the Peopleâs Republic of Bangladesh by the Insured Person as a direct result of the Insured Person suffering bodily injury, sickness, disease, or death during the Period of Insurance. Notwithstanding the above, if the TPA/Claims Handler appointed by the insurance company recommends that continued treatment in Bangladesh is appropriate, the policy is extended to cover medical expenses incurred in Bangladesh as specified in Covered Expenses herein. Provided that expenses will only be paid at the usual and customary level for such services, and further provided that expenses will only be paid for treatment incurred within the 90 days immediately following the first manifestation of the bodily injury, sickness, or disease and the Insured Person had to return earlier than the expiry date of the trip. List of Covered Medical Expenses: 1. Expenses for physician service, hospital and medical services, and local emergency medical transportation. 2. Dental services: For Schengen Countries: Up to $500 or equivalent Euro per occurrence of dental services for immediate dental pain relief only. However, dental care rendered necessary due to a covered accident shall be subject to the limit of cover as per the policy. No deductible applies. For Non-Schengen Countries: Up to $500 per occurrence of dental services for immediate dental pain relief only. However, dental care rendered necessary due to a covered accident shall be subject to the coverage limit as per the policy and the Deductible stated in the policy schedule (typically $50). 3. Expenses for physician-ordered emergency medical evacuation, including medically appropriate transportation and necessary care, en route to the nearest suitable hospital when the Insured Person is critically ill or injured, and no suitable local care is available, subject to the prior approval of the Program Medical Advisors. In dire emergencies in a remote area where TPA/Claims Handler cannot be contacted, the medical evacuation must be reported to the first available physician and the nearest Bangladesh Consulate. 4. Expenses for medical evacuation, including transportation and medical care En-route to a hospital or the Insured Personâs usual place of residence in the Peopleâs Republic of Bangladesh when deemed medically advisable by the Program Medical Advisor and the attending physician.5. If the Insured Person dies outside of the People's republic of Bangladesh, the expenses for preparing the air transportation of the remains for repatriation to the Peopleâs Republic of Bangladesh of up to an equivalent amount for a local burial or cremation in the country where the death occurred. All expenses must be approved by the TPA/Claims Handler before the remains are prepared for transportation to the Peopleâs Republic of Bangladesh or local burial or cremation."
        },
        {
            question: "Price of Travel Insurance",
            answer: "Premium of Travel Insurance is determined based on your travel destination (countries you are visiting), duration of your travel (policy duration), and your age. You can quickly get a personalized price quote using the Bimafy website or mobile app by providing basic information, such as your date of birth, destination country, and travel duration."
        },
        {
            question: "Exclusions",
            answer: "Some of the notable coverage exclusions of the Travel Insurance policy are listed below: Pre-existing conditions Travelling against the advice of the physician Travelling to obtain treatment for an identified illness/medical condition Applicable deductibles under the travel insurance policy schedule Cosmetic surgeries, unless required against a covered accident AIDS/HIV-related conditions Routine physical examinations or health checkups War, invasion, civil wars, mutiny, riot, rebellion, civil commotions, military or usurped power, terrorism, mass destruction, etc.Mountaineering and any other potentially dangerous sports/activities Professional sports Pregnancy/maternity and its related complications Applicable for children aged 5 years and under: treatment relating to Mumps, Chicken Pox, Measles, German Measles, Spina Bifida Whooping Cough, Diphtheria, Poliomyelitis, Meningitis, and Scarlet Fever and for consequences attributable thereto, accelerated thereby or arising therefrom. Please refer to the product details or the policy wording file to see the policy s complete exclusion list and other terms. You can view the product details after getting a price quote by clicking on the âMore Detailsâ button."
        }
    ];
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Travel Insurance" />

            <div className="container mt-5 mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src={DImage} className="img-fluid" alt="Image of a doctor" />
                            <h3 className="font-weight-normal">Choose the best Health Insurance <span className="font-weight-bolder"> Plan
                                for Yourself and your Family</span></h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                    <li className="nav-item"><a className="nav-link active" href="#solid-justified-tab1" data-toggle="tab">1</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#solid-justified-tab2" data-toggle="tab">2</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#solid-justified-tab3" data-toggle="tab">3</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#solid-justified-tab4" data-toggle="tab">4</a></li>
                                </ul>
                            </div>
                            <div className="card-body" style={{ paddingTop: "0px" }}>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="solid-justified-tab1">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input type="text" name="yourName" className="form-control" id="YourNameSelf" placeholder="Your Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input type="text" name="mobileSelf" className="form-control" id="mobileSelf" placeholder="Mobile Number" />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on WhatsApp</label>
                                                </div>
                                                <div className="form-field  col-12">
                                                    <label htmlFor="self_age">Your Age
                                                    </label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        <option value="18">18 Years</option>
                                                        <option value="19">19 Years</option>
                                                        <option value="20">20 Years</option>
                                                        <option value="21">21 Years</option>
                                                        <option value="22">22 Years</option>
                                                        <option value="23">23 Years</option>
                                                        <option value="24">24 Years</option>
                                                        <option value="25">25 Years</option>
                                                        <option value="26">26 Years</option>
                                                        <option value="27">27 Years</option>
                                                        <option value="28">28 Years</option>
                                                        <option value="29">29 Years</option>
                                                        <option value="30">30 Years</option>
                                                        <option value="31">31 Years</option>
                                                        <option value="32">32 Years</option>
                                                        <option value="33">33 Years</option>
                                                        <option value="34">34 Years</option>
                                                        <option value="35">35 Years</option>
                                                        <option value="36">36 Years</option>
                                                        <option value="37">37 Years</option>
                                                        <option value="38">38 Years</option>
                                                        <option value="39">39 Years</option>
                                                        <option value="40">40 Years</option>
                                                        <option value="41">41 Years</option>
                                                        <option value="42">42 Years</option>
                                                        <option value="43">43 Years</option>
                                                        <option value="44">44 Years</option>
                                                        <option value="45">45 Years</option>
                                                        <option value="46">46 Years</option>
                                                        <option value="47">47 Years</option>
                                                        <option value="48">48 Years</option>
                                                        <option value="49">49 Years</option>
                                                        <option value="50">50 Years</option>
                                                        <option value="51">51 Years</option>
                                                        <option value="52">52 Years</option>
                                                        <option value="53">53 Years</option>
                                                        <option value="54">54 Years</option>
                                                        <option value="55">55 Years</option>
                                                        <option value="56">56 Years</option>
                                                        <option value="57">57 Years</option>
                                                        <option value="58">58 Years</option>
                                                        <option value="59">59 Years</option>
                                                        <option value="60">60 Years</option>
                                                        <option value="61">61 Years</option>
                                                        <option value="62">62 Years</option>
                                                        <option value="63">63 Years</option>
                                                        <option value="64">64 Years</option>
                                                        <option value="65">65 Years</option>
                                                        <option value="66">66 Years</option>
                                                        <option value="67">67 Years</option>
                                                        <option value="68">68 Years</option>
                                                        <option value="69">69 Years</option>
                                                        <option value="70">70 Years</option>

                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">Health Coverage Amount (৳)</label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === 'all' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('all')}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '1-100000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('1-100000')}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '100000-500000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('100000-500000')}
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '500000-1000000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('500000-1000000')}
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the Terms of Service</label>
                                                </div>
                                            </div>
                                            <button className='btn btn-info w-100'>See Plans</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab2">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input type="text" name="yourName" className="form-control" id="YourNameSelf" placeholder="Your Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input type="text" name="mobileSelf" className="form-control" id="mobileSelf" placeholder="Mobile Number" />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on WhatsApp</label>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Your Age
                                                    </label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        <option value="18">18 Years</option>
                                                        <option value="19">19 Years</option>
                                                        <option value="20">20 Years</option>
                                                        <option value="21">21 Years</option>
                                                        <option value="22">22 Years</option>
                                                        <option value="23">23 Years</option>
                                                        <option value="24">24 Years</option>
                                                        <option value="25">25 Years</option>
                                                        <option value="26">26 Years</option>
                                                        <option value="27">27 Years</option>
                                                        <option value="28">28 Years</option>
                                                        <option value="29">29 Years</option>
                                                        <option value="30">30 Years</option>
                                                        <option value="31">31 Years</option>
                                                        <option value="32">32 Years</option>
                                                        <option value="33">33 Years</option>
                                                        <option value="34">34 Years</option>
                                                        <option value="35">35 Years</option>
                                                        <option value="36">36 Years</option>
                                                        <option value="37">37 Years</option>
                                                        <option value="38">38 Years</option>
                                                        <option value="39">39 Years</option>
                                                        <option value="40">40 Years</option>
                                                        <option value="41">41 Years</option>
                                                        <option value="42">42 Years</option>
                                                        <option value="43">43 Years</option>
                                                        <option value="44">44 Years</option>
                                                        <option value="45">45 Years</option>
                                                        <option value="46">46 Years</option>
                                                        <option value="47">47 Years</option>
                                                        <option value="48">48 Years</option>
                                                        <option value="49">49 Years</option>
                                                        <option value="50">50 Years</option>
                                                        <option value="51">51 Years</option>
                                                        <option value="52">52 Years</option>
                                                        <option value="53">53 Years</option>
                                                        <option value="54">54 Years</option>
                                                        <option value="55">55 Years</option>
                                                        <option value="56">56 Years</option>
                                                        <option value="57">57 Years</option>
                                                        <option value="58">58 Years</option>
                                                        <option value="59">59 Years</option>
                                                        <option value="60">60 Years</option>
                                                        <option value="61">61 Years</option>
                                                        <option value="62">62 Years</option>
                                                        <option value="63">63 Years</option>
                                                        <option value="64">64 Years</option>
                                                        <option value="65">65 Years</option>
                                                        <option value="66">66 Years</option>
                                                        <option value="67">67 Years</option>
                                                        <option value="68">68 Years</option>
                                                        <option value="69">69 Years</option>
                                                        <option value="70">70 Years</option>

                                                    </select>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Spouse's Age
                                                    </label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        <option value="18">18 Years</option>
                                                        <option value="19">19 Years</option>
                                                        <option value="20">20 Years</option>
                                                        <option value="21">21 Years</option>
                                                        <option value="22">22 Years</option>
                                                        <option value="23">23 Years</option>
                                                        <option value="24">24 Years</option>
                                                        <option value="25">25 Years</option>
                                                        <option value="26">26 Years</option>
                                                        <option value="27">27 Years</option>
                                                        <option value="28">28 Years</option>
                                                        <option value="29">29 Years</option>
                                                        <option value="30">30 Years</option>
                                                        <option value="31">31 Years</option>
                                                        <option value="32">32 Years</option>
                                                        <option value="33">33 Years</option>
                                                        <option value="34">34 Years</option>
                                                        <option value="35">35 Years</option>
                                                        <option value="36">36 Years</option>
                                                        <option value="37">37 Years</option>
                                                        <option value="38">38 Years</option>
                                                        <option value="39">39 Years</option>
                                                        <option value="40">40 Years</option>
                                                        <option value="41">41 Years</option>
                                                        <option value="42">42 Years</option>
                                                        <option value="43">43 Years</option>
                                                        <option value="44">44 Years</option>
                                                        <option value="45">45 Years</option>
                                                        <option value="46">46 Years</option>
                                                        <option value="47">47 Years</option>
                                                        <option value="48">48 Years</option>
                                                        <option value="49">49 Years</option>
                                                        <option value="50">50 Years</option>
                                                        <option value="51">51 Years</option>
                                                        <option value="52">52 Years</option>
                                                        <option value="53">53 Years</option>
                                                        <option value="54">54 Years</option>
                                                        <option value="55">55 Years</option>
                                                        <option value="56">56 Years</option>
                                                        <option value="57">57 Years</option>
                                                        <option value="58">58 Years</option>
                                                        <option value="59">59 Years</option>
                                                        <option value="60">60 Years</option>
                                                        <option value="61">61 Years</option>
                                                        <option value="62">62 Years</option>
                                                        <option value="63">63 Years</option>
                                                        <option value="64">64 Years</option>
                                                        <option value="65">65 Years</option>
                                                        <option value="66">66 Years</option>
                                                        <option value="67">67 Years</option>
                                                        <option value="68">68 Years</option>
                                                        <option value="69">69 Years</option>
                                                        <option value="70">70 Years</option>

                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">Health Coverage Amount (৳)</label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === 'all' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('all')}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '1-100000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('1-100000')}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '100000-500000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('100000-500000')}
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '500000-1000000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('500000-1000000')}
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the Terms of Service</label>
                                                </div>
                                            </div>
                                            <button className='btn btn-info w-100'>See Plans</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab3">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input type="text" name="yourName" className="form-control" id="YourNameSelf" placeholder="Your Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input type="text" name="mobileSelf" className="form-control" id="mobileSelf" placeholder="Mobile Number" />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on WhatsApp</label>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Your Age
                                                    </label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        <option value="18">18 Years</option>
                                                        <option value="19">19 Years</option>
                                                        <option value="20">20 Years</option>
                                                        <option value="21">21 Years</option>
                                                        <option value="22">22 Years</option>
                                                        <option value="23">23 Years</option>
                                                        <option value="24">24 Years</option>
                                                        <option value="25">25 Years</option>
                                                        <option value="26">26 Years</option>
                                                        <option value="27">27 Years</option>
                                                        <option value="28">28 Years</option>
                                                        <option value="29">29 Years</option>
                                                        <option value="30">30 Years</option>
                                                        <option value="31">31 Years</option>
                                                        <option value="32">32 Years</option>
                                                        <option value="33">33 Years</option>
                                                        <option value="34">34 Years</option>
                                                        <option value="35">35 Years</option>
                                                        <option value="36">36 Years</option>
                                                        <option value="37">37 Years</option>
                                                        <option value="38">38 Years</option>
                                                        <option value="39">39 Years</option>
                                                        <option value="40">40 Years</option>
                                                        <option value="41">41 Years</option>
                                                        <option value="42">42 Years</option>
                                                        <option value="43">43 Years</option>
                                                        <option value="44">44 Years</option>
                                                        <option value="45">45 Years</option>
                                                        <option value="46">46 Years</option>
                                                        <option value="47">47 Years</option>
                                                        <option value="48">48 Years</option>
                                                        <option value="49">49 Years</option>
                                                        <option value="50">50 Years</option>
                                                        <option value="51">51 Years</option>
                                                        <option value="52">52 Years</option>
                                                        <option value="53">53 Years</option>
                                                        <option value="54">54 Years</option>
                                                        <option value="55">55 Years</option>
                                                        <option value="56">56 Years</option>
                                                        <option value="57">57 Years</option>
                                                        <option value="58">58 Years</option>
                                                        <option value="59">59 Years</option>
                                                        <option value="60">60 Years</option>
                                                        <option value="61">61 Years</option>
                                                        <option value="62">62 Years</option>
                                                        <option value="63">63 Years</option>
                                                        <option value="64">64 Years</option>
                                                        <option value="65">65 Years</option>
                                                        <option value="66">66 Years</option>
                                                        <option value="67">67 Years</option>
                                                        <option value="68">68 Years</option>
                                                        <option value="69">69 Years</option>
                                                        <option value="70">70 Years</option>

                                                    </select>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Spouse's Age
                                                    </label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        <option value="18">18 Years</option>
                                                        <option value="19">19 Years</option>
                                                        <option value="20">20 Years</option>
                                                        <option value="21">21 Years</option>
                                                        <option value="22">22 Years</option>
                                                        <option value="23">23 Years</option>
                                                        <option value="24">24 Years</option>
                                                        <option value="25">25 Years</option>
                                                        <option value="26">26 Years</option>
                                                        <option value="27">27 Years</option>
                                                        <option value="28">28 Years</option>
                                                        <option value="29">29 Years</option>
                                                        <option value="30">30 Years</option>
                                                        <option value="31">31 Years</option>
                                                        <option value="32">32 Years</option>
                                                        <option value="33">33 Years</option>
                                                        <option value="34">34 Years</option>
                                                        <option value="35">35 Years</option>
                                                        <option value="36">36 Years</option>
                                                        <option value="37">37 Years</option>
                                                        <option value="38">38 Years</option>
                                                        <option value="39">39 Years</option>
                                                        <option value="40">40 Years</option>
                                                        <option value="41">41 Years</option>
                                                        <option value="42">42 Years</option>
                                                        <option value="43">43 Years</option>
                                                        <option value="44">44 Years</option>
                                                        <option value="45">45 Years</option>
                                                        <option value="46">46 Years</option>
                                                        <option value="47">47 Years</option>
                                                        <option value="48">48 Years</option>
                                                        <option value="49">49 Years</option>
                                                        <option value="50">50 Years</option>
                                                        <option value="51">51 Years</option>
                                                        <option value="52">52 Years</option>
                                                        <option value="53">53 Years</option>
                                                        <option value="54">54 Years</option>
                                                        <option value="55">55 Years</option>
                                                        <option value="56">56 Years</option>
                                                        <option value="57">57 Years</option>
                                                        <option value="58">58 Years</option>
                                                        <option value="59">59 Years</option>
                                                        <option value="60">60 Years</option>
                                                        <option value="61">61 Years</option>
                                                        <option value="62">62 Years</option>
                                                        <option value="63">63 Years</option>
                                                        <option value="64">64 Years</option>
                                                        <option value="65">65 Years</option>
                                                        <option value="66">66 Years</option>
                                                        <option value="67">67 Years</option>
                                                        <option value="68">68 Years</option>
                                                        <option value="69">69 Years</option>
                                                        <option value="70">70 Years</option>

                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">Number of Child (Below 18 years)</label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${childRange === 1 ? 'active' : ''}`}
                                                            onClick={() => handleChildRangeClick(1)}
                                                        >
                                                            1 Child
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${childRange === 2 ? 'active' : ''}`}
                                                            onClick={() => handleChildRangeClick(2)}
                                                        >
                                                            2 Child
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">Health Coverage Amount (৳)</label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === 'all' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('all')}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '1-100000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('1-100000')}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '100000-500000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('100000-500000')}
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '500000-1000000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('500000-1000000')}
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the Terms of Service</label>
                                                </div>
                                            </div>
                                            <button className='btn btn-info w-100'>See Plans</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input type="text" name="yourName" className="form-control" id="YourNameSelf" placeholder="Your Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input type="text" name="mobileSelf" className="form-control" id="mobileSelf" placeholder="Mobile Number" />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on WhatsApp</label>
                                                </div>
                                                <div className="form-field col-12 mb-3">
                                                    <label htmlFor="self_coverage">Insurance For</label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${InSuranceFor === 'Father' ? 'active' : ''}`}
                                                            onClick={() => handleInSuranceForClick('Father')}
                                                        >
                                                            Father
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${InSuranceFor === 'Mother' ? 'active' : ''}`}
                                                            onClick={() => handleInSuranceForClick('Mother')}
                                                        >
                                                            Mother
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${InSuranceFor === 'Both' ? 'active' : ''}`}
                                                            onClick={() => handleInSuranceForClick('Both')}
                                                        >
                                                            Both
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                <div className={`form-field  col-6 ${InSuranceFor === 'Mother' ? 'd-none' : InSuranceFor === 'Father' ? 'col-12' : 'col-6'}`}>
                                                    <label htmlFor="self_age">Father's Age
                                                    </label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        <option value="18">18 Years</option>
                                                        <option value="19">19 Years</option>
                                                        <option value="20">20 Years</option>
                                                        <option value="21">21 Years</option>
                                                        <option value="22">22 Years</option>
                                                        <option value="23">23 Years</option>
                                                        <option value="24">24 Years</option>
                                                        <option value="25">25 Years</option>
                                                        <option value="26">26 Years</option>
                                                        <option value="27">27 Years</option>
                                                        <option value="28">28 Years</option>
                                                        <option value="29">29 Years</option>
                                                        <option value="30">30 Years</option>
                                                        <option value="31">31 Years</option>
                                                        <option value="32">32 Years</option>
                                                        <option value="33">33 Years</option>
                                                        <option value="34">34 Years</option>
                                                        <option value="35">35 Years</option>
                                                        <option value="36">36 Years</option>
                                                        <option value="37">37 Years</option>
                                                        <option value="38">38 Years</option>
                                                        <option value="39">39 Years</option>
                                                        <option value="40">40 Years</option>
                                                        <option value="41">41 Years</option>
                                                        <option value="42">42 Years</option>
                                                        <option value="43">43 Years</option>
                                                        <option value="44">44 Years</option>
                                                        <option value="45">45 Years</option>
                                                        <option value="46">46 Years</option>
                                                        <option value="47">47 Years</option>
                                                        <option value="48">48 Years</option>
                                                        <option value="49">49 Years</option>
                                                        <option value="50">50 Years</option>
                                                        <option value="51">51 Years</option>
                                                        <option value="52">52 Years</option>
                                                        <option value="53">53 Years</option>
                                                        <option value="54">54 Years</option>
                                                        <option value="55">55 Years</option>
                                                        <option value="56">56 Years</option>
                                                        <option value="57">57 Years</option>
                                                        <option value="58">58 Years</option>
                                                        <option value="59">59 Years</option>
                                                        <option value="60">60 Years</option>
                                                        <option value="61">61 Years</option>
                                                        <option value="62">62 Years</option>
                                                        <option value="63">63 Years</option>
                                                        <option value="64">64 Years</option>
                                                        <option value="65">65 Years</option>
                                                        <option value="66">66 Years</option>
                                                        <option value="67">67 Years</option>
                                                        <option value="68">68 Years</option>
                                                        <option value="69">69 Years</option>
                                                        <option value="70">70 Years</option>

                                                    </select>
                                                </div>
                                                <div className={`form-field  ${InSuranceFor === 'Father' ? 'd-none' : InSuranceFor === 'Mother' ? 'col-12' : 'col-6'}`}>
                                                    <label htmlFor="self_age">Mother's Age
                                                    </label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        <option value="18">18 Years</option>
                                                        <option value="19">19 Years</option>
                                                        <option value="20">20 Years</option>
                                                        <option value="21">21 Years</option>
                                                        <option value="22">22 Years</option>
                                                        <option value="23">23 Years</option>
                                                        <option value="24">24 Years</option>
                                                        <option value="25">25 Years</option>
                                                        <option value="26">26 Years</option>
                                                        <option value="27">27 Years</option>
                                                        <option value="28">28 Years</option>
                                                        <option value="29">29 Years</option>
                                                        <option value="30">30 Years</option>
                                                        <option value="31">31 Years</option>
                                                        <option value="32">32 Years</option>
                                                        <option value="33">33 Years</option>
                                                        <option value="34">34 Years</option>
                                                        <option value="35">35 Years</option>
                                                        <option value="36">36 Years</option>
                                                        <option value="37">37 Years</option>
                                                        <option value="38">38 Years</option>
                                                        <option value="39">39 Years</option>
                                                        <option value="40">40 Years</option>
                                                        <option value="41">41 Years</option>
                                                        <option value="42">42 Years</option>
                                                        <option value="43">43 Years</option>
                                                        <option value="44">44 Years</option>
                                                        <option value="45">45 Years</option>
                                                        <option value="46">46 Years</option>
                                                        <option value="47">47 Years</option>
                                                        <option value="48">48 Years</option>
                                                        <option value="49">49 Years</option>
                                                        <option value="50">50 Years</option>
                                                        <option value="51">51 Years</option>
                                                        <option value="52">52 Years</option>
                                                        <option value="53">53 Years</option>
                                                        <option value="54">54 Years</option>
                                                        <option value="55">55 Years</option>
                                                        <option value="56">56 Years</option>
                                                        <option value="57">57 Years</option>
                                                        <option value="58">58 Years</option>
                                                        <option value="59">59 Years</option>
                                                        <option value="60">60 Years</option>
                                                        <option value="61">61 Years</option>
                                                        <option value="62">62 Years</option>
                                                        <option value="63">63 Years</option>
                                                        <option value="64">64 Years</option>
                                                        <option value="65">65 Years</option>
                                                        <option value="66">66 Years</option>
                                                        <option value="67">67 Years</option>
                                                        <option value="68">68 Years</option>
                                                        <option value="69">69 Years</option>
                                                        <option value="70">70 Years</option>

                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">Health Coverage Amount (৳)</label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === 'all' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('all')}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '1-100000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('1-100000')}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '100000-500000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('100000-500000')}
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${coverageRange === '500000-1000000' ? 'active' : ''}`}
                                                            onClick={() => handlePriceRangeClick('500000-1000000')}
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the Terms of Service</label>
                                                </div>
                                            </div>
                                            <button className='btn btn-info w-100'>See Plans</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <hr />
                <div className="row">
                    <FaqButton faqData={faqData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default TravelInsurance;