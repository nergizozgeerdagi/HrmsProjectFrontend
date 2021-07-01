import React from "react";
import { Grid } from "semantic-ui-react";
import JobPositionList from "../../components/JobPositionList/JobPositionList";
import JobAdvertisementList from "../../components/JobAdvertisementList/JobAdvertisementList";
export default function Homepage({ mobile }) {
  return (
    <div className="mt-4">
            <JobAdvertisementList></JobAdvertisementList>
    </div>
  );
}