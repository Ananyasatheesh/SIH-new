import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaHeart} from 'react-icons/fa6'
import '../components/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Message() {
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
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
		<div className="border-2 border-green-400 h-fit p-2 ml-4 mt-4">
			<div className="flex flex-row gap-96">
			<h1 className='text-xl text-sky-500'>@Ananya_15_Ayur</h1>
			<p className='ml-96 mt-2 text-red-500' ><FaHeart/></p>
			</div>
			<p className='ml-12 text-black' >Hi, I am an Ayurvedic Scientist and I am working currently on a Research. I would like some reference paper of yours to clarify my doubts</p>
		</div>
        </>
	);
}

export default Message;