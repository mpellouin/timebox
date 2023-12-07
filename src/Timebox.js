export const Timebox = () => {

    const hours = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="wholePage">
      <div className="centered">
        <div className="column">
          <h1>Timebox</h1>
          <div className="priorities">
            <h6>priorities</h6>
            <table className="prioritiesSection">
                <tbody>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td className="lastCell"></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="notes">
            <h6>Notes</h6>
            <div className="noteSection"></div>
          </div>
        </div>
        <div className="column">
          <div className="schedule">
            <div className="scheduleTimeBreak">

            </div>
            <table className="spaceTop">
                <thead>
                    <td className="firstCol header"></td>
                    <td className="secondCol header">:00</td>
                    <td className="thirdCol header">:30</td>
                </thead>
                <tbody>
                {hours.map(hour => (
                    <tr>
                        <td className="firstCol">{hour}</td>
                        <td className="secondCol"></td>
                        <td className="thirdCol"></td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
