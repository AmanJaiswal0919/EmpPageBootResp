 function App() {
  return (
    <div className="d-flex flex-wrap">
      <div className="s bg-white p-4 m-4  ">
        <img
          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Employee Photo"
          className="img-custom pl-3"
        />
<div className="d-flex-col flex-wrap ">
        <p className="a fw-bold">
          Designation : <span className="a-1">Software Engineer</span>
        </p>
        <p className="a  fw-bold ">
          Role : <span className="a-1">Developer</span>
        </p>
        <p className="a  fw-bold">
          Member Since : <span className="a-1">Nov 07, 16</span>
        </p>
        <p className="fw-bold">
          Status : <span className="badge bg-success">Active</span>
        </p>
        </div>
      </div>

      <div className="name-div ml-4 mt-4 ">
        <div className=" fw-bold ml-4 mt-4 ">About</div>
        <div className=" d-flex s  pl-4 flex-wrap justify-content-around">
          <div className="inner-about-div d-flex-col flex-wrap  ">
            <p className="text-black  fw-bold  ">
              Name:
              <span className="c pl-3">John Doe</span>
            </p>

            <p className="text-black  fw-bold">
              EMPID: <span className="c pl-2 ">EMP123</span>
            </p>
            <p className="text-black  fw-bold">
              DOB: <span className="c pl-2 ">1990-03-07</span>
            </p>
            <p className="text-black  fw-bold">
              Email: <span className="c pl-2">doe@123.com</span>
            </p>
            <p className="text-black  fw-bold">
              Salary: <span className="c pl-2 ">50000</span>
            </p>
          </div>
          <div className="inner-about-div d-flex-col flex-wrap pr-4">
            <p className="text-black  fw-bold">
              Gender: <span className="c pl-2 ">MALE</span>
            </p>
            <p className="text-black  fw-bold">
              JoinDate: <span className="c pl-2  ">Feb 2024</span>
            </p>
            <p className="text-black  fw-bold">
              Contact: <span className="c  pl-2">123456</span>
            </p>
            <p className="text-black  fw-bold">
              Address: <span className="c  pl-2">Main Street</span>
            </p>
            <p className="text-black  fw-bold">
              MontlyHr: <span className="c pl-2 ">0</span>
            </p>
          </div>
        </div>

        <div className="d-flex p-4  mt-4  s flex-wrap pr-4 justify-content-between">
          <div className="d-flex-col  fw-bold ">
            <h5 className=" fw-bold">Education</h5>
            <p className="d">MASTER DEGREE IN OXFORD</p>
            <p className="e">2016 - 2018</p>
            <p className="d">BACHELOR DEGREE IN LPU</p>
            <p className="e">2012 - 2016</p>
          </div>

          <div className="d-flex-col  fw-bold">
            <h5 className=" fw-bold">Experience</h5>
            <p className="d">SHALOW INDIA PVT LIMITED</p>
            <p className="e">March 2020 - now</p>
            <p className="d">SS&K INDIA PVT LIMITED</p>
            <p className="e">2018 - 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;