import React, { useState, useEffect } from "react";
import { Label, Menu } from "semantic-ui-react";
import JobPositionsService from "../../services/jobPositionsService";

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionsService = new JobPositionsService();
    jobPositionsService
      .getAllWithCount()
      .then((success) => setJobPositions(success.data.data));
  }, []);
  return (
    <div>
      <Menu size="large" vertical>
        {jobPositions.map((jobPosition) => (
          <Menu.Item key={jobPosition.id} name="inbox">
            <Label color="teal">{jobPosition.count}</Label>
            {jobPosition.positionName}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}