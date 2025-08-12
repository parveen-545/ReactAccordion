import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./accordion.css";


const Accordion = () => {
  const [data, setData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("error in fetching data : ",     err));
  }, []);

  const handleShowAcc =(id)=> {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <>
      <div className="wrapper">

        <div className="center">Accordion</div>

          {data && data.length > 0 ? (
            data.map((item, id) => (
              <div key={id} className="acc-wrapper">

                <div className="heading"  
                  onClick={()=> handleShowAcc(id)}>
                  <h4>{item.name}</h4>
                  <span className="btn-acc">
                    {openIndex === id ? 
                      <FaChevronUp /> :
                      <FaChevronDown />
                    }
                  </span>
                </div>
                
                {openIndex === id && <div className="content">
                  <p>
                    {item.body}
                  </p>
                </div>}
              </div>
            ))
          ) : (
            <p className="noData">no data found!</p>
          )}
      </div>
    </>
  );
};

export default Accordion;
