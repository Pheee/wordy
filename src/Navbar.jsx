import { PieChart } from "react-minimal-pie-chart";
// Here, we display our Navbar
export default function Navbar() {
  const dataMock = [
    { title: "One", value: 16, color: "#E38627" },
    { title: "Two", value: 16, color: "#C13C37" },
    { title: "Three", value: 16, color: "#6A2135" },
    { title: "Four", value: 16, color: "#6A2135" },
    { title: "Five", value: 16, color: "#6A2135" },
    { title: "Six", value: 16, color: "#6A2135" },
  ];
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <h1>Wordy</h1>
          <form className="d-flex">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Stats
            </button>
          </form>
        </div>
      </nav>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Statistics
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <PieChart
                data={dataMock}
                style={{ height: "400px" }}
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={(index) => ({
                  fill: dataMock[index].color,
                  fontSize: "5px",
                  fontFamily: "sans-serif",
                })}
                radius={42}
                labelPosition={112}
              />
            </div>
            <div className="modal-footer">@Wordy 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
}
