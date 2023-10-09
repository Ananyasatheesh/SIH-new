import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaHeart} from 'react-icons/fa6'
import '../components/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Settings() {
	const [abstract, setabstract] = useState([]);
	const [desc, setdesc] = useState("");
	const [title, settitle] = useState("");
	const handleOnSubmit = async (e) => {
		let result = await fetch(
			'http://localhost:2000/register', {
			method: "post",
			body: JSON.stringify({ abstract, desc, title }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		if (result) {
			alert("Data saved succesfully");
			setabstract("")
			setdesc("")
			settitle("")
		}

	}
	return (
		// 		<center>
		// 			<div className='bg-primary.bg-gradient'>
		// 				<h1>Ministry Of Ayush</h1>
		// 				<div className='content'>
		// 					<form action="">
		// 					<div className="mb-3">
		//   <label for="formFile" className="form-label">Abstract</label><br/>
		//   <input className="form-control" type="file" id="formFile" value={abstract} onChange={(e) => setabstract(e.target.value)}></input>
		// </div>
		// <input type="text"value={domain} onChange={(e) => setdom(e.target.value)} placeholder='Domain of the Paper' id='0'></input><br/><br/>
		// 						<div className="mb-2">
		//   <label for="exampleFormControlTextarea1" className="form-label">Description</label><br/>
		//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e) => setdesc(e.target.value)}></textarea>
		// </div>
		// 						<div className=''>
		// 						<input type="button" value="Post" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
		// 						</div>
		// 					</form>
		// 				</div>
		// 			</div>

		// 		</center>
		<>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4 ">
            <h1>Username</h1>
            <h2>Ayush_Emp1</h2>
            <button className='bg-[#009c00] text-xl px-20 py-3 font-bold rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#009c0080] text-center no-underline '>Change Username</button>
            <h1>E-Mail</h1>
            <h2>abc@gmail.com</h2>
            <h1>Phone Number</h1>
            <h2>9876543210</h2>
            <h1>Address</h1>
            <h2>123, XYZ - 987654</h2>
            <h1>Linked In</h1>
            <h2>www.linkedin.com</h2>
            <button className='bg-[#009c00] text-xl px-20 py-3 font-bold rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#009c0080] text-center no-underline'>Change Details</button>         
		</div>
        </>
	);
}

export default Settings;