import React, { useState } from 'react'
import Header from '../Component/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Add.css'
const Add = () => {
    const [title, setTitle] = useState("");
    const [dep, setDescription] = useState("");
    const [date, setDate] = useState("")
    const [loc, setLocation] = useState("")
    const [max, setMax] = useState("")
    const navigation = useNavigate();

    const Getdata = () => {
        let data = JSON.parse(localStorage.getItem('corse')) || [];
        if (data) {
            return data;
        } else {
            return [];
        }
    };

    const [record, setRecord] = useState(Getdata());

    const handle = (e) => {
        e.preventDefault();

        if (!title || !dep || !date || !loc || !max ) {
            toast.error("All fields are required..");
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 10000),
            title,
            date,
            dep,
            loc,
            max,
        };

        let old = [...record, obj];
        localStorage.setItem('corse', JSON.stringify(old));
        toast.success("Successfully added Task");

        setTimeout(() => {
            navigation("/view");
        }, 1000);

        setTitle('');
        setDate("");
        setDescription("");
        setMax("");
        setLocation("");
    };

    return (
        <div>
            <Header />

            <div className=" container mt-3">
                <div className="row">
                    <div className=" col-lg-6 mx-auto">
                        
                        <form onSubmit={handle} className=' bg border p-3 shadow bg-light'>
                            <h3 className='mb-3 text-center'>Creat Event</h3>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> Title</label>
                                <input type="text" className="form-control" onChange={(e) =>  setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Description</label>
                                <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} value={dep} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Date</label>
                                <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} value={date} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Location</label>
                                <input type="text" className="form-control" onChange={(e) => setLocation(e.target.value)} value={loc} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Max attendees</label>
                                <input type="number" className="form-control" onChange={(e) => setMax(e.target.value)} value={max} />
                            </div>       
                            <button type="submit" className="btn  mx-auto d-block mt-4" style={{backgroundColor:'#224254',color:'white' }}>Add Event</button>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Add;
