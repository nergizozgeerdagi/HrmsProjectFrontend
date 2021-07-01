import React from "react";
import { Grid } from "semantic-ui-react";
import UserResumeList from "../../components/UserResumeList/UserResumeList";
export default function Profile() {
  return (
    <div>
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width="12">
            <UserResumeList></UserResumeList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}