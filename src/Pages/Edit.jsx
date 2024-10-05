import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './Edit.css'
const Edit = () => {
    const [title, setTitle] = useState("");
    const [dep, setDescription] = useState("");
    const [date, setDate] = useState("")
    const [loc, setLocation] = useState("")
    const [max, setMax] = useState("")
        const navigation=useNavigate()

        let location=useLocation();
        


        const Getdata= () =>{
            let data=JSON.parse(localStorage.getItem('corse')) || [];
            if(data){
                return data;
            }else{
                return []
            }
        }
        const [record,setRecord]=useState(Getdata())

        
    
    const handle =(e) =>{
        e.preventDefault()

        if(!title || !dep || !date || !loc || !max){
            toast.error("all filed reuired..");
            return false;
        }

        let up=record.map((val)=>{
          if(val.id == location.state.id){
            val.title=title,
            val.dep=dep,
            val.date=date;
            val.loc=loc;
            val.max=max;
          }
          return val;
        })
        

       
        localStorage.setItem('corse',JSON.stringify(up));
        toast.success("suceessfully add Update");

        setTimeout(()=>{
            navigation("/view")
        },1000)
        setTitle('');
        setDate("");
        setDescription("");
        setMax("");
        setLocation("");

    }

    useEffect(()=>{
      setTitle(location.state.title);
      setDescription(location.state.dep);
      setDate(location.state.date);
      setLocation(location.state.loc);
      setMax(location.state.max);
    },[location])
    return (
        <div>
            <Header />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        
                        <form onSubmit={handle} className= ' bg border  p-3 shadow'>
                        <h3 className='mb-3 text-center'>Edit Event</h3>
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
                            
                            <button type="submit" className="btn btn-primary mx-auto d-block mt-4">Update</button>
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
            transition: Bounce
            />

        </div>
    )
}

export default Edit
